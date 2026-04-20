"use client";

import { archive } from "@/data/projects";

export default function ArchiveWall() {
  return (
    <div
      data-plate="archive"
      className="relative flex-none h-full flex flex-col justify-center px-10 md:px-14 py-[14vh] bg-ink"
      style={{ width: "min(120vw, 80rem)" }}
    >
      <div className="mb-8">
        <div className="tracking-brutal text-[11px] uppercase text-moss-glow mb-3">
          05 — Archive
        </div>
        <h2
          className="font-serif leading-[0.92] font-normal"
          style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
        >
          Commercial work,
          <br />
          <span className="italic text-moss-glow">in service of a team.</span>
        </h2>
        <p className="font-serif italic text-concrete/70 mt-4 max-w-xl text-lg">
          Projects delivered with the SoftwareThings team for clients across
          industries. Selected pieces.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 flex-1 min-h-0">
        {archive.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="group relative bg-concrete-dark border border-concrete/10 hover:border-moss-glow/60 transition-colors overflow-hidden flex flex-col"
          >
            <div className="relative flex-1 min-h-0 overflow-hidden bg-ink">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.thumbnail}
                alt={item.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[900ms] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            </div>
            <div className="shrink-0 p-4 flex items-start justify-between gap-4 bg-ink/80">
              <div>
                <div className="font-serif text-xl">{item.name}</div>
                <div className="text-xs text-concrete/60 mt-1 line-clamp-2">
                  {item.summary}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[9px] uppercase tracking-brutal text-concrete/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-concrete/50 group-hover:text-moss-glow transition-colors">
                ↗
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
