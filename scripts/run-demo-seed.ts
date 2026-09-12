import { Temporal } from "@js-temporal/polyfill";

const globalWithTemporal = globalThis as typeof globalThis & {
  Temporal?: typeof Temporal;
};

if (!globalWithTemporal.Temporal) {
  globalWithTemporal.Temporal = Temporal;
}

await import("./seed-demo-school.ts");
