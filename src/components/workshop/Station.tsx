"use client";

import type { HeroProject } from "@/content";
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
      className="relative flex-none w-screen md:w-[min(100vw,88rem)] h-auto min-h-screen md:h-full bg-ink overflow-hidden"
    >
      {/* Ambient glow in the project's own colour — depth, not wallpaper */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `radial-gradient(120% 90% at 78% 42%, ${
            project.accent ?? "#2e3a50"
          }55 0%, transparent 62%)`,
        }}
      />

      {/* Content — top clears nav bar, bottom clears FloorHud */}
      <div className="relative h-full flex flex-col px-10 md:px-16 pt-24 pb-20 md:pt-24 md:pb-[13vh]">
        {/* Top row */}
        <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-brutal text-bone/40">
          <span>
            {number} / {total}
          </span>
          <span>{project.year}</span>
        </div>

        <div className="flex-1 flex flex-col md:flex-row md:items-center gap-10 md:gap-14 pt-10 md:pt-0">
          {/* Left: the pitch */}
          <div className="md:w-[38%] md:min-w-[22rem] shrink-0">
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="chip chip-own gap-1.5 !text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                Personal product
              </span>
              <span className="font-mono text-[9px] uppercase tracking-brutal text-bone/45">
                {project.role}
              </span>
            </div>
            <h2
              className="font-sans leading-[0.92] tracking-[-0.045em] text-bone"
              style={{ fontSize: "clamp(2.6rem, 4.6vw, 4.25rem)", fontWeight: 700 }}
            >
              {project.name}
            </h2>
            <p className="mt-5 text-[0.95rem] text-bone/60 leading-relaxed">
              {project.summary}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>

            <a
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid mt-8"
            >
              {project.link.label}
              <span aria-hidden>↗</span>
            </a>
          </div>

          {/* Right: the work, crisp */}
          <div className="flex-1 min-w-0">
            <Monitor monitor={project.monitor} label={project.link.label} />
          </div>
        </div>
      </div>
    </div>
  );
}
