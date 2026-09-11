import "dotenv/config";

/**
 * Phase 4 demo-data contract.
 *
 * This file is intentionally kept alongside the demo repository until the
 * complete application/schema is migrated from school-management-system.
 * It will then be wired to the same database contract and expanded to create
 * a large, realistic SS1–SS3 school dataset without touching the source repo.
 */

const STUDENT_COUNT = 180;
const TEACHER_COUNT = 12;
const CLASS_NAMES = [
  "SS1 A",
  "SS1 B",
  "SS2 A",
  "SS2 B",
  "SS3 A",
  "SS3 B",
] as const;

const TEACHERS = [
  ["Musa", "Ibrahim"],
  ["Johno", "Okafor"],
  ["Aisha", "Bello"],
  ["Ibrahim", "Sani"],
  ["Maryam", "Yusuf"],
  ["David", "Johnson"],
  ["Fatima", "Abdullahi"],
  ["Emeka", "Okoro"],
  ["Hauwa", "Mohammed"],
  ["Samuel", "Peter"],
  ["Grace", "Daniel"],
  ["Abubakar", "Musa"],
] as const;

function assertDemoEnvironment() {
  if (process.env["DEMO_SEED"] !== "true") {
    throw new Error(
      "Demo seed blocked. Set DEMO_SEED=true in the dedicated demo environment.",
    );
  }

  if (!process.env["DATABASE_URL"]) {
    throw new Error("DATABASE_URL is required for the demo seed.");
  }
}

function main() {
  assertDemoEnvironment();

  console.log("Demo dataset plan");
  console.log(`Students: ${STUDENT_COUNT}`);
  console.log(`Teachers: ${TEACHER_COUNT}`);
  console.log(`Classes: ${CLASS_NAMES.join(", ")}`);
  console.log(`Featured teacher: ${TEACHERS[0].join(" ")}`);
  console.log(`Featured teacher: ${TEACHERS[1].join(" ")}`);
  console.log(
    "Next step: connect this generator to the migrated real application schema before executing database writes.",
  );
}

main();
