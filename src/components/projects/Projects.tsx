"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        number: "02",
        title: "Study Smart AI",
        category: "AI / Education",
        description:
            "An intelligent academic study planner that creates adaptive review sessions and manages exam workloads.",
        image: "/study-smart.svg",
        technologies: ["Python", "GPT-4", "FastAPI"],
        link: "https://github.com/SussyBungus",
        isExternal: true,
    },
    {
        number: "03",
        title: "Life OS",
        category: "Productivity",
        description:
            "A personal productivity workspace engineered to unite daily habit tracking, task scheduling, and quick capture.",
        image: "/life-os.svg",
        technologies: ["Next.js", "TypeScript", "Tailwind"],
        link: "https://github.com/SussyBungus",
        isExternal: true,
    },
    {
        number: "04",
        title: "Personal Portfolio",
        category: "Creative Dev",
        description:
            "The site you are currently visiting: engineered with Next.js 16, GSAP motion, and a custom glossy glass design language.",
        image: "/portfolio.svg",
        technologies: ["Next.js", "GSAP", "React 19"],
        link: "https://github.com/SussyBungus",
        isExternal: true,
    },
    {
        number: "05",
        title: "FocusAI (Legacy v1)",
        category: "AI Experiments",
        description:
            "The initial prototype iteration exploring anti-procrastination timers and cloud-synced course calendars.",
        image: "/focusai-old.svg",
        technologies: ["Next.js", "Supabase", "SQL"],
        link: "https://github.com/SussyBungus",
        isExternal: true,
    },
    {
        number: "06",
        title: "Photography Showcase",
        category: "Visual Arts",
        description:
            "Curated collection of street, architectural, and travel photography captured on the Canon EOS R50.",
        image: "/photography.jpg",
        technologies: ["Lightroom", "Color Grading"],
        link: "/photography",
        isExternal: false,
    },
    {
        number: "07",
        title: "Upcoming Experiments",
        category: "In Development",
        description:
            "Actively prototyping web tools, shader graphics, and cross-platform native utilities.",
        image: "/coming-soon.svg",
        technologies: ["TypeScript", "WebGL"],
        link: "https://github.com/SussyBungus",
        isExternal: true,
    },
];

export default function OtherProjects() {
    const gridRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;
            if (prefersReducedMotion) return;

            const cards = gridRef.current?.querySelectorAll(".project-card");
            if (!cards || cards.length === 0) return;

            gsap.from(cards, {
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                y: 35,
                duration: 0.65,
                stagger: 0.1,
                ease: "power2.out",
            });
        },
        { scope: gridRef }
    );

    return (
        <section className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
                {/* Heading */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/60 px-3.5 py-1 text-xs font-medium text-neutral-500 shadow-xs backdrop-blur-md">
                        <span>02</span>
                        <span className="h-1 w-1 rounded-full bg-neutral-300" />
                        <span>All Projects</span>
                    </div>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                        More Things I've Built
                    </h2>
                    <p className="mt-2 text-base text-neutral-500">
                        A curated archive of tools, applications, and experiments.
                    </p>
                </div>

                {/* Grid */}
                <div
                    ref={gridRef}
                    className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {projects.map((project) => (
                        <div
                            key={project.number}
                            className="project-card glass-panel group flex flex-col justify-between overflow-hidden rounded-[2rem] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                        >
                            <div>
                                {/* Project Thumbnail Preview with specular glare */}
                                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-black/5 bg-neutral-900 shadow-inner">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                    />
                                    <div className="glass-lens-glare pointer-events-none absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-300" />

                                    {/* Number tag */}
                                    <div className="absolute left-3.5 top-3.5 rounded-full border border-white/20 bg-black/60 px-2.5 py-1 font-mono text-[10px] font-semibold text-white backdrop-blur-md">
                                        {project.number}
                                    </div>
                                </div>

                                {/* Header */}
                                <div className="mt-5">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400">
                                        {project.category}
                                    </span>
                                    <h3 className="mt-1 text-xl font-bold tracking-tight text-neutral-900 group-hover:text-black">
                                        {project.title}
                                    </h3>
                                    <p className="mt-2 text-xs leading-relaxed text-neutral-600 line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>
                            </div>

                            {/* Footer & Badges */}
                            <div className="mt-6 border-t border-black/[0.06] pt-4">
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-black/5 bg-black/[0.03] px-2.5 py-0.5 text-[10px] font-medium text-neutral-600"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {project.isExternal ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 transition-colors hover:text-black group-hover:underline underline-offset-4"
                                    >
                                        <span>View Code &amp; Demo</span>
                                        <span>&rarr;</span>
                                    </a>
                                ) : (
                                    <Link
                                        href={project.link}
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 transition-colors hover:text-black group-hover:underline underline-offset-4"
                                    >
                                        <span>Explore Gallery</span>
                                        <span>&rarr;</span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}