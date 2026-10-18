"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const cameraCardRef = useRef<HTMLDivElement>(null);
    const [flash, setFlash] = useState(false);
    const [shutterCount, setShutterCount] = useState(1);

    // GSAP 3D Interactive Tilt on Camera
    useGSAP(
        () => {
            const card = cameraCardRef.current;
            if (!card) return;

            // Check reduced motion
            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;
            if (prefersReducedMotion) return;

            const xTo = gsap.quickTo(card, "rotationY", {
                duration: 0.6,
                ease: "power2.out",
            });
            const yTo = gsap.quickTo(card, "rotationX", {
                duration: 0.6,
                ease: "power2.out",
            });

            const handleMouseMove = (e: MouseEvent) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                // Max tilt 10 degrees
                xTo((x / (rect.width / 2)) * 10);
                yTo(-(y / (rect.height / 2)) * 10);
            };

            const handleMouseLeave = () => {
                xTo(0);
                yTo(0);
            };

            card.addEventListener("mousemove", handleMouseMove);
            card.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                card.removeEventListener("mousemove", handleMouseMove);
                card.removeEventListener("mouseleave", handleMouseLeave);
            };
        },
        { scope: heroRef }
    );

    const playShutterSound = () => {
        try {
            const AudioContextClass =
                window.AudioContext ||
                (window as unknown as { webkitAudioContext: typeof AudioContext })
                    .webkitAudioContext;
            if (!AudioContextClass) return;
            const ctx = new AudioContextClass();
            const now = ctx.currentTime;

            // Primary mechanical click
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(850, now);
            osc.frequency.exponentialRampToValueAtTime(140, now + 0.04);
            gain.gain.setValueAtTime(0.14, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.04);

            // Shutter curtain clack
            const osc2 = ctx.createOscillator();
            const gain2 = ctx.createGain();
            osc2.type = "triangle";
            osc2.frequency.setValueAtTime(420, now + 0.05);
            osc2.frequency.exponentialRampToValueAtTime(70, now + 0.1);
            gain2.gain.setValueAtTime(0.12, now + 0.05);
            gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
            osc2.connect(gain2);
            gain2.connect(ctx.destination);
            osc2.start(now + 0.05);
            osc2.stop(now + 0.1);
        } catch {
            // Audio context restricted or muted
        }
    };

    const triggerShutter = () => {
        setFlash(true);
        setShutterCount((prev) => prev + 1);
        playShutterSound();
        setTimeout(() => setFlash(false), 240);
    };

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen overflow-hidden px-6 pt-28 pb-16 sm:pt-32"
        >
            <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-6xl max-h-[960px] grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
                {/* Left Column: Typography & CTAs */}
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
                    className="z-10 flex flex-col justify-center"
                >
                    {/* Status badge */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 15 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.5, ease },
                            },
                        }}
                        className="mb-6 inline-flex items-center gap-2 self-start rounded-full border border-black/5 bg-white/70 px-3.5 py-1 text-xs font-medium text-neutral-600 shadow-xs backdrop-blur-md"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Available for new projects &bull; YYZ</span>
                    </motion.div>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 15 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.5, ease },
                            },
                        }}
                        className="text-sm font-medium tracking-wide uppercase text-neutral-400"
                    >
                        hey, i&apos;m
                    </motion.p>

                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.75, ease },
                            },
                        }}
                        className="mt-2 text-5xl font-extrabold tracking-[-0.05em] text-neutral-950 sm:text-6xl lg:text-7xl xl:text-8xl"
                    >
                        Raymond Lin.
                    </motion.h1>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.65, ease },
                            },
                        }}
                        className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-600 sm:text-xl"
                    >
                        I build thoughtful digital experiences, explore
                        creative photography, and turn curiosity into functional
                        software.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.6, ease },
                            },
                        }}
                        className="mt-8 flex flex-wrap items-center gap-3.5"
                    >
                        <Link
                            href="/projects"
                            className="group relative inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white shadow-[0_10px_25px_-5px_rgba(0,0,0,0.25),inset_0_1px_1px_0_rgba(255,255,255,0.25)] transition-all duration-300 hover:scale-105 hover:bg-neutral-900 hover:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)]"
                        >
                            <span>Explore Projects</span>
                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                &rarr;
                            </span>
                        </Link>

                        <Link
                            href="/about"
                            className="glass-pill rounded-full px-6 py-3 text-sm font-medium text-neutral-800 transition-all duration-300 hover:scale-105 hover:bg-white"
                        >
                            About Me
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right Column: Interactive 3D Glossy Camera */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.2,
                        ease,
                    }}
                    className="flex w-full items-center justify-center [perspective:1400px]"
                >
                    <div
                        ref={cameraCardRef}
                        className="relative w-full max-w-[580px] select-none [transform-style:preserve-3d] will-change-transform"
                    >
                        {/* Ambient Camera Glow */}
                        <div className="absolute -inset-6 -z-10 rounded-[3.5rem] bg-black/[0.04] blur-2xl" />

                        {/* Camera Body */}
                        <div className="glass-dark relative aspect-[1.45/1] w-full rounded-[2.5rem] p-4 sm:rounded-[3rem] sm:p-6 md:aspect-auto md:h-[360px]">
                            {/* Top HUD Controls */}
                            <div className="flex items-center justify-between px-2 pt-1 sm:px-3">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <span className="text-[9px] font-bold tracking-[0.25em] text-white/50 sm:text-[10px]">
                                        RAYMOND
                                    </span>
                                    <span className="h-1 w-1 rounded-full bg-white/20" />
                                    <span className="text-[9px] tracking-[0.2em] text-white/35 sm:text-[10px]">
                                        DIGITAL
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    {/* Pulsing REC Indicator */}
                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                                    </span>
                                    <span className="text-[9px] font-semibold tracking-widest text-white/50 sm:text-[10px]">
                                        REC #{shutterCount.toString().padStart(2, "0")}
                                    </span>
                                </div>
                            </div>

                            {/* Camera Viewfinder Screen with Glossy Lens Glare */}
                            <div className="relative mt-3 h-[calc(100%-4rem)] w-[65%] overflow-hidden rounded-2xl border border-white/15 bg-black shadow-inner">
                                <Image
                                    src="/raymond2.jpg"
                                    alt="Raymond Lin"
                                    fill
                                    priority
                                    sizes="(max-width: 640px) 60vw, 380px"
                                    className="object-cover"
                                />

                                {/* Subtle camera viewfinder darkening */}
                                <div className="absolute inset-0 bg-black/15" />

                                {/* Specular glass lens glare */}
                                <div className="glass-lens-glare pointer-events-none absolute inset-0 opacity-75" />

                                {/* Shutter Flash Effect */}
                                {flash && (
                                    <div className="pointer-events-none absolute inset-0 z-30 bg-white transition-opacity duration-200" />
                                )}

                                {/* Reticle Target */}
                                <motion.div
                                    animate={{
                                        opacity: [0.6, 0.95, 0.6],
                                        scale: [0.97, 1.02, 0.97],
                                    }}
                                    transition={{
                                        duration: 2.8,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/75 sm:h-18 sm:w-18"
                                >
                                    <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-sm" />
                                    {/* Corner bracket markers */}
                                    <span className="absolute -left-1 -top-1 h-2 w-2 border-l-2 border-t-2 border-emerald-400" />
                                    <span className="absolute -right-1 -top-1 h-2 w-2 border-r-2 border-t-2 border-emerald-400" />
                                    <span className="absolute -bottom-1 -left-1 h-2 w-2 border-b-2 border-l-2 border-emerald-400" />
                                    <span className="absolute -bottom-1 -right-1 h-2 w-2 border-b-2 border-r-2 border-emerald-400" />
                                </motion.div>

                                {/* Top Viewfinder Telemetry */}
                                <div className="absolute left-3 right-3 top-2.5 flex justify-between text-[8px] font-mono font-medium text-white/90 drop-shadow-md sm:text-[9px]">
                                    <span className="flex items-center gap-1">
                                        <span className="h-1.5 w-1.5 rounded-xs bg-emerald-400" />
                                        AF-C [EYE]
                                    </span>
                                    <span>RAW+JPG</span>
                                </div>

                                {/* Bottom Viewfinder Telemetry */}
                                <div className="absolute bottom-2.5 left-3 right-3 flex justify-between text-[8px] font-mono font-medium text-white/90 drop-shadow-md sm:text-[9px]">
                                    <span>35mm</span>
                                    <span className="text-amber-300">F/2.8</span>
                                    <span>1/250s</span>
                                    <span>ISO 400</span>
                                </div>
                            </div>

                            {/* Right Controls Panel */}
                            <div className="absolute bottom-5 right-5 top-16 flex w-[26%] flex-col items-center justify-between">
                                {/* Mode Dial */}
                                <motion.div
                                    whileHover={{ rotate: 45 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 240,
                                        damping: 15,
                                    }}
                                    className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/5 shadow-md backdrop-blur-md sm:h-14 sm:w-14"
                                    title="Click or drag dial"
                                >
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/40">
                                        <div className="h-1.5 w-1.5 rounded-full bg-white/80 shadow-xs" />
                                    </div>
                                </motion.div>

                                {/* Secondary Action Buttons */}
                                <div className="flex items-center gap-2">
                                    <motion.button
                                        type="button"
                                        whileTap={{ scale: 0.85 }}
                                        onClick={triggerShutter}
                                        aria-label="Secondary preview shutter"
                                        className="h-8 w-8 rounded-full border border-white/15 bg-white/5 shadow-inner transition-colors hover:bg-white/10"
                                        title="Shutter preview"
                                    />
                                    <motion.button
                                        type="button"
                                        whileTap={{ scale: 0.85 }}
                                        onClick={triggerShutter}
                                        aria-label="Secondary menu button"
                                        className="h-8 w-8 rounded-full border border-white/15 bg-white/5 shadow-inner transition-colors hover:bg-white/10"
                                        title="Snap"
                                    />
                                </div>

                                {/* Main Metallic Shutter Button */}
                                <motion.button
                                    type="button"
                                    onClick={triggerShutter}
                                    whileHover={{ scale: 1.06 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label="Take picture"
                                    className="group relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-white/25 bg-neutral-800 shadow-[0_0_15px_rgba(255,255,255,0.1)] sm:h-14 sm:w-14"
                                    title="Click to take snapshot!"
                                >
                                    <div className="h-8 w-8 rounded-full bg-gradient-to-b from-white to-neutral-200 shadow-md group-active:scale-90 sm:h-9 sm:w-9" />
                                </motion.button>
                            </div>

                            {/* Bottom Ambient Line */}
                            <div className="absolute bottom-2 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-white/10" />
                        </div>

                        {/* Camera Tripod / Base Plate */}
                        <div className="mx-auto h-3 w-28 rounded-b-xl border border-t-0 border-white/10 bg-neutral-900/90 shadow-xl" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}