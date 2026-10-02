"use client";

import { motion } from "motion/react";

const stack = [
    {
        category: "Frontend & Web",
        technologies: [
            "Next.js",
            "React 19",
            "TypeScript",
            "JavaScript",
            "Tailwind CSS v4",
            "GSAP",
            "Motion",
            "React Native",
        ],
    },
    {
        category: "Backend & Cloud",
        technologies: [
            "Node.js",
            "Python",
            "Supabase",
            "PostgreSQL",
            "REST APIs",
            "SQL",
        ],
    },
    {
        category: "Developer Tooling",
        technologies: [
            "Git & GitHub",
            "Antigravity IDE",
            "VS Code",
            "Vercel",
            "Windows Terminal",
            "Figma",
        ],
    },
    {
        category: "Systems & Foundations",
        technologies: [
            "C",
            "C++",
            "Java",
            "Bash / PowerShell",
            "Data Structures",
        ],
    },
];

export default function TechStack() {
    return (
        <section className="px-6 py-20">
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
                    <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/60 px-3.5 py-1 text-xs font-medium text-neutral-500 shadow-xs backdrop-blur-md">
                        <span>03</span>
                        <span className="h-1 w-1 rounded-full bg-neutral-300" />
                        <span>Tech Stack</span>
                    </div>

                    <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                        Technologies &amp; Libraries I Use
                    </h2>
                    <p className="mt-2 text-base text-neutral-500">
                        Languages, frameworks, and tools I leverage across projects.
                    </p>
                </motion.div>

                {/* Stack Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: groupIndex * 0.08,
                                ease: "easeOut",
                            }}
                            className="glass-panel group rounded-[2rem] p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 sm:p-8"
                        >
                            {/* Category */}
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                                {group.category}
                            </p>

                            {/* Pills */}
                            <div className="mt-5 flex flex-wrap gap-2">
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
                                                delay: technologyIndex * 0.03,
                                                ease: "easeOut",
                                            }}
                                            whileHover={{
                                                y: -2,
                                                scale: 1.04,
                                            }}
                                            className="glass-pill cursor-default rounded-full px-3.5 py-1.5 text-xs font-medium text-neutral-700 shadow-2xs transition-colors hover:text-black"
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