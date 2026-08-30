"use client";

import Image from "next/image";
import { motion } from "motion/react";

const gear = [
    {
        number: "01",
        category: "Camera",
        name: "Canon EOS R50",
        description:
            "My main camera for everyday photography, trips, and experimenting with different styles.",
    },
    {
        number: "02",
        category: "Lens",
        name: "RF-S 18–45mm",
        description:
            "A compact and versatile zoom lens that works well for everyday photography and travel.",
    },
    {
        number: "03",
        category: "Editing",
        name: "Lightroom",
        description:
            "Where I edit, organize, and give my photos their final look.",
    },
];

export default function Gear() {
    return (
        <section className="px-6 py-20 sm:py-24">
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
                        03 / GEAR
                    </p>

                    <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                        What I shoot with.
                    </h2>

                    <p className="mt-5 max-w-lg text-base leading-relaxed text-black/50 sm:text-lg">
                        A small collection of the gear and tools I use to
                        capture and edit my photos.
                    </p>
                </motion.div>

                {/* Gear layout */}
                <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
                    {/* Image */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -30,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.7,
                            ease: "easeOut",
                        }}
                        className="group relative overflow-hidden rounded-[2rem] bg-black/[0.04]"
                    >
                        <div className="relative aspect-[4/3]">
                            <Image
                                src="/camera.jpg"
                                alt="Canon EOS R50"
                                fill
                                sizes="(max-width: 768px) 100vw, 55vw"
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                            />

                            <div className="absolute inset-0 bg-black/[0.03]" />
                        </div>
                    </motion.div>

                    {/* Gear list */}
                    <div className="divide-y divide-black/10">
                        {gear.map((item, index) => (
                            <motion.div
                                key={item.number}
                                initial={{
                                    opacity: 0,
                                    x: 25,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: "easeOut",
                                }}
                                className="py-7 first:pt-0 last:pb-0"
                            >
                                <div className="flex items-start gap-5">
                                    <span className="pt-1 text-xs font-medium tracking-[0.2em] text-black/30">
                                        {item.number}
                                    </span>

                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs font-medium uppercase tracking-[0.15em] text-black/35">
                                            {item.category}
                                        </p>

                                        <h3 className="mt-2 text-xl font-medium tracking-[-0.03em]">
                                            {item.name}
                                        </h3>

                                        <p className="mt-2 max-w-md text-sm leading-relaxed text-black/50">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}