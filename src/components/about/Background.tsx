"use client";

import { motion } from "motion/react";

const education = [
    {
        year: "2024 — Present",
        title: "Sir John A. Macdonald Collegiate Institute",
        description: "Toronto, Ontario",
    },
    {
        year: "2022 — 2024",
        title: "J B Tyrrell Senior Public School",
        description: "Toronto, Ontario",
    },
];

const awards = [
    {
        year: "2023",
        title: "DIY4Youth Hackathon - Bronze",
        description: "Study Smart — AI study planner assistant",
    },
];

export default function Background() {
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
                    className="mb-14"
                >
                    <p className="text-xs font-medium tracking-[0.2em] text-black/35">
                        05 / BACKGROUND
                    </p>

                    <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                        A little more about my background.
                    </h2>
                </motion.div>

                {/* Columns */}
                <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20">

                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                        }}
                    >
                        <div className="mb-8 flex items-center gap-3">
                            <span className="text-xs font-medium tracking-[0.2em] text-black/35">
                                01
                            </span>

                            <h3 className="text-sm font-semibold uppercase tracking-[0.15em]">
                                Education
                            </h3>
                        </div>

                        <div className="space-y-8">
                            {education.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                        ease: "easeOut",
                                    }}
                                    className="group border-b border-black/10 pb-8"
                                >
                                    <p className="text-xs font-medium tracking-[0.12em] text-black/35">
                                        {item.year}
                                    </p>

                                    <h4 className="mt-3 text-lg font-medium tracking-[-0.02em] transition-opacity duration-300 group-hover:opacity-60">
                                        {item.title}
                                    </h4>

                                    <p className="mt-2 text-sm text-black/50">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Awards */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.1,
                            ease: "easeOut",
                        }}
                    >
                        <div className="mb-8 flex items-center gap-3">
                            <span className="text-xs font-medium tracking-[0.2em] text-black/35">
                                02
                            </span>

                            <h3 className="text-sm font-semibold uppercase tracking-[0.15em]">
                                Awards
                            </h3>
                        </div>

                        <div className="space-y-8">
                            {awards.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                        ease: "easeOut",
                                    }}
                                    className="group border-b border-black/10 pb-8"
                                >
                                    <p className="text-xs font-medium tracking-[0.12em] text-black/35">
                                        {item.year}
                                    </p>

                                    <h4 className="mt-3 text-lg font-medium tracking-[-0.02em] transition-opacity duration-300 group-hover:opacity-60">
                                        {item.title}
                                    </h4>

                                    <p className="mt-2 text-sm text-black/50">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}