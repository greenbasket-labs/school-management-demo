# Demo School Dataset Specification

This file defines the dataset that will be generated inside the dedicated demo database. It does not contain customer data and must never be used against a production school database.

## School

- Name: Green Basket Demo School
- Session: 2025/2026 Academic Session
- Academic levels: SS1, SS2, SS3 only
- Sections: SS1 A, SS1 B, SS2 A, SS2 B, SS3 A, SS3 B

## People

- Students: at least 180
- Teachers: at least 12
- Parents: linked to the student population
- Non-teaching staff: included where supported by the real schema

## Featured demo identities

- Grace Ibrahim — School Owner
- Musa Ibrahim — Teacher
- Johno Okafor — Teacher
- Amina Abdullahi — Student
- Abdullahi Family — Parent

## History to populate

Each student should have realistic linked records wherever the source schema supports them:

- class membership and current class
- student class history
- parent relationship
- attendance history
- fee assignments for multiple terms
- multiple payment transactions, not one aggregate payment only
- payment allocations
- receipts
- balances, including some outstanding balances
- examination participation
- published subject results and component marks

The school should also have:

- active subjects and teacher assignments
- class teachers
- teacher attendance history
- school announcements
- enabled portal features
- administrative/audit history

## Realistic behavior

The dataset should read like a school that has already been operating for a meaningful period. It should not look like sequential test fixtures or placeholder names repeated without variation.

## Safety

The seed must refuse to run unless `DEMO_SEED=true` and the database is empty of schools. The demo environment must use a dedicated database URL and session secret.