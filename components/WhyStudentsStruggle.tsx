"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const problems = [
    {
        title: "The 'Good Grades' Trap",
        description:
            "Is your child academically gifted, yet missing out on the critical profile-building activities that top-tier universities actually look for? Straight A's are no longer enough.",
    },
    {
        title: "Late Strategy Execution",
        description:
            "Many families realize too late that leadership, research, and extracurriculars take years to build. Starting in Class 12 leaves students stressed and scrambling.",
    },
    {
        title: "Lack of Direction",
        description:
            "Students often work incredibly hard without a unified narrative. Without a structured roadmap, their efforts feel disconnected to admissions officers.",
    },
    {
        title: "Missed Financial Aid",
        description:
            "Without early positioning, families frequently miss out on substantial merit-based scholarships simply because the student's profile wasn't built to stand out.",
    },
];

const strengths = [
    "Long-Term Academic Strategy",
    "Targeted Leadership Development",
    "High-Impact Research Projects",
    "Competitive University Positioning",
];

export default function WhyStudentsStruggle() {
    return (
        <section id="problem" className="section-divider-top section-cream relative overflow-hidden py-12 sm:py-16">
            <div className="premium-wash opacity-45" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB]">
                        The Reality of Admissions
                    </p>
                    <h2
                        style={{ fontFamily: "var(--font-playfair)" }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight"
                    >
                        Why Bright Students{" "}
                        <span className="text-slate-400 italic font-normal">Miss Extraordinary Opportunities.</span>
                    </h2>
                    <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-relaxed text-slate-500 max-w-2xl mx-auto">
                        In today&apos;s hyper-competitive landscape, universities evaluate far more than report cards. Without expert guidance, even the smartest students struggle to differentiate themselves.
                    </p>
                </motion.div>

                {/* Problem Cards */}
                <div className="mt-16 sm:mt-24 grid gap-6 sm:gap-8 md:grid-cols-2">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                            className="card-base group p-6 sm:p-8"
                        >
                            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-400 text-sm font-bold">
                                {String(index + 1).padStart(2, "0")}
                            </div>
                            <h3 className="mb-3 text-xl sm:text-2xl font-bold text-[#0F172A]">
                                {item.title}
                            </h3>
                            <p className="leading-relaxed text-slate-500 text-base sm:text-lg">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Solution Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative mt-14 overflow-hidden rounded-2xl bg-[#0B1220] p-7 shadow-2xl sm:mt-20 sm:p-10 md:p-14 lg:p-16"
                >

                    <div className="relative z-10 grid gap-10 sm:gap-12 lg:grid-cols-5 lg:items-center">
                        <div className="lg:col-span-3">
                            <h3
                                style={{ fontFamily: "var(--font-playfair)" }}
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                            >
                                Building A Legacy Requires More Than Just Good Grades.
                            </h3>
                            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                                Elite universities select students who demonstrate profound leadership, intellectual curiosity, and a measurable impact on their communities over time.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:gap-5 lg:col-span-2">
                            {strengths.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 rounded-xl sm:rounded-2xl bg-white/10 p-4 sm:p-5 backdrop-blur-md border border-white/5"
                                >
                                    <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 shrink-0" />
                                    <span className="font-medium text-white text-base sm:text-lg">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
