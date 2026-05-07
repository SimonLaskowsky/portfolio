"use client";

import { about } from "@/content";

export default function Desk() {
  return (
    <div
      data-plate="desk"
      className="relative flex-none w-screen md:w-[min(110vw,72rem)] md:h-full flex flex-col md:flex-row md:items-center gap-12 px-10 md:px-16 pt-20 pb-20 md:pt-[12vh] md:pb-[14vh] bg-ink overflow-hidden"
    >
      {/* Photo */}
      <div className="relative w-40 md:w-48 aspect-[3/4] overflow-hidden shrink-0 bg-graphite">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={about.photo}
          alt={about.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Copy */}
      <div className="max-w-lg">
        <p className="font-mono text-[10px] uppercase tracking-brutal text-bone/35 mb-6">
          About
        </p>
        <h2
          className="font-sans leading-[1] tracking-[-0.03em] text-bone"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 600 }}
        >
          {about.name}
        </h2>
        <div className="font-mono text-[10px] uppercase tracking-brutal text-bone/35 mt-3">
          {about.role}
        </div>
        <div className="mt-7 space-y-4 text-[0.95rem] text-bone/55 leading-relaxed">
          {about.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-5 font-mono text-[10px] uppercase tracking-brutal">
          {about.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone/45 hover:text-bone transition-colors border-b border-bone/15 hover:border-bone pb-px"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
