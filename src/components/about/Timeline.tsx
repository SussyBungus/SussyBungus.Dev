const codingTimeline = [
    {
        year: "2019",
        title: "",
        description: "",
    },
    {
        year: "2021",
        title: "",
        description: "",
    },
    {
        year: "2023",
        title: "",
        description: "",
    },
    {
        year: "2025",
        title: "",
        description: "",
    },
];

const lifeTimeline = [
    {
        year: "2020",
        title: "",
        description: "",
    },
    {
        year: "2023",
        title: "",
        description: "",
    },
    {
        year: "2024",
        title: "",
        description: "",
    },
    {
        year: "2026",
        title: "",
        description: "",
    },
];

function TimelineColumn({
    number,
    title,
    items,
}: {
    number: string;
    title: string;
    items: typeof codingTimeline;
}) {
    return (
        <div>
            <div className="mb-10 flex items-center gap-3">
                <span className="text-xs font-medium tracking-[0.2em] text-black/35">
                    {number}
                </span>

                <h3 className="text-sm font-semibold uppercase tracking-[0.15em]">
                    {title}
                </h3>
            </div>

            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[5px] top-2 bottom-2 w-px bg-black/10" />

                <div className="space-y-10">
                    {items.map((item) => (
                        <div
                            key={item.year}
                            className="relative pl-8"
                        >
                            {/* Dot */}
                            <div className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border-2 border-white bg-black ring-1 ring-black/10" />

                            <p className="text-xs font-medium tracking-[0.12em] text-black/35">
                                {item.year}
                            </p>

                            <h4 className="mt-2 text-lg font-medium tracking-[-0.02em]">
                                {item.title}
                            </h4>

                            <p className="mt-2 max-w-md text-sm leading-relaxed text-black/50">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Timeline() {
    return (
        <section className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20">
                    <TimelineColumn
                        number="01"
                        title="Coding"
                        items={codingTimeline} />
                    <TimelineColumn
                        number="02"
                        title="Life"
                        items={lifeTimeline} />

                </div>
            </div>
        </section>
    )
}