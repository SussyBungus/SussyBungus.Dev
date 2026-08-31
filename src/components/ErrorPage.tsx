"use client";

import Link from "next/link";
import { motion } from "motion/react";

type ErrorPageProps = {
    code: string;
    title: string;
    description: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function ErrorPage({
    code,
    title,
    description,
}: ErrorPageProps) {
    return (
        <main className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-6">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.05,
                        },
                    },
                }}
                className="w-full max-w-3xl text-center"
            >
                {/* Error label */}
                <motion.p
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 15,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.5,
                                ease,
                            },
                        },
                    }}
                    className="text-sm font-medium tracking-[0.2em] text-black/35"
                >
                    ERR {code}
                </motion.p>

                {/* Error code */}
                <motion.h1
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 30,
                            scale: 0.96,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: {
                                duration: 0.75,
                                ease,
                            },
                        },
                    }}
                    className="mt-5 text-[clamp(6rem,18vw,13rem)] font-semibold leading-none tracking-[-0.08em]"
                >
                    {code}
                </motion.h1>

                {/* Title */}
                <motion.h2
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 20,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.6,
                                ease,
                            },
                        },
                    }}
                    className="mt-5 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl"
                >
                    {title}
                </motion.h2>

                {/* Description */}
                <motion.p
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 15,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.6,
                                ease,
                            },
                        },
                    }}
                    className="mx-auto mt-4 max-w-md text-base leading-relaxed text-black/50"
                >
                    {description}
                </motion.p>

                {/* Button */}
                <motion.div
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 15,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.6,
                                ease,
                            },
                        },
                    }}
                    className="mt-8"
                >
                    <Link
                        href="/"
                        className="inline-flex rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-transform duration-300 hover:scale-105"
                    >
                        Back Home
                    </Link>
                </motion.div>
            </motion.div>
        </main>
    );
}