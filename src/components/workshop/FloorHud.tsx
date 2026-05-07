"use client";

import type { SectionId } from "@/content";

type Props = {
  activeId: SectionId;
  progress: number;
  onJump: (id: SectionId) => void;
  sections: readonly { readonly id: SectionId; readonly label: string }[];
};

export default function FloorHud({ activeId, onJump, sections }: Props) {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-30 flex items-center justify-center gap-7 px-10 py-4 border-t border-bone/8">
      {sections.map((s) => {
        const isActive = s.id === activeId;
        return (
          <button
            key={s.id}
            onClick={() => onJump(s.id)}
            aria-label={`Go to ${s.label}`}
            className={`font-mono text-[8px] uppercase tracking-brutal transition-colors hover:text-bone/60 ${
              isActive ? "text-bone/70" : "text-bone/22"
            }`}
          >
            {s.label}
          </button>
        );
      })}
    </div>
  );
}
