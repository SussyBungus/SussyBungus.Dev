import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-8 py-24 text-center md:px-16">
      <div className="relative">
        <div className="rounded-full border border-black/10 bg-black/[0.02] p-2 shadow-sm">
          <div className="relative h-36 w-36 overflow-hidden rounded-full sm:h-44 sm:w-44">
            <Image
              src="/raymond1.jpg"
              alt="Raymond Lin"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="mt-10 max-w-3xl">
        <p className="text-xl font-medium text-black/40 sm:text-2xl">
          Hello, I&apos;m
        </p>

        <h1 className="mt-2 text-5xl font-semibold tracking-[-0.05em] text-black sm:text-6xl md:text-7xl">
          Raymond Lin
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black/55 sm:text-xl">
          A curious computer engineering student blending creativity with code to
          bring innovative ideas to life.
        </p>

        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-black/40">
          I&apos;m passionate about building things, exploring technology, and
          turning ideas into something real.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-10 sm:gap-16">
        <div>
          <p className="text-2xl font-semibold text-black">5+</p>
          <p className="mt-1 text-xs uppercase tracking-wider text-black/40">
            Years Coding
          </p>
        </div>

        <div>
          <p className="text-2xl font-semibold text-black">10+</p>
          <p className="mt-1 text-xs uppercase tracking-wider text-black/40">
            Projects Built
          </p>
        </div>

        <div>
          <p className="text-2xl font-semibold text-black">5+</p>
          <p className="mt-1 text-xs uppercase tracking-wider text-black/40">
            Leadership Roles
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        <span className="rounded-full border border-black/10 bg-black/[0.02] px-4 py-2 text-sm text-black/50">
          🎓 Student Developer
        </span>

        <span className="rounded-full border border-black/10 bg-black/[0.02] px-4 py-2 text-sm text-black/50">
          📷 Photographer
        </span>

        <span className="rounded-full border border-black/10 bg-black/[0.02] px-4 py-2 text-sm text-black/50">
          💡 Problem Solver
        </span>

        <span className="rounded-full border border-black/10 bg-black/[0.02] px-4 py-2 text-sm text-black/50">
          🏸 Athlete
        </span>
      </div>

      <div className="mt-16 text-sm text-black/35">
        <span className="text-lg">↓</span>
        <p className="mt-1">Scroll to explore</p>
      </div>
    </section>
  );
}