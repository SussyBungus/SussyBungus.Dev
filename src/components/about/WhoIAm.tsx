import Image from "next/image";

export default function WhoIAm() {
    return (
        <section className="px-6 py-24">
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-black/5">
                    <Image
                        src="/raymond.jpg"
                        alt="Raymond"
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <p className="text-xs font-medium tracking-[0.2em] text-black/35">
                        01 / WHO I AM
                    </p>
                    <h2 className="mt-6 text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">
                        I'm Raymond — a developer,
                        photographer, and someone who
                        likes making things.
                    </h2>
                    <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-black/50 sm:text-lg">
                        <p>
                            I enjoy building things from scratch, experimenting
                            with new ideas, and learning how things work.
                        </p>
                        <p>
                            Outside of code, I'm usually taking photos,
                            playing sports, or finding something new to
                            get obsessed with.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}