"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
    return (
        <section className="min-h-screen overflow-hidden px-6 pt-24">
            <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-6xl grid-cols-1 items-start gap-12 md:grid-cols-[0.9fr_1.1fr]">

                {/* Left */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.12,
                                delayChildren: 0.15,
                            },
                        },
                    }}
                >
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.6, ease },
                            },
                        }}
                        className="mb-4 text-sm font-medium text-black/45"
                    >
                        hey, i'm
                    </motion.p>

                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 35 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.8, ease },
                            },
                        }}
                        className="text-6xl font-semibold tracking-[-0.05em] sm:text-7xl lg:text-8xl"
                    >
                        Raymond Lin.
                    </motion.h1>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 25 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.7, ease },
                            },
                        }}
                        className="mt-7 max-w-lg text-lg leading-relaxed text-black/55 sm:text-xl"
                    >
                        I build things on the internet, take photos, and turn
                        random ideas into projects.
                    </motion.p>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.6, ease },
                            },
                        }}
                        className="mt-9 flex flex-wrap gap-3"
                    >
                        <Link
                            href="/projects"
                            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
                        >
                            projects
                        </Link>

                        <Link
                            href="/about"
                            className="rounded-full border border-black/10 bg-black/5 px-6 py-3 text-sm font-medium transition-colors hover:bg-black/10"
                        >
                            about me
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Camera */}
                <motion.div
                    initial={{
                        opacity: 0,
                        x: 80,
                        y: 30,
                        rotate: 5,
                        scale: 0.92,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                        rotate: 0,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.1,
                        delay: 0.25,
                        ease,
                    }}
                    className="flex items-center justify-center"
                >
                    <motion.div
                        animate={{
                            y: [0, -8, 0],
                            rotate: [0, 0.4, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="relative w-full max-w-[600px]"
                    >
                        {/* Camera body */}
                        <div className="relative h-[350px] w-full rounded-[3rem] bg-neutral-950 p-6 shadow-2xl">

                            {/* Top controls */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.6 }}
                                className="flex items-center justify-between px-2"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-[10px] font-semibold tracking-[0.25em] text-white/40">
                                        RAYMOND
                                    </span>

                                    <span className="h-1 w-1 rounded-full bg-white/20" />

                                    <span className="text-[10px] tracking-[0.2em] text-white/30">
                                        DIGITAL
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    {/* REC light */}
                                    <motion.span
                                        animate={{
                                            opacity: [1, 0.35, 1],
                                            scale: [1, 0.85, 1],
                                        }}
                                        transition={{
                                            duration: 1.4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"
                                    />

                                    <span className="text-[10px] font-medium tracking-widest text-white/40">
                                        REC
                                    </span>
                                </div>
                            </motion.div>

                            {/* Camera screen */}
                            <div className="absolute bottom-6 left-6 top-16 w-[62%] overflow-hidden rounded-2xl border border-white/10 bg-black">
                                <Image
                                    src="/raymond2.jpg"
                                    alt="Photo by Raymond"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 360px"
                                    className="object-cover"
                                />

                                <div className="absolute inset-0 bg-black/10" />

                                {/* Focus box */}
                                <motion.div
                                    animate={{
                                        opacity: [0.5, 1, 0.5],
                                        scale: [0.95, 1, 0.95],
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 border border-white/70"
                                >
                                    <span className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                                </motion.div>

                                {/* Camera info */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.1 }}
                                    className="absolute left-4 right-4 top-4 flex justify-between text-[10px] font-medium text-white drop-shadow"
                                >
                                    <span>AF-S</span>
                                    <span>1/250</span>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.2 }}
                                    className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] font-medium text-white drop-shadow"
                                >
                                    <span>35mm</span>
                                    <span>F2.8</span>
                                    <span>ISO 400</span>
                                </motion.div>
                            </div>

                            {/* Right controls */}
                            <div className="absolute bottom-6 right-6 top-16 flex w-[28%] flex-col items-center justify-between">

                                {/* Dial */}
                                <motion.div
                                    whileHover={{ rotate: 30 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                    className="flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] shadow-inner"
                                >
                                    <div className="h-10 w-10 rounded-full border border-white/10">
                                        <div className="mx-auto mt-2 h-2 w-2 rounded-full bg-white/60" />
                                    </div>
                                </motion.div>

                                {/* Buttons */}
                                <div className="flex gap-3">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="h-10 w-10 rounded-full border border-white/10 bg-white/5"
                                    />

                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="h-10 w-10 rounded-full border border-white/10 bg-white/5"
                                    />
                                </div>

                                {/* Shutter */}
                                <motion.div
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.92 }}
                                    className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/10"
                                >
                                    <motion.div
                                        whileTap={{ scale: 0.8 }}
                                        className="h-10 w-10 rounded-full bg-white/90 shadow-lg"
                                    />
                                </motion.div>
                            </div>

                            {/* Bottom detail */}
                            <motion.div
                                animate={{ opacity: [0.2, 0.5, 0.2] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute bottom-5 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-white/10"
                            />
                        </div>

                        {/* Camera base */}
                        <div className="absolute -bottom-4 left-1/2 h-7 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-900 shadow-xl" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}