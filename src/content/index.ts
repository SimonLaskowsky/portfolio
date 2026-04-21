// Content barrel — a single import path for every piece of the floor.
// To add/update content:
//   • Hero project   → src/content/hero/<slug>.ts         (+ barrel)
//   • Archive item   → src/content/archive/<slug>.ts      (+ barrel)
//   • Experiment     → src/content/experiments/<slug>.ts  (+ barrel)
//   • About copy     → src/content/about.ts
//   • Section labels → src/content/sections.ts (hero labels auto-populate)
export * from "./types";
export { heroProjects } from "./hero";
export { archive } from "./archive";
export { experiments } from "./experiments";
export { about } from "./about";
export { sections } from "./sections";
