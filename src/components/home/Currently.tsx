export default function Currently() {
    return (
        <section className="px-6 py-32">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16">
                    <p className="text-sm font-medium text-black/40">02 / Currently</p>

                    <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                        Currently
                    </h2>

                    <p className="mt-5 max-w-lg text-lg leading-relaxed text-black/50">
                        a few things I'm currently working on
                    </p>
                </div>

                <div className="relative min-h-[520px] overflow-hidden rounded-3xl border border-black/10">
                    <div className="absolute left-[5%] top-[8%] w-52">
                        <div className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm">
                            <div className="flex h-32 items-center justify-center rounded-2xl bg-black/[0.03]">
                                <span className="text-5xl">📷</span>
                            </div>

                            <p className="mt-5 text-xs font-medium uppercase tracking-widest text-black/35">
                                Camera
                            </p>

                            <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em]">
                                photography
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-black/45">
                                taking photos and trying to get better at seeing things.
                            </p>
                        </div>
                    </div>

                    <div className="absolute right-[33%] top-[18%] w-56">
                        <div className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm">
                            <div className="flex h-32 items-center justify-center rounded-2xl bg-black/[0.03]">
                                <span className="font-mono text-4xl">&lt;/&gt;</span>
                            </div>

                            <p className="mt-5 text-xs font-medium uppercase tracking-widest text-black/35">
                                Building
                            </p>

                            <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em]">
                                web projects
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-black/45">
                                experimenting with Next.js and making things I actually want to
                                use.
                            </p>
                        </div>
                    </div>

                    <div className="absolute bottom-[8%] left-[27%] w-52">
                        <div className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm">
                            <div className="flex h-32 items-center justify-center rounded-2xl bg-black/[0.03]">
                                <span className="text-5xl">🏃</span>
                            </div>

                            <p className="mt-5 text-xs font-medium uppercase tracking-widest text-black/35">
                                Training
                            </p>

                            <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em]">
                                running
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-black/45">
                                getting back into shape and working on my 5K.
                            </p>
                        </div>
                    </div>

                    <div className="absolute bottom-[12%] right-[12%] w-52">
                        <div className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm">
                            <div className="flex h-32 items-center justify-center rounded-2xl bg-black/[0.03]">
                                <span className="text-5xl">💻</span>
                            </div>

                            <p className="mt-5 text-xs font-medium uppercase tracking-widest text-black/35">
                                Learning
                            </p>

                            <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em]">
                                computer science
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-black/45">
                                learning new things and building random projects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}