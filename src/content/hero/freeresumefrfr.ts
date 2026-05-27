import type { HeroProject } from "../types";

const freeresumefrfr: HeroProject = {
  id: "freeresumefrfr",
  name: "freeresumefrfr",
  tagline: "Twoje CV nie powinno nic kosztować.",
  year: "2025",
  role: "Design · Engineering",
  wall: {
    src: "/img/freeresumefrfr.png",
    alt: "freeresumefrfr — darmowy kreator CV",
    objectPosition: "50% 20%",
  },
  monitor: { kind: "iframe", src: "https://freeresumefrfr.com" },
  summary:
    "Free résumé builder with no signup and no paywall. Pick a template, fill out the form, export a pixel-perfect PDF — unlimited times, forever.",
  tech: ["Next.js", "TypeScript", "Tailwind"],
  link: {
    label: "freeresumefrfr.com",
    href: "https://freeresumefrfr.com",
  },
  hotspots: [
    {
      x: 0.72,
      y: 0.45,
      title: "No paywall",
      detail:
        "Every template and export is completely free — no account, no credit card, no limits.",
    },
    {
      x: 0.3,
      y: 0.6,
      title: "Instant PDF export",
      detail:
        "One click generates a print-ready PDF straight in the browser, no server-side rendering needed.",
    },
  ],
};

export default freeresumefrfr;
