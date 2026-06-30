import Image from "next/image";

export default function Process() {
    return (
        <section id="process" className="py-20 sm:py-28 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <div className="order-last lg:order-first relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                        <Image src="/images/process.png" alt="Student and Counselor discussing roadmap" fill className="object-cover" />
                    </div>
                    <div>
                        <h2 style={{ fontFamily: "var(--font-playfair)" }} className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A]">
                            Our Process
                        </h2>
                        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                            A collaborative journey where we identify strengths, map out opportunities, and execute a winning strategy together.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
