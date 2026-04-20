"use client";

import type { SectionId } from "@/data/projects";

type Props = {
  activeId: SectionId;
  progress: number;
  onJump: (id: SectionId) => void;
  sections: readonly { readonly id: SectionId; readonly label: string }[];
};

export default function FloorHud({
  activeId,
  progress,
  onJump,
  sections,
}: Props) {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 w-[min(90vw,44rem)]">
      <div className="flex items-center gap-4 bg-ink/70 backdrop-blur-md border border-concrete/15 px-4 h-10">
        <div className="w-20 shrink-0 font-mono text-[9px] tracking-brutal text-moss-glow">
          FLOOR PLAN
        </div>

        <div className="flex-1 flex items-center h-full">
          {sections.map((s) => {
            const isActive = s.id === activeId;
            return (
              <button
                key={s.id}
                onClick={() => onJump(s.id)}
                data-cursor="hover"
                aria-label={`Jump to ${s.label}`}
                className="group relative flex-1 h-full flex items-center justify-center"
              >
                <span
                  className={`block h-[3px] w-full transition-colors ${
                    isActive
                      ? "bg-moss-glow"
                      : "bg-concrete/20 group-hover:bg-concrete/50"
                  }`}
                />
                <span
                  className={`pointer-events-none absolute bottom-full mb-2 whitespace-nowrap text-[8px] uppercase tracking-brutal transition-opacity ${
                    isActive
                      ? "text-moss-glow opacity-100"
                      : "text-concrete/70 opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {s.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="w-20 shrink-0 font-mono text-[9px] tracking-brutal text-concrete/50 tabular-nums text-right">
          {String(Math.round(progress * 100)).padStart(2, "0")}%
        </div>
      </div>
    </div>
  );
}
