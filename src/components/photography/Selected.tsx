"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import SectionBadge from "@/components/SectionBadge";
import PhotoModal, { PhotoData } from "@/components/photography/PhotoModal";

const photos: PhotoData[] = [
    {
        number: "01",
        title: "Aura Baller??",
        location: "Bermuda - MSC Cruise",
        year: "2025",
        image: "/photo1.png",
        aspect: "aspect-[4/5]",
        shutter: "1/500s",
        aperture: "f/5.6",
        iso: "ISO 100",
        focalLength: "35mm",
    },
    {
        number: "02",
        title: "Somewhere New",
        location: "Ontario - Marble",
        year: "2026",
        image: "/marble.jpg",
        aspect: "aspect-[4/3]",
        shutter: "1/250s",
        aperture: "f/4.5",
        iso: "ISO 200",
        focalLength: "28mm",
    },
    {
        number: "03",
        title: "Poof TADA",
        location: "Waterfront - YYZ",
        year: "2026",
        image: "/photo2.png",
        aspect: "aspect-[3/4]",
        shutter: "1/400s",
        aperture: "f/4.0",
        iso: "ISO 160",
        focalLength: "18mm",
    },
];

export default function SelectedWork() {
    const [selectedPhoto, setSelectedPhoto] = useState<PhotoData | null>(null);
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
                    <SectionBadge number="02" label="Selected Frames" />

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                        A Few of My Favorites.
                    </h2>
                    <p className="mt-2 text-base text-neutral-500">
                        Moments captured in natural lighting across travel and everyday exploration. Click any frame to inspect camera telemetry.
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
                            className={`group cursor-pointer ${
                                index === 1 ? "md:mt-12" : ""
                            }`}
                            onClick={() => setSelectedPhoto(photo)}
                        >
                            {/* Glossy Image Container */}
                            <div
                                className="glass-panel relative overflow-hidden rounded-[2rem] p-2 shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5"
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

                                    {/* Tap / Hover hint */}
                                    <div className="absolute bottom-3 right-3 rounded-full border border-white/20 bg-black/60 px-3 py-1 font-mono text-[10px] text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                                        Inspect Telemetry &rarr;
                                    </div>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="mt-4 px-2">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-sm font-bold text-neutral-900 group-hover:text-black">
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

                {/* Photo Modal Lightbox */}
                <PhotoModal
                    photo={selectedPhoto}
                    onClose={() => setSelectedPhoto(null)}
                />
            </div>
        </section>
    );
}