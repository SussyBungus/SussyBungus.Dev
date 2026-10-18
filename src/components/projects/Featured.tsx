"use client";

import Image from "next/image";
import { motion } from "motion/react";
import SectionBadge from "@/components/SectionBadge";

export default function FeaturedProject() {
    return (
        <section className="px-6 py-20">
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
                    className="mb-8"
                >
                    <SectionBadge number="02" label="Featured Project" />
                </motion.div>

                {/* Featured project glossy card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                    className="glass-panel group relative grid overflow-hidden rounded-[2.5rem] shadow-xl md:grid-cols-[1.15fr_0.85fr]"
                >
                    {/* Image Container with specular shine */}
                    <div className="relative min-h-[300px] overflow-hidden bg-neutral-900 sm:min-h-[380px] md:min-h-[460px]">
                        <Image
                            src="/focusai.png"
                            alt="FocusAI project platform"
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 60vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />

                        {/* Glossy overlay */}
                        <div className="glass-lens-glare pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-70" />

                        {/* Floating Badge */}
                        <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/60 px-3.5 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-md">
                            ✦ Featured Launch
                        </div>
                    </div>

                    {/* Content Details */}
                    <div className="flex flex-col justify-between p-8 sm:p-10 md:p-12">
                        <div>
                            {/* Category & Status */}
                            <div className="flex items-center gap-3">
                                <span className="font-mono text-xs font-semibold text-neutral-400">
                                    01
                                </span>
                                <div className="h-px w-8 bg-neutral-200" />
                                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                                    AI &bull; Productivity
                                </span>
                            </div>

                            <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                                FocusAI
                            </h2>

                            <p className="mt-4 text-base leading-relaxed text-neutral-600">
                                An intelligent productivity assistant engineered to help students organize course assignments, forecast upcoming deadlines, and break study sessions into manageable milestones.
                            </p>

                            {/* Tech Stack Chips */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {[
                                    "Next.js",
                                    "TypeScript",
                                    "Supabase",
                                    "Tailwind CSS",
                                    "OpenAI API",
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="glass-pill rounded-full px-3 py-1 text-xs font-medium text-neutral-700 shadow-2xs"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-10 flex flex-wrap items-center gap-3">
                            <a
                                href="https://focusai-gray.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-neutral-900 hover:shadow-xl"
                            >
                                <span>Launch App</span>
                                <span className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                                    ↗
                                </span>
                            </a>

                            <a
                                href="https://github.com/SussyBungus"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-pill inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-neutral-800 transition-all duration-300 hover:scale-105 hover:bg-white"
                            >
                                <span>Source Code</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}