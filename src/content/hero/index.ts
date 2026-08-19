import coprzeszlo from "./co-przeszlo";
import rynkoradar from "./rynkoradar";
import klasykoteka from "./klasykoteka";

// Order here controls the order of hero stations on the workshop floor.
// Adding a new hero: create a sibling file, import it here, append to the
// array.
export const heroProjects = [
  coprzeszlo,
  rynkoradar,
  klasykoteka,
];
