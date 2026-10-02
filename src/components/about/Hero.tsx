"use client";

import Image from "next/image";
import { motion } from "motion/react";

const stats = [
  { value: "5+", label: "Years Coding" },
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "Leadership Roles" },
];

const tags = [
  "🎓 Student Developer",
  "📷 Photographer",
  "💡 Problem Solver",
  "🏸 Athlete",
];

export default function AboutHero() {
  return (
    <section className="flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-8 pt-32 pb-20 text-center md:px-16">
      {/* Profile Image with Glossy Specular Ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative"
      >
        <div className="glass-panel relative rounded-full p-2 shadow-2xl">
          <div className="relative h-36 w-36 overflow-hidden rounded-full sm:h-44 sm:w-44">
            <Image
              src="/raymond1.jpg"
              alt="Raymond Lin"
              fill
              priority
              sizes="(max-width: 640px) 144px, 176px"
              className="object-cover"
            />
            {/* Specular glare */}
            <div className="glass-lens-glare pointer-events-none absolute inset-0 opacity-40" />
          </div>
        </div>

        {/* Ambient subtle backdrop glow */}
        <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-blue-100/30 blur-2xl" />
      </motion.div>

      {/* Main Text */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-8 max-w-3xl"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
          Hello, I&apos;m
        </p>

        <h1 className="mt-2 text-5xl font-extrabold tracking-[-0.05em] text-neutral-950 sm:text-6xl md:text-7xl">
          Raymond Lin
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
          A computer engineering student blending creativity with code to build practical, aesthetic digital products.
        </p>
      </motion.div>

      {/* Stats with Glass Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.45,
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5 + index * 0.08,
              duration: 0.5,
            }}
            whileHover={{
              y: -3,
              transition: { duration: 0.2 },
            }}
            className="glass-panel rounded-2xl px-6 py-3.5 shadow-xs"
          >
            <p className="text-2xl font-bold text-neutral-950">
              {stat.value}
            </p>
            <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.7,
          duration: 0.6,
        }}
        className="mt-8 flex max-w-2xl flex-wrap justify-center gap-2"
      >
        {tags.map((tag) => (
          <span
            key={tag}
            className="glass-pill cursor-default rounded-full px-4 py-2 text-xs font-medium text-neutral-700 shadow-2xs transition-colors hover:text-black"
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </section>
  );
}