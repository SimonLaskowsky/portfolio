import type { HeroProject } from "../types";

const rynkoradar: HeroProject = {
  id: "rynkoradar",
  name: "RynkoRadar",
  tagline: "Radar cen mieszkań w Polsce.",
  year: "JAN 2026",
  role: "Design · Engineering",
  wall: {
    src: "/img/rynkoradar.png",
    alt: "RynkoRadar — interaktywna mapa cen mieszkań",
    objectPosition: "50% 0%",
  },
  accent: "#0f5d4d",
  monitor: { kind: "image", src: "/img/rynkoradar.png" },
  summary:
    "Interactive heatmap of Polish apartment prices. Aggregates listings from property portals via automated Playwright scraping, surfaces district-level trends, and lets you compare neighbourhoods at a glance.",
  tech: [
    "Next.js",
    "TypeScript",
    "MapLibre GL",
    "Postgres",
    "Drizzle",
    "Playwright",
  ],
  link: {
    label: "rynkoradar.pl",
    href: "https://rynkoradar.pl",
  },
  hotspots: [
    {
      x: 0.5,
      y: 0.45,
      title: "District heatmap",
      detail:
        "Price-per-m² aggregated by district, colour-coded from under 12 k to over 22 k PLN. MapLibre GL renders the layer on top of a custom dark basemap.",
    },
    {
      x: 0.25,
      y: 0.65,
      title: "Automated scraping",
      detail:
        "Playwright crawls listing portals on a GitHub Actions schedule. Fresh data lands in Postgres through Drizzle, with PostGIS doing the spatial filtering in SQL.",
    },
  ],
};

export default rynkoradar;
