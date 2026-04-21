"use client";

import Spotlight from "./Spotlight";

type Props = {
  onEnter: () => void;
};

export default function Entrance({ onEnter }: Props) {
  return (
    <div
      data-plate="entrance"
      className="plate-seam ruling-grid relative flex-none min-h-screen md:h-full w-screen flex flex-col justify-center py-24 md:py-28 pl-6 pr-[8vw] md:pl-14 overflow-hidden bg-black"
    >
      {/* Full-bleed brutalist interior photograph — a concrete stair in
          dramatic side light. This is the moment you walk into the villa. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/img/entrance-hero.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "50% 40%" }}
      />
      {/* Darkening wash — asymmetric so the left reads as content space
          and the right keeps the architectural depth readable. */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(4,3,2,0.88) 0%, rgba(4,3,2,0.72) 42%, rgba(4,3,2,0.3) 82%, rgba(4,3,2,0.05) 100%)",
        }}
      />
      {/* Bottom vignette for the scroll-hint strip */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[30%] pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(4,3,2,0.7), transparent)",
        }}
      />

      <Spotlight x={15} y={10} size={72} color="rgba(220, 230, 245, 0.15)" />

      <div className="relative max-w-[65rem] z-10">
        <div className="font-mono text-[10px] uppercase tracking-brutal text-bone/70 mb-6 flex items-center gap-3">
          <span className="h-px w-6 bg-bone/40" />
          <span>PLT.01 / ENT</span>
          <span className="text-bone/40">·</span>
          <span className="text-bone/70">Enter the workshop</span>
        </div>
        <h1
          className="font-display leading-[0.88]"
          style={{
            fontSize: "clamp(3rem, 9vw, 8rem)",
            fontWeight: 800,
            letterSpacing: "-0.045em",
            color: "#ffffff",
            mixBlendMode: "difference",
          }}
        >
          A studio
          <br />
          of one.
          <br />
          <span className="font-light" style={{ color: "#ddd8cc" }}>
            Walk the floor.
          </span>
        </h1>
        <p
          className="font-body font-light mt-10 max-w-xl text-[clamp(0.95rem,1.3vw,1.15rem)] leading-relaxed"
          style={{
            color: "rgba(242, 239, 232, 0.85)",
            textShadow: "0 2px 16px rgba(0,0,0,0.6)",
          }}
        >
          Laskowski.studio is Szymon Laskowski, building web experiences that
          treat the page as a space. Scroll down — the floor unfolds to the
          right. Each workstation is a project; each chip is a detail worth
          clicking.
        </p>
        <div className="mt-10 flex items-center gap-5 font-mono text-[10px] uppercase tracking-brutal">
          <button
            onClick={onEnter}
            data-cursor="hover"
            className="border border-bone/40 hover:border-bone hover:bg-white/10 px-5 py-3 text-bone transition-colors backdrop-blur-sm"
          >
            Walk the floor →
          </button>
          <a
            href="mailto:hello@laskowski.studio"
            data-cursor="hover"
            className="text-bone/70 hover:text-bone transition-colors"
          >
            or write directly
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-6 md:left-14 flex items-center gap-3 font-mono text-[10px] uppercase tracking-brutal text-bone/60 z-10">
        <span>Scroll down</span>
        <div className="h-px w-10 bg-bone/40" />
        <span>Travel right</span>
      </div>
    </div>
  );
}
