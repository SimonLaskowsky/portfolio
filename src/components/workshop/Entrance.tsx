"use client";

import { heroProjects, archive } from "@/content";
import type { SectionId } from "@/content";
import TypedLine from "@/components/TypedLine";
import LocalTime from "@/components/LocalTime";

type Props = {
  onJump: (id: SectionId) => void;
};

export default function Entrance({ onJump }: Props) {
  return (
    <div
      data-plate="entrance"
      className="relative flex-none w-screen min-h-screen md:h-full flex flex-col md:flex-row bg-ink"
    >
      {/* ── Left: intro ── */}
      <div className="flex-1 flex flex-col justify-center px-10 md:px-16 pt-28 pb-16 md:py-20 border-b md:border-b-0 md:border-r border-bone/8">
        <p className="font-mono text-[9px] uppercase tracking-brutal text-bone/30 mb-10">
          szymonlaskowski.pl · 2026
        </p>

        <h1
          className="font-sans leading-[0.9] tracking-[-0.04em] text-bone"
          style={{ fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)", fontWeight: 600 }}
        >
          A studio
          <br />
          of one.
        </h1>

        <div className="mt-5">
          <TypedLine />
        </div>

        <p className="mt-6 max-w-xs text-[0.93rem] text-bone/45 leading-relaxed">
          Szymon Laskowski — building web experiences for people who care about
          the details.
        </p>

        {/* Status strip */}
        <div className="mt-9 flex flex-col gap-2 font-mono text-[9px] uppercase tracking-brutal">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            <span className="text-bone/50">Available for work</span>
          </div>
          <span className="text-bone/22 pl-3.5"><LocalTime /></span>
        </div>

        <a
          href="mailto:hello@szymonlaskowski.pl"
          className="mt-10 w-fit font-mono text-[9px] uppercase tracking-brutal text-bone/40 hover:text-bone transition-colors border-b border-bone/12 hover:border-bone pb-px"
        >
          hello@szymonlaskowski.pl
        </a>
      </div>

      {/* ── Right: project index ── */}
      <div className="flex-1 flex flex-col justify-center px-10 md:px-14 pb-20 pt-10 md:py-20">
        <p className="font-mono text-[9px] uppercase tracking-brutal text-bone/25 mb-1">
          Selected work
        </p>
        <ul>
          {heroProjects.map((p, i) => (
            <li key={p.id} className="border-b border-bone/8 last:border-b-0">
              <button
                onClick={() => onJump(p.id)}
                className="group w-full flex items-baseline gap-4 py-4 text-left"
              >
                <span className="font-mono text-[8px] text-bone/22 shrink-0 w-4 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-sans text-[0.95rem] font-medium tracking-tight text-bone/65 group-hover:text-bone transition-colors">
                  {p.name}
                </span>
                <span className="font-mono text-[8px] text-bone/25 shrink-0">
                  {p.year}
                </span>
                <span className="font-mono text-[9px] text-bone/18 group-hover:text-bone/60 transition-colors shrink-0">
                  ↗
                </span>
              </button>
            </li>
          ))}
        </ul>

        <p className="font-mono text-[9px] uppercase tracking-brutal text-bone/18 mt-8 mb-1">
          Archive
        </p>
        <ul>
          {archive.map((item) => (
            <li key={item.id} className="border-b border-bone/6 last:border-b-0">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline gap-4 py-3.5"
              >
                <span className="flex-1 font-sans text-[0.88rem] font-medium tracking-tight text-bone/35 group-hover:text-bone/65 transition-colors">
                  {item.name}
                </span>
                <span className="font-mono text-[8px] text-bone/18 group-hover:text-bone/40 transition-colors shrink-0">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Scroll cue — sits above the FloorHud bar */}
      <div className="absolute bottom-14 left-10 md:left-16 flex items-center gap-3">
        <div className="w-px h-5 bg-bone/25" />
        <span className="font-mono text-[9px] uppercase tracking-brutal text-bone/35">
          Scroll to explore
        </span>
      </div>
    </div>
  );
}
