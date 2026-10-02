"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
                    <div className="inline-flex items-center gap-2">
                        <span className="glass-pill rounded-full px-3 py-1 text-xs font-medium tracking-[0.2em] text-black/50">
                            01 / PROJECTS
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-8xl">
                        Things I&apos;ve built.
                    </h1>

                    {/* Description */}
                    <p className="mt-7 max-w-2xl text-lg leading-relaxed text-black/50 sm:text-xl">
                        A collection of projects, experiments, and ideas I&apos;ve
                        turned into something real.
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