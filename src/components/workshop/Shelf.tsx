"use client";

import { experiments } from "@/content";

export default function Shelf() {
  return (
    <div
      data-plate="shelf"
      className="relative flex-none w-screen md:w-[min(90vw,56rem)] md:h-full flex flex-col justify-center px-10 md:px-16 pt-20 pb-20 md:pt-[12vh] md:pb-[14vh] bg-ink overflow-hidden"
    >
      <div className="mb-8 border-b border-bone/10 pb-7">
        <p className="font-mono text-[10px] uppercase tracking-brutal text-bone/35 mb-4">
          Experiments
        </p>
        <h2
          className="font-sans leading-[1] tracking-[-0.03em] text-bone"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 600 }}
        >
          Things I built
          <br />
          <span className="text-bone/35 font-light">to think with.</span>
        </h2>
      </div>

      <ul className="divide-y divide-bone/10">
        {experiments.map((e) => (
          <li key={e.id}>
            <a
              href={e.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-6 py-4"
            >
              <span className="font-mono text-[9px] tracking-brutal text-bone/25 pt-0.5 shrink-0 w-6">
                {e.number}
              </span>
              <div className="flex-1">
                <div className="font-sans font-medium text-base tracking-tight text-bone leading-tight">
                  {e.name}
                </div>
                <p className="text-sm text-bone/40 mt-1 leading-relaxed">
                  {e.summary}
                </p>
              </div>
              <span className="text-bone/25 group-hover:text-bone transition-colors font-mono mt-0.5 shrink-0">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
