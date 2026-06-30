import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

type LeadPayload = {
  studentName?: unknown;
  parentName?: unknown;
  phone?: unknown;
  email?: unknown;
  currentClass?: unknown;
  country?: unknown;
};

const requiredFields: Array<keyof LeadPayload> = [
  "studentName",
  "parentName",
  "phone",
  "currentClass",
  "country",
];

function sanitize(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 160) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    if (!process.env.ADMIN_EMAIL) {
      return NextResponse.json({ success: false, message: "Lead inbox is not configured." }, { status: 500 });
    }

    const body = (await req.json()) as LeadPayload;
    const lead = {
      studentName: sanitize(body.studentName),
      parentName: sanitize(body.parentName),
      phone: sanitize(body.phone),
      email: sanitize(body.email),
      currentClass: sanitize(body.currentClass),
      country: sanitize(body.country),
    };

    const hasMissingField = requiredFields.some((field) => !lead[field]);
    const hasValidEmail = !lead.email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email as string);

    if (hasMissingField || !hasValidEmail) {
      return NextResponse.json({ success: false, message: "Please complete all required fields and ensure the email is valid if provided." }, { status: 400 });
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.ADMIN_EMAIL,
      subject: "New FuturePath consultation lead",
      html: `
        <h2>New Consultation Lead</h2>
        <p><strong>Student:</strong> ${escapeHtml(lead.studentName)}</p>
        <p><strong>Parent:</strong> ${escapeHtml(lead.parentName)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(lead.phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(lead.email)}</p>
        <p><strong>Class:</strong> ${escapeHtml(lead.currentClass)}</p>
        <p><strong>Preferred Country:</strong> ${escapeHtml(lead.country)}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ success: false }, { status: 500 });
  }
}
