"use client";

import { experiments } from "@/data/projects";

export default function Shelf() {
  return (
    <div
      data-plate="shelf"
      className="relative flex-none h-full flex flex-col justify-center px-10 md:px-14 py-[14vh] bg-ink"
      style={{ width: "min(90vw, 60rem)" }}
    >
      <div className="mb-8">
        <div className="tracking-brutal text-[11px] uppercase text-moss-glow mb-3">
          06 — Shelf
        </div>
        <h2
          className="font-serif leading-[0.92] font-normal"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          Things I built
          <br />
          <span className="italic text-moss-glow">to think with.</span>
        </h2>
        <p className="font-serif italic text-concrete/70 mt-4 max-w-lg">
          Experiments, side projects, half-formed ideas. The apparatus behind
          the finished work.
        </p>
      </div>

      <ul className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 gap-px bg-concrete/15 border border-concrete/15">
        {experiments.map((e) => (
          <li key={e.id} className="bg-ink">
            <a
              href={e.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="group block h-full p-6 hover:bg-concrete/5 transition-colors"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[10px] tracking-brutal text-moss-glow">
                  {e.number}
                </span>
                <h3 className="font-serif text-2xl">{e.name}</h3>
                <span className="ml-auto text-concrete/50 group-hover:text-moss-glow transition-colors">
                  ↗
                </span>
              </div>
              <p className="text-sm text-concrete/65 mt-3 leading-relaxed">
                {e.summary}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
