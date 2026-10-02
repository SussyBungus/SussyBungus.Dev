"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.22, 1, 0.36, 1] as const;

const cards = [
    {
        icon: "📷",
        category: "Visuals",
        title: "Street & Travel Photography",
        description:
            "Taking photos with my Canon R50 and training my eye to notice light and composition.",
        rotate: -2,
        desktop: "md:left-[5%] md:top-[8%]",
        width: "md:w-64",
        tag: "In Progress",
    },
    {
        icon: "</>",
        category: "Engineering",
        title: "Next.js Web Applications",
        description:
            "Experimenting with App Router, Turbopack, and clean UI engineering for interactive tools.",
        rotate: 2.5,
        desktop: "md:right-[5%] md:top-[10%]",
        width: "md:w-64",
        tag: "Active",
    },
    {
        icon: "🏃",
        category: "Fitness",
        title: "Endurance & 5K Training",
        description:
            "Consistent weekly mileage, cardio endurance, and training for sub-22 min 5K pace.",
        rotate: -2.5,
        desktop: "md:left-[12%] md:bottom-[8%]",
        width: "md:w-64",
        tag: "Routine",
    },
    {
        icon: "💡",
        category: "Academics",
        title: "Computer Science Foundations",
        description:
            "Data structures, software design patterns, and exploring AI agent architectures.",
        rotate: 2,
        desktop: "md:right-[12%] md:bottom-[9%]",
        width: "md:w-64",
        tag: "Lifelong",
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
                scale: 0.96,
                duration: 0.8,
                ease: "power2.out",
            });
        },
        { scope: sectionRef }
    );

    return (
        <section
            ref={sectionRef}
            className="relative w-full overflow-hidden px-6 py-28"
        >
            <div className="mx-auto w-full max-w-6xl">
                {/* Header */}
                <div ref={headingRef} className="mb-14">
                    <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/60 px-3.5 py-1 text-xs font-medium text-neutral-500 shadow-xs backdrop-blur-md">
                        <span>02</span>
                        <span className="h-1 w-1 rounded-full bg-neutral-300" />
                        <span>Currently</span>
                    </div>

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
                    className="glass-panel relative w-full overflow-hidden rounded-[2.5rem] p-6 shadow-xl md:min-h-[580px] md:p-0"
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

                    {/* Grid of Interactive Glass Cards */}
                    <div className="relative grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:absolute md:inset-0 md:block">
                        {cards.map((card, index) => (
                            <motion.div
                                key={card.title}
                                initial={{
                                    opacity: 0,
                                    y: 35,
                                    scale: 0.95,
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
                                    duration: 0.65,
                                    delay: index * 0.08,
                                    ease,
                                }}
                                whileHover={{
                                    y: -10,
                                    rotate: 0,
                                    scale: 1.03,
                                    zIndex: 40,
                                    transition: { duration: 0.25 },
                                }}
                                className={`
                                    relative
                                    w-full
                                    ${card.width}
                                    md:absolute
                                    ${card.desktop}
                                    z-10
                                `}
                            >
                                <div
                                    className="glass-panel group w-full cursor-pointer rounded-3xl p-5.5 shadow-md transition-all duration-300 hover:shadow-2xl hover:border-black/15 md:rotate-[var(--rotation)]"
                                    style={
                                        {
                                            "--rotation": `${card.rotate}deg`,
                                        } as React.CSSProperties
                                    }
                                >
                                    {/* Card Header: Icon + Status Pill */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/5 bg-black/[0.03] text-2xl shadow-xs transition-transform duration-300 group-hover:scale-110">
                                            {card.icon}
                                        </div>
                                        <span className="rounded-full border border-black/5 bg-white/80 px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-wider text-neutral-500 shadow-xs">
                                            {card.tag}
                                        </span>
                                    </div>

                                    {/* Category */}
                                    <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                                        {card.category}
                                    </p>

                                    {/* Title */}
                                    <h3 className="mt-1 text-base font-bold tracking-tight text-neutral-900">
                                        {card.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                                        {card.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}