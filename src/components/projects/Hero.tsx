"use client";

import { motion } from "motion/react";

export default function ProjectsHero() {
    return (
        <section className="px-6 pb-24 pt-32 sm:pb-28 sm:pt-40">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.12,
                            },
                        },
                    }}
                >
                    {/* Label */}
                    <motion.p
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 12,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.5,
                                    ease: "easeOut",
                                },
                            },
                        }}
                        className="text-xs font-medium tracking-[0.2em] text-black/35"
                    >
                        01 / PROJECTS
                    </motion.p>

                    {/* Heading */}
                    <motion.h1
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 20,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.65,
                                    ease: "easeOut",
                                },
                            },
                        }}
                        className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-8xl"
                    >
                        Things I've built.
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 16,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.55,
                                    ease: "easeOut",
                                },
                            },
                        }}
                        className="mt-7 max-w-2xl text-lg leading-relaxed text-black/50 sm:text-xl"
                    >
                        A collection of projects, experiments, and ideas I've
                        turned into something real.
                    </motion.p>

                    {/* Small metadata */}
                    <motion.div
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 12,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.5,
                                    ease: "easeOut",
                                },
                            },
                        }}
                        className="mt-10 flex flex-wrap items-center gap-3 text-xs font-medium tracking-[0.15em] text-black/35"
                    >
                        <span>SOFTWARE</span>

                        <span className="h-1 w-1 rounded-full bg-black/20" />

                        <span>EXPERIMENTS</span>

                        <span className="h-1 w-1 rounded-full bg-black/20" />

                        <span>2023 — PRESENT</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}