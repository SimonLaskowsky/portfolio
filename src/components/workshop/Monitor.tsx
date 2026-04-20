"use client";

import type { Monitor as MonitorData } from "@/data/projects";

type Props = {
  monitor: MonitorData;
  label: string;
};

export default function Monitor({ monitor, label }: Props) {
  return (
    <div className="relative bg-ink border border-concrete/15 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
      {/* Chrome bar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-concrete/10 bg-ink/80">
        <span className="w-2 h-2 rounded-full bg-red-500/70" />
        <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
        <span className="w-2 h-2 rounded-full bg-green-500/70" />
        <div className="mx-auto font-mono text-[10px] tracking-brutal text-concrete/50 px-3 py-0.5 bg-concrete/5">
          {label}
        </div>
      </div>

      {/* Screen */}
      <div className="relative aspect-[16/10] bg-concrete-dark">
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

        {/* Subtle scan-line overlay to feel "alive" */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              "repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 3px)",
          }}
        />
      </div>
    </div>
  );
}
