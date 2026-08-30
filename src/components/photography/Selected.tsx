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
        title: "Somewhere new",
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
        <section className="px-6">
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
                        02 / SELECTED WORK
                    </p>

                    <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                        A few of my favorites.
                    </h2>
                </motion.div>

                {/* Photos */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:items-start md:gap-8">
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
                                delay: index * 0.1,
                                ease: "easeOut",
                            }}
                            className={`group ${
                                index === 1 ? "md:mt-16" : ""
                            }`}
                        >
                            {/* Image */}
                            <div
                                className={`relative overflow-hidden rounded-[1.75rem] bg-black/[0.04] ${photo.aspect}`}
                            >
                                <Image
                                    src={photo.image}
                                    alt={photo.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                                />

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.04]" />

                                {/* Number */}
                                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[10px] font-medium tracking-[0.15em] text-white backdrop-blur-md">
                                    {photo.number}
                                </div>
                            </div>

                            {/* Info */}
                            <div className="mt-5">
                                <div className="flex items-center gap-3">
                                    <p className="text-sm font-medium">
                                        {photo.title}
                                    </p>

                                    <div className="h-px flex-1 bg-black/10" />
                                </div>

                                <div className="mt-2 flex items-center justify-between text-xs text-black/40">
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