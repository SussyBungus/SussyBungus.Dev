"use client";

import Image from "next/image";
import { motion } from "motion/react";

const photos = [
    {
        number: "01",
        title: "Aura Baller??",
        location: "Bermuda - MSC Cruise",
        year: "2025",
        image: "/photo1.png",
        aspect: "aspect-[4/5]",
    },
    {
        number: "02",
        title: "Somewhere New",
        location: "Ontario - Marble",
        year: "2026",
        image: "/marble.jpg",
        aspect: "aspect-[4/3]",
    },
    {
        number: "03",
        title: "Poof TADA",
        location: "Waterfront - YYZ",
        year: "2026",
        image: "/photo2.png",
        aspect: "aspect-[3/4]",
    },
];

export default function SelectedWork() {
    return (
        <section className="px-6 py-12">
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
                        <span>02</span>
                        <span className="h-1 w-1 rounded-full bg-neutral-300" />
                        <span>Selected Frames</span>
                    </div>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                        A Few of My Favorites.
                    </h2>
                    <p className="mt-2 text-base text-neutral-500">
                        Moments captured in natural lighting across travel and everyday exploration.
                    </p>
                </motion.div>

                {/* Photos Grid */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:items-start md:gap-8">
                    {photos.map((photo, index) => (
                        <motion.article
                            key={photo.number}
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
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.12,
                                ease: "easeOut",
                            }}
                            className={`group ${
                                index === 1 ? "md:mt-12" : ""
                            }`}
                        >
                            {/* Glossy Image Container */}
                            <div
                                className={`glass-panel relative overflow-hidden rounded-[2rem] p-2 shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5`}
                            >
                                <div className={`relative w-full overflow-hidden rounded-[1.6rem] bg-neutral-900 ${photo.aspect}`}>
                                    <Image
                                        src={photo.image}
                                        alt={photo.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />

                                    {/* Specular glare overlay */}
                                    <div className="glass-lens-glare pointer-events-none absolute inset-0 opacity-25 group-hover:opacity-50 transition-opacity duration-300" />

                                    {/* Frame Tag */}
                                    <div className="absolute left-3.5 top-3.5 rounded-full border border-white/20 bg-black/50 px-2.5 py-1 font-mono text-[10px] font-semibold text-white shadow-md backdrop-blur-md">
                                        {photo.number}
                                    </div>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="mt-4 px-2">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-sm font-bold text-neutral-900">
                                        {photo.title}
                                    </h3>
                                    <div className="h-px flex-1 bg-black/[0.08]" />
                                </div>

                                <div className="mt-1.5 flex items-center justify-between text-xs text-neutral-500 font-medium">
                                    <span>{photo.location}</span>
                                    <span>{photo.year}</span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}