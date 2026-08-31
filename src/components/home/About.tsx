"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function About() {
    return (
        <section className="w-full overflow-x-hidden px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="grid min-w-0 items-center gap-16 md:grid-cols-[0.8fr_1.2fr]">

                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="min-w-0"
                    >
                        <p className="text-sm font-medium text-black/40">
                            01 / About
                        </p>

                        <h2 className="mt-6 max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                            i like building things and figuring out how they work
                        </h2>

                        <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-black/55">
                            <p>
                                i'm raymond, a student and developer who enjoys
                                turning random ideas into things i can actually use.
                            </p>

                            <p>
                                outside of coding, i'm into photography, badminton,
                                and anything else that keeps me curious.
                            </p>

                            <p>
                                this site is a little collection of the things i'm
                                building, learning, and interested in.
                            </p>
                        </div>

                        <Link
                            href="/about"
                            className="mt-8 inline-block text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-50"
                        >
                            more about me
                        </Link>
                    </motion.div>

                    {/* ID Card */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 30,
                            rotate: 3,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            rotate: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex min-w-0 w-full items-center justify-center"
                    >
                        <div className="group relative w-full max-w-[300px] [perspective:1200px]">

                            {/* Glow */}
                            <div className="absolute -inset-12 -z-10 rounded-full bg-black/[0.04] blur-3xl" />

                            {/* Flip container */}
                            <motion.div
                                className="relative w-full [transform-style:preserve-3d]"
                                whileHover={{ rotateY: 180 }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >

                                {/* ================= FRONT ================= */}
                                <div className="relative w-full overflow-hidden rounded-[2rem] border border-black/10 bg-white p-5 shadow-2xl [backface-visibility:hidden]">

                                    {/* Grid */}
                                    <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                backgroundImage:
                                                    "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)",
                                                backgroundSize: "24px 24px",
                                            }}
                                        />
                                    </div>

                                    {/* Header */}
                                    <div className="relative flex items-center justify-between px-1">
                                        <p className="text-[9px] font-semibold tracking-[0.25em] text-black/35">
                                            PERSONAL ID
                                        </p>

                                        <p className="text-[9px] tracking-[0.2em] text-black/25">
                                            001
                                        </p>
                                    </div>

                                    {/* Photo */}
                                    <div className="relative mt-4 aspect-[4/5] overflow-hidden rounded-2xl bg-black/5">
                                        <Image
                                            src="/raymond1.jpg"
                                            alt="Raymond Lin"
                                            fill
                                            sizes="300px"
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Identity */}
                                    <div className="relative mt-4">
                                        <h3 className="text-xl font-semibold tracking-[-0.04em]">
                                            Raymond Lin
                                        </h3>

                                        <p className="mt-1 text-xs text-black/40">
                                            developer · photographer · athlete
                                        </p>
                                    </div>

                                    {/* Footer */}
                                    <div className="relative mt-5 flex items-center justify-between border-t border-black/10 pt-4">
                                        <div className="flex h-4 items-end gap-[2px] opacity-25">
                                            {[2, 1, 3, 1, 2, 4, 1, 2, 3, 1].map(
                                                (barWidth, index) => (
                                                    <div
                                                        key={index}
                                                        className="h-full bg-black"
                                                        style={{
                                                            width: `${barWidth}px`,
                                                        }}
                                                    />
                                                )
                                            )}
                                        </div>

                                        <span className="text-[8px] tracking-[0.2em] text-black/25">
                                            SUSSYBUNGUS
                                        </span>
                                    </div>

                                    {/* Shine */}
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/[0.02]" />
                                </div>

                                {/* ================= BACK ================= */}
                                <div className="absolute inset-0 w-full overflow-hidden rounded-[2rem] border border-black/10 bg-white p-6 shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]">

                                    {/* Grid */}
                                    <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                backgroundImage:
                                                    "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)",
                                                backgroundSize: "24px 24px",
                                            }}
                                        />
                                    </div>

                                    {/* Header */}
                                    <div className="relative flex items-center justify-between">
                                        <p className="text-[9px] font-semibold tracking-[0.25em] text-black/35">
                                            ABOUT ME
                                        </p>

                                        <span className="text-[9px] tracking-[0.2em] text-black/25">
                                            001 / 002
                                        </span>
                                    </div>

                                    {/* Intro */}
                                    <div className="relative mt-8">
                                        <p className="text-2xl font-semibold tracking-[-0.04em]">
                                            always making
                                            <br />
                                            something.
                                        </p>

                                        <p className="mt-3 text-xs leading-relaxed text-black/45">
                                            I like learning by building, whether
                                            that's a website, an app, or something
                                            completely random.
                                        </p>
                                    </div>

                                    {/* Info */}
                                    <div className="relative mt-8 space-y-5 border-t border-black/10 pt-5">

                                        <div className="flex items-start justify-between">
                                            <span className="text-[8px] tracking-[0.18em] text-black/30">
                                                CURRENTLY
                                            </span>

                                            <span className="max-w-[150px] text-right text-[10px] font-medium">
                                                BUILDING & LEARNING
                                            </span>
                                        </div>

                                        <div className="flex items-start justify-between">
                                            <span className="text-[8px] tracking-[0.18em] text-black/30">
                                                INTO
                                            </span>

                                            <span className="max-w-[150px] text-right text-[10px] font-medium">
                                                CODE · PHOTO · SPORTS
                                            </span>
                                        </div>

                                        <div className="flex items-start justify-between">
                                            <span className="text-[8px] tracking-[0.18em] text-black/30">
                                                FOCUS
                                            </span>

                                            <span className="max-w-[150px] text-right text-[10px] font-medium">
                                                SOFTWARE
                                            </span>
                                        </div>

                                        <div className="flex items-start justify-between">
                                            <span className="text-[8px] tracking-[0.18em] text-black/30">
                                                APPROACH
                                            </span>

                                            <span className="max-w-[150px] text-right text-[10px] font-medium">
                                                BUILD · BREAK · LEARN
                                            </span>
                                        </div>

                                    </div>

                                    {/* Bottom */}
                                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-black/10 pt-4">
                                        <span className="text-[8px] tracking-[0.2em] text-black/25">
                                            KEEP EXPLORING
                                        </span>

                                        <div className="h-5 w-5 rounded-full border border-black/15" />
                                    </div>

                                    {/* Shine */}
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/[0.02]" />
                                </div>

                            </motion.div>

                            {/* Shadow */}
                            <div className="absolute -bottom-4 left-8 right-8 -z-10 h-8 rounded-full bg-black/10 blur-xl" />

                            {/* Hint */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 1,
                                    duration: 0.5,
                                }}
                                className="mt-5 text-center text-[10px] tracking-[0.15em] text-black/25"
                            >
                                HOVER TO FLIP
                            </motion.p>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}