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
  /* Ambient glow behind the station. Any CSS colour; pulled from the
     project's own palette. Falls back to a neutral wash. */
  accent?: string;
  monitor: Monitor;
  hotspots?: StationHotspot[];
  summary: string;
  tech: string[];
  link: { label: string; href: string };
};

export type ArchiveItem = {
  id: string;
  name: string;
  /* Employer the work was done for. Marks the item as client work
     rather than a personal product. */
  at: string;
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

export type SectionId = string;

export type Section = {
  id: SectionId;
  label: string;
};
