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
      className="pointer-events-none absolute left-0 right-0 bottom-20 z-0 text-center overflow-hidden"
      aria-hidden
    >
      <div
        key={current.id}
        className="fade-in font-display whitespace-nowrap leading-none"
        style={{
          fontSize: "clamp(6rem, 22vw, 20rem)",
          fontWeight: 900,
          letterSpacing: "-0.06em",
          color: "#ffffff",
          opacity: 0.035,
          textTransform: "uppercase",
        }}
      >
        {current.label}
      </div>
    </div>
  );
}
