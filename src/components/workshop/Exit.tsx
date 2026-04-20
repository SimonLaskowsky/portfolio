"use client";

export default function Exit() {
  return (
    <div
      data-plate="exit"
      className="relative flex-none w-screen md:w-[min(80vw,52rem)] min-h-screen md:h-full flex flex-col justify-center px-6 md:px-14 py-20 md:py-[14vh] bg-ink"
    >
      <div className="tracking-brutal text-[11px] uppercase text-moss-glow mb-3">
        08 — Let&apos;s build
      </div>
      <h2
        className="font-serif leading-[0.92] font-normal"
        style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
      >
        Have something
        <br />
        <span className="italic text-moss-glow">worth making?</span>
      </h2>
      <p className="font-serif italic text-concrete/80 mt-6 max-w-lg text-lg leading-relaxed">
        I take on a handful of projects a year. If yours needs weight, shadow,
        and restraint — let&apos;s talk.
      </p>

      <div className="mt-12 flex flex-col gap-5 text-[11px] uppercase tracking-brutal">
        <a
          href="mailto:hello@laskowski.studio"
          data-cursor="hover"
          className="group flex items-center justify-between border border-concrete/20 hover:border-moss-glow px-5 py-4 text-concrete hover:text-moss-glow transition-colors w-[22rem] max-w-full"
        >
          <span>hello@laskowski.studio</span>
          <span className="text-concrete/40 group-hover:text-moss-glow">→</span>
        </a>

        <div className="flex gap-6 text-concrete/60">
          <a
            href="https://github.com/SimonLaskowsky"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="hover:text-moss-glow transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/szymon-laskowski-5b866920a/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="hover:text-moss-glow transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/SimonLaskowsky/interiors"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="hover:text-moss-glow transition-colors"
          >
            Latest work
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 md:left-14 tracking-brutal text-[10px] uppercase text-concrete/30">
        End of floor · © 2026 Laskowski.studio
      </div>
    </div>
  );
}
