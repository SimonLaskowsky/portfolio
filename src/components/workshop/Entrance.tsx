"use client";

import dynamic from "next/dynamic";
import Spotlight from "./Spotlight";

// WebGL sculpture — skip SSR so three.js doesn't try to touch window.
const EntranceSculpture = dynamic(() => import("./EntranceSculpture"), {
  ssr: false,
  loading: () => null,
});

type Props = {
  onEnter: () => void;
};

export default function Entrance({ onEnter }: Props) {
  return (
    <div
      data-plate="entrance"
      className="plate-seam ruling-grid relative flex-none min-h-screen md:h-full w-screen flex flex-col justify-center py-24 md:py-28 pl-6 pr-[8vw] md:pl-14 overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 100% at 75% 50%, #1a1713 0%, #0a0907 55%, #050403 100%)",
      }}
    >
      {/* The 3D sculpture lives on the right side of the plate */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[62vw] pointer-events-none">
        <EntranceSculpture />
      </div>

      {/* Subtle directional ambience from upper-left */}
      <Spotlight x={12} y={18} size={70} color="rgba(255, 240, 210, 0.06)" />

      {/* Content column — sits above the canvas on the left */}
      <div className="relative max-w-[42rem] z-10">
        <div className="font-mono text-[10px] uppercase tracking-brutal text-bone/70 mb-6 flex items-center gap-3">
          <span className="h-px w-6 bg-bone/40" />
          <span>PLT.01 / ENT</span>
          <span className="text-bone/40">·</span>
          <span className="text-bone/70">Enter the workshop</span>
        </div>
        <h1
          className="font-display leading-[0.88]"
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
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
            textShadow: "0 2px 16px rgba(0,0,0,0.55)",
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
        <span>Travel right · Sculpture rotates</span>
      </div>
    </div>
  );
}
