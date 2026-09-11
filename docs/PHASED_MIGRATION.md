# School Management Demo — Phased Migration

## Source of truth

The demo application is built from `greenbasket-labs/school-management-system`.

Production repository: `school-management-system`
Demo repository: `school-management-demo`

## Phase 1 — Source Alignment

- Establish a dedicated demo branch.
- Record the exact source commit used for the phase.
- Keep production repository untouched.
- Preserve the real application architecture rather than creating a mock.

Source commit for this phase:

`04650d7505d826211d2150fcd79cdaff6d1d1e3f`

## Phase 2 — Application Tree Migration

Copy the complete deployable application tree from the source repository into this repository. Do not omit application, source, migrations, public assets, configuration, or required package files.

## Phase 3 — Demo Dataset

Expand the real demo seed to a populated secondary-school dataset:

- SS1–SS3 only
- 180+ students
- 12+ teachers
- named featured demo users including Musa and Johno
- linked parents
- attendance history
- fee assignments
- multiple historical payments
- payment allocations and receipts
- exams and published results
- announcements
- portal accounts

## Phase 4 — Passwordless Visitor Entry

Provide role-based demo entry without exposing or weakening the production password authentication implementation:

- School Owner
- Musa Ibrahim — Teacher
- Johno Okafor — Teacher
- prepared Student account
- prepared Parent account

## Phase 5 — Non-Persistent Visitor Actions

Visitors may exercise normal workflows in the public demo, but changes must not become permanent demo-state mutations. The implementation should use demo-specific isolation/reset/disposable-session behavior rather than weakening production authorization.

## Phase 6 — Verification

Verify the complete demo against the real application workflows, including authentication, role permissions, student/parent relationships, teacher workflows, attendance, fees, payments, receipts, exams/results, portals, reports, announcements, and navigation.

## Safety Rules

1. Never point the demo at a customer database.
2. Never change production authentication merely to simplify the demo.
3. Never claim a phase is complete until the repository state supports it.
4. Prefer small, reversible commits.
5. Keep `school-management-system` as the canonical product source.
