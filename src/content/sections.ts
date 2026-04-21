import { heroProjects } from "./hero";
import type { Section } from "./types";

// Fixed plates that bookend or punctuate the floor. Hero stations are
// spliced in between the entrance and the archive based on the hero
// project list, so adding/reordering heroes auto-updates the HUD.
export const sections: ReadonlyArray<Section> = [
  { id: "entrance", label: "Entrance" },
  ...heroProjects.map((p) => ({ id: p.id, label: p.name })),
  { id: "archive", label: "Archive" },
  { id: "shelf", label: "Experiments" },
  { id: "desk", label: "About" },
  { id: "exit", label: "Contact" },
];
