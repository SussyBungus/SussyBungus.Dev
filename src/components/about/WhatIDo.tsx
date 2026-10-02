"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const things = [
    {
        number: "01",
        title: "software",
        description:
            "I build websites, apps, and random ideas that I think would be cool to make.",
        image: "/software.jpg",
    },
    {
        number: "02",
        title: "photography",
        description:
            "I take photos of anything whenever I hang out or go on vacation.",
        image: "/photography.jpg",
    },
    {
        number: "03",
        title: "sports",
        description:
            "I play badminton, run, compete in track, and generally enjoy staying active.",
        image: "/sports.jpg",
    },
];

export default function WhatIDo() {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;
            if (prefersReducedMotion) return;

            // Heading reveal
            gsap.from(headingRef.current!.children, {
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 82%",
                    once: true,
                },
                opacity: 0,
                y: 22,
                stagger: 0.1,
                duration: 0.65,
                ease: "power3.out",
            });

            // Cards stagger reveal
            const cards = cardsRef.current!.querySelectorAll("article");
            cards.forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        once: true,
                    },
                    opacity: 0,
                    y: 40,
                    scale: 0.97,
                    duration: 0.7,
                    delay: i * 0.1,
                    ease: "power3.out",
                });
            });
        },
        { scope: sectionRef }
    );

    return (
        <section ref={sectionRef} className="px-6 py-24">
            <div className="mx-auto max-w-6xl">

                {/* Heading */}
                <div ref={headingRef} className="mb-14">
                    <p className="text-xs font-medium tracking-[0.2em] text-black/35">
                        04 / WHAT I DO
                    </p>

                    <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                        Things I spend my free time doing
                    </h2>
                </div>

                {/* Cards */}
                <div
                    ref={cardsRef}
                    className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10"
                >
                    {things.map((thing) => (
                        <article
                            key={thing.number}
                            className="group"
                        >
                            {/* Image — glass-framed */}
                            <div className="glass-panel relative aspect-[4/3] overflow-hidden rounded-2xl p-1">
                                {/* Specular glare */}
                                <div className="glass-lens-glare pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-30" />

                                <div className="relative h-full w-full overflow-hidden rounded-[calc(1rem-4px)]">
                                    <Image
                                        src={thing.image}
                                        alt={thing.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* Number + line */}
                            <div className="mb-5 mt-6 flex items-center gap-3">
                                <span className="glass-pill rounded-full px-2.5 py-0.5 text-xs font-medium tracking-[0.2em] text-black/50">
                                    {thing.number}
                                </span>

                                <div className="h-px flex-1 bg-black/10 transition-colors duration-300 group-hover:bg-black/20" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-medium tracking-[-0.02em]">
                                {thing.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-3 text-sm leading-relaxed text-black/50 sm:text-base">
                                {thing.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}