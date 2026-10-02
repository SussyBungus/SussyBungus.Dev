"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const photoRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;
            if (prefersReducedMotion) return;

            gsap.from(headerRef.current!.children, {
                opacity: 0,
                y: 28,
                stagger: 0.12,
                duration: 0.75,
                ease: "power3.out",
                delay: 0.1,
            });

            gsap.from(photoRef.current, {
                opacity: 0,
                y: 40,
                scale: 0.98,
                duration: 0.9,
                ease: "power3.out",
                delay: 0.3,
            });
        },
        { scope: sectionRef }
    );

    return (
        <section ref={sectionRef} className="overflow-hidden px-6 pb-24 pt-24 sm:pb-32 sm:pt-40">
            <div className="mx-auto max-w-6xl">
                {/* Intro */}
                <div ref={headerRef}>
                    <span className="glass-pill inline-block rounded-full px-3 py-1 text-xs font-medium tracking-[0.2em] text-black/50">
                        01 / PHOTOGRAPHY
                    </span>

                    <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.055em] sm:text-7xl lg:text-8xl">
                        Moments worth
                        <br />
                        remembering.
                    </h1>

                    <p className="mt-7 max-w-xl text-base leading-relaxed text-black/50 sm:text-lg">
                        Photos from trips, random walks, hangouts, and
                        everything in between.
                    </p>
                </div>

                {/* Featured photo */}
                <div ref={photoRef} className="mt-14 sm:mt-18">
                    <div className="group relative">
                        {/* Ambient glow */}
                        <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2.5rem] bg-black/[0.04] blur-2xl" />

                        <div className="glass-panel relative overflow-hidden rounded-[2.2rem] p-2">
                            {/* Specular glare */}
                            <div className="glass-lens-glare pointer-events-none absolute inset-0 z-10 rounded-[2.2rem] opacity-35" />

                            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.8rem] bg-black/5">
                                <Image
                                    src="/raymond2.jpg"
                                    alt="Featured photograph by Raymond Lin"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 1200px"
                                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
                                />

                                {/* Subtle vignette */}
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-85" />

                                {/* Image metadata pills */}
                                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                                    <span className="rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-white/90 backdrop-blur-md">
                                        RAYMOND LIN
                                    </span>
                                    <span className="rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-white/90 backdrop-blur-md">
                                        2026
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Caption */}
                    <div className="mt-5 flex items-center justify-between px-2">
                        <p className="text-xs font-medium tracking-[0.14em] text-black/40">
                            FEATURED PHOTOGRAPH
                        </p>

                        <span className="glass-pill rounded-full px-2.5 py-0.5 text-xs font-medium text-black/45">
                            01
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}