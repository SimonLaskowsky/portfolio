"use client";

import { sections, type SectionId } from "@/data/projects";

type Props = {
  activeId: SectionId;
};

export default function SerifSpine({ activeId }: Props) {
  const current = sections.find((s) => s.id === activeId);
  if (!current) return null;

  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[36vh] z-0 overflow-hidden"
      aria-hidden
    >
      {/* Text is pushed below its container so only the TOP slice of the
          letterforms shows — a strip of caps peeking up from the floor. */}
      <div
        key={current.id}
        className="spine-fade font-display whitespace-nowrap leading-[0.8] text-center absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[62%]"
        style={{
          fontSize: "clamp(10rem, 26vw, 24rem)",
          fontWeight: 900,
          letterSpacing: "-0.06em",
          color: "#ffffff",
          textTransform: "uppercase",
        }}
      >
        {current.label}
      </div>
    </div>
  );
}
