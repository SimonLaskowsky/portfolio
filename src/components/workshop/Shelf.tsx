"use client";

import { experiments } from "@/content";
import Spotlight from "./Spotlight";

export default function Shelf() {
  return (
    <div
      data-plate="shelf"
      className="concrete-base plate-seam ruling-grid relative flex-none w-screen md:w-[min(90vw,60rem)] md:h-full flex flex-col justify-center px-6 md:px-14 py-20 md:py-[14vh]"
      style={{ "--plate-tint": "rgba(31, 26, 19, 0.82)" } as React.CSSProperties}
    >
      <Spotlight x={18} y={88} size={60} color="rgba(255, 220, 185, 0.12)" />
      <div className="mb-8">
        <div className="font-mono text-[10px] uppercase tracking-brutal text-bone/60 mb-4 flex items-center gap-3">
          <span className="h-px w-6 bg-bone/30" />
          <span>PLT.06 / EXP</span>
          <span className="text-bone/30">·</span>
          <span className="text-bone/55">Shelf</span>
        </div>
        <h2
          className="font-display leading-[0.88]"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
          }}
        >
          Things I built
          <br />
          <span className="font-light text-bone/55">to think with.</span>
        </h2>
        <p className="font-body font-light text-bone/65 mt-5 max-w-lg leading-relaxed">
          Experiments, side projects, half-formed ideas. The apparatus behind
          the finished work.
        </p>
      </div>

      <ul className="md:flex-1 md:min-h-0 grid grid-cols-1 md:grid-cols-2 gap-px bg-bone/10 border border-bone/10">
        {experiments.map((e) => (
          <li key={e.id} className="bg-ink">
            <a
              href={e.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="group block h-full p-6 hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[10px] tracking-brutal text-bone/55">
                  {e.number}
                </span>
                <h3
                  className="font-display text-[1.6rem]"
                  style={{ fontWeight: 700, letterSpacing: "-0.03em" }}
                >
                  {e.name}
                </h3>
                <span className="ml-auto font-mono text-bone/40 group-hover:text-bone transition-colors">
                  ↗
                </span>
              </div>
              <p className="font-body text-sm text-bone/60 mt-3 leading-relaxed">
                {e.summary}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
