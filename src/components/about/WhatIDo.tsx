const things = [
    {
        number: "01",
        title: "software",
        description: "I build websites, apps, and random ideas that I think would be cool to make.",
    },
    {
        number: "02",
        title: "Photography",
        description: "I take photos of anything when ever i hangout or go on vacation.",
    },
    {
        number: "03",
        title: "Sports",
        description: "I play badminton, run, compete in track, and generally enjoy staying active.",
    },
]

export default function WhatIDo() {
    return (
        <section className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mb-14">
                    <p className="text-xs font-medium tracking-[0.2em] text-black/35">
                        04 /WHat i do
                    </p>
                    <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                        things i spend my free ime doing
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
                    {things.map((thing) => (
                        <div key={thing.number}>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="text-xs font-medium tracking-[0.2em] text-black/35">
                                    {thing.number}
                                </span>

                                <div className="h-px flex-1 bg-black/10" />
                            </div>

                            <h3 className="text-xl font-medium tracking-[-0.02em]">
                                {thing.title}
                            </h3>

                            <p className="mt-4 text-sm leading-relaxed text-black/50 sm:text-base">
                                {thing.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}