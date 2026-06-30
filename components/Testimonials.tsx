"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        name: "Mrs. Sharma",
        role: "Parent of Class 11 Student",
        text: "Before we found FuturePath, we were completely lost regarding the new admission requirements. The mentorship process gave us absolute clarity on academics, profile building, and university planning. We finally have a concrete roadmap.",
        image: "/images/avatar_sharma.png"
    },
    {
        name: "Rahul D.",
        role: "Engineering Aspirant, Admitted to Top 20 Global Tech Program",
        text: "Instead of randomly preparing for exams, I received a highly structured plan. They helped me secure a crucial research internship and build a portfolio that made my application undeniable.",
        image: "/images/avatar_rahul.png"
    },
    {
        name: "The Patel Family",
        role: "Parents of a Class 12 Student",
        text: "The guidance helped us understand scholarships, applications, and opportunities we didn't even know existed. They handled everything with incredible professionalism. Truly an investment in our son's future.",
        image: "/images/avatar_patel.png"
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="section-divider-top section-cream relative overflow-hidden py-12 sm:py-16">

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">

                <div className="text-center mb-16 sm:mb-24">
                    <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB]">
                        Success Stories
                    </p>
                    <h2
                        style={{ fontFamily: "var(--font-playfair)" }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A]"
                    >
                        Trusted By Forward-Thinking{" "}
                        <span className="text-slate-400 italic font-normal">Students & Parents.</span>
                    </h2>
                </div>

                <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.15 }}
                            className="card-base group p-7 sm:p-9 flex flex-col justify-between"
                        >
                            <div>
                                <Quote className="mb-6 sm:mb-8 h-8 w-8 sm:h-10 sm:w-10 text-slate-200 group-hover:text-blue-400 transition-colors duration-300" />
                                <p className="leading-relaxed text-slate-500 text-base sm:text-lg italic">
                                    &ldquo;{item.text}&rdquo;
                                </p>
                            </div>

                            <div className="mt-8 sm:mt-10 border-t border-slate-100 pt-5 sm:pt-6 flex items-center gap-4">
                                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-white">
                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <div className="font-bold text-[#0F172A] text-sm sm:text-base">
                                        {item.name}
                                    </div>
                                    <div className="text-xs sm:text-sm text-slate-400 mt-1">
                                        {item.role}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
