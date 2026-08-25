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

export default function Hero() {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-8 py-24 text-center md:px-16">

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.75, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative"
      >
        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="rounded-full border border-black/10 bg-black/[0.02] p-2 shadow-sm"
        >
          <div className="relative h-36 w-36 overflow-hidden rounded-full sm:h-44 sm:w-44">
            <Image
              src="/raymond1.jpg"
              alt="Raymond Lin"
              fill
              priority
              sizes="(max-width: 640px) 144px, 176px"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Subtle glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-black blur-3xl"
        />
      </motion.div>

      {/* Main Text */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-10 max-w-3xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="text-xl font-medium text-black/40 sm:text-2xl"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-2 text-5xl font-semibold tracking-[-0.05em] text-black sm:text-6xl md:text-7xl"
        >
          Raymond Lin
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.55,
            duration: 0.6,
          }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black/55 sm:text-xl"
        >
          A curious computer engineering student blending creativity
          with code to bring innovative ideas to life.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.7,
            duration: 0.7,
          }}
          className="mx-auto mt-5 max-w-xl leading-relaxed text-black/40"
        >
          I&apos;m passionate about building things, exploring
          technology, and turning ideas into something real.
        </motion.p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.85,
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-12 flex flex-wrap justify-center gap-10 sm:gap-16"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.9 + index * 0.1,
              duration: 0.5,
            }}
            whileHover={{
              y: -4,
              transition: { duration: 0.2 },
            }}
          >
            <p className="text-2xl font-semibold text-black">
              {stat.value}
            </p>

            <p className="mt-1 text-xs uppercase tracking-wider text-black/40">
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
          delay: 1.15,
          duration: 0.7,
        }}
        className="mt-10 flex max-w-2xl flex-wrap justify-center gap-2"
      >
        {tags.map((tag, index) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.2 + index * 0.08,
              duration: 0.4,
            }}
            whileHover={{
              y: -3,
              scale: 1.03,
              transition: { duration: 0.2 },
            }}
            className="cursor-default rounded-full border border-black/10 bg-black/[0.02] px-4 py-2 text-sm text-black/50"
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 0.8,
        }}
        className="mt-16 text-sm text-black/35"
      >
        <motion.span
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="block text-lg"
        >
          ↓
        </motion.span>

        <p className="mt-1">
          Scroll to explore
        </p>
      </motion.div>
    </section>
  );
}