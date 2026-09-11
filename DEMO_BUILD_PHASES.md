# School Management Demo — Phased Build

This repository is built only from `greenbasket-labs/school-management-system` as the source application. The source repository is read-only for this work.

## Phase 1 — Boundary
- Separate demo repository and database boundary
- Record source commit
- No production repository edits

## Phase 2 — Application alignment
- Match the real application's package/runtime contract
- Add dedicated demo environment contract
- Keep production authentication and source behavior unchanged

## Phase 3 — Complete application migration
- Bring the complete tracked application source required to run the real school system
- Preserve routes, components, database contract, migrations, public assets and runtime configuration

## Phase 4 — Demo school dataset
- SS1–SS3 only
- 180+ students
- 12+ teachers
- Realistic Nigerian names
- Parent/student relationships
- Attendance history
- Fee assignments
- Multiple historical payments and allocations
- Receipts and balances
- Exams and published results
- Announcements and portal data

## Phase 5 — Passwordless demo entry
- Owner
- Musa Ibrahim (teacher)
- Johno Okafor (teacher)
- Student
- Parent
- Demo-only authentication entry; no production auth changes

## Phase 6 — Visitor safety
- Visitors can explore the real workflows
- Temporary write actions may be allowed where useful
- Permanent demo baseline is protected by disposable/reset or transaction isolation
- No customer database is ever used

## Phase 7 — Verification and deployment
- Build/lint verification
- Database migration/seed verification
- Role-by-role smoke testing
- Deployment configuration review
- Connect GB-Global demo link only after the demo is stable
