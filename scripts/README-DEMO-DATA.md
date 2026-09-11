# Demo data build gate

The demo dataset must be generated only after the full application source and its real database contract have been migrated into this repository.

## Target dataset

- 192 students total
- SS1 A, SS1 B, SS2 A, SS2 B, SS3 A, SS3 B
- 14 teachers
- Musa Ibrahim and Johno Okafor are featured teacher accounts
- 192 named parent/guardian records linked to students
- Three academic terms in the 2025/2026 session
- Historical attendance, fees, multiple payments, allocations, receipts, exams, results and announcements

## Safety gate

1. `school-management-system` is read-only for this project.
2. `DATABASE_URL` must point to the dedicated demo PostgreSQL database.
3. Never seed a customer database.
4. The seed must refuse to continue if an existing school is found.
5. Demo login must not weaken production authentication.
6. Visitor writes must be isolated from the persistent baseline before public deployment.
