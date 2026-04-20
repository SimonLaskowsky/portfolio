"use client";

type Props = {
  onEnter: () => void;
};

export default function Entrance({ onEnter }: Props) {
  return (
    <div
      data-plate="entrance"
      className="relative flex-none min-h-screen md:h-full w-screen flex flex-col justify-center py-24 md:py-0 pl-6 pr-[8vw] md:pl-14 bg-ink"
    >
      <div className="max-w-[44rem]">
        <div className="tracking-brutal text-[11px] uppercase text-moss-glow mb-6">
          01 — Enter the workshop
        </div>
        <h1
          className="font-serif leading-[0.92] font-normal"
          style={{ fontSize: "clamp(3rem, 8.5vw, 7.5rem)" }}
        >
          Editorial web,
          <br />
          <span className="italic text-moss-glow">brutalist detail.</span>
        </h1>
        <p className="font-serif italic text-concrete/80 mt-8 max-w-xl text-[clamp(0.95rem,1.4vw,1.2rem)] leading-relaxed">
          A studio of one, run by Szymon Laskowski. Scroll down — the floor
          unfolds to the right. Each workstation is a project; each object is
          a detail worth clicking.
        </p>
        <div className="mt-10 flex items-center gap-4 text-[10px] uppercase tracking-brutal">
          <button
            onClick={onEnter}
            data-cursor="hover"
            className="border border-concrete/30 hover:border-moss-glow px-5 py-3 text-concrete hover:text-moss-glow transition-colors"
          >
            Walk the floor →
          </button>
          <a
            href="mailto:hello@laskowski.studio"
            data-cursor="hover"
            className="text-concrete/60 hover:text-moss-glow transition-colors"
          >
            or write directly
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-6 md:left-14 flex items-center gap-3 tracking-brutal text-[10px] uppercase text-concrete/50">
        <span>Scroll down</span>
        <div className="h-[1px] w-10 bg-concrete/30" />
        <span>Travel right</span>
      </div>
    </div>
  );
}
