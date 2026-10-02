"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;
            if (prefersReducedMotion) return;

            gsap.from(textRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                x: -30,
                duration: 0.8,
                ease: "power2.out",
            });

            gsap.from(cardRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                x: 30,
                rotateY: 15,
                duration: 0.9,
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
            <div className="mx-auto max-w-6xl">
                <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr]">
                    {/* Left: Content */}
                    <div ref={textRef} className="min-w-0">
                        <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/60 px-3.5 py-1 text-xs font-medium text-neutral-500 shadow-xs backdrop-blur-md">
                            <span>01</span>
                            <span className="h-1 w-1 rounded-full bg-neutral-300" />
                            <span>About</span>
                        </div>

                        <h2 className="mt-6 max-w-2xl text-4xl font-bold tracking-[-0.04em] text-neutral-950 sm:text-5xl lg:text-6xl">
                            Building things, figuring out how they work.
                        </h2>

                        <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-neutral-600">
                            <p>
                                I'm <strong className="font-semibold text-neutral-900">Raymond Lin</strong>, a student and developer focused on turning ideas into clean, functional tools and web experiences.
                            </p>
                            <p>
                                Beyond software engineering, I spend my time capturing architecture and street life on my Canon EOS R50, playing badminton, and exploring design systems.
                            </p>
                            <p>
                                This website is my creative canvas—a collection of things I've built, learned, and refined.
                            </p>
                        </div>

                        <div className="mt-9">
                            <Link
                                href="/about"
                                className="glass-pill inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-neutral-800 transition-all duration-300 hover:scale-105 hover:bg-white"
                            >
                                <span>Read Full Bio &amp; Timeline</span>
                                <span>&rarr;</span>
                            </Link>
                        </div>
                    </div>

                    {/* Right: Interactive 3D Glossy ID Flip Card */}
                    <div
                        ref={cardRef}
                        className="flex w-full items-center justify-center [perspective:1400px]"
                    >
                        <div className="group relative w-full max-w-[320px]">
                            {/* Ambient Glow */}
                            <div className="absolute -inset-10 -z-10 rounded-full bg-black/[0.03] blur-3xl" />

                            {/* Hover / Tap Hint */}
                            <div className="mb-3 flex items-center justify-center gap-1.5 text-[10px] font-medium tracking-wider uppercase text-neutral-400 sm:opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <span>✦ Hover / Tap to flip</span>
                            </div>

                            {/* Flip Container */}
                            <motion.div
                                className="relative w-full cursor-pointer [transform-style:preserve-3d]"
                                whileHover={{ rotateY: 180 }}
                                transition={{
                                    duration: 0.85,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                {/* ================= FRONT ================= */}
                                <div className="glass-panel relative w-full overflow-hidden rounded-[2.2rem] p-5.5 shadow-2xl [backface-visibility:hidden]">
                                    {/* Subtle Glass Background Grid */}
                                    <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                backgroundImage:
                                                    "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)",
                                                backgroundSize: "20px 20px",
                                            }}
                                        />
                                    </div>

                                    {/* Card Header */}
                                    <div className="relative flex items-center justify-between px-1">
                                        <div className="flex items-center gap-1.5">
                                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                            <p className="text-[9px] font-bold tracking-[0.25em] text-neutral-500">
                                                PERSONAL ID
                                            </p>
                                        </div>
                                        <p className="font-mono text-[9px] tracking-widest text-neutral-400">
                                            #001
                                        </p>
                                    </div>

                                    {/* Photo with specular glare */}
                                    <div className="relative mt-4 aspect-[4/5] overflow-hidden rounded-2xl border border-black/5 bg-neutral-100 shadow-inner">
                                        <Image
                                            src="/raymond1.jpg"
                                            alt="Raymond Lin"
                                            fill
                                            sizes="320px"
                                            className="object-cover"
                                        />
                                        <div className="glass-lens-glare pointer-events-none absolute inset-0 opacity-40" />
                                    </div>

                                    {/* Identity */}
                                    <div className="relative mt-4 px-1">
                                        <h3 className="text-xl font-bold tracking-tight text-neutral-900">
                                            Raymond Lin
                                        </h3>
                                        <p className="mt-1 text-xs text-neutral-500">
                                            developer &bull; photographer &bull; student
                                        </p>
                                    </div>

                                    {/* Footer Barcode */}
                                    <div className="relative mt-5 flex items-center justify-between border-t border-black/[0.08] px-1 pt-4">
                                        <div className="flex h-4 items-end gap-[2px] opacity-30">
                                            {[2, 1, 3, 1, 2, 4, 1, 2, 3, 1, 3, 1].map(
                                                (barWidth, index) => (
                                                    <div
                                                        key={index}
                                                        className="h-full bg-black"
                                                        style={{
                                                            width: `${barWidth}px`,
                                                        }}
                                                    />
                                                )
                                            )}
                                        </div>
                                        <span className="font-mono text-[9px] tracking-widest text-neutral-400">
                                            SUSSYBUNGUS
                                        </span>
                                    </div>
                                </div>

                                {/* ================= BACK ================= */}
                                <div className="glass-panel absolute inset-0 w-full overflow-hidden rounded-[2.2rem] p-6 shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                                    {/* Header */}
                                    <div className="relative flex items-center justify-between border-b border-black/[0.08] pb-3">
                                        <p className="text-[9px] font-bold tracking-[0.25em] text-neutral-500">
                                            ABOUT ME
                                        </p>
                                        <span className="font-mono text-[9px] tracking-widest text-neutral-400">
                                            001 / VERIFIED
                                        </span>
                                    </div>

                                    {/* Catchphrase */}
                                    <div className="relative mt-6">
                                        <p className="text-2xl font-bold tracking-tight text-neutral-900">
                                            always making
                                            <br />
                                            something.
                                        </p>
                                        <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                                            I learn fastest by building real things—from web software and APIs to visual stories.
                                        </p>
                                    </div>

                                    {/* Field rows */}
                                    <div className="relative mt-6 space-y-4 border-t border-black/[0.08] pt-4 text-xs">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[9px] font-semibold tracking-wider text-neutral-400">
                                                STATUS
                                            </span>
                                            <span className="font-medium text-neutral-900">
                                                STUDENT &bull; DEVELOPER
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-[9px] font-semibold tracking-wider text-neutral-400">
                                                STACK
                                            </span>
                                            <span className="font-medium text-neutral-900">
                                                NEXT.JS &bull; TS &bull; PYTHON
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-[9px] font-semibold tracking-wider text-neutral-400">
                                                CAMERA
                                            </span>
                                            <span className="font-medium text-neutral-900">
                                                CANON EOS R50
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-[9px] font-semibold tracking-wider text-neutral-400">
                                                APPROACH
                                            </span>
                                            <span className="font-medium text-neutral-900">
                                                BUILD &bull; BREAK &bull; LEARN
                                            </span>
                                        </div>
                                    </div>

                                    {/* Verification Stamp */}
                                    <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between border-t border-black/[0.06] pt-3 text-[9px] font-mono text-neutral-400">
                                        <span>TORONTO &bull; CANADA</span>
                                        <span>2026</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}