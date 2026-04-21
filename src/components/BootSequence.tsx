"use client";

import { useEffect, useState } from "react";
import { sections } from "@/content";

// Brutalist loader shown only on the first visit. Draws the floor plan
// — crosshair pin, eight section markers, coordinate strip — then
// fades to reveal the entrance. Dismissal persisted via sessionStorage
// so it doesn't interrupt navigation within a session.

const SESSION_KEY = "lsq.boot.seen";

type Stage = "pending" | "playing" | "dismissing" | "done";

export default function BootSequence() {
  const [stage, setStage] = useState<Stage>("pending");

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (window.sessionStorage.getItem(SESSION_KEY)) {
        setStage("done");
        return;
      }
    } catch {
      // sessionStorage unavailable — just play the sequence.
    }
    setStage("playing");
    // Lock document scroll while the sequence plays.
    document.body.style.overflow = "hidden";

    const dismiss = window.setTimeout(() => setStage("dismissing"), 3400);
    const finish = window.setTimeout(() => {
      setStage("done");
      document.body.style.overflow = "";
      try {
        window.sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
    }, 4100);

    return () => {
      window.clearTimeout(dismiss);
      window.clearTimeout(finish);
      document.body.style.overflow = "";
    };
  }, []);

  if (stage === "done" || stage === "pending") return null;

  const isDismissing = stage === "dismissing";

  return (
    <div
      className="fixed inset-0 z-[100] bg-ink flex items-center justify-center pointer-events-auto"
      style={{
        animation: isDismissing
          ? "boot-dismiss 0.65s ease-out both"
          : undefined,
      }}
      aria-hidden
    >
      {/* Ruling grid backdrop */}
      <div className="absolute inset-0 ruling-grid opacity-60" />

      {/* Corner coordinates */}
      <div
        className="absolute top-6 left-6 font-mono text-[10px] uppercase tracking-brutal text-bone/55"
        style={{ animation: "boot-dropin 0.5s 0.1s ease-out both" }}
      >
        Laskowski.studio
        <br />
        Floor Plan · 01:12
      </div>
      <div
        className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-brutal text-bone/55 text-right"
        style={{ animation: "boot-dropin 0.5s 0.15s ease-out both" }}
      >
        SHT.01 / FP
        <br />
        N 50°03&apos; · E 19°56&apos;
      </div>
      <div
        className="absolute bottom-6 left-6 font-mono text-[10px] uppercase tracking-brutal text-bone/55"
        style={{ animation: "boot-dropin 0.5s 2.3s ease-out both" }}
      >
        Resolved · entering floor
      </div>
      <div
        className="absolute bottom-6 right-6 font-mono text-[10px] uppercase tracking-brutal text-bone/55 text-right"
        style={{ animation: "boot-dropin 0.5s 2.5s ease-out both" }}
      >
        © 2026
      </div>

      {/* Central crosshair */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ animation: "boot-crosshair 0.7s 0.2s ease-out both" }}
      >
        <div className="relative w-[240px] h-[240px]">
          {/* Horizontal rule */}
          <div
            className="absolute left-0 right-0 top-1/2 h-px bg-bone/70 origin-left"
            style={{ animation: "boot-linedraw 0.6s 0.6s ease-out both" }}
          />
          {/* Vertical rule */}
          <div
            className="absolute top-0 bottom-0 left-1/2 w-px bg-bone/70 origin-top"
            style={{
              animation: "boot-linedraw 0.6s 0.6s ease-out both",
              transform: "scaleY(0)",
              animationName: "boot-linedraw-v",
            }}
          />
          {/* Center dot */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-bone"
            style={{ animation: "boot-dropin 0.4s 1.1s ease-out both" }}
          />
        </div>
      </div>

      {/* Section marker row — eight plates dropping in */}
      <div className="absolute left-1/2 top-[calc(50%+170px)] -translate-x-1/2 flex items-center gap-3 font-mono text-[9px] uppercase tracking-brutal text-bone/65">
        {sections.map((s, i) => (
          <div
            key={s.id}
            className="flex flex-col items-center gap-1"
            style={{
              animation: `boot-dropin 0.35s ${1.3 + i * 0.08}s ease-out both`,
            }}
          >
            <div className="h-3 w-[2px] bg-bone/70" />
            <div className="tabular-nums opacity-60">
              {String(i + 1).padStart(2, "0")}
            </div>
          </div>
        ))}
      </div>

      {/* Typing strip */}
      <div
        className="absolute left-1/2 top-[calc(50%-160px)] -translate-x-1/2 font-mono text-[11px] uppercase tracking-brutal text-bone whitespace-nowrap"
        style={{ animation: "boot-dropin 0.5s 2s ease-out both" }}
      >
        <span className="opacity-55">Resolving floor plan </span>
        <span>→ Entrance</span>
      </div>
    </div>
  );
}
