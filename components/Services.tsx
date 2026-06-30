"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, BookOpenCheck, Compass, FileText, Trophy } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Career Clarity & Strategy",
    description:
      "Psychometric insight, mentor-led discovery, and market-aware pathway mapping so students know what they are building toward.",
    icon: Compass,
    proof: "Strengths, interests, subjects, and future roles connected into one path.",
  },
  {
    number: "02",
    title: "Strategic Profile Building",
    description:
      "A multi-year plan for leadership, research, competitions, community work, and portfolio evidence that compounds over time.",
    icon: Trophy,
    proof: "Every activity earns its place in the admissions narrative.",
  },
  {
    number: "03",
    title: "University Admissions",
    description:
      "Shortlists, essays, interviews, recommendation strategy, and application positioning for competitive Indian and global universities.",
    icon: FileText,
    proof: "Applications are built around substance, not last-minute packaging.",
  },
  {
    number: "04",
    title: "Scholarship Positioning",
    description:
      "Merit-aid planning, scholarship research, and proof-point development designed to improve education ROI for families.",
    icon: BadgeCheck,
    proof: "Families understand both admission probability and financial opportunity.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-divider-top section-blue relative overflow-hidden py-20 sm:py-28">
      <div className="premium-wash opacity-70" />
      <div className="bg-noise absolute inset-0 opacity-70" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7"
          >
            <p className="eyebrow">Our Expertise</p>
            <h2
              style={{ fontFamily: "var(--font-playfair)" }}
              className="mt-4 text-3xl font-bold leading-tight text-[#0B1220] sm:text-4xl md:text-5xl lg:text-6xl"
            >
              A joined-up system for readiness, not a pile of services.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.12 }}
            className="lg:col-span-5"
          >
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              The strongest applications are built early, coherently, and with evidence. Each workstream feeds the
              next so students develop substance before they need to present it.
            </p>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ delay: index * 0.08 }}
                className="card-base group flex min-h-[390px] flex-col p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3F7FF] text-[#2563EB] ring-1 ring-blue-100">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <span
                    className="text-4xl font-light text-slate-200 transition-colors group-hover:text-blue-200"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-black leading-tight text-[#0B1220]">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>

                <div className="mt-auto pt-7">
                  <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-sm leading-6 text-slate-600">
                    <BookOpenCheck className="mb-2 h-4 w-4 text-[#2563EB]" aria-hidden="true" />
                    {service.proof}
                  </div>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#2563EB] transition-colors hover:text-[#1D4ED8]"
                  >
                    Discuss this workstream
                    <ArrowRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
