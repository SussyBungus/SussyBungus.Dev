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
];

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
            <nav className="mx-auto max-w-5xl">
                {/* Main navbar */}
                <div className="flex items-center justify-between rounded-2xl border border-black/5 bg-white/80 px-8 py-3 shadow-sm backdrop-blur-xl">
                    {/* Logo */}
                    <Link href="/" onClick={() => setMenuOpen(false)}>
                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 25,
                            }}
                            className="inline-block rounded-xl px-3 py-2 text-sm font-semibold tracking-tight"
                        >
                            Sussy Bungus.
                        </motion.span>
                    </Link>

                    {/* Desktop links */}
                    <div className="hidden items-center gap-4 sm:flex">
                        {links.map((link) => {
                            const active = pathname === link.href;

                            return (
                                <Link key={link.href} href={link.href}>
                                    <motion.span
                                        whileHover={{
                                            scale: active ? 1.02 : 1.08,
                                        }}
                                        whileTap={{ scale: 0.96 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 25,
                                        }}
                                        className={`inline-block rounded-xl px-4 py-2 text-sm transition-colors ${
                                            active
                                                ? "bg-black/5 text-black"
                                                : "text-black/50 hover:bg-black/5 hover:text-black"
                                        }`}
                                    >
                                        {link.name}
                                    </motion.span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile menu button */}
                    <motion.button
                        type="button"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((open) => !open)}
                        whileTap={{ scale: 0.9 }}
                        className="rounded-xl p-2 text-black/60 transition-colors hover:bg-black/5 hover:text-black sm:hidden"
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

                {/* Mobile menu */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.98 }}
                            transition={{
                                duration: 0.2,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="mt-2 overflow-hidden rounded-2xl border border-black/5 bg-white/90 p-2 shadow-sm backdrop-blur-xl sm:hidden"
                        >
                            {links.map((link, index) => {
                                const active = pathname === link.href;

                                return (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -8 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: index * 0.04,
                                            duration: 0.25,
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            <motion.div
                                                whileTap={{ scale: 0.98 }}
                                                className={`rounded-xl px-4 py-3 text-sm transition-colors ${
                                                    active
                                                        ? "bg-black/5 text-black"
                                                        : "text-black/50 hover:bg-black/5 hover:text-black"
                                                }`}
                                            >
                                                {link.name}
                                            </motion.div>
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