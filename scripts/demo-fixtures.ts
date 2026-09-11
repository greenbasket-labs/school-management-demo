/**
 * Deterministic fixtures for the public Green Basket demo school.
 *
 * This file is data-only. It does not write to a database by itself.
 * The executable demo seed must import the real application/database
 * contract before using these fixtures.
 */

export const DEMO_SCHOOL = {
  name: "Green Basket Demo School",
  address: "Plot 18, Gwarinpa District, Abuja, Nigeria",
  phone: "+234 800 000 1000",
  email: "demo@greenbasket.school",
  motto: "Learning Today. Leading Tomorrow.",
  principal: "Grace Ibrahim",
} as const;

export const DEMO_CLASSES = [
  "SS1 A",
  "SS1 B",
  "SS2 A",
  "SS2 B",
  "SS3 A",
  "SS3 B",
] as const;

export const DEMO_TEACHERS = [
  { firstName: "Musa", lastName: "Ibrahim", subject: "Mathematics", username: "musa" },
  { firstName: "Johno", lastName: "Okafor", subject: "English Language", username: "johno" },
  { firstName: "Aisha", lastName: "Bello", subject: "Biology", username: "aisha" },
  { firstName: "Ibrahim", lastName: "Sani", subject: "Chemistry", username: "ibrahim" },
  { firstName: "Maryam", lastName: "Yusuf", subject: "Physics", username: "maryam" },
  { firstName: "David", lastName: "Johnson", subject: "Economics", username: "david" },
  { firstName: "Fatima", lastName: "Abdullahi", subject: "Government", username: "fatima" },
  { firstName: "Emeka", lastName: "Okoro", subject: "Literature in English", username: "emeka" },
  { firstName: "Hauwa", lastName: "Mohammed", subject: "Civic Education", username: "hauwa" },
  { firstName: "Samuel", lastName: "Peter", subject: "Computer Studies", username: "samuel" },
  { firstName: "Grace", lastName: "Daniel", subject: "Geography", username: "grace" },
  { firstName: "Abubakar", lastName: "Musa", subject: "Physics", username: "abubakar" },
  { firstName: "Janet", lastName: "Musa", subject: "Basic Science", username: "janet" },
  { firstName: "Michael", lastName: "Eze", subject: "Mathematics", username: "michael" },
] as const;

export const DEMO_STUDENT_COUNT = 192;
export const DEMO_PARENT_COUNT = DEMO_STUDENT_COUNT;

export const DEMO_FEATURED_STUDENT = {
  firstName: "Amina",
  lastName: "Abdullahi",
  username: "amina.student",
  className: "SS2 A",
} as const;

export const DEMO_FEATURED_PARENT = {
  firstName: "Abdullahi",
  lastName: "Bello",
  username: "abdullahi.parent",
  relationship: "Father",
} as const;

export const DEMO_TERMS = [
  {
    code: "FIRST",
    name: "First Term",
    startDate: "2025-09-01T00:00:00.000Z",
    endDate: "2025-12-19T23:59:59.000Z",
  },
  {
    code: "SECOND",
    name: "Second Term",
    startDate: "2026-01-05T00:00:00.000Z",
    endDate: "2026-04-02T23:59:59.000Z",
  },
  {
    code: "THIRD",
    name: "Third Term",
    startDate: "2026-04-20T00:00:00.000Z",
    endDate: "2026-07-31T23:59:59.000Z",
  },
] as const;

export const DEMO_SUBJECTS = [
  ["ENG", "English Language"],
  ["MTH", "Mathematics"],
  ["BIO", "Biology"],
  ["CHE", "Chemistry"],
  ["PHY", "Physics"],
  ["ECO", "Economics"],
  ["GOV", "Government"],
  ["LIT", "Literature in English"],
  ["CIV", "Civic Education"],
  ["ICT", "Computer Studies"],
  ["GEO", "Geography"],
  ["BSC", "Basic Science"],
] as const;

export const DEMO_FEE_TYPES = [
  { name: "Tuition", amount: 120000 },
  { name: "Development Levy", amount: 30000 },
  { name: "Transport", amount: 20000 },
  { name: "Examination", amount: 10000 },
] as const;

export const DEMO_ANNOUNCEMENTS = [
  ["Welcome to the 2025/2026 Session", "We welcome all students, parents and staff to a new academic year."],
  ["First Term Results Published", "First term examination results are now available through the portal."],
  ["Fee Payment Reminder", "Parents are encouraged to review outstanding balances and keep payments up to date."],
  ["Staff Meeting", "All teaching staff should review the staff notice before the next academic meeting."],
  ["Third Term Activities", "The school has published the major activities planned for the final term."],
] as const;

export const DEMO_ROLE_ENTRY = [
  {
    key: "owner",
    label: "School Owner",
    name: "Grace Ibrahim",
    targetUsername: "owner",
  },
  {
    key: "musa",
    label: "Teacher — Musa Ibrahim",
    name: "Musa Ibrahim",
    targetUsername: "musa",
  },
  {
    key: "johno",
    label: "Teacher — Johno Okafor",
    name: "Johno Okafor",
    targetUsername: "johno",
  },
  {
    key: "student",
    label: "Student — Amina Abdullahi",
    name: "Amina Abdullahi",
    targetUsername: "amina.student",
  },
  {
    key: "parent",
    label: "Parent — Abdullahi Bello",
    name: "Abdullahi Bello",
    targetUsername: "abdullahi.parent",
  },
] as const;

export const DEMO_SAFETY = {
  requiredEnvironmentFlag: "DEMO_SEED=true",
  dedicatedDatabaseRequired: true,
  refuseIfExistingSchool: true,
  visitorWritesMustNotBecomeBaseline: true,
  productionRepositoryMustRemainUntouched: true,
} as const;
