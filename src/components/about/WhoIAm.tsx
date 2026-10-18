"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionBadge from "@/components/SectionBadge";

gsap.registerPlugin(ScrollTrigger);

const details = [
    {
        label: "Focus",
        value: "Software & Technology",
    },
    {
        label: "Outside code",
        value: "Photography & Sports",
    },
    {
        label: "Approach",
        value: "Build · Explore · Learn",
    },
];

export default function WhoIAm() {
    const sectionRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const detailsRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;
            if (prefersReducedMotion) return;

            // Image slide in from left
            gsap.from(imageRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    once: true,
                },
                opacity: 0,
                x: -48,
                scale: 0.96,
                duration: 0.9,
                ease: "power3.out",
            });

            // Content stagger
            gsap.from(contentRef.current!.children, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    once: true,
                },
                opacity: 0,
                y: 28,
                filter: "blur(4px)",
                stagger: 0.12,
                duration: 0.7,
                ease: "power3.out",
                delay: 0.15,
                clearProps: "filter",
            });

            // Details stagger
            gsap.from(detailsRef.current!.children, {
                scrollTrigger: {
                    trigger: detailsRef.current,
                    start: "top 88%",
                    once: true,
                },
                opacity: 0,
                y: 16,
                stagger: 0.1,
                duration: 0.55,
                ease: "power2.out",
            });
        },
        { scope: sectionRef }
    );

    return (
        <section ref={sectionRef} className="px-6 py-24">
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[360px_1fr] md:gap-16">

                {/* Image — glass-framed */}
                <div ref={imageRef} className="group relative w-full max-w-[360px]">
                    {/* Ambient glow */}
                    <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-black/[0.035] blur-2xl" />

                    <div className="glass-panel relative aspect-[3/4] w-full overflow-hidden rounded-3xl p-1.5">
                        {/* Specular glare */}
                        <div className="glass-lens-glare pointer-events-none absolute inset-0 z-10 rounded-3xl opacity-40" />

                        <div className="relative h-full w-full overflow-hidden rounded-[calc(1.5rem-6px)]">
                            <Image
                                src="/raymond.jpg"
                                alt="Raymond"
                                fill
                                sizes="(max-width: 768px) 100vw, 360px"
                                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            />
                        </div>
                    </div>

                    {/* Drop shadow */}
                    <div className="pointer-events-none absolute -bottom-4 left-8 right-8 -z-10 h-10 rounded-full bg-black/12 blur-xl" />
                </div>

                {/* Content */}
                <div ref={contentRef} className="max-w-2xl">

                    {/* Badge */}
                    <SectionBadge number="01" label="Who I Am" />

                    {/* Heading */}
                    <h2 className="mt-6 text-3xl font-bold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-4xl">
                        I&apos;m Raymond — a developer,
                        photographer, and someone who
                        likes making things.
                    </h2>

                    {/* Paragraphs */}
                    <div className="mt-8 space-y-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
                        <p>
                            I enjoy building things from scratch, experimenting
                            with new ideas, and learning how things work.
                        </p>

                        <p>
                            Outside of code, I&apos;m usually taking photos,
                            playing sports, or finding something new to
                            get obsessed with.
                        </p>
                    </div>

                    {/* Details — glass pills */}
                    <div
                        ref={detailsRef}
                        className="mt-10 grid grid-cols-1 gap-4 border-t border-black/10 pt-7 sm:grid-cols-3"
                    >
                        {details.map((detail) => (
                            <div
                                key={detail.label}
                                className="glass-pill group rounded-2xl px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                            >
                                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/35">
                                    {detail.label}
                                </p>

                                <p className="mt-1.5 text-sm font-medium text-black/70">
                                    {detail.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}