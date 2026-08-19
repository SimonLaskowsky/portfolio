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
      {/* Ambient wash so the first screen isn't flat black */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 70% at 12% 45%, rgba(46,58,80,0.55) 0%, transparent 60%)",
        }}
      />

      {/* ── Left: intro ── */}
      <div className="relative flex-[1.1] flex flex-col justify-center px-10 md:px-16 pt-28 pb-16 md:py-20">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-[9px] uppercase tracking-brutal text-bone/30">
            szymonlaskowski.pl · 2026
          </span>
          <span className="chip gap-1.5 !text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            Available for work
          </span>
        </div>

        <h1
          className="font-sans leading-[0.88] tracking-[-0.05em] text-bone"
          style={{ fontSize: "clamp(3rem, 6.5vw, 6.5rem)", fontWeight: 700 }}
        >
          A studio
          <br />
          of one.
        </h1>

        <div className="mt-6">
          <TypedLine />
        </div>

        <p className="mt-6 max-w-md text-[1.0625rem] text-bone/60 leading-relaxed">
          Szymon Laskowski, building web experiences for people who care about
          the details.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href="mailto:hello@szymonlaskowski.pl" className="btn btn-solid">
            hello@szymonlaskowski.pl
          </a>
          <button
            onClick={() => onJump("coprzeszlo")}
            className="btn btn-ghost cursor-pointer"
          >
            See the work
            <span aria-hidden>→</span>
          </button>
        </div>

        <div className="mt-10 font-mono text-[9px] uppercase tracking-brutal text-bone/25">
          <LocalTime />
        </div>
      </div>

      {/* ── Right: project index ── */}
      <div className="relative flex-1 flex flex-col justify-center px-10 md:px-12 md:pr-16 pb-24 pt-10 md:py-20">
        <div className="flex items-center gap-2.5 mb-4">
          <p className="font-mono text-[9px] uppercase tracking-brutal text-bone/30">
            Selected work
          </p>
          <span className="chip chip-own gap-1.5 !text-[10px] !py-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            Personal products
          </span>
        </div>

        <ul className="flex flex-col gap-2.5">
          {heroProjects.map((p, i) => (
            <li key={p.id}>
              <button
                onClick={() => onJump(p.id)}
                className="surface surface-hover group w-full flex items-center gap-4 p-3 text-left cursor-pointer"
              >
                <span className="relative w-20 h-14 shrink-0 rounded-lg overflow-hidden bg-char">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.wall.src}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="flex items-baseline gap-2">
                    <span className="font-mono text-[8px] text-bone/25 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-sans text-[0.95rem] font-semibold tracking-tight text-bone">
                      {p.name}
                    </span>
                  </span>
                  <span className="block truncate text-[0.8rem] text-bone/45 mt-0.5">
                    {p.tagline}
                  </span>
                </span>
                <span className="font-mono text-[8px] text-bone/25 shrink-0">
                  {p.year}
                </span>
                <span
                  aria-hidden
                  className="text-bone/25 group-hover:text-bone transition-colors text-sm shrink-0"
                >
                  ↗
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5 mt-8 mb-1">
          <p className="font-mono text-[9px] uppercase tracking-brutal text-bone/25">
            Archive
          </p>
          <span className="chip chip-client !text-[10px] !py-0.5">
            For Software Things
          </span>
        </div>
        <ul>
          {archive.map((item) => (
            <li key={item.id} className="border-b border-bone/8 last:border-b-0">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline gap-4 py-3"
              >
                <span className="flex-1 font-sans text-[0.88rem] font-medium tracking-tight text-bone/50 group-hover:text-bone transition-colors">
                  {item.name}
                </span>
                <span className="font-mono text-[8px] uppercase tracking-brutal text-bone/25 shrink-0">
                  {item.tech[0]}
                </span>
                <span className="font-mono text-[9px] text-bone/20 group-hover:text-bone/50 transition-colors shrink-0">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Scroll cue — sits above the FloorHud pill */}
      <div className="absolute bottom-8 left-10 md:left-16 hidden md:flex items-center gap-3">
        <div className="w-px h-5 bg-bone/25" />
        <span className="font-mono text-[9px] uppercase tracking-brutal text-bone/35">
          Scroll to explore
        </span>
      </div>
    </div>
  );
}
