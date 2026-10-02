"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const links = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Photography", href: "/photography" },
    { name: "Setup", href: "/setup" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
            <nav className="mx-auto max-w-5xl">
                {/* Main glossy glass navbar */}
                <div className="flex items-center justify-between rounded-full border border-white/80 bg-white/70 px-5 py-2 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.06),inset_0_1px_1px_0_rgba(255,255,255,0.95)] backdrop-blur-2xl transition-all duration-300 sm:px-6">
                    {/* Logo */}
                    <Link
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-center gap-2"
                    >
                        <motion.span
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 25,
                            }}
                            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold tracking-tight text-neutral-900"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                            </span>
                            Sussy Bungus.
                        </motion.span>
                    </Link>

                    {/* Desktop links with sliding glass pill */}
                    <div className="hidden items-center gap-1 sm:flex">
                        {links.map((link) => {
                            const active = pathname === link.href;

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="relative px-3.5 py-1.5 text-xs font-medium tracking-tight transition-colors duration-200"
                                >
                                    {active && (
                                        <motion.div
                                            layoutId="active-pill"
                                            transition={{
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                            className="absolute inset-0 rounded-full border border-black/[0.08] bg-black/[0.05] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)]"
                                        />
                                    )}
                                    <span
                                        className={`relative z-10 ${
                                            active
                                                ? "font-semibold text-neutral-950"
                                                : "text-neutral-500 hover:text-neutral-900"
                                        }`}
                                    >
                                        {link.name}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile menu toggle */}
                    <motion.button
                        type="button"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((open) => !open)}
                        whileTap={{ scale: 0.9 }}
                        className="rounded-full p-2 text-neutral-700 transition-colors hover:bg-black/5 sm:hidden"
                    >
                        <motion.div
                            animate={menuOpen ? "open" : "closed"}
                            className="flex h-5 w-5 flex-col justify-center gap-1.5"
                        >
                            <motion.span
                                variants={{
                                    closed: { rotate: 0, y: 0 },
                                    open: { rotate: 45, y: 4 },
                                }}
                                className="block h-px w-5 bg-current"
                            />
                            <motion.span
                                variants={{
                                    closed: { opacity: 1 },
                                    open: { opacity: 0 },
                                }}
                                className="block h-px w-5 bg-current"
                            />
                            <motion.span
                                variants={{
                                    closed: { rotate: 0, y: 0 },
                                    open: { rotate: -45, y: -4 },
                                }}
                                className="block h-px w-5 bg-current"
                            />
                        </motion.div>
                    </motion.button>
                </div>

                {/* Mobile glass menu dropdown */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.97 }}
                            transition={{
                                duration: 0.22,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="mt-2 overflow-hidden rounded-3xl border border-white/80 bg-white/85 p-3 shadow-2xl backdrop-blur-2xl sm:hidden"
                        >
                            {links.map((link, index) => {
                                const active = pathname === link.href;

                                return (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -8 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: index * 0.03,
                                            duration: 0.2,
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            <div
                                                className={`rounded-2xl px-4 py-2.5 text-sm font-medium transition-colors ${
                                                    active
                                                        ? "bg-black/5 font-semibold text-neutral-950"
                                                        : "text-neutral-500 hover:bg-black/5 hover:text-neutral-900"
                                                }`}
                                            >
                                                {link.name}
                                            </div>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}