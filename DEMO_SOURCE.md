# Demo source and deployment contract

The canonical application source is `greenbasket-labs/school-management-system`.

The public demo must run from a dedicated copy of the real application, with a dedicated PostgreSQL database. It must never point at a customer database.

## Dataset

The demo dataset is a realistic secondary-school dataset:

- SS1 A / SS1 B
- SS2 A / SS2 B
- SS3 A / SS3 B
- 180+ students
- 12+ teachers
- named teachers Musa Ibrahim and Johno Okafor
- linked parents
- attendance history
- fees, balances, multiple payments and receipts
- examinations and results
- announcements
- portal accounts

## Visitor safety

Visitors may use prepared demo identities without entering passwords. Demo actions must be isolated from the baseline data. A visitor may see a successful action during a session, but the prepared baseline must be restored or the action must be discarded when the session ends.

Do not change canonical production authentication or authorization to accomplish this.
