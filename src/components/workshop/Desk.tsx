"use client";

import { about } from "@/content";
import DeskItem from "./DeskItem";
import RegistrationMarks from "./RegistrationMarks";
import Spotlight from "./Spotlight";

// The only plate on the floor that inverts: bone surface, ink type.
// Creates a room-change feeling as you scroll into the About section.

export default function Desk() {
  return (
    <div
      data-plate="desk"
      className="plate-inverted concrete-base concrete-wash plate-seam ruling-grid relative flex-none w-screen md:w-[min(120vw,80rem)] md:h-full flex flex-col md:flex-row md:items-center gap-10 px-6 md:px-14 py-20 md:py-[14vh]"
    >
      <Spotlight x={78} y={22} size={65} color="rgba(140, 115, 75, 0.18)" />
      {/* Photo frame */}
      <div className="relative w-full md:w-[22rem] md:max-w-[30vw] aspect-[4/5] overflow-hidden border border-ink/20 bg-graphite shrink-0">
        <RegistrationMarks color="rgba(11, 10, 9, 0.35)" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={about.photo}
          alt={about.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
        {about.items.map((item, i) => (
          <DeskItem key={item.id} data={item} index={i} />
        ))}
      </div>

      {/* Copy */}
      <div className="relative flex-1 max-w-2xl text-ink">
        <div className="font-mono text-[10px] uppercase tracking-brutal text-ink/60 mb-4 flex items-center gap-3">
          <span className="h-px w-6 bg-ink/30" />
          <span>PLT.07 / ABT</span>
          <span className="text-ink/30">·</span>
          <span className="text-ink/55">The desk</span>
        </div>
        <h2
          className="font-display leading-[0.88]"
          style={{
            fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            textShadow: "none",
          }}
        >
          {about.name}
        </h2>
        <div className="font-mono text-xs uppercase tracking-brutal text-ink/60 mt-4">
          {about.role}
        </div>

        <div className="mt-8 space-y-5 font-body font-light text-ink/85 leading-relaxed">
          {about.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-6 font-mono text-[10px] uppercase tracking-brutal">
          {about.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="border-b border-ink/25 hover:border-ink pb-0.5 text-ink/80 hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
