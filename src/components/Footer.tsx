"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faInstagram,
    faLinkedin,
    faVsco,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    const scrollToTop = () => {
        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <footer className="relative mt-20 border-t border-black/[0.06] bg-white/40 px-6 py-10 backdrop-blur-md">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    {/* Brand */}
                    <div className="flex flex-col items-center gap-1 sm:items-start">
                        <Link
                            href="/"
                            className="text-xl font-bold tracking-tight text-neutral-900 transition-opacity hover:opacity-75"
                        >
                            Sussy Bungus.
                        </Link>
                        <p className="text-xs text-neutral-500">
                            Raymond Lin &bull; Student, Developer &amp; Creator
                        </p>
                    </div>

                    {/* Social badges with glossy hover */}
                    <div className="flex items-center gap-2.5">
                        <a
                            href="https://github.com/SussyBungus"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white/70 text-sm text-neutral-700 shadow-xs backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-black/15 hover:bg-white hover:text-black hover:shadow-md"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>

                        <a
                            href="https://www.instagram.com/sussy_bungus/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white/70 text-sm text-neutral-700 shadow-xs backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-black/15 hover:bg-white hover:text-black hover:shadow-md"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/raymondjiaruilin/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white/70 text-sm text-neutral-700 shadow-xs backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-black/15 hover:bg-white hover:text-black hover:shadow-md"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>

                        <a
                            href="https://vsco.co/sussybungus/gallery"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="VSCO"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white/70 text-sm text-neutral-700 shadow-xs backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-black/15 hover:bg-white hover:text-black hover:shadow-md"
                        >
                            <FontAwesomeIcon icon={faVsco} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-black/[0.04] pt-6 text-xs text-neutral-400 sm:flex-row">
                    <p>
                        &copy; 2022 &ndash; {new Date().getFullYear()} Sussy Bungus &bull; Toronto (YYZ)
                    </p>

                    <button
                        type="button"
                        onClick={scrollToTop}
                        className="group inline-flex items-center gap-1.5 font-medium text-neutral-600 transition-colors hover:text-neutral-950"
                    >
                        <span>Back to top</span>
                        <span className="transition-transform duration-200 group-hover:-translate-y-0.5">
                            &uarr;
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}