"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SectionBadge from "@/components/SectionBadge";

export default function ContactHero() {
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
        <section className="px-6 pb-16 pt-28 sm:pb-20 sm:pt-36">
            <div className="mx-auto max-w-6xl">
                <div ref={containerRef}>
                    {/* Label */}
                    <SectionBadge number="01" label="Contact" />

                    {/* Heading */}
                    <h1 className="mt-6 max-w-4xl text-5xl font-extrabold tracking-[-0.055em] text-neutral-950 sm:text-6xl lg:text-7xl">
                        Wanna chat with me?
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                        Whether you want to talk about a project, collaborate,
                        or just say hi, here&apos;s where you can reach me.
                    </p>

                    {/* Online indicator */}
                    <div className="mt-10 flex items-center gap-3">
                        <div className="h-px w-10 bg-black/15" />
                        <span className="glass-pill rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-black/40">
                            find me online
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}