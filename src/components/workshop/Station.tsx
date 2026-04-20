"use client";

import type { HeroProject } from "@/data/projects";
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
      className="relative flex-none h-full flex items-center"
      style={{ width: "min(140vw, 90rem)" }}
    >
      <div className="relative w-full h-full flex gap-6 px-6 md:px-10 py-[14vh]">
        {/* Wall — big atmospheric image, slight scale-up on hover */}
        <div className="relative flex-1 h-full min-h-0 overflow-hidden bg-concrete-dark">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.wall.src}
            alt={project.wall.alt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: project.wall.objectPosition ?? "50% 50%" }}
          />
          {/* Title-zone scrim: stronger near bottom so the h2 stays readable */}
          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-ink/90 via-ink/40 to-transparent pointer-events-none" />

          {/* Wall-mounted title */}
          <div className="absolute left-6 right-6 bottom-7">
            <div
              className="tracking-brutal text-[10px] uppercase text-moss-glow mb-3"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.85)" }}
            >
              {project.year} · {project.role}
            </div>
            <h2
              className="font-serif leading-[0.95] font-normal"
              style={{
                color: "#fff",
                fontSize: "clamp(2.25rem, 4.5vw, 4rem)",
                textShadow:
                  "0 2px 24px rgba(0,0,0,0.85), 0 1px 2px rgba(0,0,0,0.9)",
              }}
            >
              {project.name}
            </h2>
            <div
              className="font-serif italic text-concrete mt-3 max-w-lg text-[clamp(1rem,1.3vw,1.15rem)]"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.85)" }}
            >
              {project.tagline}
            </div>
          </div>

          {project.hotspots?.map((h, i) => (
            <StationHotspot key={i} data={h} />
          ))}
        </div>

        {/* Right column: monitor + pinboard */}
        <div className="w-[32rem] max-w-[38vw] h-full flex flex-col gap-6">
          <Monitor
            monitor={project.monitor}
            label={project.link.label}
          />
          <div className="flex-1 bg-concrete-dark/40 border border-concrete/15 p-6 flex flex-col gap-5 overflow-hidden">
            <div className="flex items-baseline justify-between">
              <div className="tracking-brutal text-[10px] uppercase text-moss-glow">
                Pinboard
              </div>
              <div className="font-mono text-[10px] tracking-brutal text-concrete/40 tabular-nums">
                Station {number} / {total}
              </div>
            </div>
            <p className="text-sm text-concrete/85 leading-relaxed">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] uppercase tracking-brutal border border-concrete/20 px-2 py-1 text-concrete/70"
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
              className="flex items-center justify-between border border-concrete/30 hover:border-moss-glow px-4 py-3 text-[10px] uppercase tracking-brutal text-concrete hover:text-moss-glow transition-colors"
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
