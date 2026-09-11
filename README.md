# Green Basket School Management Demo

This repository is the public demonstration deployment of the real Green Basket School Management System.

It is intentionally based on the production application codebase, with a dedicated demo database and demo-only visitor experience.

## Demo goals

- Real school-management workflows, not a mock UI
- 180+ students in SS1–SS3
- 12+ teachers, including Musa Ibrahim and Johno Okafor
- Parents linked to students
- Historical attendance
- Historical fees and multiple payment records
- Receipts and balances
- Exams and published results
- Announcements and portal activity
- Passwordless demo entry for selected prepared roles
- Visitor actions isolated from the permanent demo dataset

## Source

The application is initially copied from:

`greenbasket-labs/school-management-system`

The production repository remains the canonical product codebase.

## Demo data

The dedicated demo database must never contain customer data. Seed it only with the demo seed and only when the database is empty.

## Environment

```text
DATABASE_URL=<dedicated demo PostgreSQL database>
SESSION_SECRET=<unique random secret>
DEMO_SEED=true
```

## Important

The passwordless visitor experience belongs to this demo repository only. Production school authentication must remain unchanged.
