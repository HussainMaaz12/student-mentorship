"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Lock, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { buildWhatsAppUrl, contact } from "@/lib/contact";

const initialFormData = {
  studentName: "",
  parentName: "",
  phone: "",
  email: "",
  currentClass: "",
  country: "",
};

type FormDataState = typeof initialFormData;
type SubmitStatus = "idle" | "success" | "error";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [formData, setFormData] = useState<FormDataState>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setStatus("idle");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Lead request failed");
      }

      setStatus("success");
      window.open(
        buildWhatsAppUrl("Hello, I have completed the consultation form and would like to schedule my strategy call."),
        "_blank",
        "noopener,noreferrer"
      );
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-[#0B1220] shadow-sm transition-all duration-200 placeholder:text-slate-400 focus:border-[#2563EB] focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/20";

  return (
    <section id="contact" className="section-divider-top section-slate relative overflow-hidden py-20 sm:py-28">
      <div className="premium-wash opacity-65" />
      <div className="bg-dot-pattern absolute inset-0 opacity-[0.16]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-5 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2"
          >
            <p className="eyebrow">Secure Your Strategy Session</p>
            <h2
              style={{ fontFamily: "var(--font-playfair)" }}
              className="mt-4 text-3xl font-bold leading-tight text-[#0B1220] sm:text-4xl md:text-5xl"
            >
              Leave with clarity, priorities, and a next-step plan.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Share a few details and our senior advisory team will review where your child stands today, then suggest
              the highest-leverage next moves.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: ShieldCheck,
                  title: "Private senior consultation",
                  text: "No obligation, no generic sales script.",
                },
                {
                  icon: Sparkles,
                  title: "Profile gap scan",
                  text: "We identify what needs depth, evidence, or timing.",
                },
                {
                  icon: Lock,
                  title: "Confidential by default",
                  text: "Student and parent information is handled carefully.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-center gap-4 rounded-xl border border-white bg-white/[0.78] p-4 shadow-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F3F7FF] text-[#2563EB]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-[#0B1220] sm:text-base">{title}</h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-3"
          >
            <div className="card-base overflow-hidden p-5 sm:p-7 md:p-9">
              <div className="mb-6 flex flex-col gap-3 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-black text-[#0B1220]">Book a free consultation</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">Response usually within one working day.</p>
                </div>
                <a
                  href={contact.phoneHref}
                  className="inline-flex items-center gap-2 text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]"
                >
                  <MessageCircle size={17} aria-hidden="true" />
                  {contact.phoneDisplay}
                </a>
              </div>

              <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="studentName" className="mb-2 block text-sm font-bold text-slate-700">
                    Student name
                  </label>
                  <input
                    id="studentName"
                    type="text"
                    name="studentName"
                    placeholder="Student name"
                    required
                    value={formData.studentName}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="parentName" className="mb-2 block text-sm font-bold text-slate-700">
                    Parent name
                  </label>
                  <input
                    id="parentName"
                    type="text"
                    name="parentName"
                    placeholder="Parent name"
                    required
                    value={formData.parentName}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-bold text-slate-700">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-bold text-slate-700">
                    Email address <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="parent@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="currentClass" className="mb-2 block text-sm font-bold text-slate-700">
                    Current class
                  </label>
                  <select
                    id="currentClass"
                    name="currentClass"
                    required
                    value={formData.currentClass}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="">Select class</option>
                    <option>Class 8</option>
                    <option>Class 9</option>
                    <option>Class 10</option>
                    <option>Class 11</option>
                    <option>Class 12</option>
                    <option>12th Passed</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="country" className="mb-2 block text-sm font-bold text-slate-700">
                    Preferred destination
                  </label>
                  <select
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="">Select region</option>
                    <option>India</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>Undecided</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full px-7 py-4 text-sm disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:text-base"
                  >
                    {loading ? "Submitting request..." : "Request my free strategy call"}
                    {!loading && <ArrowRight size={18} aria-hidden="true" />}
                  </button>
                </div>

                <div className="md:col-span-2" aria-live="polite">
                  {status === "success" && (
                    <p className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-800">
                      Request received. WhatsApp has opened so you can continue the conversation directly.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-800">
                      Something went wrong. Please call {contact.phoneDisplay} or try again in a moment.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
