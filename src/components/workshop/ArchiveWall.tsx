"use client";

import { archive } from "@/content";

export default function ArchiveWall() {
  return (
    <div
      data-plate="archive"
      className="relative flex-none w-screen md:w-[min(120vw,80rem)] md:h-full flex flex-col justify-center px-10 md:px-16 pt-20 pb-20 md:pt-[12vh] md:pb-[14vh] bg-ink overflow-hidden"
    >
      <div className="mb-8 border-b border-bone/10 pb-7">
        <p className="font-mono text-[10px] uppercase tracking-brutal text-bone/35 mb-4">
          Archive
        </p>
        <h2
          className="font-sans leading-[1] tracking-[-0.03em] text-bone"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 600 }}
        >
          Commercial work,
          <br />
          <span className="text-bone/35 font-light">in service of a team.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {archive.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col"
          >
            <div className="relative overflow-hidden aspect-[16/9] bg-char">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.thumbnail}
                alt={item.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="pt-3 flex items-start justify-between gap-4">
              <div>
                <div className="font-sans font-semibold text-sm tracking-tight text-bone">
                  {item.name}
                </div>
                <div className="text-xs text-bone/40 mt-0.5 leading-relaxed line-clamp-1">
                  {item.summary}
                </div>
              </div>
              <span className="text-bone/25 group-hover:text-bone transition-colors font-mono text-sm shrink-0">
                ↗
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
