"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
                    <div className="inline-flex items-center gap-2">
                        <span className="glass-pill rounded-full px-3 py-1 text-xs font-medium tracking-[0.2em] text-black/50">
                            06 / LET&apos;S TALK
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                        Wanna chat with me?
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-black/50 sm:text-lg">
                        Whether you want to talk about a project, collaborate,
                        or just say hi, here&apos;s where you can find me.
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