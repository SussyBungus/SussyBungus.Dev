"use client";

import { motion } from "motion/react";
import Link from "next/link";

const categories = [
    {
        title: "Developer Workspace",
        description: "The primary tools, editors, and environments I use to build web software.",
        items: [
            {
                name: "Antigravity IDE & VS Code",
                role: "Code Editors",
                detail: "Primary AI-first and standard editors customized with minimal dark themes.",
                icon: "⚡",
            },
            {
                name: "Next.js & React 19",
                role: "Frontend Framework",
                detail: "My go-to ecosystem for building fast, type-safe, full-stack applications.",
                icon: "▲",
            },
            {
                name: "Tailwind CSS & Motion",
                role: "Styling & Animation",
                detail: "Utility-first modern styling combined with physics-driven animation engines.",
                icon: "🎨",
            },
            {
                name: "PowerShell & Windows Terminal",
                role: "Command Line",
                detail: "Configured with customized starship prompt, git aliases, and fast script runners.",
                icon: ">_",
            },
        ],
    },
    {
        title: "Hardware & Gear",
        description: "Physical machines and peripherals on my desk.",
        items: [
            {
                name: "Canon EOS R50",
                role: "Mirrorless Camera",
                detail: "Compact APS-C sensor camera paired with RF-S 18–45mm for everyday shooting.",
                icon: "📷",
            },
            {
                name: "Custom Workstation & Laptop",
                role: "Core Computing",
                detail: "High-performance multi-core machine for software builds, game engines, and edits.",
                icon: "💻",
            },
            {
                name: "Mechanical Keyboard",
                role: "Input",
                detail: "Custom mechanical switch keyboard tuned for tactile typing and coding rhythm.",
                icon: "⌨️",
            },
            {
                name: "Ergonomic Desk Setup",
                role: "Workspace",
                detail: "Dual-arm monitor mounting, warm ambient lighting, and clean cable routing.",
                icon: "🖥️",
            },
        ],
    },
    {
        title: "Creative & Productivity",
        description: "Software that keeps projects organized and visuals polished.",
        items: [
            {
                name: "Adobe Lightroom",
                role: "Photography Post-Production",
                detail: "Where I organize RAW files, adjust dynamic curves, and grade color tones.",
                icon: "🎞️",
            },
            {
                name: "Figma",
                role: "Interface Prototyping",
                detail: "For rapid component sketching, design tokens, and layout exploration.",
                icon: "📐",
            },
            {
                name: "Notion & Life OS",
                role: "Task & Habit Tracker",
                detail: "Centralized workspace for sprint planning, running logs, and technical notes.",
                icon: "📋",
            },
            {
                name: "Supabase & Postgres",
                role: "Backend & Database",
                detail: "Serverless relational databases, authentication, and realtime websocket sync.",
                icon: "🗄️",
            },
        ],
    },
];

export default function SetupPage() {
    return (
        <main className="min-h-screen px-6 pt-32 pb-24">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-16"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/60 px-3.5 py-1 text-xs font-medium text-neutral-500 shadow-xs backdrop-blur-md">
                        <span>Workspace</span>
                        <span className="h-1 w-1 rounded-full bg-neutral-300" />
                        <span>Setup &amp; Gear</span>
                    </div>

                    <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] text-neutral-950 sm:text-5xl lg:text-6xl">
                        Tools, Gear &amp; Workspace.
                    </h1>

                    <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600">
                        A curated breakdown of the hardware, software, developer environment, and creative tools I use on a daily basis.
                    </p>
                </motion.div>

                {/* Categories */}
                <div className="space-y-16">
                    {categories.map((category, catIndex) => (
                        <motion.section
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.65,
                                delay: catIndex * 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                                    {category.title}
                                </h2>
                                <p className="text-sm text-neutral-500 mt-1">
                                    {category.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                                {category.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="glass-panel group flex flex-col justify-between rounded-3xl p-5.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                    >
                                        <div>
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/5 bg-black/[0.03] text-xl shadow-xs transition-transform duration-300 group-hover:scale-110">
                                                {item.icon}
                                            </div>

                                            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-400">
                                                {item.role}
                                            </p>

                                            <h3 className="mt-1 text-base font-bold tracking-tight text-neutral-900">
                                                {item.name}
                                            </h3>

                                            <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                                                {item.detail}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel mt-20 flex flex-col items-center justify-between gap-6 rounded-[2.5rem] p-8 text-center sm:flex-row sm:text-left sm:p-10"
                >
                    <div>
                        <h3 className="text-xl font-bold text-neutral-900">
                            Have questions or setup recommendations?
                        </h3>
                        <p className="mt-1 text-sm text-neutral-600">
                            Always interested in discovering new developer tools and camera gear.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="glass-pill inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-neutral-900 transition-all duration-300 hover:scale-105 hover:bg-white"
                    >
                        <span>Get In Touch</span>
                        <span>&rarr;</span>
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
