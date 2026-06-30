import Image from "next/image";

export default function WhyUs() {
    return (
        <section id="why-us" className="py-20 sm:py-28 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <div>
                        <h2 style={{ fontFamily: "var(--font-playfair)" }} className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A]">
                            Why Choose FuturePath
                        </h2>
                        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                            We don't just provide counseling; we build holistic roadmaps tailored to your child's aspirations. Step onto a prestigious campus with confidence.
                        </p>
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                        <Image src="/images/why_us.png" alt="Prestigious University Campus" fill className="object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}
