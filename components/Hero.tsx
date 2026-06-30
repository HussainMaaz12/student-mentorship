import Image from "next/image";
import { ArrowRight, CheckCircle2, GraduationCap, ShieldCheck, Sparkles } from "lucide-react";

const proofPoints = [
  { value: "500+", label: "student and parent roadmaps" },
  { value: "5-yr", label: "Class 8 to university planning" },
  { value: "1:1", label: "senior mentor attention" },
];

const journeySteps = [
  "Academic direction",
  "Profile architecture",
  "Research and impact",
  "Application narrative",
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#FAFAF8] text-[#0F172A]">
      <div className="premium-wash" />
      <div className="bg-dot-pattern absolute inset-0 opacity-[0.18]" />
      <div className="bg-noise absolute inset-0 opacity-70 mix-blend-multiply" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:min-h-[calc(100svh-80px)] lg:py-20">
        <div className="grid min-h-[inherit] w-full min-w-0 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div className="min-w-0 max-w-3xl">
            <p className="eyebrow">Premium Admissions Advisory</p>

            <h1
              style={{ fontFamily: "var(--font-playfair)" }}
              className="mt-5 max-w-full text-4xl font-bold leading-[1.04] text-[#0B1220] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Build a future top universities can believe in.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Long-term mentorship for ambitious students and discerning parents: career clarity, profile building,
              study abroad strategy, scholarships, and admissions narratives designed years before deadlines arrive.
            </p>

            <div className="mt-8 flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#contact" className="btn-primary w-full px-5 py-3.5 text-center sm:w-auto sm:px-6">
                Book a confidential strategy call
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a href="#roadmap" className="btn-secondary w-full px-5 py-3.5 text-center sm:w-auto sm:px-6">
                Explore the mentorship roadmap
              </a>
            </div>

            <dl className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {proofPoints.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/80 bg-white/[0.72] p-4 shadow-sm backdrop-blur"
                >
                  <dt className="text-2xl font-black text-[#2563EB]">{item.value}</dt>
                  <dd className="mt-1 text-sm leading-5 text-slate-600">{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative min-w-0">
            <div className="absolute -left-5 top-10 hidden h-[78%] w-8 rounded-r-full bg-[#2563EB]/10 lg:block" />
            <div className="relative overflow-hidden rounded-2xl border border-white bg-white shadow-[0_28px_90px_rgba(15,23,42,0.18)]">
              <div className="relative aspect-[1.32]" style={{ position: "relative" }}>
                <Image
                  src="/images/advisory-session.png"
                  alt="A mentor, parent, and student reviewing a university admissions roadmap together"
                  fill
                  preload
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 48vw, 620px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/38 via-slate-950/4 to-transparent" />
              </div>

              <div className="grid gap-3 border-t border-slate-200 bg-white p-4 sm:grid-cols-2 sm:p-5">
                <div className="rounded-xl bg-[#F3F7FF] p-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#2563EB]">
                    <ShieldCheck size={17} aria-hidden="true" />
                    Family-first planning
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Clear priorities for academics, exposure, and admission readiness.
                  </p>
                </div>
                <div className="rounded-xl bg-[#FFF7E8] p-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-amber-700">
                    <GraduationCap size={17} aria-hidden="true" />
                    Top-tier positioning
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    A narrative that connects strengths, projects, and long-term goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_20px_55px_rgba(15,23,42,0.14)] sm:ml-8 sm:w-[360px]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2563EB] text-white">
                  <Sparkles size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-black text-[#0B1220]">Strategic profile audit included</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Parents leave with the next three highest-leverage moves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-3 border-t border-slate-200/80 pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {journeySteps.map((step) => (
            <div key={step} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-[#2563EB]" aria-hidden="true" />
              {step}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
