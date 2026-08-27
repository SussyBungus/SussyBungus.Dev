"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
    return (
        <section className="overflow-hidden px-6 pb-24 pt-24 sm:pb-32 sm:pt-40">
            <div className="mx-auto max-w-6xl">
                {/* Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                >
                    <p className="text-xs font-medium tracking-[0.2em] text-black/35">
                        01 / PHOTOGRAPHY
                    </p>

                    <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.055em] sm:text-7xl lg:text-8xl">
                        Moments worth
                        <br />
                        remembering.
                    </h1>

                    <p className="mt-7 max-w-xl text-base leading-relaxed text-black/50 sm:text-lg">
                        Photos from trips, random walks, hangouts, and
                        everything in between.
                    </p>
                </motion.div>

                {/* Featured photo */}
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: 0.9,
                        delay: 0.15,
                        ease: "easeOut",
                    }}
                    className="mt-16 sm:mt-20"
                >
                    <div className="group relative overflow-hidden rounded-[2rem] bg-black/[0.04]">
                        <div className="relative aspect-[16/9] w-full">
                            <Image
                                src="/raymond2.jpg"
                                alt="Featured photograph by Raymond Lin"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 1200px"
                                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                            />

                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-black/[0.03] transition-colors duration-500 group-hover:bg-transparent" />

                            {/* Image metadata */}
                            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[10px] font-medium tracking-[0.15em] text-white drop-shadow-md">
                                <span>RAYMOND LIN</span>
                                <span>2026</span>
                            </div>
                        </div>
                    </div>

                    {/* Caption */}
                    <div className="mt-5 flex items-center justify-between">
                        <p className="text-xs tracking-[0.12em] text-black/35">
                            FEATURED PHOTOGRAPH
                        </p>

                        <p className="text-xs text-black/35">
                            01
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}