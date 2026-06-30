import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { contact } from "@/lib/contact";

const navigationLinks = [
  { label: "Services", href: "#services" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Assessment", href: "#assessment" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Strategy Call", href: "#contact" },
];

const resources = [
  { label: "Admissions readiness", href: "#assessment" },
  { label: "Profile building", href: "#services" },
  { label: "Parent consultation", href: "#contact" },
  { label: "Mentorship roadmap", href: "#roadmap" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] pb-10 pt-16 text-white sm:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              FuturePath.
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400 sm:text-base">
              Premium student mentorship and admissions advisory for families who want direction, evidence, and
              long-term preparation.
            </p>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.06] p-4">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-300">Consultation Promise</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Every first call ends with practical priorities, not vague motivation.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h2 className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-white">Navigation</h2>
            <ul className="space-y-3">
              {navigationLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-white">Focus Areas</h2>
            <ul className="space-y-3">
              {resources.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-white">Contact</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-blue-300" aria-hidden="true" />
                <span className="text-sm text-slate-400">{contact.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-blue-300" aria-hidden="true" />
                <a href={contact.phoneHref} className="text-sm text-slate-400 transition-colors hover:text-white">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-blue-300" aria-hidden="true" />
                <a href={contact.emailHref} className="text-sm text-slate-400 transition-colors hover:text-white">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {contact.brand}. All rights reserved.</p>
          <p>Strategic mentorship for students and families.</p>
        </div>
      </div>
    </footer>
  );
}
