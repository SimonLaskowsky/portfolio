"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Site-wide smooth scroll. Lenis intercepts native scroll and eases it
// with requestAnimationFrame — the floor's horizontal strip already
// listens to window scroll events, which Lenis continues to dispatch,
// so everything else keeps working.

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
