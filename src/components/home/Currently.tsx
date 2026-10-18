"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionBadge from "@/components/SectionBadge";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.22, 1, 0.36, 1] as const;

const cards = [
    {
        icon: "📷",
        category: "Visuals",
        title: "Street & Travel Photography",
        description:
            "Taking photos with my Canon R50 and training my eye to notice light, geometry, and candid street composition.",
        tag: "In Progress",
        accent: "bg-blue-500/10 text-blue-700 border-blue-500/20",
    },
    {
        icon: "</>",
        category: "Engineering",
        title: "Next.js Web Applications",
        description:
            "Experimenting with App Router, Turbopack, and clean UI engineering for interactive tools and client apps.",
        tag: "Active",
        accent: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
    },
    {
        icon: "🏃",
        category: "Fitness",
        title: "Endurance & 5K Training",
        description:
            "Consistent weekly mileage, cardio endurance, and training for sub-22 min 5K pace and track sprints.",
        tag: "Routine",
        accent: "bg-amber-500/10 text-amber-700 border-amber-500/20",
    },
    {
        icon: "💡",
        category: "Academics",
        title: "Computer Science Foundations",
        description:
            "Data structures, software design patterns, systems programming, and exploring AI agent architectures.",
        tag: "Lifelong",
        accent: "bg-purple-500/10 text-purple-700 border-purple-500/20",
    },
];

export default function Currently() {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;
            if (prefersReducedMotion) return;

            gsap.from(headingRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                y: 30,
                duration: 0.7,
                ease: "power2.out",
            });

            gsap.from(canvasRef.current, {
                scrollTrigger: {
                    trigger: canvasRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                scale: 0.98,
                duration: 0.8,
                ease: "power2.out",
            });
        },
        { scope: sectionRef }
    );

    return (
        <section
            ref={sectionRef}
            className="relative w-full overflow-hidden px-6 py-24 sm:py-28"
        >
            <div className="mx-auto w-full max-w-6xl">
                {/* Header */}
                <div ref={headingRef} className="mb-12">
                    <SectionBadge number="02" label="Currently" />

                    <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-neutral-950 sm:text-5xl lg:text-6xl">
                        What&apos;s on my radar.
                    </h2>

                    <p className="mt-4 max-w-lg text-lg leading-relaxed text-neutral-600">
                        A quick snapshot of the projects, habits, and ideas currently occupying my time.
                    </p>
                </div>

                {/* Interactive Glass Bulletin Canvas */}
                <div
                    ref={canvasRef}
                    className="glass-panel relative w-full overflow-hidden rounded-[2.5rem] p-6 shadow-xl sm:p-8"
                >
                    {/* Ambient subtle light gradient behind cards */}
                    <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-100/40 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-amber-100/40 blur-3xl" />

                    {/* Background Dot Matrix */}
                    <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle, black 1.5px, transparent 1.5px)",
                                backgroundSize: "28px 28px",
                            }}
                        />
                    </div>

                    {/* Live Telemetry Bar */}
                    <div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.06] pb-5 mb-8">
                        <div className="flex items-center gap-2.5">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                            </span>
                            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-neutral-700">
                                Live Focus &bull; Active Sprints
                            </span>
                        </div>
                        <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-400">
                            <span>Toronto (YYZ)</span>
                            <span>&bull;</span>
                            <span>Spring 2026</span>
                        </div>
                    </div>

                    {/* Grid of Interactive Glass Cards */}
                    <div className="relative grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {cards.map((card, index) => (
                            <motion.div
                                key={card.title}
                                initial={{
                                    opacity: 0,
                                    y: 25,
                                    scale: 0.96,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.55,
                                    delay: index * 0.08,
                                    ease,
                                }}
                                whileHover={{
                                    y: -6,
                                    scale: 1.02,
                                    transition: { duration: 0.2 },
                                }}
                                className="group flex h-full"
                            >
                                <div className="glass-panel flex w-full flex-col justify-between rounded-3xl p-6 shadow-sm transition-all duration-300 hover:border-black/15 hover:shadow-xl">
                                    <div>
                                        {/* Card Header: Icon + Status Pill */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/5 bg-black/[0.03] text-2xl shadow-xs transition-transform duration-300 group-hover:scale-110">
                                                {card.icon}
                                            </div>
                                            <span
                                                className={`rounded-full border px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-wider shadow-2xs ${card.accent}`}
                                            >
                                                {card.tag}
                                            </span>
                                        </div>

                                        {/* Category */}
                                        <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                                            {card.category}
                                        </p>

                                        {/* Title */}
                                        <h3 className="mt-1 text-base font-bold tracking-tight text-neutral-900 group-hover:text-black">
                                            {card.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="mt-2.5 text-xs leading-relaxed text-neutral-600">
                                            {card.description}
                                        </p>
                                    </div>

                                    {/* Bottom Indicator */}
                                    <div className="mt-6 flex items-center justify-between border-t border-black/[0.05] pt-3 text-[10px] font-mono text-neutral-400">
                                        <span>0{index + 1}</span>
                                        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                                            &rarr;
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}