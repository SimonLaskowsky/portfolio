import type { HeroProject } from "../types";

const brutalistInteriors: HeroProject = {
  id: "brutalist-interiors",
  name: "Brutalist Interiors",
  tagline: "A sunken planter, four walls, one opening.",
  year: "2026",
  role: "Concept · Design · Engineering",
  wall: {
    src: "/img/brutalist-interiors.jpg",
    alt: "Brutalist Interiors — editorial landing experience",
    objectPosition: "50% 50%",
  },
  monitor: { kind: "image", src: "/img/brutalist-interiors.jpg" },
  summary:
    "Editorial landing experience for a fictional brutalist interior studio. Three residences, one door each. Click the door, the interior is born from it, vertical scroll becomes horizontal motion.",
  tech: ["Next.js", "GSAP", "Tailwind", "Instrument Serif"],
  link: {
    label: "github.com/SimonLaskowsky/interiors",
    href: "https://github.com/SimonLaskowsky/interiors",
  },
  hotspots: [
    {
      x: 0.54,
      y: 0.59,
      title: "The door",
      detail:
        "A magnetic hotspot that pulls toward the cursor. Click triggers a circular clip-path reveal — the interior is born out of the doorway.",
    },
    {
      x: 0.22,
      y: 0.3,
      title: "Editorial type",
      detail:
        "Instrument Serif set huge, with mix-blend-mode: difference so it's always legible on variable imagery.",
    },
  ],
};

export default brutalistInteriors;
