"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/contact";

const storageKey = "futurepath-consultation-popup-dismissed";

function hasDismissedPopup() {
  try {
    return window.sessionStorage?.getItem(storageKey) === "true";
  } catch {
    return false;
  }
}

function rememberDismissedPopup() {
  try {
    window.sessionStorage?.setItem(storageKey, "true");
  } catch {
    // Storage can be unavailable in restricted browser contexts.
  }
}

export default function ConsultationPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const dismiss = useCallback(() => {
    rememberDismissedPopup();
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (hasDismissedPopup()) {
      return;
    }

    let hasTriggered = false;
    let baselineScrollY = window.scrollY;
    let hasSettledInitialHash = !window.location.hash;
    let hasPointerMoved = false;

    const settleHashTimer = window.setTimeout(
      () => {
        baselineScrollY = window.scrollY;
        hasSettledInitialHash = true;
      },
      window.location.hash ? 1400 : 0
    );

    const openPopup = () => {
      if (!hasTriggered && !hasDismissedPopup()) {
        hasTriggered = true;
        setIsOpen(true);
      }
    };

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const userScrollDistance = Math.abs(window.scrollY - baselineScrollY);

      if (scrollable <= 0 || !hasSettledInitialHash) {
        return;
      }

      if (userScrollDistance >= 160 && window.scrollY / scrollable >= 0.45) {
        openPopup();
        window.removeEventListener("scroll", onScroll);
      }
    };

    const onMouseLeave = (event: MouseEvent) => {
      if (hasPointerMoved && window.innerWidth >= 1024 && event.clientY <= 8) {
        openPopup();
        document.removeEventListener("mouseleave", onMouseLeave);
      }
    };

    const onPointerMove = () => {
      hasPointerMoved = true;
    };

    const timer = window.setTimeout(openPopup, 30000);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mousemove", onPointerMove, { once: true });
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.clearTimeout(settleHashTimer);
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousemove", onPointerMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dismiss();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [dismiss, isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[1000] flex items-end justify-center bg-slate-950/42 px-4 py-4 backdrop-blur-sm sm:items-center sm:py-8">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-popup-title"
        className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/40 bg-white shadow-[0_32px_100px_rgba(15,23,42,0.35)]"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={dismiss}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-colors hover:text-[#0B1220]"
          aria-label="Close consultation popup"
        >
          <X size={18} aria-hidden="true" />
        </button>

        <div className="bg-[#0B1220] px-6 pb-7 pt-8 text-white sm:px-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-300">Free Career Readiness Assessment</p>
          <h2
            id="consultation-popup-title"
            style={{ fontFamily: "var(--font-playfair)" }}
            className="mt-4 max-w-md text-3xl font-bold leading-tight"
          >
            Want a senior advisor to review your child&apos;s admission readiness?
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
            Get a confidential gap scan across academics, activities, profile strength, scholarships, and application
            timing.
          </p>
        </div>

        <div className="grid gap-4 p-6 sm:p-8">
          {[
            "A practical view of what to build next",
            "A parent-friendly roadmap for the coming year",
            "No-obligation consultation with a senior mentor",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 text-slate-700">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2563EB]" aria-hidden="true" />
              {item}
            </div>
          ))}

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <a href="#contact" onClick={dismiss} className="btn-primary px-5 py-3 text-sm">
              Book consultation
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href={buildWhatsAppUrl("Hello, I would like a free Career Readiness Assessment.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={dismiss}
              className="btn-secondary px-5 py-3 text-sm"
            >
              Continue on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
