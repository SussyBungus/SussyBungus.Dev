"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { FaTimes, FaCamera, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export interface PhotoData {
    number: string;
    title: string;
    location: string;
    year: string;
    image: string;
    aspect?: string;
    shutter?: string;
    aperture?: string;
    iso?: string;
    focalLength?: string;
    lens?: string;
}

interface PhotoModalProps {
    photo: PhotoData | null;
    onClose: () => void;
}

export default function PhotoModal({ photo, onClose }: PhotoModalProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (photo) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [photo, onClose]);

    if (!photo) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl sm:p-6"
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    onClick={(e) => e.stopPropagation()}
                    className="glass-dark relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-[2.5rem] border border-white/20 shadow-2xl"
                >
                    {/* Header bar */}
                    <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                        <div className="flex items-center gap-3">
                            <span className="font-mono text-xs font-semibold text-emerald-400">
                                {photo.number}
                            </span>
                            <span className="h-1 w-1 rounded-full bg-white/20" />
                            <h3 className="text-base font-bold text-white">
                                {photo.title}
                            </h3>
                        </div>

                        <button
                            type="button"
                            onClick={onClose}
                            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                            aria-label="Close photo preview"
                        >
                            <FaTimes size={14} />
                        </button>
                    </div>

                    {/* Image Viewport */}
                    <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-black/40 p-4 sm:p-8">
                        <div className="relative aspect-[4/3] max-h-[62vh] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                            <Image
                                src={photo.image}
                                alt={photo.title}
                                fill
                                sizes="(max-width: 1200px) 90vw, 1200px"
                                className="object-contain"
                                priority
                            />
                            {/* Glass lens flare reflection */}
                            <div className="glass-lens-glare pointer-events-none absolute inset-0 opacity-30" />
                        </div>
                    </div>

                    {/* EXIF Telemetry Footer */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 bg-black/30 px-6 py-4 text-xs">
                        {/* Location & Year */}
                        <div className="flex flex-wrap items-center gap-4 text-white/70">
                            <span className="flex items-center gap-1.5 font-medium">
                                <FaMapMarkerAlt className="text-rose-400" />
                                {photo.location}
                            </span>
                            <span className="flex items-center gap-1.5 font-mono">
                                <FaCalendarAlt className="text-amber-400" />
                                {photo.year}
                            </span>
                        </div>

                        {/* Camera details */}
                        <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] text-white/80">
                            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                                <FaCamera className="text-white/60" />
                                Canon EOS R50
                            </span>
                            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-emerald-400">
                                {photo.shutter || "1/320s"}
                            </span>
                            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-amber-300">
                                {photo.aperture || "f/4.5"}
                            </span>
                            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-blue-300">
                                {photo.iso || "ISO 200"}
                            </span>
                            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-white/70">
                                {photo.focalLength || "24mm"}
                            </span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
