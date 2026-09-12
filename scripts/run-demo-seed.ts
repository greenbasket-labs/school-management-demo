import { Temporal } from "@js-temporal/polyfill";
import { readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const globalWithTemporal = globalThis as typeof globalThis & {
  Temporal?: typeof Temporal;
};

if (!globalWithTemporal.Temporal) {
  globalWithTemporal.Temporal = Temporal;
}

const sourcePath = resolve("scripts/seed-demo-school.ts");
const runtimePath = resolve("scripts/.seed-demo-school.runtime.ts");

let source = await readFile(sourcePath, "utf8");

// The generated Prisma 8 runtime does not expose PaymentAllocation as a
// top-level ORM namespace. Payments themselves remain in the demo dataset;
// allocation rows are optional for this disposable demo.
source = source.replace(
  /\n      for \(const assignment of termAssignments\) \{[\s\S]*?\n      \}\n\n      await db\.orm\.public\.Receipt\.create\(/,
  "\n      await db.orm.public.Receipt.create(",
);

// The current attendance contract uses PRESENT/ABSENT rather than LATE.
source = source.replaceAll('"LATE"', '"PRESENT"');

await writeFile(runtimePath, source, "utf8");

try {
  await import(pathToFileURL(runtimePath).href);
} finally {
  await rm(runtimePath, { force: true });
}
