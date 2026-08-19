import Link from "next/link";

export default function About() {
    return (
        <section className="px-6 py-32">
            <div className="mx-auto max-w-6xl">
                <div className="grid items-center gap-16 md:grid-cols-[0.8fr_1.2fr]">

                    {/* Left */}
                    <div>
                        <p className="text-sm font-medium text-black/40">
                            01 / About
                        </p>

                        <h2 className="mt-6 max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                            i like building things and figuring out how they work
                        </h2>

                        <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-black/55">
                            <p>
                                i'm raymond, a student and developer who enjoys turning
                                random ideas into things i can actually use.
                            </p>

                            <p>
                                outside of coding, i'm into photography, badminton,
                                and anything else that keeps me curious.
                            </p>

                            <p>
                                this site is a little collection of the things i'm
                                building, learning, and interested in.
                            </p>
                        </div>

                        <Link
                            href="/about"
                            className="mt-8 inline-block text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-50"
                        >
                            more about me
                        </Link>
                    </div>

                    {/* Right — Holographic ID */}
                    <div className="flex min-h-[500px] items-center justify-center">
                        <div className="relative">

                            {/* Hologram */}
                            <div className="relative h-72 w-56 rounded-2xl border border-black/10 bg-black/[0.03] p-6 shadow-2xl backdrop-blur">

                                <div className="flex items-center justify-between text-[10px] tracking-[0.2em] text-black/40">
                                    <span>PROFILE</span>
                                    <span>001</span>
                                </div>

                                <div className="mt-10">
                                    <p className="text-2xl font-semibold tracking-tight">
                                        Raymond Lin
                                    </p>

                                    <p className="mt-2 text-xs text-black/40">
                                        developer · photographer
                                    </p>
                                </div>

                                <div className="absolute bottom-6 left-6 right-6 flex justify-between text-[10px] tracking-[0.15em] text-black/30">
                                    <span>TORONTO</span>
                                    <span>2026</span>
                                </div>

                            </div>

                            {/* Holographic glow */}
                            <div className="absolute -inset-12 -z-10 rounded-full bg-black/[0.04] blur-3xl" />

                            {/* Hand placeholder */}
                            <div className="mt-8 text-center text-4xl opacity-30">
                                🖐
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}