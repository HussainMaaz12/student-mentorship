"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarCheck, Menu, X } from "lucide-react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navItems = [
        { label: "Services", href: "#services" },
        { label: "Roadmap", href: "#roadmap" },
        { label: "Assessment", href: "#assessment" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#FAFAF8]/88 backdrop-blur-xl backdrop-saturate-150">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6">
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight text-[#0B1220] sm:text-2xl"
                    style={{ fontFamily: "var(--font-playfair)" }}
                    aria-label="FuturePath Home"
                >
                    FuturePath.
                </Link>

                {/* Desktop Navigation */}
                <nav aria-label="Main Navigation" className="hidden items-center gap-7 lg:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-[#0B1220] focus-visible:text-[#0B1220]"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden lg:block">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B1220] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#1e293b] hover:shadow-md"
                    >
                        <CalendarCheck size={16} aria-hidden="true" />
                        Book Strategy Call
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:bg-slate-50 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-navigation"
                    aria-label="Toggle Navigation Menu"
                >
                    {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div id="mobile-navigation" className="border-t border-slate-200 bg-white px-4 pb-6 pt-4 shadow-xl shadow-slate-200/50 sm:px-6 lg:hidden">
                    <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#0F172A]"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B1220] px-6 py-3.5 text-sm font-bold text-white"
                        >
                            <CalendarCheck size={16} aria-hidden="true" />
                            Book Strategy Call
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
