"use client";

import Spotlight from "./Spotlight";

export default function Exit() {
  return (
    <div
      data-plate="exit"
      className="concrete-base concrete-wash plate-seam ruling-grid relative flex-none w-screen md:w-[min(80vw,52rem)] min-h-screen md:h-full flex flex-col justify-center px-6 md:px-14 py-20 md:py-[14vh] overflow-hidden"
      style={{ "--plate-tint": "rgba(4, 3, 2, 0.94)" } as React.CSSProperties}
    >
      <Spotlight x={50} y={100} size={85} color="rgba(180, 200, 220, 0.09)" />
      <div className="relative z-10">
        <div className="font-mono text-[10px] uppercase tracking-brutal text-bone/60 mb-4 flex items-center gap-3">
          <span className="h-px w-6 bg-bone/30" />
          <span>PLT.08 / OUT</span>
          <span className="text-bone/30">·</span>
          <span className="text-bone/55">Let&apos;s build</span>
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
      </div>

      {/* Colophon pinned to the plate bottom, not the inner content wrapper,
          so it never stacks on top of the social links. */}
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-14 font-mono text-[10px] uppercase tracking-brutal text-bone/25">
        End of floor · © 2026 Laskowski.studio
      </div>
    </div>
  );
}
