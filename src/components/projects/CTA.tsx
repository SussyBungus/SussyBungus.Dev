"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function CTA() {
    return (
        <section className="px-6 py-32">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                    className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-black px-8 py-16 text-white sm:px-12 sm:py-20"
                >
                    {/* Subtle glow */}
                    <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/[0.06] blur-3xl" />

                    <div className="relative">
                        <p className="text-xs font-medium tracking-[0.2em] text-white/40">
                            04 / WHAT'S NEXT
                        </p>

                        <div className="mt-6 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                            <div>
                                <h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                                    More ideas are
                                    <br />
                                    already on the way.
                                </h2>

                                <p className="mt-6 max-w-lg text-base leading-relaxed text-white/45 sm:text-lg">
                                    I'm always building something new,
                                    experimenting with ideas, or finding
                                    another excuse to make something.
                                </p>
                            </div>

                            <Link
                                href="/about"
                                className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                more about me
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}