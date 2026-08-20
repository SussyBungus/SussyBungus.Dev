import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="min-h-screen px-6 pt-24">
            <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-6xl grid-cols-1 items-start gap-12 md:grid-cols-[0.9fr_1.1fr]">
                {/* Left */}
                <div>
                    <p className="mb-4 text-sm font-medium text-black/45">hey, i'm</p>

                    <h1 className="text-6xl font-semibold tracking-[-0.05em] sm:text-7xl lg:text-8xl">
                        Raymond Lin.
                    </h1>

                    <p className="mt-7 max-w-lg text-lg leading-relaxed text-black/55 sm:text-xl">
                        I build things on the internet, take photos, and turn random ideas
                        into projects.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-3">
                        <Link
                            href="/projects"
                            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
                        >
                            projects
                        </Link>

                        <Link
                            href="/about"
                            className="rounded-full border border-black/10 bg-black/5 px-6 py-3 text-sm font-medium transition-colors hover:bg-black/10"
                        >
                            about me
                        </Link>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <div className="relative">

                        <div className="relative h-[340px] w-[520px] rounded-[2.5rem] bg-neutral-950 p-5 shadow-2xl">

                            <div className="flex items-center justify-between px-2">
                                <span className="text-[10px] font-semibold tracking-[0.25em] text-white/40">
                                    RAYMOND
                                </span>

                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-red-500" />
                                    <span className="text-[10px] tracking-widest text-white/40">
                                        REC
                                    </span>
                                </div>
                            </div>
                            <div className="relative mt-5 h-[245px] overflow-hidden rounded-2xl border border-white/10 bg-black">
                                <Image
                                    src="/raymond.jpg"
                                    alt="Photo by Raymond"
                                    fill
                                    priority
                                    className="object-cover"
                                />

                                <div className="absolute inset-0 bg-black/10" />

                                <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 border border-white/80">
                                    <span className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                                </div>

                                <div className="absolute left-4 right-4 top-4 flex justify-between text-[10px] font-medium text-white drop-shadow">
                                    <span>AF-S</span>
                                    <span>1/250</span>
                                </div>

                                <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] font-medium text-white drop-shadow">
                                    <span>35mm</span>
                                    <span>F2.8</span>
                                    <span>ISO 400</span>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-between px-2">

                                <div className="flex gap-2">
                                    <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5" />
                                    <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5" />
                                </div>

                                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/10">
                                    <div className="h-8 w-8 rounded-full bg-white/90" />
                                </div>

                            </div>

                            <div className="absolute bottom-5 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-white/10" />
                        </div>

                        <div className="absolute -bottom-3 left-1/2 h-6 w-24 -translate-x-1/2 rounded-b-xl bg-neutral-900 shadow-lg" />
                    </div>
                </div>


            </div>
        </section>
    );
}