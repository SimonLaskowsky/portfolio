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
      className="pointer-events-none absolute inset-x-0 -bottom-[6vw] z-0 overflow-hidden"
      aria-hidden
    >
      <div
        key={current.id}
        className="spine-fade font-display whitespace-nowrap leading-none text-center"
        style={{
          fontSize: "clamp(12rem, 36vw, 34rem)",
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
