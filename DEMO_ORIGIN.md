# School Management Demo

This repository is the dedicated marketing/demo deployment of Green Basket's School Management System.

## Source

The demo is built from the real `greenbasket-labs/school-management-system` application. It is not a mock application.

Source baseline for the initial migration: `04650d7505d826211d2150fcd79cdaff6d1d1e3f`.

## Demo requirements

- Real school application and real schema.
- 180+ students.
- SS1, SS2 and SS3 only for the public demo school.
- 12+ teachers, with Musa Ibrahim and Johno Okafor available as prominent teacher demo accounts.
- Parent and student portal accounts linked to the prepared dataset.
- Historical attendance, fees, payments, allocations, receipts, examinations, results and announcements.
- Passwordless visitor entry into prepared Owner, Teacher, Student and Parent demo roles.
- Visitor actions may be exercised, but demo writes must never become permanent marketing data.
- Dedicated demo database/application boundary. Never use a customer production database.

## Relationship to the product repository

`school-management-system` remains the canonical product codebase used to build and operate real schools. Demo-specific authentication, seed data and visitor isolation belong in this repository so the production authentication model is not weakened for marketing access.
