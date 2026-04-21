"use client";

import { archive } from "@/content";
import RegistrationMarks from "./RegistrationMarks";
import Spotlight from "./Spotlight";

export default function ArchiveWall() {
  return (
    <div
      data-plate="archive"
      className="concrete-base concrete-wash plate-seam ruling-grid relative flex-none w-screen md:w-[min(120vw,80rem)] md:h-full flex flex-col justify-center px-6 md:px-14 py-20 md:py-[14vh]"
      style={{ "--plate-tint": "rgba(11, 21, 34, 0.82)" } as React.CSSProperties}
    >
      <Spotlight x={88} y={32} size={62} color="rgba(200, 215, 235, 0.11)" />
      <div className="mb-8">
        <div className="font-mono text-[10px] uppercase tracking-brutal text-bone/60 mb-4 flex items-center gap-3">
          <span className="h-px w-6 bg-bone/30" />
          <span>PLT.05 / ARC</span>
          <span className="text-bone/30">·</span>
          <span className="text-bone/55">Archive</span>
        </div>
        <h2
          className="font-display leading-[0.88]"
          style={{
            fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
          }}
        >
          Commercial work,
          <br />
          <span className="font-light text-bone/55">in service of a team.</span>
        </h2>
        <p className="font-body font-light text-bone/65 mt-5 max-w-xl leading-relaxed">
          Projects delivered with the SoftwareThings team for clients across
          industries. Selected pieces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:flex-1 md:min-h-0">
        {archive.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="group relative bg-char border border-bone/8 hover:border-bone/40 transition-colors overflow-hidden flex flex-col"
          >
            <RegistrationMarks />
            <div className="relative md:flex-1 md:min-h-0 overflow-hidden bg-ink aspect-[16/10] md:aspect-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.thumbnail}
                alt={item.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[900ms] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            </div>
            <div className="shrink-0 p-4 flex items-start justify-between gap-4 bg-ink/80 backdrop-blur">
              <div>
                <div className="font-display font-bold text-xl tracking-tight">
                  {item.name}
                </div>
                <div className="font-body text-xs text-bone/60 mt-1 line-clamp-2">
                  {item.summary}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[9px] uppercase tracking-brutal text-bone/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-bone/40 group-hover:text-bone transition-colors font-mono">
                ↗
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
