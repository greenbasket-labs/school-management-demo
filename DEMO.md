# Green Basket Demo School — Build Boundary

This repository is the dedicated demonstration application for Green Basket.

## Source application

The application is copied from `greenbasket-labs/school-management-system` at source commit `04650d7505d826211d2150fcd79cdaff6d1d1e3f`.

The production repository remains the canonical product codebase. Demo-only behavior must remain here.

## Dataset target

- SS1 A / SS1 B
- SS2 A / SS2 B
- SS3 A / SS3 B
- 180+ students
- 12+ teachers
- Parent accounts linked to students
- Rich attendance history
- Multiple historical fee/payment records per student
- Payment allocations and receipts
- Published examinations/results
- Announcements and portal data

## Demo roles

The public demo should offer passwordless entry into prepared accounts, with prominent access for:

- School Owner
- Musa Ibrahim — Teacher
- Johno Okafor — Teacher
- Student
- Parent

The exact demo identities must correspond to real seeded users in the demo database.

## Persistence policy

The public demo must use a disposable, dedicated database. Visitor writes may be allowed for realistic interaction, but they must not permanently alter the baseline demo dataset. The preferred implementation is an isolated disposable session/snapshot/reset mechanism rather than weakening production authentication or authorization.

## Production safety

Do not use this database for customers. Do not point the demo deployment at a production school's database. Do not weaken `school-management-system` authentication to implement passwordless demo access.
