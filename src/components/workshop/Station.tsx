"use client";

import type { HeroProject } from "@/content";

type Props = {
  project: HeroProject;
  number: string;
  total: string;
};

export default function Station({ project, number, total }: Props) {
  return (
    <div
      data-plate={project.id}
      className="relative flex-none w-screen md:w-[min(100vw,80rem)] h-auto min-h-screen md:h-full bg-ink overflow-hidden"
    >
      {/* Full-bleed image */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.wall.src}
          alt={project.wall.alt}
          loading="lazy"
          className="w-full h-full object-cover"
          style={{ objectPosition: project.wall.objectPosition ?? "50% 50%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/30 to-transparent" />
      </div>

      {/* Content — top clears nav bar, bottom clears FloorHud */}
      <div className="relative h-full flex flex-col justify-between px-10 md:px-16 pt-24 pb-16 md:pt-20 md:pb-[12vh]">
        {/* Top row */}
        <div className="flex items-start justify-between">
          <span className="font-mono text-[9px] tracking-brutal text-bone/40">
            {number} / {total}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-brutal text-bone/30">
            {project.year}
          </span>
        </div>

        {/* Main content */}
        <div className="max-w-2xl">
          <div className="font-mono text-[9px] uppercase tracking-brutal text-bone/45 mb-5">
            {project.role}
          </div>
          <h2
            className="font-sans leading-[0.9] tracking-[-0.04em] text-bone"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 600 }}
          >
            {project.name}
          </h2>
          <p className="mt-5 max-w-lg text-[1rem] text-bone/60 leading-relaxed">
            {project.summary}
          </p>

          <div className="mt-8 flex items-center justify-between gap-6">
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[9px] uppercase tracking-brutal text-bone/35"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 font-mono text-[10px] uppercase tracking-brutal text-bone/60 hover:text-bone transition-colors"
            >
              {project.link.label} ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
