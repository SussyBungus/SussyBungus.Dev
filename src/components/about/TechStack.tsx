const stack = [
    {
        category: "Frontend",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "React Native",
        ],
    },
    {
        category: "Backend",
        technologies: [
            "Node.js",
            "Python",
            "Supabase",
            "SQL",
        ],
    },
    {
        category: "Tools",
        technologies: [
            "Git",
            "GitHub",
            "VS Code",
            "Vercel",
            "Expo",
            "Figma",
        ],
    },
    {
        category: "Other",
        technologies: [
            "C",
            "C++",
            "Java",
            "Bash",
        ],
    },
];

export default function TechStack() {
    return (
        <section className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12">
                    <p className="text-xs font-medium tracking-[0.2rem] text-black/35">
                        03 / Tech Stack
                    </p>

                    <h2 className="mt-4 max-w-xl text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                        Technologies I use and learned
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-black/10 bg-black/10 sm:grid-cols-2">
                    {stack.map((group) => (
                        <div
                            key={group.category}
                            className="bg-white p-8 sm:p-10"
                        >
                            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black/40">
                                {group.category}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {group.technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="rounded-full border border-black/10 bg-black/[0.02] px-4 py-2 text-sm text-black/70"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}