"use client";

import { motion } from "motion/react";

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
}: {
    number: string;
    title: string;
    items: TimelineItem[];
}) {
    return (
        <div>
            {/* Column heading */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-10 flex items-center gap-3"
            >
                <span className="text-xs font-medium tracking-[0.2em] text-black/35">
                    {number}
                </span>

                <h3 className="text-sm font-semibold uppercase tracking-[0.15em]">
                    {title}
                </h3>
            </motion.div>

            <div className="relative">

                {/* Timeline line */}
                <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ transformOrigin: "top" }}
                    className="absolute bottom-2 left-[5px] top-2 w-px bg-black/10"
                />

                <div className="space-y-10">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.year}
                            initial={{
                                opacity: 0,
                                x: -20,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.3,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group relative pl-8"
                        >
                            {/* Dot */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: 0,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.35,
                                    delay: index * 0.1 + 0.15,
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                }}
                                className="absolute left-0 top-1.5 z-10 h-[11px] w-[11px] rounded-full border-2 border-white bg-black ring-1 ring-black/10"
                            />

                            {/* Year */}
                            <p className="text-xs font-medium tracking-[0.12em] text-black/35">
                                {item.year}
                            </p>

                            {/* Title */}
                            <h4 className="mt-2 text-lg font-medium tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-1">
                                {item.title}
                            </h4>

                            {/* Description */}
                            <p className="mt-2 max-w-md text-sm leading-relaxed text-black/50">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Timeline() {
    return (
        <section className="px-6 py-24">
            <div className="mx-auto max-w-6xl">

                <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20">
                    <TimelineColumn
                        number="01"
                        title="Coding"
                        items={codingTimeline}
                    />

                    <TimelineColumn
                        number="02"
                        title="Life"
                        items={lifeTimeline}
                    />
                </div>

            </div>
        </section>
    );
}