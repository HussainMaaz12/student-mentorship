"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/contact";

export default function WhatsAppButton() {
    return (
        <a
            href={buildWhatsAppUrl("Hello, I would like to speak with FuturePath Advisory.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-5 right-5 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl shadow-green-500/30 transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/40 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
        >
            <MessageCircle size={26} className="sm:hidden" />
            <MessageCircle size={30} className="hidden sm:block" />
        </a>
    );
}
