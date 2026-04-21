import type { HeroProject } from "../types";

const coprzeszlo: HeroProject = {
  id: "coprzeszlo",
  name: "Co Przeszło",
  tagline: "Polish legislation, in plain language.",
  year: "2026",
  role: "Design · Engineering",
  wall: {
    src: "/img/co-sie-dzieje.png",
    alt: "Co Przeszło — Polish legal acts platform",
    objectPosition: "50% 20%",
  },
  monitor: { kind: "image", src: "/img/co-sie-dzieje.png" },
  summary:
    "AI-assisted reader for Polish legal acts. Transforms dense statutes into understandable briefings, tracks parliamentary voting, and surfaces the politics behind the text.",
  tech: ["Next.js", "TypeScript", "AI/LLM", "Tailwind"],
  link: { label: "coprzeszlo.pl", href: "https://coprzeszlo.pl/" },
  hotspots: [
    {
      x: 0.22,
      y: 0.42,
      title: "AI briefing",
      detail:
        "Every legal act is summarized by an LLM tuned on Polish legal language.",
    },
    {
      x: 0.72,
      y: 0.68,
      title: "Voting data",
      detail:
        "Live parliamentary vote records stitched in so you can see who voted how.",
    },
  ],
};

export default coprzeszlo;
