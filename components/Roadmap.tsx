"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, CircleDot, Compass, FileCheck2, Flag, GraduationCap, Rocket } from "lucide-react";

const roadmap = [
  {
    year: "Class 8-9",
    title: "Foundation & Discovery",
    description:
      "Identify academic inclinations, strengths, confidence gaps, and early exposure opportunities before choices become urgent.",
    outcome: "A clear exploration map and subject-confidence plan.",
    icon: Compass,
    focus: ["Strength mapping", "Skill foundations", "Parent-student alignment"],
  },
  {
    year: "Class 10",
    title: "Exploration & Positioning",
    description:
      "Translate interests into credible direction through competitions, reading tracks, beginner projects, and leadership experiments.",
    outcome: "A three-year positioning thesis with priority activities.",
    icon: Flag,
    focus: ["Career hypotheses", "Competition strategy", "Profile direction"],
  },
  {
    year: "Class 11",
    title: "Profile Acceleration",
    description:
      "Build the evidence: research, internships, community initiatives, advanced coursework, and measurable impact.",
    outcome: "A defensible portfolio with depth and proof.",
    icon: Rocket,
    focus: ["Research and projects", "Leadership evidence", "Impact metrics"],
  },
  {
    year: "Class 12",
    title: "Application Strategy",
    description:
      "Shape the university list, essays, interviews, recommendations, scholarships, and final narrative with discipline.",
    outcome: "Applications that read as coherent, mature, and specific.",
    icon: FileCheck2,
    focus: ["Essays and SOPs", "Interview preparation", "Scholarship targeting"],
  },
  {
    year: "University",
    title: "Matriculation & Success",
    description:
      "Help students transition into university with confidence, networks, habits, and a plan for the first year.",
    outcome: "A stronger launch into academics, internships, and campus life.",
    icon: GraduationCap,
    focus: ["Transition planning", "Network building", "First-year goals"],
  },
];

export default function Roadmap() {
  const [activeIndex, setActiveIndex] = useState(2);
  const active = roadmap[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section id="roadmap" className="section-divider-top relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="premium-wash opacity-60" />
      <div className="bg-dot-pattern absolute inset-0 opacity-[0.12]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">The Blueprint</p>
          <h2
            style={{ fontFamily: "var(--font-playfair)" }}
            className="mt-4 text-3xl font-bold leading-tight text-[#0B1220] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            A memorable journey parents can actually follow.
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Time is the compounding advantage. Our roadmap turns scattered effort into a visible progression from
            discovery to admission and beyond.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.96fr_1.04fr] lg:items-stretch">
          <div className="card-base overflow-hidden p-4 sm:p-5">
            <div className="grid gap-3">
              {roadmap.map((item, index) => {
                const Icon = item.icon;
                const isActive = index === activeIndex;

                return (
                  <button
                    key={item.year}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 rounded-xl border p-4 text-left transition-all ${
                      isActive
                        ? "border-blue-200 bg-[#F3F7FF] shadow-sm"
                        : "border-slate-200 bg-white hover:border-blue-100 hover:bg-slate-50"
                    }`}
                    aria-pressed={isActive}
                  >
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                        isActive ? "bg-[#2563EB] text-white" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-black text-[#2563EB]">{item.year}</span>
                      <span className="mt-1 block text-base font-black text-[#0B1220]">{item.title}</span>
                    </span>
                    <CircleDot
                      className={`h-5 w-5 ${isActive ? "text-[#2563EB]" : "text-slate-300"}`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <motion.article
            key={active.year}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-[#0B1220] p-6 text-white shadow-[0_28px_80px_rgba(15,23,42,0.22)] sm:p-8 lg:p-10"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300" />
            <div className="absolute inset-0 bg-noise opacity-25" />

            <div className="relative z-10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-300">{active.year}</p>
                  <h3
                    style={{ fontFamily: "var(--font-playfair)" }}
                    className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl"
                  >
                    {active.title}
                  </h3>
                </div>
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-blue-200 ring-1 ring-white/10">
                  <ActiveIcon size={30} aria-hidden="true" />
                </div>
              </div>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{active.description}</p>

              <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.08] p-5">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-200">Parent-visible outcome</p>
                <p className="mt-3 text-lg font-semibold leading-7 text-white">{active.outcome}</p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {active.focus.map((item) => (
                  <div key={item} className="flex items-start gap-2 rounded-xl bg-white/[0.08] p-4 text-sm leading-6 text-slate-200">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>

              <a href="#contact" className="mt-9 inline-flex items-center gap-2 font-black text-blue-200 hover:text-white">
                Map my child&apos;s current stage
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
