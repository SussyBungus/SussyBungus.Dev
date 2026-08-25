"use client";

import { motion } from "motion/react";

const stack = [
    {
        category: "Frontend",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "React Native",
        ],
    },
    {
        category: "Backend",
        technologies: [
            "Node.js",
            "Python",
            "Supabase",
            "SQL",
        ],
    },
    {
        category: "Tools",
        technologies: [
            "Git",
            "GitHub",
            "VS Code",
            "Vercel",
            "Expo",
            "Figma",
        ],
    },
    {
        category: "Other",
        technologies: [
            "C",
            "C++",
            "Java",
            "Bash",
        ],
    },
];

export default function TechStack() {
    return (
        <section className="px-6 py-24">
            <div className="mx-auto max-w-6xl">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                    className="mb-12"
                >
                    <p className="text-xs font-medium tracking-[0.2rem] text-black/35">
                        03 / TECH STACK
                    </p>

                    <h2 className="mt-4 max-w-xl text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                        Technologies I use and learned
                    </h2>
                </motion.div>

                {/* Stack */}
                <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-black/10 bg-black/10 sm:grid-cols-2">
                    {stack.map((group, groupIndex) => (
                        <motion.div
                            key={group.category}
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.25,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: groupIndex * 0.08,
                                ease: "easeOut",
                            }}
                            className="bg-white p-8 sm:p-10"
                        >
                            {/* Category */}
                            <motion.p
                                initial={{
                                    opacity: 0,
                                    x: -10,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.4,
                                    delay: groupIndex * 0.08 + 0.1,
                                    ease: "easeOut",
                                }}
                                className="text-xs font-semibold uppercase tracking-[0.15em] text-black/40"
                            >
                                {group.category}
                            </motion.p>

                            {/* Pills */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {group.technologies.map(
                                    (technology, technologyIndex) => (
                                        <motion.span
                                            key={technology}
                                            initial={{
                                                opacity: 0,
                                                scale: 0.9,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                scale: 1,
                                            }}
                                            viewport={{
                                                once: true,
                                            }}
                                            transition={{
                                                duration: 0.35,
                                                delay: technologyIndex * 0.035,
                                                ease: "easeOut",
                                            }}
                                            whileHover={{
                                                y: -3,
                                                scale: 1.03,
                                            }}
                                            className="cursor-default rounded-full border border-black/10 bg-black/[0.02] px-4 py-2 text-sm text-black/70"
                                        >
                                            {technology}
                                        </motion.span>
                                    )
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}