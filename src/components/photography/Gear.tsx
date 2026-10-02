"use client";

import Image from "next/image";
import { motion } from "motion/react";

const gear = [
    {
        number: "01",
        category: "Camera Body",
        name: "Canon EOS R50",
        description:
            "My primary mirrorless camera for everyday street photography, travel journeys, and experimenting with shutter physics.",
    },
    {
        number: "02",
        category: "Optics / Lens",
        name: "RF-S 18–45mm F4.5–6.3 IS STM",
        description:
            "A compact, versatile walkaround zoom lens suited for wide street captures and detail close-ups.",
    },
    {
        number: "03",
        category: "Post-Processing",
        name: "Adobe Lightroom",
        description:
            "Where I calibrate exposure, sculpt custom color grading curves, and refine the final look of my photos.",
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
                    <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/60 px-3.5 py-1 text-xs font-medium text-neutral-500 shadow-xs backdrop-blur-md">
                        <span>03</span>
                        <span className="h-1 w-1 rounded-full bg-neutral-300" />
                        <span>Equipment</span>
                    </div>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                        What I Shoot With.
                    </h2>

                    <p className="mt-4 max-w-lg text-base leading-relaxed text-neutral-600 sm:text-lg">
                        The essential gear, glass, and digital lab tools I trust to capture and edit my photography.
                    </p>
                </motion.div>

                {/* Gear layout */}
                <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                    {/* Camera Photo with glossy glass card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="glass-panel group relative overflow-hidden rounded-[2.5rem] p-3 shadow-xl"
                    >
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-neutral-900">
                            <Image
                                src="/camera.jpg"
                                alt="Canon EOS R50 Camera Gear"
                                fill
                                sizes="(max-width: 768px) 100vw, 55vw"
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            {/* Lens glare specular shine */}
                            <div className="glass-lens-glare pointer-events-none absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity duration-300" />

                            <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/60 px-3 py-1 font-mono text-[10px] text-white shadow-md backdrop-blur-md">
                                Canon EOS R50 &bull; RF-S 18-45mm
                            </div>
                        </div>
                    </motion.div>

                    {/* Gear list */}
                    <div className="space-y-4">
                        {gear.map((item, index) => (
                            <motion.div
                                key={item.number}
                                initial={{ opacity: 0, x: 25 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: "easeOut",
                                }}
                                className="glass-panel rounded-3xl p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                            >
                                <div className="flex items-start gap-4">
                                    <span className="font-mono text-xs font-semibold text-neutral-400">
                                        {item.number}
                                    </span>

                                    <div className="min-w-0 flex-1">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-400">
                                            {item.category}
                                        </p>

                                        <h3 className="mt-1 text-lg font-bold tracking-tight text-neutral-900">
                                            {item.name}
                                        </h3>

                                        <p className="mt-2 text-xs leading-relaxed text-neutral-600">
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