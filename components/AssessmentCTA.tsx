"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/contact";

export default function AssessmentCTA() {
    return (
        <section id="assessment" className="relative overflow-hidden bg-[#0B1220] py-12 text-white sm:py-16">
            {/* Background depth */}
            <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-30 pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center"
                >
                    <p className="eyebrow justify-center text-blue-300">Free Readiness Assessment</p>
                    <h2
                        style={{ fontFamily: "var(--font-playfair)" }}
                        className="mx-auto mt-4 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
                    >
                        Is Your Child Truly Prepared For
                        <span className="text-blue-400 italic font-normal"> Top University Admissions?</span>
                    </h2>
                    <p className="mx-auto mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
                        Take our comprehensive Career Readiness Assessment to identify critical gaps and immediate opportunities to strengthen your child&apos;s profile.
                    </p>
                </motion.div>

                <div className="mt-12 grid items-stretch gap-6 sm:gap-8 lg:grid-cols-2">
                    {/* Left Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="rounded-2xl border border-white/10 bg-white/[0.08] p-7 backdrop-blur-xl sm:p-10"
                    >
                        <h3 className="mb-6 sm:mb-8 text-xl sm:text-2xl font-bold text-white">
                            What The Assessment Reveals:
                        </h3>
                        <div className="space-y-5 sm:space-y-6">
                            {[
                                "Academic & Standardized Testing Readiness",
                                "Extracurricular & Profile Strength Analysis",
                                "Leadership & Project Impact Score",
                                "Merit-Based Scholarship Viability",
                                "Personalized Gap-Analysis Report",
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 sm:gap-4">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 sm:h-6 sm:w-6 text-blue-400 shrink-0" />
                                    <span className="text-base sm:text-lg text-slate-300">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-blue-400/25 bg-gradient-to-br from-blue-900/70 to-slate-950 p-7 shadow-2xl sm:p-10 lg:p-12"
                    >

                        <div className="relative z-10">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                                Start Your Confidential Assessment
                            </h3>
                            <p className="mt-4 text-blue-200 text-base sm:text-lg">
                                Takes less than 3 minutes. Receive actionable insights immediately.
                            </p>
                        </div>

                        <div className="relative z-10 mt-8 sm:mt-10">
                            <button
                                onClick={() => {
                                    window.open(
                                        buildWhatsAppUrl("Hello, I would like to take the Career Readiness Assessment."),
                                        "_blank",
                                        "noopener,noreferrer"
                                    );
                                }}
                                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 text-base font-black text-[#0B1220] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_24px_rgba(255,255,255,0.2)] sm:py-5 sm:text-lg"
                            >
                                Begin Assessment
                                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                            </button>

                            <div className="mt-6 sm:mt-8 flex items-center gap-3 border-t border-blue-800/40 pt-5 sm:pt-6">
                                <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                                <p className="text-sm text-blue-200">
                                    100% Confidential. Free consultation included.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
