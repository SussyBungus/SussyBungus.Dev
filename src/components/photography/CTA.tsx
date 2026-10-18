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
        <section ref={sectionRef} className="px-6 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl">
                <div
                    ref={cardRef}
                    className="glass-panel relative overflow-hidden rounded-[2.5rem] p-10 sm:p-16 md:p-20"
                >
                    {/* Ambient subtle glow */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-black/[0.03] blur-3xl" />

                    <div className="relative flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                        <div>
                            <SectionBadge number="04" label="Keep Looking" />

                            <h2 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.1] tracking-[-0.05em] text-neutral-950 sm:text-5xl lg:text-6xl">
                                More photos,
                                <br />
                                over on VSCO.
                            </h2>

                            <p className="mt-6 max-w-md text-base leading-relaxed text-black/50 sm:text-lg">
                                My portfolio only shows a small selection.
                                Check out VSCO for more of the photos I&apos;ve
                                taken along the way.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <Link
                                href="https://vsco.co/sussybungus/gallery"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:scale-[1.04] hover:shadow-xl active:scale-[0.98]"
                            >
                                <span>View my VSCO</span>
                                <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                                    ↗
                                </span>
                            </Link>

                            <Link
                                href="/contact"
                                className="glass-pill inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-black/70 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:text-black active:scale-[0.98]"
                            >
                                <span>Get in touch</span>
                                <span>→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}