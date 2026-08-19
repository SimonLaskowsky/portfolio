"use client";

import type { Monitor as MonitorData } from "@/content";

type Props = {
  monitor: MonitorData;
  label: string;
};

export default function Monitor({ monitor, label }: Props) {
  return (
    <div className="relative rounded-xl border border-bone/12 bg-[#0b0e15] overflow-hidden shadow-[0_50px_120px_-30px_rgba(0,0,0,0.95)]">
      {/* Chrome bar */}
      <div className="flex items-center gap-3 px-3.5 py-2.5 border-b border-bone/8 bg-bone/[0.03]">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-bone/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-bone/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-bone/15" />
        </div>
        <div className="flex-1 flex justify-center">
          <span className="rounded-full bg-bone/[0.06] px-3 py-0.5 font-mono text-[10px] text-bone/45">
            {label}
          </span>
        </div>
        <div className="w-[46px]" aria-hidden />
      </div>

      {/* Screen */}
      <div className="relative aspect-[16/10] bg-graphite">
        {monitor.kind === "image" && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={monitor.src}
            alt=""
            loading="lazy"
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
      </div>
    </div>
  );
}
