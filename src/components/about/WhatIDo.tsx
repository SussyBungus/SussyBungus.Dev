"use client";

import Image from "next/image";
import { motion } from "motion/react";

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
                    className="mb-14"
                >
                    <p className="text-xs font-medium tracking-[0.2em] text-black/35">
                        04 / WHAT I DO
                    </p>

                    <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                        Things I spend my free time doing
                    </h2>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
                    {things.map((thing, index) => (
                        <motion.article
                            key={thing.number}
                            initial={{
                                opacity: 0,
                                y: 35,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.25,
                            }}
                            transition={{
                                duration: 0.65,
                                delay: index * 0.12,
                                ease: "easeOut",
                            }}
                            className="group"
                        >
                            {/* Image */}
                            <motion.div
                                initial={{ scale: 0.96 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.12,
                                    ease: "easeOut",
                                }}
                                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black/5"
                            >
                                <Image
                                    src={thing.image}
                                    alt={thing.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />

                                {/* Subtle overlay */}
                                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.04]" />
                            </motion.div>

                            {/* Number + line */}
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.12 + 0.2,
                                    ease: "easeOut",
                                }}
                                className="mb-5 mt-6 flex items-center gap-3"
                            >
                                <span className="text-xs font-medium tracking-[0.2em] text-black/35">
                                    {thing.number}
                                </span>

                                <div className="h-px flex-1 bg-black/10 transition-colors duration-300 group-hover:bg-black/20" />
                            </motion.div>

                            {/* Title */}
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.12 + 0.25,
                                    ease: "easeOut",
                                }}
                                className="text-xl font-medium tracking-[-0.02em]"
                            >
                                {thing.title}
                            </motion.h3>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.12 + 0.3,
                                    ease: "easeOut",
                                }}
                                className="mt-4 text-sm leading-relaxed text-black/50 sm:text-base"
                            >
                                {thing.description}
                            </motion.p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}