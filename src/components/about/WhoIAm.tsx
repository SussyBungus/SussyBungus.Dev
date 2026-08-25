"use client";

import Image from "next/image";
import { motion } from "motion/react";

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
    return (
        <section className="px-6 py-24">
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[360px_1fr] md:gap-16">

                {/* Image */}
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -40,
                        scale: 0.96,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        scale: 1,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative w-full max-w-[360px]"
                >
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl">
                        <Image
                            src="/raymond.jpg"
                            alt="Raymond"
                            fill
                            sizes="(max-width: 768px) 100vw, 360px"
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />

                        <div className="pointer-events-none absolute inset-0 bg-black/[0.02] transition-opacity duration-500 group-hover:opacity-0" />
                    </div>

                    {/* Image shadow */}
                    <div className="pointer-events-none absolute -bottom-3 left-8 right-8 -z-10 h-8 rounded-full bg-black/10 blur-xl" />
                </motion.div>

                {/* Content */}
                <div className="max-w-2xl">

                    {/* Label */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.1,
                        }}
                        className="text-xs font-medium tracking-[0.2em] text-black/35"
                    >
                        01 / WHO I AM
                    </motion.p>

                    {/* Heading */}
                    <motion.h2
                        initial={{
                            opacity: 0,
                            y: 25,
                            filter: "blur(6px)",
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                        }}
                        viewport={{
                            once: true,
                            amount: 0.4,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.15,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-6 text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl"
                    >
                        I'm Raymond — a developer,
                        photographer, and someone who
                        likes making things.
                    </motion.h2>

                    {/* Paragraphs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.25,
                        }}
                        className="mt-8 space-y-5 text-base leading-relaxed text-black/50 sm:text-lg"
                    >
                        <p>
                            I enjoy building things from scratch, experimenting
                            with new ideas, and learning how things work.
                        </p>

                        <p>
                            Outside of code, I'm usually taking photos,
                            playing sports, or finding something new to
                            get obsessed with.
                        </p>
                    </motion.div>

                    {/* Details */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.4,
                        }}
                        className="mt-10 grid grid-cols-1 gap-6 border-t border-black/10 pt-7 sm:grid-cols-3"
                    >
                        {details.map((detail, index) => (
                            <motion.div
                                key={detail.label}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.45 + index * 0.08,
                                }}
                                whileHover={{ y: -3 }}
                                className="transition-transform"
                            >
                                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/35">
                                    {detail.label}
                                </p>

                                <p className="mt-2 text-sm font-medium text-black/70">
                                    {detail.value}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}   