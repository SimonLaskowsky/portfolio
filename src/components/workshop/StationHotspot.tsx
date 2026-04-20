"use client";

import { useEffect, useRef, useState } from "react";
import type { StationHotspot as HotspotData } from "@/data/projects";

type Props = {
  data: HotspotData;
};

export default function StationHotspot({ data }: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${data.x * 100}%`, top: `${data.y * 100}%` }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={data.title}
        data-cursor="hover"
        className="hotspot-pulse relative h-3.5 w-3.5 rounded-full bg-moss-glow ring-2 ring-moss-glow/40"
      />
      {open && (
        <div className="fade-in absolute left-6 top-1/2 -translate-y-1/2 w-64 z-20 bg-ink/95 backdrop-blur border border-moss-glow/30 p-4 text-concrete">
          <div className="tracking-brutal text-[10px] uppercase text-moss-glow mb-1">
            Detail
          </div>
          <div className="text-sm font-medium mb-2">{data.title}</div>
          <p className="text-xs text-concrete/70 leading-relaxed">
            {data.detail}
          </p>
          <button
            onClick={() => setOpen(false)}
            data-cursor="hover"
            className="mt-3 text-[10px] uppercase tracking-brutal text-concrete/50 hover:text-concrete"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
