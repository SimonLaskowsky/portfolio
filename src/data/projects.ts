export type Monitor =
  | { kind: "video"; src: string; poster?: string }
  | { kind: "iframe"; src: string }
  | { kind: "image"; src: string };

export type StationHotspot = {
  x: number;
  y: number;
  title: string;
  detail: string;
};

export type HeroProject = {
  id: string;
  name: string;
  tagline: string;
  year: string;
  role: string;
  wall: { src: string; alt: string; objectPosition?: string };
  monitor: Monitor;
  hotspots?: StationHotspot[];
  summary: string;
  tech: string[];
  link: { label: string; href: string };
};

export type ArchiveItem = {
  id: string;
  name: string;
  summary: string;
  tech: string[];
  thumbnail: string;
  href: string;
};

export type Experiment = {
  id: string;
  number: string;
  name: string;
  summary: string;
  href: string;
};

export type AboutDesk = {
  name: string;
  role: string;
  body: string[];
  photo: string;
  items: {
    id: string;
    x: number;
    y: number;
    title: string;
    detail: string;
  }[];
  links: { label: string; href: string }[];
};

export const heroProjects: HeroProject[] = [
  {
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
  },
  {
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
  },
  {
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
  },
];

export const archive: ArchiveItem[] = [
  {
    id: "discidius",
    name: "Discidius",
    summary:
      "Telecommunication analytics platform. Data viz for network performance monitoring.",
    tech: ["Next.js", "Tailwind", "Figma"],
    thumbnail: "/img/discidius.png",
    href: "https://discidius.com/",
  },
  {
    id: "bielsko-biala",
    name: "Bielsko-Biała",
    summary:
      "Official municipal portal. A comprehensive city site serving residents and visitors.",
    tech: ["Drupal", "PHP", "Tailwind"],
    thumbnail: "/img/bielsko-biala.png",
    href: "https://bielsko-biala.pl/",
  },
];

export const experiments: Experiment[] = [
  {
    id: "clocky",
    number: "01",
    name: "Clocky",
    summary: "Pomodoro timer with an interactive 3D clock.",
    href: "https://github.com/SimonLaskowsky/clocky",
  },
  {
    id: "otomoto",
    number: "02",
    name: "Otomoto Notifier",
    summary: "Automated scanner that alerts you to the best car deals.",
    href: "https://github.com/SimonLaskowsky/otomoto-notifier",
  },
  {
    id: "terminal",
    number: "03",
    name: "Terminal",
    summary: "Terminal-inspired app with built-in commands and suggestions.",
    href: "https://simonlaskowsky.github.io/terminal/",
  },
  {
    id: "search",
    number: "04",
    name: "API Search",
    summary: "Dynamic search bar wired to an external API.",
    href: "https://simonlaskowsky.github.io/search/",
  },
];

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

export const sections = [
  { id: "entrance", label: "Entrance" },
  { id: "coprzeszlo", label: "Co Przeszło" },
  { id: "ilezostanie", label: "Ile Zostanie" },
  { id: "brutalist-interiors", label: "Brutalist Interiors" },
  { id: "archive", label: "Archive" },
  { id: "shelf", label: "Experiments" },
  { id: "desk", label: "About" },
  { id: "exit", label: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];
