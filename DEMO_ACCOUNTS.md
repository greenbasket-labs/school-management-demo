# Green Basket Demo School — Demo Accounts

The public demo uses one real seeded school database with a large realistic dataset. Visitors use a small set of representative accounts; each account is connected to real school records and uses the same application authentication and authorization flow as a real school.

## Representative accounts

| Account | Role | Demonstrates |
|---|---|---|
| Owner | Owner / Admin | School administration, students, classes, attendance, finance, results, reports and audit |
| Accountant | Accountant | Fee setup, assignments, payments, balances and financial reporting |
| Cashier | Cashier | Receiving payments, receipts and payment history |
| Teacher | Teacher | Assigned classes, students, attendance, assessments and results |
| Parent | Parent | Children, attendance, results, fees and payments |
| Student | Student | Subjects, attendance, results and announcements |

## Dataset principle

The demo should contain 200+ students plus multiple teachers, parents, classes, subjects, fee records, payments, attendance records, assessments, results and announcements.

The representative accounts are not fake showcase screens. They are real users attached to real seeded records.

## Safety

- Demo data must contain no customer or production data.
- Demo credentials must be clearly documented as demonstration credentials.
- Production authentication and authorization rules remain the source of truth.
- Do not weaken permissions merely to make the demo easier to navigate.

## Build order

1. Confirm the existing seed creates the representative roles/users.
2. Expand/verify the dataset to 200+ students and connected records.
3. Verify each representative login reaches the correct role journey.
4. Verify cross-module data relationships.
5. Make the public landing page explain and expose these journeys clearly.
