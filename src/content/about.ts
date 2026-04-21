import type { AboutDesk } from "./types";

export const about: AboutDesk = {
  name: "Szymon Laskowski",
  role: "Front-end engineer · Studio of one",
  body: [
    "I build web experiences that treat the page as a space, not a document. Editorial type, considered motion, restraint where it counts.",
    "Primarily React, Next.js, TypeScript, GSAP. Comfortable with Vue, Node, and design in Figma when the project calls for it.",
    "Based in Poland. Currently open to new work.",
  ],
  photo: "/img/me.jpg",
  items: [
    {
      id: "notebook",
      x: 0.22,
      y: 0.4,
      title: "Field notes",
      detail:
        "Kept since 2019. Half sketches, half post-mortems. Everything I ship passes through here first.",
    },
    {
      id: "coffee",
      x: 0.65,
      y: 0.55,
      title: "Mid-morning ritual",
      detail:
        "Good work happens between the second and third cup. Before that, meetings. After that, shipping.",
    },
    {
      id: "card",
      x: 0.42,
      y: 0.72,
      title: "Business card",
      detail:
        "Laskowski.studio · Szymon Laskowski · hello@laskowski.studio",
    },
  ],
  links: [
    { label: "GitHub", href: "https://github.com/SimonLaskowsky" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/szymon-laskowski-5b866920a/",
    },
    { label: "Email", href: "mailto:hello@laskowski.studio" },
  ],
};
