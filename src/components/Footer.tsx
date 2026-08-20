"use client"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faVsco } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="bg-white px-4 py-5 text-center text-black">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-wrap items-center justify-between border-b border-black/15 px-2 pb-4 md:px-4">
                    <Link
                        href="/"
                        className="text-[1.7rem] font-bold tracking-[-0.03em]"
                    >
                        Sussy Bungus.
                    </Link>

                    <div className="mt-1 flex items-center justify-center gap-4">
                        <a
                            href="https://github.com/SussyBungus"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="text-[1.3rem] transition-all duration-300 hover:scale-105 hover:text-black/50"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>

                        <a
                            href="https://www.instagram.com/sussy_bungus/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="text-[1.3rem] transition-all duration-300 hover:scale-105 hover:text-black/50"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/raymondjiaruilin/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="text-[1.3rem] transition-all duration-300 hover:scale-105 hover:text-black/50"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a
                            href="https://vsco.co/sussybungus/gallery"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Vsco"
                            className="text-[1.3rem] transition-all duration-300 hover:scale-105 hover:text-black/50"
                        >
                            <FontAwesomeIcon icon={faVsco} />
                        </a>

                    </div>
                </div>

                <div className="mt-3 flex items-center justify-center gap-3 text-xs text-black/50">
                    <span>Sussy Bungus &copy; 2022 – {new Date().getFullYear()}</span>
                    <span>&bull;</span>
                    <span>YYZ</span>
                    <span>&bull;</span>
                    <a href="#" className="transition-opacity hover:opacity-50">
                        Back To Top
                    </a>
                </div>
            </div>
        </footer>
    );
}