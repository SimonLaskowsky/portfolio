"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { sections, type SectionId } from "@/data/projects";
import Entrance from "./Entrance";
import Station from "./Station";
import ArchiveWall from "./ArchiveWall";
import Shelf from "./Shelf";
import Desk from "./Desk";
import Exit from "./Exit";
import { heroProjects } from "@/data/projects";
import FloorHud from "./FloorHud";
import SerifSpine from "./SerifSpine";

export default function WorkshopFloor() {
  const sectionRef = useRef<HTMLElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [offset, setOffset] = useState(0);
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<SectionId>("entrance");

  useLayoutEffect(() => {
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
  }, []);

  useEffect(() => {
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

      // Figure out which section we're looking at based on its DOM x-position.
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
  }, [sectionHeight]);

  const jumpTo = useCallback((id: SectionId) => {
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
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: sectionHeight ? `${sectionHeight}px` : "100vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Top-left studio mark */}
        <div
          className="absolute top-6 left-6 md:top-8 md:left-10 z-30 tracking-brutal text-[11px] uppercase text-concrete/80"
          style={{ mixBlendMode: "difference", color: "#fff" }}
        >
          Laskowski.studio
          <br />
          <span className="text-concrete/60">Portfolio · 2026</span>
        </div>

        {/* Top-right nav */}
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

        {/* The floor — a single horizontal strip translated by scroll progress */}
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
