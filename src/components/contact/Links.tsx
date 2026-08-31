"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
    FaEnvelope,
} from "react-icons/fa";

const contacts = [
    {
        number: "01",
        category: "Code",
        name: "GitHub",
        handle: "@sussybungus",
        description: "Check out what I'm building.",
        href: "https://github.com/sussybungus",
        action: "View profile",
        icon: FaGithub,
    },
    {
        number: "02",
        category: "Professional",
        name: "LinkedIn",
        handle: "Raymond Lin",
        description: "Connect with me professionally.",
        href: "https://www.linkedin.com/in/raymondjiaruilin/",
        action: "Connect",
        icon: FaLinkedinIn,
    },
    {
        number: "03",
        category: "Photography",
        name: "Instagram",
        handle: "@sussy_bungus",
        description:
            "Photos, random moments, and everything in between.",
        href: "https://www.instagram.com/sussy_bungus/",
        action: "Follow",
        icon: FaInstagram,
    },
    {
        number: "04",
        category: "Direct",
        name: "Email",
        handle: "Let's talk",
        description: "Have a project or just want to say hi?",
        href: "mailto:toronot4raymond2010@gmail.com",
        action: "Send email",
        icon: FaEnvelope,
    },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function ContactLinks() {
    return (
        <section className="px-6 pb-24">
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {contacts.map((contact, index) => {
                        const Icon = contact.icon;

                        return (
                            <motion.div
                                key={contact.number}
                                initial={{
                                    opacity: 0,
                                    y: 30,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.15,
                                }}
                                transition={{
                                    duration: 0.65,
                                    delay: index * 0.08,
                                    ease,
                                }}
                            >
                                <Link
                                    href={contact.href}
                                    target={
                                        contact.href.startsWith("mailto:")
                                            ? undefined
                                            : "_blank"
                                    }
                                    rel={
                                        contact.href.startsWith("mailto:")
                                            ? undefined
                                            : "noopener noreferrer"
                                    }
                                    className="group block h-full"
                                >
                                    <motion.div
                                        whileHover={{
                                            y: -5,
                                        }}
                                        transition={{
                                            duration: 0.25,
                                            ease: "easeOut",
                                        }}
                                        className="flex min-h-[240px] flex-col justify-between rounded-[2rem] border border-black/10 bg-black/[0.015] p-7 transition-colors duration-300 hover:bg-black/[0.035] sm:p-8"
                                    >
                                        {/* Top */}
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-medium tracking-[0.2em] text-black/30">
                                                {contact.number}
                                            </span>

                                            <span className="text-xs font-medium uppercase tracking-[0.15em] text-black/35">
                                                {contact.category}
                                            </span>
                                        </div>

                                        {/* Middle */}
                                        <div className="mt-10">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-white text-black/60 transition-colors duration-300 group-hover:text-black">
                                                    <Icon
                                                        size={17}
                                                        aria-hidden="true"
                                                    />
                                                </div>

                                                <h2 className="text-2xl font-medium tracking-[-0.04em] sm:text-3xl">
                                                    {contact.name}
                                                </h2>
                                            </div>

                                            <p className="mt-3 text-sm font-medium text-black/55">
                                                {contact.handle}
                                            </p>

                                            <p className="mt-3 max-w-sm text-sm leading-relaxed text-black/40">
                                                {contact.description}
                                            </p>
                                        </div>

                                        {/* Bottom */}
                                        <div className="mt-8 flex items-center justify-between">
                                            <span className="text-sm font-medium text-black/60">
                                                {contact.action}
                                            </span>

                                            <span className="text-lg text-black/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black">
                                                ↗
                                            </span>
                                        </div>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}