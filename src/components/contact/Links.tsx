"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
    FaEnvelope,
    FaCopy,
    FaCheck,
} from "react-icons/fa";

const contacts = [
    {
        number: "01",
        category: "Code",
        name: "GitHub",
        handle: "@sussybungus",
        description: "Check out open-source repositories and what I'm building.",
        href: "https://github.com/sussybungus",
        action: "View profile",
        icon: FaGithub,
        isEmail: false,
    },
    {
        number: "02",
        category: "Professional",
        name: "LinkedIn",
        handle: "Raymond Lin",
        description: "Connect with me professionally and follow career updates.",
        href: "https://www.linkedin.com/in/raymondjiaruilin/",
        action: "Connect",
        icon: FaLinkedinIn,
        isEmail: false,
    },
    {
        number: "03",
        category: "Photography",
        name: "Instagram",
        handle: "@sussy_bungus",
        description:
            "Photos, street stories, and creative snapshots along the way.",
        href: "https://www.instagram.com/sussy_bungus/",
        action: "Follow",
        icon: FaInstagram,
        isEmail: false,
    },
    {
        number: "04",
        category: "Direct",
        name: "Email",
        handle: "toronto4raymond2010@gmail.com",
        description: "Have a project or opportunity? Send me an email anytime.",
        href: "mailto:toronto4raymond2010@gmail.com",
        action: "Send email",
        icon: FaEnvelope,
        isEmail: true,
    },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function ContactLinks() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText("toronto4raymond2010@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
    };

    return (
        <section className="px-6 pb-24">
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
                                        contact.isEmail
                                            ? undefined
                                            : "_blank"
                                    }
                                    rel={
                                        contact.isEmail
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
                                        className="glass-panel flex min-h-[250px] flex-col justify-between rounded-[2.2rem] p-7 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 sm:p-8"
                                    >
                                        {/* Top */}
                                        <div className="flex items-center justify-between">
                                            <span className="font-mono text-xs font-semibold text-neutral-400">
                                                {contact.number}
                                            </span>

                                            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">
                                                {contact.category}
                                            </span>
                                        </div>

                                        {/* Middle */}
                                        <div className="mt-8">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-black/5 bg-white text-neutral-700 shadow-xs transition-colors duration-300 group-hover:text-black">
                                                    <Icon
                                                        size={18}
                                                        aria-hidden="true"
                                                    />
                                                </div>

                                                <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
                                                    {contact.name}
                                                </h2>
                                            </div>

                                            <p className="mt-3 text-sm font-medium text-neutral-700">
                                                {contact.handle}
                                            </p>

                                            <p className="mt-2 max-w-sm text-xs leading-relaxed text-neutral-500">
                                                {contact.description}
                                            </p>
                                        </div>

                                        {/* Bottom Actions */}
                                        <div className="mt-8 flex items-center justify-between border-t border-black/[0.05] pt-4">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-semibold text-neutral-700 group-hover:text-neutral-950">
                                                    {contact.action}
                                                </span>
                                                <span className="text-sm text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:text-black">
                                                    ↗
                                                </span>
                                            </div>

                                            {contact.isEmail && (
                                                <button
                                                    type="button"
                                                    onClick={handleCopyEmail}
                                                    className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-black/10 bg-white/80 px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-2xs backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-white hover:text-black"
                                                    title="Copy email to clipboard"
                                                >
                                                    {copied ? (
                                                        <>
                                                            <FaCheck className="text-emerald-500" />
                                                            <span className="font-semibold text-emerald-600">Copied!</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <FaCopy className="text-neutral-400" />
                                                            <span>Copy Address</span>
                                                        </>
                                                    )}
                                                </button>
                                            )}
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