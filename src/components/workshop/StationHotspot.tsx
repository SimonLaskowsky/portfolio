"use client";

import { useEffect, useRef, useState } from "react";
import type { StationHotspot as HotspotData } from "@/content";

type Props = {
  data: HotspotData;
  index: number;
};

export default function StationHotspot({ data, index }: Props) {
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

  const num = String(index + 1).padStart(2, "0");

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
        className="hotspot-chip hotspot-pulse"
      >
        <span className="tabular-nums">{num}</span>
        <span className="ml-2 opacity-60">+</span>
      </button>
      {open && (
        <div
          className="drawer-in absolute left-[calc(100%+10px)] top-1/2 -translate-y-1/2 w-64 z-20"
          style={{
            background: "var(--char)",
            border: "1px solid rgba(242, 239, 232, 0.3)",
            boxShadow: "0 24px 60px rgba(0, 0, 0, 0.55)",
          }}
        >
          {/* Thin accent strip on the left — a seam like a concrete form-tie */}
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-0 w-[2px]"
            style={{ background: "var(--bone)" }}
          />
          <div className="p-4 pl-5 text-bone">
            <div className="flex items-baseline justify-between mb-2">
              <div className="font-mono text-[10px] uppercase tracking-brutal text-bone/55">
                Detail
              </div>
              <div className="font-mono text-[10px] uppercase tracking-brutal text-bone/35 tabular-nums">
                {num}
              </div>
            </div>
            <div className="text-[15px] leading-tight mb-2">{data.title}</div>
            <p className="text-xs text-bone/65 leading-relaxed font-body">
              {data.detail}
            </p>
            <button
              onClick={() => setOpen(false)}
              data-cursor="hover"
              className="mt-4 font-mono text-[10px] uppercase tracking-brutal text-bone/50 hover:text-bone"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
