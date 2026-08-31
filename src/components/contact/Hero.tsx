"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ContactHero() {
    return (
        <section className="px-6 pb-20 pt-20 sm:pb-20 sm:pt-25">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.12,
                                delayChildren: 0.1,
                            },
                        },
                    }}
                >
                    {/* Label */}
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.6,
                                    ease,
                                },
                            },
                        }}
                        className="text-xs font-medium tracking-[0.2em] text-black/35"
                    >
                        06 / LET'S TALK
                    </motion.p>

                    {/* Heading */}
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.8,
                                    ease,
                                },
                            },
                        }}
                        className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl"
                    >
                        Wanna chat with me?
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 25 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.7,
                                    ease,
                                },
                            },
                        }}
                        className="mt-6 max-w-xl text-base leading-relaxed text-black/50 sm:text-lg"
                    >
                        Whether you want to talk about a project, collaborate,
                        or just say hi, here's where you can find me.
                    </motion.p>

                    {/* Scroll indicator */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 15 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.6,
                                    ease,
                                },
                            },
                        }}
                        className="mt-10 flex items-center gap-3"
                    >
                        <div className="h-px w-10 bg-black/15" />

                        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/30">
                            find me online
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}