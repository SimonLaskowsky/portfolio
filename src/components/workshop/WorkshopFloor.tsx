"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { sections, type SectionId, heroProjects } from "@/data/projects";
import Entrance from "./Entrance";
import Station from "./Station";
import ArchiveWall from "./ArchiveWall";
import Shelf from "./Shelf";
import Desk from "./Desk";
import Exit from "./Exit";
import FloorHud from "./FloorHud";
import SerifSpine from "./SerifSpine";

const DESKTOP_MIN_WIDTH = 900;

export default function WorkshopFloor() {
  const sectionRef = useRef<HTMLElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [offset, setOffset] = useState(0);
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<SectionId>("entrance");
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${DESKTOP_MIN_WIDTH}px)`);
    const apply = () => setIsDesktop(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useLayoutEffect(() => {
    if (!isDesktop) {
      setSectionHeight(0);
      return;
    }
    const measure = () => {
      const strip = stripRef.current;
      if (!strip) return;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const stripWidth = strip.scrollWidth;
      const horizontalDistance = Math.max(0, stripWidth - vw);
      setSectionHeight(vh + horizontalDistance);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop) return;
    const section = sectionRef.current;
    const strip = stripRef.current;
    if (!section || !strip) return;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const total = section.offsetHeight - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const t = total <= 0 ? 0 : scrolled / total;
      const maxOffset = Math.max(0, strip.scrollWidth - vw);
      const nextOffset = t * maxOffset;
      setOffset(nextOffset);
      setProgress(t);

      const plates = Array.from(
        strip.querySelectorAll<HTMLElement>("[data-plate]"),
      );
      const focusX = vw * 0.33;
      let current: SectionId = "entrance";
      for (const plate of plates) {
        const plateLeft = plate.offsetLeft - nextOffset;
        if (plateLeft <= focusX) {
          current = plate.dataset.plate as SectionId;
        }
      }
      setActiveId(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isDesktop, sectionHeight]);

  const jumpTo = useCallback(
    (id: SectionId) => {
      if (!isDesktop) {
        const el = document.querySelector<HTMLElement>(`[data-plate="${id}"]`);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      const section = sectionRef.current;
      const strip = stripRef.current;
      if (!section || !strip) return;
      const plate = strip.querySelector<HTMLElement>(`[data-plate="${id}"]`);
      if (!plate) return;

      const vw = window.innerWidth;
      const maxOffset = Math.max(0, strip.scrollWidth - vw);
      if (maxOffset <= 0) return;
      const targetOffset = Math.min(
        Math.max(0, plate.offsetLeft - vw * 0.08),
        maxOffset,
      );
      const t = targetOffset / maxOffset;

      const vh = window.innerHeight;
      const total = section.offsetHeight - vh;
      const targetScrollY = section.offsetTop + t * total;
      window.scrollTo({ top: targetScrollY, behavior: "smooth" });
    },
    [isDesktop],
  );

  // --- Mobile: natural vertical stack ---
  if (!isDesktop) {
    return (
      <>
        <header className="sticky top-0 z-40 flex items-center justify-between px-5 py-3 bg-ink/85 backdrop-blur-md border-b border-concrete/10">
          <div className="tracking-brutal text-[10px] uppercase text-moss-glow">
            Laskowski.studio
          </div>
          <a
            href="mailto:hello@laskowski.studio"
            className="tracking-brutal text-[10px] uppercase text-concrete/80 hover:text-moss-glow"
          >
            Contact
          </a>
        </header>
        <main className="flex flex-col">
          <Entrance onEnter={() => jumpTo("coprzeszlo")} />
          {heroProjects.map((p, i) => (
            <Station
              key={p.id}
              project={p}
              number={String(i + 1).padStart(2, "0")}
              total={String(heroProjects.length).padStart(2, "0")}
            />
          ))}
          <ArchiveWall />
          <Shelf />
          <Desk />
          <Exit />
        </main>
      </>
    );
  }

  // --- Desktop: horizontal-scroll floor ---
  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: sectionHeight ? `${sectionHeight}px` : "100vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div
          className="absolute top-6 left-6 md:top-8 md:left-10 z-30 tracking-brutal text-[11px] uppercase text-concrete/80"
          style={{ mixBlendMode: "difference", color: "#fff" }}
        >
          Laskowski.studio
          <br />
          <span className="text-concrete/60">Portfolio · 2026</span>
        </div>

        <nav
          className="absolute top-6 right-6 md:top-8 md:right-10 z-30 flex gap-5 tracking-brutal text-[11px] uppercase"
          style={{ mixBlendMode: "difference", color: "#fff" }}
        >
          <button
            data-cursor="hover"
            onClick={() => jumpTo("coprzeszlo")}
            className="hover:text-moss-glow transition-colors"
          >
            Work
          </button>
          <button
            data-cursor="hover"
            onClick={() => jumpTo("desk")}
            className="hover:text-moss-glow transition-colors"
          >
            About
          </button>
          <a
            data-cursor="hover"
            href="mailto:hello@laskowski.studio"
            className="hover:text-moss-glow transition-colors"
          >
            Contact
          </a>
        </nav>

        <div className="absolute inset-0">
          <div
            ref={stripRef}
            className="h-full flex items-stretch will-change-transform"
            style={{ transform: `translate3d(${-offset}px, 0, 0)` }}
          >
            <Entrance onEnter={() => jumpTo("coprzeszlo")} />
            {heroProjects.map((p, i) => (
              <Station
                key={p.id}
                project={p}
                number={String(i + 1).padStart(2, "0")}
                total={String(heroProjects.length).padStart(2, "0")}
              />
            ))}
            <ArchiveWall />
            <Shelf />
            <Desk />
            <Exit />
            {/* Trailing spacer — extends the strip so Exit can scroll past
                the 33% focus point. Without this the HUD hangs on the
                previous section and Exit only half-enters the viewport. */}
            <div aria-hidden className="flex-none w-[55vw]" />
          </div>
        </div>

        <SerifSpine activeId={activeId} />
        <FloorHud
          activeId={activeId}
          progress={progress}
          onJump={jumpTo}
          sections={sections}
        />
      </div>
    </section>
  );
}
