import type { HeroProject } from "../types";

const ilezostanie: HeroProject = {
  id: "ilezostanie",
  name: "Ile Zostanie",
  tagline: "What's actually left after taxes?",
  year: "2025",
  role: "Design · Engineering",
  wall: {
    src: "/img/ile-zostanie.png",
    alt: "Ile Zostanie — Polish salary calculator",
    objectPosition: "50% 30%",
  },
  monitor: { kind: "image", src: "/img/ile-zostanie.png" },
  summary:
    "A salary calculator for Polish employees and freelancers. Models every contract type and tax regime so your real take-home is never a mystery.",
  tech: ["Next.js", "TypeScript", "Tailwind"],
  link: { label: "ilezostanie.com", href: "https://ilezostanie.com" },
  hotspots: [
    {
      x: 0.3,
      y: 0.55,
      title: "Every contract modeled",
      detail:
        "UoP, B2B, UoD, UZ — each with its own tax, ZUS, and health contribution logic.",
    },
    {
      x: 0.78,
      y: 0.4,
      title: "Side-by-side compare",
      detail:
        "See the same gross under two contracts at once. Decisions made visible.",
    },
  ],
};

export default ilezostanie;
