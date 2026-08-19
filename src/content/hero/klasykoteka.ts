import type { HeroProject } from "../types";

const klasykoteka: HeroProject = {
  id: "klasykoteka",
  name: "Klasykoteka",
  tagline: "Marketplace klasycznych aut.",
  year: "2026",
  role: "Design · Engineering",
  wall: {
    src: "/img/klasykoteka.png",
    alt: "Klasykoteka, marketplace klasycznych aut",
    objectPosition: "50% 0%",
  },
  accent: "#2f4a34",
  monitor: { kind: "image", src: "/img/klasykoteka.png" },
  summary:
    "Marketplace for classic cars, youngtimers and oldtimers, built to feel like a trip back in time instead of another generic car portal. Listings, saved searches and e-mail alerts on top of Postgres, with AI-generated editorial notes for every model.",
  tech: ["Next.js 16", "TypeScript", "Postgres", "Drizzle", "Better Auth"],
  link: {
    label: "klasykoteka.pl",
    href: "https://www.klasykoteka.pl/",
  },
  hotspots: [
    {
      x: 0.72,
      y: 0.45,
      title: "Editorial notes",
      detail:
        "Every model gets a short editorial note generated with the Anthropic API, so a listing reads like a catalogue entry, not a spec dump.",
    },
    {
      x: 0.3,
      y: 0.6,
      title: "Alerts on new listings",
      detail:
        "Save a search and Resend mails you the moment a matching car shows up.",
    },
  ],
};

export default klasykoteka;
