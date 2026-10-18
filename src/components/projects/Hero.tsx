"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SectionBadge from "@/components/SectionBadge";

export default function ProjectsHero() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;
            if (prefersReducedMotion) return;

            gsap.from(containerRef.current!.children, {
                opacity: 0,
                y: 28,
                stagger: 0.12,
                duration: 0.75,
                ease: "power3.out",
                delay: 0.1,
            });
        },
        { scope: containerRef }
    );

    return (
        <section className="px-6 pb-20 pt-32 sm:pb-24 sm:pt-40">
            <div className="mx-auto max-w-6xl">
                <div ref={containerRef}>
                    {/* Label */}
                    <SectionBadge number="01" label="Projects" />

                    {/* Heading */}
                    <h1 className="mt-6 max-w-4xl text-5xl font-extrabold tracking-[-0.05em] text-neutral-950 sm:text-6xl lg:text-7xl">
                        Things I&apos;ve built.
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
                        A curated collection of software, web applications, and experiments I&apos;ve engineered.
                    </p>

                    {/* Metadata pills */}
                    <div className="mt-10 flex flex-wrap items-center gap-2 text-xs font-medium tracking-[0.14em] text-black/45">
                        <span className="glass-pill rounded-full px-3 py-1">
                            SOFTWARE
                        </span>
                        <span className="text-black/20">•</span>
                        <span className="glass-pill rounded-full px-3 py-1">
                            EXPERIMENTS
                        </span>
                        <span className="text-black/20">•</span>
                        <span className="glass-pill rounded-full px-3 py-1">
                            2023 — PRESENT
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}