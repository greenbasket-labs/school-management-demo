# Green Basket School Management Demo

This repository is the public demonstration deployment of the real Green Basket School Management System application.

## Source boundary

The demo is built from `greenbasket-labs/school-management-system` and must remain compatible with its real application contracts and workflows.

## Demo dataset target

- Green Basket Demo School
- SS1, SS2, SS3 only
- 6 classes: SS1 A, SS1 B, SS2 A, SS2 B, SS3 A, SS3 B
- 180+ students
- 12+ teachers
- 180+ parent accounts linked to students
- Realistic Nigerian names
- Historical attendance
- Historical fees and balances
- Multiple historical payments per student where practical
- Receipts and payment allocations
- Published exams and results
- Teacher, student and parent portal examples
- School announcements
- Audit history

## Featured demo accounts

The public demo will make the following roles easy to enter without asking visitors for passwords:

- School Owner — Grace Ibrahim
- Teacher — Musa Ibrahim
- Teacher — Johno Okafor
- Student — selected prepared demo student
- Parent — selected prepared demo parent

## Visitor data safety

The demo must use a dedicated database and must not connect to a customer or production-school database.

Visitor actions may exercise real workflows, but permanent changes to the canonical demo dataset must not survive the visitor session/reset boundary.

Production authentication and authorization in `school-management-system` must not be weakened to implement the demo experience.

## Migration principle

Keep the real application behavior. Add only demo-specific entry, seed, configuration and isolation behavior required for this public demonstration deployment.
