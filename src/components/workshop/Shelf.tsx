"use client";

import { experiments } from "@/content";

export default function Shelf() {
  return (
    <div
      data-plate="shelf"
      className="relative flex-none w-screen md:w-[min(90vw,56rem)] md:h-full flex flex-col justify-center px-10 md:px-16 pt-20 pb-20 md:pt-[12vh] md:pb-[14vh] bg-ink overflow-hidden"
    >
      <div className="mb-9">
        <p className="font-mono text-[10px] uppercase tracking-brutal text-bone/35 mb-4">
          Experiments
        </p>
        <h2
          className="font-sans leading-[1] tracking-[-0.04em] text-bone"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700 }}
        >
          Things I built
          <br />
          <span className="text-bone/35 font-normal">to think with.</span>
        </h2>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experiments.map((e) => (
          <li key={e.id}>
            <a
              href={e.href}
              target="_blank"
              rel="noopener noreferrer"
              className="surface surface-hover group flex h-full flex-col gap-2 p-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] tracking-brutal text-bone/25">
                  {e.number}
                </span>
                <span className="text-bone/25 group-hover:text-bone transition-colors text-sm">
                  ↗
                </span>
              </div>
              <h3 className="font-sans font-semibold text-base tracking-tight text-bone leading-tight">
                {e.name}
              </h3>
              <p className="text-[0.85rem] text-bone/45 leading-relaxed">
                {e.summary}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
