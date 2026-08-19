"use client";

import type { SectionId } from "@/content";

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
    <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center pointer-events-none">
      <div className="pointer-events-auto relative flex items-center gap-1 rounded-full border border-bone/12 bg-char/80 px-2 py-1.5 backdrop-blur-xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Progress fill behind the pills */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 bg-bone/[0.05] transition-[width] duration-150"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
        {sections.map((s) => {
          const isActive = s.id === activeId;
          return (
            <button
              key={s.id}
              onClick={() => onJump(s.id)}
              aria-label={`Go to ${s.label}`}
              aria-current={isActive ? "true" : undefined}
              className={`relative rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-brutal transition-colors ${
                isActive
                  ? "bg-bone text-ink"
                  : "text-bone/40 hover:text-bone/80"
              }`}
            >
              {s.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
