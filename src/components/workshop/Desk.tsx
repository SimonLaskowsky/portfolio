"use client";

import { about } from "@/data/projects";
import DeskItem from "./DeskItem";

export default function Desk() {
  return (
    <div
      data-plate="desk"
      className="relative flex-none h-full flex items-center gap-8 px-10 md:px-14 py-[14vh] bg-ink"
      style={{ width: "min(120vw, 80rem)" }}
    >
      {/* Left: photo frame */}
      <div className="relative w-[22rem] max-w-[30vw] aspect-[4/5] overflow-hidden border border-concrete/15 bg-concrete-dark shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={about.photo}
          alt={about.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
        {about.items.map((item) => (
          <DeskItem key={item.id} data={item} />
        ))}
      </div>

      {/* Right: copy */}
      <div className="flex-1 max-w-2xl">
        <div className="tracking-brutal text-[11px] uppercase text-moss-glow mb-3">
          07 — The desk
        </div>
        <h2
          className="font-serif leading-[0.92] font-normal"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          {about.name}
        </h2>
        <div className="tracking-brutal text-xs uppercase text-concrete/60 mt-3">
          {about.role}
        </div>

        <div className="mt-8 space-y-5 text-concrete/85 leading-relaxed">
          {about.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-5 text-[11px] uppercase tracking-brutal">
          {about.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="border-b border-concrete/20 hover:border-moss-glow pb-0.5 text-concrete hover:text-moss-glow transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
