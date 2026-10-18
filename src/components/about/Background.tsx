"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionBadge from "@/components/SectionBadge";

gsap.registerPlugin(ScrollTrigger);

const education = [
    {
        year: "2024 — Present",
        title: "Sir John A. Macdonald Collegiate Institute",
        description: "Toronto, Ontario",
    },
    {
        year: "2022 — 2024",
        title: "J B Tyrrell Senior Public School",
        description: "Toronto, Ontario",
    },
];

const awards = [
    {
        year: "2023",
        title: "DIY4Youth Hackathon — Bronze",
        description: "Study Smart — AI study planner assistant",
    },
];

export default function Background() {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const eduRef = useRef<HTMLDivElement>(null);
    const awardsRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;
            if (prefersReducedMotion) return;

            gsap.from(headingRef.current!.children, {
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 82%",
                    once: true,
                },
                opacity: 0,
                y: 20,
                stagger: 0.1,
                duration: 0.6,
                ease: "power3.out",
            });

            gsap.from(eduRef.current, {
                scrollTrigger: {
                    trigger: eduRef.current,
                    start: "top 84%",
                    once: true,
                },
                opacity: 0,
                x: -24,
                duration: 0.7,
                ease: "power3.out",
            });

            gsap.from(awardsRef.current, {
                scrollTrigger: {
                    trigger: awardsRef.current,
                    start: "top 84%",
                    once: true,
                },
                opacity: 0,
                x: 24,
                duration: 0.7,
                delay: 0.08,
                ease: "power3.out",
            });
        },
        { scope: sectionRef }
    );

    return (
        <section ref={sectionRef} className="px-6 py-24">
            <div className="mx-auto max-w-6xl">

                {/* Section heading */}
                <div ref={headingRef} className="mb-14">
                    <SectionBadge number="05" label="Background" />

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                        A little more about my background.
                    </h2>
                </div>

                {/* Columns */}
                <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20">

                    {/* Education */}
                    <div ref={eduRef}>
                        <div className="mb-8 flex items-center gap-3">
                            <span className="glass-pill rounded-full px-2.5 py-0.5 text-xs font-medium tracking-[0.2em] text-black/50">
                                01
                            </span>

                            <h3 className="text-sm font-semibold uppercase tracking-[0.15em]">
                                Education
                            </h3>
                        </div>

                        <div className="space-y-4">
                            {education.map((item, index) => (
                                <div
                                    key={item.title}
                                    className="glass-panel group cursor-default rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                                    style={{ animationDelay: `${index * 80}ms` }}
                                >
                                    <span className="inline-block rounded-full bg-black/[0.06] px-2.5 py-0.5 text-[10px] font-medium tracking-[0.12em] text-black/40">
                                        {item.year}
                                    </span>

                                    <h4 className="mt-3 text-base font-medium tracking-[-0.02em] transition-opacity duration-300 group-hover:opacity-70">
                                        {item.title}
                                    </h4>

                                    <p className="mt-1 text-sm text-black/45">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Awards */}
                    <div ref={awardsRef}>
                        <div className="mb-8 flex items-center gap-3">
                            <span className="glass-pill rounded-full px-2.5 py-0.5 text-xs font-medium tracking-[0.2em] text-black/50">
                                02
                            </span>

                            <h3 className="text-sm font-semibold uppercase tracking-[0.15em]">
                                Awards
                            </h3>
                        </div>

                        <div className="space-y-4">
                            {awards.map((item, index) => (
                                <div
                                    key={item.title}
                                    className="glass-panel group cursor-default rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                                    style={{ animationDelay: `${index * 80}ms` }}
                                >
                                    <span className="inline-block rounded-full bg-black/[0.06] px-2.5 py-0.5 text-[10px] font-medium tracking-[0.12em] text-black/40">
                                        {item.year}
                                    </span>

                                    <h4 className="mt-3 text-base font-medium tracking-[-0.02em]">
                                        {item.title}
                                    </h4>

                                    <p className="mt-1 text-sm text-black/45">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}