"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const projects = [
    {
        number: "02",
        title: "Study Smart",
        category: "AI / Education",
        description:
            "An AI study planner assistant built to help students organize their studying and stay on track.",
        image: "/study-smart.png",
        technologies: ["Python", "GPT-3.5", "Gradio"],
        href: "/projects/study-smart",
    },
    {
        number: "03",
        title: "Life OS",
        category: "Productivity",
        description:
            "A personal productivity system designed to bring tasks, planning, and everyday life into one place.",
        image: "/life-os.png",
        technologies: ["Next.js", "TypeScript", "Tailwind"],
        href: "/projects/life-os",
    },
    {
        number: "04",
        title: "Portfolio",
        category: "Web Development",
        description:
            "My personal website for showcasing the things I build, photograph, and learn.",
        image: "/portfolio.png",
        technologies: ["Next.js", "TypeScript", "Tailwind"],
        href: "/projects/portfolio",
    },
    {
        number: "05",
        title: "FocusAI",
        category: "AI / Productivity",
        description:
            "An earlier AI productivity experiment focused on helping students manage assignments and deadlines.",
        image: "/focusai-old.png",
        technologies: ["Next.js", "Supabase", "AI"],
        href: "/projects/focusai",
    },
    {
        number: "06",
        title: "Photography",
        category: "Photography",
        description:
            "A collection of photos and experiments from places I've visited and things I've noticed.",
        image: "/photography.jpg",
        technologies: ["Photography"],
        href: "/photography",
    },
    {
        number: "07",
        title: "More coming soon",
        category: "In progress",
        description:
            "A few ideas are currently being built. This space will probably change soon.",
        image: "/coming-soon.png",
        technologies: ["???"],
        href: "#",
    },
];

export default function OtherProjects() {
    return (
        <section className="px-6 py-24">
            <div className="mx-auto max-w-6xl">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                    className="mb-12"
                >
                    <p className="text-xs font-medium tracking-[0.2em] text-black/35">
                        03 / OTHER PROJECTS
                    </p>

                    <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                        More things I've built
                    </h2>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.number}
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.08,
                                ease: "easeOut",
                            }}
                            className="group"
                        >
                            {/* Image */}
                            <Link
                                href={project.href}
                                className="block"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black/[0.04]">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                    />

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.05]" />

                                    {/* Arrow */}
                                    <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/90 text-black opacity-0 shadow-lg backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        ↗
                                    </div>
                                </div>
                            </Link>

                            {/* Number / category */}
                            <div className="mt-5 flex items-center gap-3">
                                <span className="text-xs font-medium tracking-[0.2em] text-black/30">
                                    {project.number}
                                </span>

                                <div className="h-px w-8 bg-black/10" />

                                <span className="text-xs font-medium uppercase tracking-[0.12em] text-black/35">
                                    {project.category}
                                </span>
                            </div>

                            {/* Title */}
                            <Link href={project.href}>
                                <h3 className="mt-3 text-xl font-medium tracking-[-0.03em] transition-opacity duration-300 group-hover:opacity-60">
                                    {project.title}
                                </h3>
                            </Link>

                            {/* Description */}
                            <p className="mt-3 text-sm leading-relaxed text-black/50">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="rounded-full border border-black/10 px-2.5 py-1 text-[11px] text-black/45"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}