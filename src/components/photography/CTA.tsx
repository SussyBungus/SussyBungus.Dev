"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function CTA() {
    return (
        <section className="px-6 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                    className="border-t border-black/10 pt-16"
                >
                    <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="text-xs font-medium tracking-[0.2em] text-black/35">
                                04 / KEEP LOOKING
                            </p>

                            <h2 className="mt-6 max-w-2xl text-4xl font-medium leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                                More photos,
                                <br />
                                over on VSCO.
                            </h2>

                            <p className="mt-6 max-w-md text-base leading-relaxed text-black/50">
                                My portfolio only shows a small selection.
                                Check out VSCO for more of the photos I've
                                taken along the way.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="https://vsco.co/sussybungus/gallery"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            >
                                View my VSCO
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    ↗
                                </span>
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.02] px-6 py-3 text-sm font-medium text-black/70 transition-colors duration-300 hover:bg-black/10"
                            >
                                Get in touch
                                <span>→</span>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}