"use client";

const MAILTO =
  "mailto:szymlas61@gmail.com" +
  "?subject=Let%27s%20work%20together" +
  "&body=Hi%20Szymon%2C%0A%0AI%27d%20like%20to%20talk%20about%20a%20project.%0A%0A";

export default function Exit() {
  return (
    <div
      data-plate="exit"
      className="relative flex-none w-screen md:w-[min(70vw,52rem)] min-h-screen md:h-full flex flex-col justify-center px-10 md:px-16 pt-20 pb-20 md:pt-[12vh] md:pb-[14vh] bg-ink overflow-hidden"
    >
      <div>
        <p className="font-mono text-[10px] uppercase tracking-brutal text-bone/35 mb-8">
          Contact
        </p>
        <h2
          className="font-sans leading-[1] tracking-[-0.04em] text-bone"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", fontWeight: 700 }}
        >
          Have something
          <br />
          <span className="text-bone/35 font-normal">worth making?</span>
        </h2>
        <p className="mt-6 max-w-sm text-[0.95rem] text-bone/45 leading-relaxed">
          I take on a handful of projects a year. If yours needs weight, shadow,
          and restraint — let&apos;s talk.
        </p>

        {/* Prepared email card */}
        <a
          href={MAILTO}
          className="surface surface-hover group mt-10 flex flex-col gap-3 px-5 py-4 max-w-sm"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-brutal text-bone/35 group-hover:text-bone/60 transition-colors">
              To: szymlas61@gmail.com
            </span>
            <span className="font-mono text-[9px] text-bone/25 group-hover:text-bone/50 transition-colors">
              ↗
            </span>
          </div>
          <div className="font-mono text-[9px] uppercase tracking-brutal text-bone/25">
            Subject: Let&apos;s work together
          </div>
          <div className="border-t border-bone/8 pt-3 text-[0.82rem] text-bone/35 leading-relaxed group-hover:text-bone/50 transition-colors">
            Hi Szymon, I&apos;d like to talk about a project...
          </div>
          <div className="mt-1 font-mono text-[9px] uppercase tracking-brutal text-bone/22 group-hover:text-bone/45 transition-colors">
            Click to open in mail →
          </div>
        </a>

        <div className="flex flex-wrap gap-3 mt-7">
          <a
            href="https://github.com/SimonLaskowsky"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost !py-1.5 !px-3.5 !text-[10px] tracking-brutal uppercase font-mono"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/szymon-laskowski-5b866920a/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost !py-1.5 !px-3.5 !text-[10px] tracking-brutal uppercase font-mono"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="absolute bottom-14 left-10 md:left-16 font-mono text-[9px] uppercase tracking-brutal text-bone/15">
        © 2026 szymonlaskowski.pl
      </div>
    </div>
  );
}
