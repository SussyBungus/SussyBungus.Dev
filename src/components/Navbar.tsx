"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Photography", href: "/photography" },
    { name: "Setup", href: "/setup" },

]
export default function Navbar() {
    const pathName = usePathname();
    return (
        <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
            <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-2xl border border-black/5 bg-white/80 px-8 py-3 shadow-sm backdrop-blur-xl">
                <Link href="/" className="rounded-xl px-3 py-2 text-sm font-semibold tracking-tight transition-opacity hover:opacity-60 scale-120">Sussy Bungus.</Link>
                <div className="hidden items-center gap-1 sm:flex">
                    {links.map((link) => {
                        const active = pathName === link.href;
                        return (
                            <Link key={link.href} href={link.href} className={`rounded-xl px-4 py-2 text-sm transition-all ${active
                                ? "bg-black/5 text-black"
                                : "text-black/50 hover:bg-black/5 hover:text-black scale-110"
                                }`}>{link.name} </Link>
                        )
                    })}

                </div>
                <button type="button" aria-label="Open menu" className="rounded-xl p-2 text-black/60 transition-colors hover:bg-black/5 hover:text-black sm:hidden">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M4 6h16" />
                        <path d="M4 12h16" />
                        <path d="M4 18h16" />
                    </svg>
                </button>
            </nav>
        </header>

    )
}