"use client";

import { archive } from "@/content";

export default function ArchiveWall() {
  return (
    <div
      data-plate="archive"
      className="relative flex-none w-screen md:w-[min(120vw,80rem)] md:h-full flex flex-col justify-center px-10 md:px-16 pt-20 pb-20 md:pt-[12vh] md:pb-[14vh] bg-ink overflow-hidden"
    >
      <div className="mb-9">
        <p className="font-mono text-[10px] uppercase tracking-brutal text-bone/35 mb-4">
          Archive · client work
        </p>
        <h2
          className="font-sans leading-[1] tracking-[-0.04em] text-bone"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700 }}
        >
          Commercial work,
          <br />
          <span className="text-bone/35 font-normal">in service of a team.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {archive.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="surface surface-hover group flex flex-col overflow-hidden"
          >
            <div className="relative aspect-[16/10] bg-char overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.thumbnail}
                alt={item.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
            </div>

            <div className="flex flex-col gap-2.5 p-5">
              <span className="chip chip-client w-fit !text-[10px]">
                For {item.at}
              </span>
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-sans text-[0.95rem] font-semibold tracking-tight text-bone">
                  {item.name}
                </h3>
                <span className="text-bone/25 group-hover:text-bone transition-colors text-sm shrink-0">
                  ↗
                </span>
              </div>
              <p className="text-[0.8rem] leading-relaxed text-bone/45">
                {item.summary}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
