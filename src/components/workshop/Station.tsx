"use client";

import type { HeroProject } from "@/content";
import StationHotspot from "./StationHotspot";
import Monitor from "./Monitor";

type Props = {
  project: HeroProject;
  number: string;
  total: string;
};

export default function Station({ project, number, total }: Props) {
  return (
    <div
      data-plate={project.id}
      className="relative flex-none w-screen h-auto min-h-screen py-20 md:py-0 md:h-full md:flex md:items-center md:w-[min(140vw,90rem)]"
    >
      <div className="relative w-full md:h-full flex flex-col md:flex-row gap-6 px-6 md:px-10 md:py-[9vh]">
        {/* Wall */}
        <div className="relative flex-1 md:h-full min-h-[60vh] md:min-h-0 aspect-[4/3] md:aspect-auto overflow-hidden bg-graphite">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.wall.src}
            alt={project.wall.alt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: project.wall.objectPosition ?? "50% 50%" }}
          />
          <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-ink/95 via-ink/40 to-transparent pointer-events-none" />

          {/* Huge watermark station number — top-right, mix-blend difference */}
          <div
            className="absolute -top-[0.18em] right-[2%] font-display leading-none pointer-events-none select-none"
            style={{
              fontSize: "clamp(12rem, 28vw, 26rem)",
              fontWeight: 900,
              letterSpacing: "-0.06em",
              color: "#ffffff",
              mixBlendMode: "difference",
              opacity: 0.95,
            }}
          >
            {number}
          </div>

          {/* Wall-mounted title */}
          <div className="absolute left-6 right-6 bottom-7 md:bottom-10">
            <div className="font-mono text-[10px] uppercase tracking-brutal text-bone/70 mb-3">
              {project.year} · {project.role}
            </div>
            <h2
              className="font-display leading-[0.9]"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "#fff",
                textShadow:
                  "0 2px 28px rgba(0,0,0,0.9), 0 1px 2px rgba(0,0,0,0.95)",
              }}
            >
              {project.name}
            </h2>
            <div
              className="font-body font-light text-bone mt-4 max-w-lg text-[clamp(0.95rem,1.2vw,1.1rem)] leading-relaxed"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.85)" }}
            >
              {project.tagline}
            </div>
          </div>

          {project.hotspots?.map((h, i) => (
            <StationHotspot key={i} data={h} index={i} />
          ))}
        </div>

        {/* Right column: monitor + glass pinboard */}
        <div className="w-full md:w-[32rem] md:max-w-[38vw] md:h-full flex flex-col gap-6">
          <Monitor monitor={project.monitor} label={project.link.label} />
          <div className="md:flex-1 md:min-h-0 glass p-5 flex flex-col gap-4 overflow-hidden">
            <div className="flex items-baseline justify-between">
              <div className="font-mono text-[10px] uppercase tracking-brutal text-bone/70">
                Pinboard
              </div>
              <div className="font-mono text-[10px] tracking-brutal text-bone/40 tabular-nums">
                {number} / {total}
              </div>
            </div>
            <p className="font-body text-sm text-bone/85 leading-relaxed">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-2 md:mt-auto">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] uppercase tracking-brutal border border-bone/15 px-2 py-1 text-bone/70"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="flex items-center justify-between border border-bone/25 hover:border-bone hover:bg-white/5 px-4 py-3 font-mono text-[10px] uppercase tracking-brutal text-bone transition-colors"
            >
              <span>Visit {project.link.label}</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
