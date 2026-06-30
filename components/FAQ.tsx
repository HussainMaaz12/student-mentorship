"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Who is this mentorship program for?",
        answer: "We work with highly motivated students from Class 8 onwards who want structured, strategic guidance for profile building and top-tier university admissions.",
    },
    {
        question: "Do you help with Indian university admissions as well?",
        answer: "Yes. We assist with premier engineering, medical, and liberal arts admissions within India, ensuring students have competitive strategies for domestic excellence.",
    },
    {
        question: "Do you facilitate study abroad admissions?",
        answer: "Absolutely. We guide students through Ivy League, Oxbridge, and other elite global university applications. This includes college selection, essay editing, interview prep, and scholarship negotiation.",
    },
    {
        question: "When is the best time to start profile building?",
        answer: "The earlier, the better. Starting in Class 8 or 9 allows students to build long-term, high-impact projects and leadership roles without the immense pressure of Class 12. However, we can craft accelerated strategies for older students.",
    },
    {
        question: "Is the initial consultation completely free?",
        answer: "Yes. The initial Strategy Call and Readiness Assessment are completely free and carry no obligation. It's an opportunity for us to assess your child's current standing and discuss potential roadmaps.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section id="faq" className="section-divider-top bg-[#FAFAF8] py-20 sm:py-28">
            <div className="mx-auto max-w-3xl px-4 sm:px-6">

                <div className="text-center mb-14 sm:mb-20">
                    <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB]">
                        Clarity & Transparency
                    </p>
                    <h2
                        style={{ fontFamily: "var(--font-playfair)" }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A]"
                    >
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-3 sm:space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="card-base overflow-hidden !rounded-xl sm:!rounded-2xl"
                        >
                            <button
                                onClick={() => setOpen(open === index ? null : index)}
                                className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2563EB] focus-visible:outline-offset-[-2px]"
                                aria-expanded={open === index}
                            >
                                <span className={`text-base sm:text-lg font-semibold transition-colors duration-200 ${open === index ? "text-[#2563EB]" : "text-[#0F172A]"}`}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    size={20}
                                    className={`shrink-0 text-slate-400 transition-transform duration-300 ${open === index ? "rotate-180 text-[#2563EB]" : ""}`}
                                />
                            </button>

                            <AnimatePresence>
                                {open === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25, ease: "easeInOut" }}
                                    >
                                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-slate-500 leading-relaxed text-base sm:text-lg border-t border-slate-100 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
