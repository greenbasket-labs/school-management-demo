export const DEMO_DATA_PLAN = {
  school: {
    name: "Green Basket Demo School",
    location: "Abuja, Nigeria",
    session: "2025/2026 Academic Session",
  },
  classes: [
    { name: "SS1", section: "A", students: 30 },
    { name: "SS1", section: "B", students: 30 },
    { name: "SS2", section: "A", students: 30 },
    { name: "SS2", section: "B", students: 30 },
    { name: "SS3", section: "A", students: 30 },
    { name: "SS3", section: "B", students: 30 },
  ],
  students: {
    minimum: 180,
    target: 192,
    distribution: "Balanced across SS1–SS3 and A/B arms",
  },
  teachers: {
    minimum: 12,
    target: 14,
    featured: [
      { name: "Musa Ibrahim", role: "Teacher", subject: "Mathematics" },
      { name: "Johno Okafor", role: "Teacher", subject: "English Language" },
    ],
  },
  parents: {
    target: 192,
    relationship: "Each student linked to a named parent/guardian",
  },
  history: {
    attendance: "Historical records across the academic session",
    fees: "Fee assignments for First, Second and Third Terms",
    payments: "Multiple payment transactions per student across terms",
    receipts: "Receipt records linked to each completed payment",
    results: "Published examination results for each term",
    announcements: "School-wide and role-targeted announcements",
  },
  safety: {
    dedicatedDatabase: true,
    customerDataAllowed: false,
    demoActionsMustNotChangeBaseline: true,
  },
} as const;
