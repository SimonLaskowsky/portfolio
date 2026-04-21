"use client";

type Props = {
  onEnter: () => void;
};

export default function Entrance({ onEnter }: Props) {
  return (
    <div
      data-plate="entrance"
      className="relative flex-none min-h-screen md:h-full w-screen flex flex-col justify-center py-24 md:py-28 pl-6 pr-[8vw] md:pl-14 bg-ink overflow-hidden"
    >
      <div className="relative max-w-[50rem] z-10">
        <div className="font-mono text-[10px] uppercase tracking-brutal text-bone/60 mb-6">
          01 — Enter the workshop
        </div>
        <h1
          className="font-display leading-[0.88]"
          style={{
            fontSize: "clamp(3rem, 9vw, 8rem)",
            fontWeight: 800,
            letterSpacing: "-0.045em",
          }}
        >
          A studio
          <br />
          of one.
          <br />
          <span className="font-light text-bone/60">Walk the floor.</span>
        </h1>
        <p className="font-body font-light text-bone/70 mt-10 max-w-xl text-[clamp(0.95rem,1.3vw,1.15rem)] leading-relaxed">
          Laskowski.studio is Szymon Laskowski, building web experiences that
          treat the page as a space. Scroll down — the floor unfolds to the
          right. Each workstation is a project; each chip is a detail worth
          clicking.
        </p>
        <div className="mt-10 flex items-center gap-5 font-mono text-[10px] uppercase tracking-brutal">
          <button
            onClick={onEnter}
            data-cursor="hover"
            className="border border-bone/30 hover:border-bone hover:bg-white/5 px-5 py-3 text-bone transition-colors"
          >
            Walk the floor →
          </button>
          <a
            href="mailto:hello@laskowski.studio"
            data-cursor="hover"
            className="text-bone/55 hover:text-bone transition-colors"
          >
            or write directly
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-6 md:left-14 flex items-center gap-3 font-mono text-[10px] uppercase tracking-brutal text-bone/40 z-10">
        <span>Scroll down</span>
        <div className="h-[1px] w-10 bg-bone/30" />
        <span>Travel right</span>
      </div>
    </div>
  );
}
