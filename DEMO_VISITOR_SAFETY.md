# Demo Visitor Safety

This repository is for a public Green Basket product demonstration only.

## Rules

1. Use a dedicated demo PostgreSQL database. Never use a customer database.
2. The prepared school dataset is the baseline and must be restorable.
3. Visitors may explore real school workflows.
4. Where write actions are enabled, they must be temporary and isolated from the permanent baseline.
5. Production authentication and authorization must not be weakened for demo access.
6. Passwordless entry is demo-only and limited to prepared demo personas.
7. Demo data must contain synthetic/marketing data only.

## Baseline

The intended baseline contains:

- Green Basket Demo School
- SS1 A, SS1 B
- SS2 A, SS2 B
- SS3 A, SS3 B
- 180+ students
- 12+ teachers
- Linked parents
- Attendance history
- Fee assignments
- Multiple historical payments and payment allocations
- Receipts and outstanding balances
- Published examinations and results
- Announcements
- Portal-ready student, parent and teacher accounts

## Reset strategy

Before public deployment, choose one of these implementations:

- disposable database/session per visitor, or
- isolated transaction/session writes with guaranteed rollback, or
- frequent verified restoration from a clean seeded baseline.

The chosen mechanism must be tested by performing a write through each important role and confirming that a new visitor sees the original baseline.
