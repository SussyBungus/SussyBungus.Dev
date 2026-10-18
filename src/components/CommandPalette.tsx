"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
    FaHome,
    FaUser,
    FaLaptopCode,
    FaCamera,
    FaSlidersH,
    FaEnvelope,
    FaGithub,
    FaCopy,
    FaCheck,
    FaSearch,
} from "react-icons/fa";

interface CommandItem {
    id: string;
    title: string;
    subtitle: string;
    icon: React.ComponentType<{ className?: string }>;
    action: () => void;
    category: "Navigation" | "Actions" | "External";
}

export default function CommandPalette() {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [copied, setCopied] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsOpen((open) => !open);
            }
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const copyEmail = () => {
        navigator.clipboard.writeText("toronto4raymond2010@gmail.com");
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
            setIsOpen(false);
        }, 1200);
    };

    const commands: CommandItem[] = [
        {
            id: "home",
            title: "Home",
            subtitle: "Return to the main page",
            icon: FaHome,
            action: () => {
                router.push("/");
                setIsOpen(false);
            },
            category: "Navigation",
        },
        {
            id: "about",
            title: "About",
            subtitle: "Bio, journey, and technical foundation",
            icon: FaUser,
            action: () => {
                router.push("/about");
                setIsOpen(false);
            },
            category: "Navigation",
        },
        {
            id: "projects",
            title: "Projects",
            subtitle: "View software tools and experiments",
            icon: FaLaptopCode,
            action: () => {
                router.push("/projects");
                setIsOpen(false);
            },
            category: "Navigation",
        },
        {
            id: "photography",
            title: "Photography",
            subtitle: "Camera frames, gear, and visual story",
            icon: FaCamera,
            action: () => {
                router.push("/photography");
                setIsOpen(false);
            },
            category: "Navigation",
        },
        {
            id: "setup",
            title: "Setup & Gear",
            subtitle: "Developer workspace and camera kit",
            icon: FaSlidersH,
            action: () => {
                router.push("/setup");
                setIsOpen(false);
            },
            category: "Navigation",
        },
        {
            id: "contact",
            title: "Contact",
            subtitle: "Send a message or find me online",
            icon: FaEnvelope,
            action: () => {
                router.push("/contact");
                setIsOpen(false);
            },
            category: "Navigation",
        },
        {
            id: "copy-email",
            title: copied ? "Copied to Clipboard!" : "Copy Email",
            subtitle: "toronto4raymond2010@gmail.com",
            icon: copied ? FaCheck : FaCopy,
            action: copyEmail,
            category: "Actions",
        },
        {
            id: "github",
            title: "GitHub Profile",
            subtitle: "@SussyBungus on GitHub",
            icon: FaGithub,
            action: () => {
                window.open("https://github.com/SussyBungus", "_blank");
                setIsOpen(false);
            },
            category: "External",
        },
    ];

    const filtered = commands.filter(
        (cmd) =>
            cmd.title.toLowerCase().includes(search.toLowerCase()) ||
            cmd.subtitle.toLowerCase().includes(search.toLowerCase()) ||
            cmd.category.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            {/* Quick trigger button floating or in navbar */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 p-4 pt-20 backdrop-blur-md sm:pt-28"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: -15 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: -15 }}
                            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            className="glass-panel w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/80 p-4 shadow-2xl backdrop-blur-3xl"
                        >
                            {/* Input bar */}
                            <div className="flex items-center gap-3 border-b border-black/5 px-3 pb-3">
                                <FaSearch className="text-neutral-400" />
                                <input
                                    type="text"
                                    autoFocus
                                    placeholder="Search pages or actions... (Esc to close)"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full bg-transparent text-sm font-medium text-neutral-900 outline-none placeholder:text-neutral-400"
                                />
                                <span className="rounded-md border border-black/10 bg-black/5 px-2 py-0.5 font-mono text-[10px] text-neutral-400">
                                    ESC
                                </span>
                            </div>

                            {/* Commands list */}
                            <div className="mt-2 max-h-[340px] space-y-1 overflow-y-auto py-1">
                                {filtered.length === 0 ? (
                                    <p className="px-4 py-8 text-center text-xs text-neutral-400">
                                        No matching commands found.
                                    </p>
                                ) : (
                                    filtered.map((cmd) => {
                                        const Icon = cmd.icon;
                                        return (
                                            <button
                                                key={cmd.id}
                                                type="button"
                                                onClick={cmd.action}
                                                className="group flex w-full cursor-pointer items-center justify-between rounded-2xl px-3.5 py-2.5 text-left transition-colors hover:bg-black/5"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-black/5 bg-white/60 text-neutral-700 shadow-2xs group-hover:scale-105 transition-transform">
                                                        <Icon className="h-3.5 w-3.5" />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-semibold text-neutral-900">
                                                            {cmd.title}
                                                        </p>
                                                        <p className="text-[11px] text-neutral-500">
                                                            {cmd.subtitle}
                                                        </p>
                                                    </div>
                                                </div>
                                                <span className="font-mono text-[10px] uppercase text-neutral-400">
                                                    {cmd.category}
                                                </span>
                                            </button>
                                        );
                                    })
                                )}
                            </div>

                            {/* Footer hint */}
                            <div className="mt-2 flex items-center justify-between border-t border-black/5 px-3 pt-2 text-[10px] text-neutral-400">
                                <span>Press Cmd+K anytime</span>
                                <span>Sussy Bungus Dev</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
