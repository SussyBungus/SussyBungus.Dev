"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionBadge from "@/components/SectionBadge";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;
            if (prefersReducedMotion) return;

            gsap.from(cardRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    once: true,
                },
                opacity: 0,
                y: 35,
                duration: 0.8,
                ease: "power3.out",
            });
        },
        { scope: sectionRef }
    );

    return (
        <section ref={sectionRef} className="px-6 py-12 sm:py-16">
            <div className="mx-auto max-w-6xl">
                <div
                    ref={cardRef}
                    className="glass-dark relative overflow-hidden rounded-[2.5rem] p-8 sm:p-14 md:p-16 text-white"
                >
                    {/* Ambient subtle glow & glare */}
                    <div className="glass-lens-glare pointer-events-none absolute inset-0 opacity-20" />
                    <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/[0.08] blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-white/[0.04] blur-3xl" />

                    <div className="relative">
                        <SectionBadge
                            number="04"
                            label="What's Next"
                            className="bg-white/10 text-white/90 border-white/20"
                        />

                        <div className="mt-8 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                            <div>
                                <h2 className="max-w-2xl text-4xl font-medium leading-[1.1] tracking-[-0.05em] sm:text-5xl lg:text-6xl text-white">
                                    More ideas are
                                    <br />
                                    already on the way.
                                </h2>

                                <p className="mt-6 max-w-lg text-base leading-relaxed text-white/50 sm:text-lg">
                                    I&apos;m always building something new,
                                    experimenting with ideas, or finding
                                    another excuse to make something.
                                </p>
                            </div>

                            <Link
                                href="/about"
                                className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/90 hover:shadow-white/10 active:scale-[0.98]"
                            >
                                <span>more about me</span>
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}