"use client";

export default function Exit() {
  return (
    <div
      data-plate="exit"
      className="relative flex-none w-screen md:w-[min(80vw,52rem)] min-h-screen md:h-full flex flex-col justify-center px-6 md:px-14 py-20 md:py-[14vh] bg-ink overflow-hidden"
    >
      {/* Giant oversized END typography as an architectural element */}
      <div
        className="absolute -right-[6%] bottom-[4%] font-display leading-none pointer-events-none select-none"
        style={{
          fontSize: "clamp(12rem, 34vw, 40rem)",
          fontWeight: 900,
          letterSpacing: "-0.06em",
          color: "#ffffff",
          opacity: 0.035,
        }}
      >
        END.
      </div>

      <div className="relative z-10">
        <div className="font-mono text-[10px] uppercase tracking-brutal text-bone/60 mb-4">
          08 — Let&apos;s build
        </div>
        <h2
          className="font-display leading-[0.88]"
          style={{
            fontSize: "clamp(3rem, 7vw, 6.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.045em",
          }}
        >
          Have something
          <br />
          <span className="font-light text-bone/55">worth making?</span>
        </h2>
        <p className="font-body font-light text-bone/75 mt-6 max-w-lg text-lg leading-relaxed">
          I take on a handful of projects a year. If yours needs weight,
          shadow, and restraint — let&apos;s talk.
        </p>

        <div className="mt-12 flex flex-col gap-5 font-mono text-[10px] uppercase tracking-brutal">
          <a
            href="mailto:hello@laskowski.studio"
            data-cursor="hover"
            className="group flex items-center justify-between glass hover:bg-white/10 px-5 py-4 text-bone transition-colors w-[22rem] max-w-full"
          >
            <span>hello@laskowski.studio</span>
            <span className="text-bone/50 group-hover:text-bone">→</span>
          </a>

          <div className="flex gap-6 text-bone/60">
            <a
              href="https://github.com/SimonLaskowsky"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="hover:text-bone transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/szymon-laskowski-5b866920a/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="hover:text-bone transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/SimonLaskowsky/interiors"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="hover:text-bone transition-colors"
            >
              Latest work
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 font-mono text-[10px] uppercase tracking-brutal text-bone/25 mt-16">
          End of floor · © 2026 Laskowski.studio
        </div>
      </div>
    </div>
  );
}
