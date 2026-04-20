import CustomCursor from "@/components/CustomCursor";
import FilmGrain from "@/components/FilmGrain";

export default function Home() {
  return (
    <div className="relative">
      <CustomCursor />
      <FilmGrain />

      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center gap-6">
        <div className="tracking-brutal text-[11px] uppercase text-moss-glow">
          Laskowski.studio
        </div>
        <h1
          className="font-serif leading-[0.95] font-normal"
          style={{ fontSize: "clamp(3rem, 12vw, 10rem)" }}
        >
          The workshop
          <br />
          <span className="italic text-moss-glow">is under construction.</span>
        </h1>
        <p className="font-serif italic text-concrete/80 max-w-xl text-lg">
          Editorial web, brutalist detail. Three residences, four walls, one
          door. Come back soon.
        </p>
      </section>
    </div>
  );
}
