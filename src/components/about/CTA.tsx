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
        <section ref={sectionRef} className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div
                    ref={cardRef}
                    className="glass-panel relative overflow-hidden rounded-[2.5rem] p-10 sm:p-16 md:p-20"
                >
                    {/* Ambient subtle glow */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-black/[0.03] blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-black/[0.02] blur-3xl" />

                    <div className="relative">
                        {/* Label */}
                        <SectionBadge number="06" label="Let's Talk" />

                        <div className="mt-8 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                            {/* Text */}
                            <div>
                                <h2 className="max-w-2xl text-4xl font-bold leading-[1.1] tracking-[-0.05em] text-neutral-950 sm:text-5xl lg:text-6xl">
                                    Have an idea?
                                    <br />
                                    Let&apos;s make something.
                                </h2>

                                <p className="mt-6 max-w-md text-base leading-relaxed text-black/50 sm:text-lg">
                                    Whether you want to talk about a project,
                                    collaborate, or just say hi, I&apos;d love to hear
                                    from you.
                                </p>
                            </div>

                            {/* CTA Button */}
                            <div>
                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center gap-3 rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:scale-[1.04] hover:shadow-xl active:scale-[0.98]"
                                >
                                    <span>get in touch</span>
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}