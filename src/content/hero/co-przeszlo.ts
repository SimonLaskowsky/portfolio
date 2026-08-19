import type { HeroProject } from "../types";

const coprzeszlo: HeroProject = {
  id: "coprzeszlo",
  name: "Co Przeszło",
  tagline: "Polish legislation, in plain language.",
  year: "APR 2025",
  role: "Design · Engineering",
  wall: {
    src: "/img/co-przeszlo.png",
    alt: "Co Przeszło, Polish legal acts platform",
    objectPosition: "50% 0%",
  },
  accent: "#7a2b24",
  monitor: { kind: "image", src: "/img/co-przeszlo.png" },
  summary:
    "AI-assisted reader for Polish legal acts. Transforms dense statutes into understandable briefings, tracks parliamentary voting, and surfaces the politics behind the text.",
  tech: ["Next.js", "TypeScript", "Python", "Prisma", "Anthropic API"],
  link: { label: "coprzeszlo.pl", href: "https://coprzeszlo.pl/" },
  hotspots: [
    {
      x: 0.22,
      y: 0.42,
      title: "AI briefing",
      detail:
        "A Python pipeline pulls each act, splits it with LangChain and summarizes it through the Anthropic API in Polish legal language.",
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
