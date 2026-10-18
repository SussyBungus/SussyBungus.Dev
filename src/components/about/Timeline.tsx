"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionBadge from "@/components/SectionBadge";

gsap.registerPlugin(ScrollTrigger);

type TimelineItem = {
    year: string;
    title: string;
    description: string;
};

const codingTimeline: TimelineItem[] = [
    {
        year: "2019",
        title: "Started coding",
        description:
            "Started learning how to code and became interested in building things with technology.",
    },
    {
        year: "2021",
        title: "Going beyond the basics",
        description:
            "Started exploring more programming concepts and building projects on my own.",
    },
    {
        year: "2023",
        title: "Full-stack development",
        description:
            "Started building more complete projects and getting into web development, APIs, and databases.",
    },
    {
        year: "2025",
        title: "Building bigger",
        description:
            "Started working on more ambitious projects involving AI, productivity tools, and modern web technologies.",
    },
];

const lifeTimeline: TimelineItem[] = [
    {
        year: "2020",
        title: "New interests",
        description:
            "Started getting more involved in sports, technology, and creative hobbies.",
    },
    {
        year: "2023",
        title: "High school",
        description:
            "Started high school and began exploring more interests outside of the classroom.",
    },
    {
        year: "2024",
        title: "More projects, more sports",
        description:
            "Spent more time coding, playing sports, taking photos, and trying new things.",
    },
    {
        year: "2026",
        title: "Building my own path",
        description:
            "Focusing on school, software, photography, sports, and turning more of my ideas into real projects.",
    },
];

function TimelineColumn({
    number,
    title,
    items,
    columnRef,
}: {
    number: string;
    title: string;
    items: TimelineItem[];
    columnRef: React.RefObject<HTMLDivElement | null>;
}) {
    return (
        <div ref={columnRef}>
            {/* Column heading */}
            <div className="mb-10 flex items-center gap-3">
                <span className="glass-pill rounded-full px-2.5 py-0.5 text-xs font-medium tracking-[0.2em] text-black/50">
                    {number}
                </span>

                <h3 className="text-sm font-semibold uppercase tracking-[0.15em]">
                    {title}
                </h3>
            </div>

            <div className="relative">
                {/* Timeline line */}
                <div
                    className="timeline-line absolute bottom-2 left-[5px] top-2 w-px bg-black/10"
                    style={{ transformOrigin: "top", transform: "scaleY(0)" }}
                />

                <div className="space-y-8">
                    {items.map((item) => (
                        <div
                            key={item.year}
                            className="timeline-item group relative pl-8 opacity-0"
                            style={{ transform: "translateX(-20px)" }}
                        >
                            {/* Dot */}
                            <div
                                className="timeline-dot absolute left-0 top-2 z-10 h-[11px] w-[11px] scale-0 rounded-full border-2 border-white bg-black ring-1 ring-black/10"
                            />

                            {/* Glass hover card */}
                            <div className="rounded-2xl p-3 transition-all duration-300 group-hover:glass-pill group-hover:shadow-sm -mx-3">
                                {/* Year pill */}
                                <span className="inline-block rounded-full bg-black/[0.05] px-2 py-0.5 text-[10px] font-medium tracking-[0.12em] text-black/40">
                                    {item.year}
                                </span>

                                {/* Title */}
                                <h4 className="mt-2 text-lg font-medium tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-1">
                                    {item.title}
                                </h4>

                                {/* Description */}
                                <p className="mt-1.5 max-w-md text-sm leading-relaxed text-black/50">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Timeline() {
    const sectionRef = useRef<HTMLElement>(null);
    const col1Ref = useRef<HTMLDivElement>(null);
    const col2Ref = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;
            if (prefersReducedMotion) return;

            [col1Ref.current, col2Ref.current].forEach((col, colIdx) => {
                if (!col) return;

                // Animate the vertical line
                const line = col.querySelector(".timeline-line");
                if (line) {
                    gsap.to(line, {
                        scrollTrigger: {
                            trigger: col,
                            start: "top 80%",
                            once: true,
                        },
                        scaleY: 1,
                        duration: 1.1,
                        delay: colIdx * 0.12,
                        ease: "power3.out",
                    });
                }

                // Animate items
                const items = col.querySelectorAll(".timeline-item");
                items.forEach((item, i) => {
                    gsap.to(item, {
                        scrollTrigger: {
                            trigger: item,
                            start: "top 88%",
                            once: true,
                        },
                        opacity: 1,
                        x: 0,
                        duration: 0.6,
                        delay: i * 0.08 + colIdx * 0.06,
                        ease: "power3.out",
                    });

                    // Animate dot
                    const dot = item.querySelector(".timeline-dot");
                    if (dot) {
                        gsap.to(dot, {
                            scrollTrigger: {
                                trigger: item,
                                start: "top 88%",
                                once: true,
                            },
                            scale: 1,
                            duration: 0.35,
                            delay: i * 0.08 + colIdx * 0.06 + 0.15,
                            ease: "back.out(2)",
                        });
                    }
                });
            });
        },
        { scope: sectionRef }
    );

    return (
        <section ref={sectionRef} className="px-6 py-20 sm:py-24">
            <div className="mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="mb-14">
                    <SectionBadge number="02" label="Timeline" />
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                        My Journey So Far.
                    </h2>
                    <p className="mt-2 text-base text-neutral-500">
                        Milestones and formative moments across code, academics, and sports.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20">
                    <TimelineColumn
                        number="01"
                        title="Coding"
                        items={codingTimeline}
                        columnRef={col1Ref}
                    />

                    <TimelineColumn
                        number="02"
                        title="Life"
                        items={lifeTimeline}
                        columnRef={col2Ref}
                    />
                </div>

            </div>
        </section>
    );
}