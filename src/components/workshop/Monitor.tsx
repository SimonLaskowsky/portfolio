"use client";

import type { Monitor as MonitorData } from "@/content";

type Props = {
  monitor: MonitorData;
  label: string;
};

export default function Monitor({ monitor, label }: Props) {
  return (
    <div className="relative bg-ink border border-bone/15 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
      {/* Chrome bar — monospace URL only, no OS-themed dots */}
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-bone/10 bg-ink/90">
        <div className="flex gap-1">
          <span className="w-[10px] h-[10px] border border-bone/30" />
          <span className="w-[10px] h-[10px] border border-bone/30" />
          <span className="w-[10px] h-[10px] border border-bone/30" />
        </div>
        <div className="flex-1 font-mono text-[10px] tracking-brutal text-bone/55 text-center">
          {label}
        </div>
        <div className="font-mono text-[10px] tracking-brutal text-bone/30 tabular-nums">
          LIVE
        </div>
      </div>

      {/* Screen */}
      <div className="relative aspect-[16/10] bg-graphite">
        {monitor.kind === "image" && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={monitor.src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        )}
        {monitor.kind === "video" && (
          <video
            src={monitor.src}
            poster={monitor.poster}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        )}
        {monitor.kind === "iframe" && (
          <iframe
            src={monitor.src}
            className="absolute inset-0 w-full h-full"
            loading="lazy"
          />
        )}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            background:
              "repeating-linear-gradient(0deg, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 1px, transparent 1px, transparent 3px)",
          }}
        />
      </div>
    </div>
  );
}
