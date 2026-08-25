"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function CTA() {
    return (
        <section className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                    className="border-t border-black/10 pt-16"
                >
                    {/* Label */}
                    <motion.p
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                        }}
                        className="text-xs font-medium tracking-[0.2em] text-black/35"
                    >
                        06 / LET'S TALK
                    </motion.p>

                    <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                        {/* Text */}
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.1,
                                    ease: "easeOut",
                                }}
                                className="max-w-2xl text-4xl font-medium leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl"
                            >
                                Have an idea?
                                <br />
                                Let's make something.
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.2,
                                    ease: "easeOut",
                                }}
                                className="mt-6 max-w-md text-base leading-relaxed text-black/50"
                            >
                                Whether you want to talk about a project,
                                collaborate, or just say hi, I'd love to hear
                                from you.
                            </motion.p>
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: 0.3,
                                ease: "easeOut",
                            }}
                        >
                            <Link
                                href="/contact"
                                className="group inline-flex w-fit items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            >
                                <span>get in touch</span>

                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}