# Demo data phase

The dedicated demo dataset is built from the real school-management-system data model.

## Target baseline

- 180+ students
- SS1, SS2, SS3 only
- 12+ teachers
- Realistic Nigerian names
- Every student linked to a parent
- Multiple terms of fee history
- Multiple payment records per student where appropriate
- Receipts and allocations
- Attendance history
- Published examinations/results
- Announcements

## Demonstration identities

Featured prepared identities are **Grace Ibrahim (Owner)**, **Musa Ibrahim (Teacher)** and **Johno Okafor (Teacher)**. Student and parent identities are linked to the prepared dataset.

The demo dataset must be disposable and must never use a customer database.

## Safety

The generator must only run with an explicit demo flag and against an empty dedicated database. Public visitor writes will be handled separately through demo-only isolation/reset logic.
