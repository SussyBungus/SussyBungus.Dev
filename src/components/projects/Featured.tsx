"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function FeaturedProject() {
    return (
        <section className="px-6 py-24">
            <div className="mx-auto max-w-6xl">

                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                    className="mb-10"
                >
                    <p className="text-xs font-medium tracking-[0.2em] text-black/35">
                        02 / FEATURED
                    </p>
                </motion.div>

                {/* Featured project */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                    className="group grid overflow-hidden rounded-[2rem] border border-black/10 bg-black/[0.015] md:grid-cols-[1.15fr_0.85fr]"
                >
                    {/* Image */}
                    <div className="relative min-h-[280px] overflow-hidden bg-black/[0.04] sm:min-h-[360px] md:min-h-[480px]">
                        <Image
                            src="/focusai.png"
                            alt="FocusAI project"
                            fill
                            sizes="(max-width: 768px) 100vw, 60vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                        />

                        {/* Image overlay */}
                        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.04]" />

                        {/* Badge */}
                        <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/70 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                            Featured project
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-between p-7 sm:p-9 md:p-10">

                        <div>
                            {/* Number / category */}
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-medium tracking-[0.2em] text-black/35">
                                    01
                                </span>

                                <div className="h-px w-10 bg-black/10" />

                                <span className="text-xs font-medium uppercase tracking-[0.15em] text-black/35">
                                    Productivity
                                </span>
                            </div>

                            <h2 className="mt-6 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                                FocusAI
                            </h2>

                            <p className="mt-5 text-base leading-relaxed text-black/50">
                                An AI-powered productivity platform designed
                                to help students organize assignments, stay
                                on top of deadlines, and stop procrastinating.
                            </p>

                            {/* Technologies */}
                            <div className="mt-7 flex flex-wrap gap-2">
                                {[
                                    "Next.js",
                                    "TypeScript",
                                    "Supabase",
                                    "AI",
                                ].map((technology) => (
                                    <span
                                        key={technology}
                                        className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs text-black/55"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        <div className="mt-10 flex flex-wrap gap-3">
                            <Link
                                href="/projects/focusai"
                                className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            >
                                View project
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>

                            <Link
                                href="https://focusai-gray.vercel.app"
                                target="_blank"
                                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-black/70 transition-colors duration-300 hover:bg-black/5"
                            >
                                Live site ↗
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}