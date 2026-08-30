"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const cards = [
    {
        icon: "📷",
        category: "Camera",
        title: "photography",
        description:
            "taking photos and trying to get better at seeing things.",
        rotate: -2,
        desktop: "md:left-[4%] md:top-[7%]",
        width: "md:w-56",
    },
    {
        icon: "</>",
        category: "Building",
        title: "web projects",
        description:
            "experimenting with Next.js and making things I actually want to use.",
        rotate: 2,
        desktop: "md:right-[4%] md:top-[9%]",
        width: "md:w-56",
    },
    {
        icon: "🏃",
        category: "Training",
        title: "running",
        description:
            "getting back into shape and working on my 5K.",
        rotate: -2,
        desktop: "md:left-[13%] md:bottom-[7%]",
        width: "md:w-56",
    },
    {
        icon: "💻",
        category: "Learning",
        title: "computer science",
        description:
            "learning new things and building random projects.",
        rotate: 2,
        desktop: "md:right-[13%] md:bottom-[8%]",
        width: "md:w-56",
    },
];

export default function Currently() {
    return (
        <section className="w-full overflow-hidden px-6 py-24">
            <div className="mx-auto w-full max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.7,
                        ease,
                    }}
                    className="mb-14"
                >
                    <p className="text-sm font-medium text-black/40">
                        02 / Currently
                    </p>

                    <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                        Currently
                    </h2>

                    <p className="mt-5 max-w-lg text-lg leading-relaxed text-black/50">
                        a few things I'm currently working on
                    </p>
                </motion.div>

                {/* Canvas */}
                <div className="relative w-full overflow-hidden rounded-3xl border border-black/10 bg-black/[0.015] p-4 sm:p-6 md:min-h-[560px] md:p-0">
                    {/* Background dots */}
                    <div className="pointer-events-none absolute inset-0 hidden opacity-[0.025] md:block">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle, black 1px, transparent 1px)",
                                backgroundSize: "24px 24px",
                            }}
                        />
                    </div>

                    {/* Cards */}
                    <div className="relative grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:absolute md:inset-0 md:block">
                        {cards.map((card, index) => (
                            <motion.div
                                key={card.title}
                                initial={{
                                    opacity: 0,
                                    y: 35,
                                    scale: 0.95,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.15,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease,
                                }}
                                whileHover={{
                                    y: -8,
                                    rotate: 0,
                                    scale: 1.025,
                                    transition: {
                                        duration: 0.25,
                                    },
                                }}
                                className={`
                                    relative
                                    min-w-0
                                    w-full
                                    ${card.width}
                                    md:absolute
                                    ${card.desktop}
                                    z-10
                                `}
                            >
                                <div
                                    className="w-full min-w-0 rounded-3xl border border-black/10 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-xl md:rotate-[var(--rotation)]"
                                    style={{
                                        "--rotation": `${card.rotate}deg`,
                                    } as React.CSSProperties}
                                >
                                    {/* Icon */}
                                    <div className="flex h-28 w-full items-center justify-center overflow-hidden rounded-2xl bg-black/[0.03] sm:h-32">
                                        <motion.span
                                            whileHover={{ scale: 1.1 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 15,
                                            }}
                                            className={
                                                card.icon === "</>"
                                                    ? "font-mono text-4xl"
                                                    : "text-5xl"
                                            }
                                        >
                                            {card.icon}
                                        </motion.span>
                                    </div>

                                    {/* Category */}
                                    <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.18em] text-black/35">
                                        {card.category}
                                    </p>

                                    {/* Title */}
                                    <h3 className="mt-2 break-words text-xl font-semibold tracking-[-0.03em]">
                                        {card.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-2 break-words text-sm leading-relaxed text-black/45">
                                        {card.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Center marker */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.8,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.65,
                            duration: 0.6,
                            ease,
                        }}
                        className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex"
                    >
                        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-black/10 bg-white/80 text-center shadow-sm backdrop-blur">
                            <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-black/35">
                                right now
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}