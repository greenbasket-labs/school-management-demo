# Green Basket School Management System — Demo

A realistic, disposable demonstration environment for the Green Basket School Management System.

This repository exists to **demonstrate and verify the school-management product with realistic school data** without changing the production/source-of-truth repository.

> **Important:** This is the demo repository. The production repository `greenbasket-labs/school-management-system` must remain untouched by demo development.

---

## 1. What This Demo Is

The demo is a working school-management environment designed to let a school owner, administrator, teacher, cashier, parent, or student experience the important day-to-day workflows of the product.

It is not a separate product architecture. It is a controlled demonstration and verification environment built around the same application concepts and database contract.

The demo is intended to prove that the system can handle a realistic private-school workflow rather than only showing empty screens or placeholder records.

### Demo goals

- Show a realistic Nigerian private-school setup.
- Populate the application with meaningful academic, financial, attendance, communication, and portal data.
- Allow the major workflows to be tested from the UI.
- Make demonstrations understandable without manually creating hundreds of records.
- Keep demo data isolated from production.
- Keep the demo disposable and resettable.
- Preserve the production repository as the source of truth.

---

## 2. Repository Boundary

### Production repository

`greenbasket-labs/school-management-system`

This is the production/source-of-truth codebase.

**Do not modify it as part of demo work.**

### Demo repository

`greenbasket-labs/school-management-demo`

This repository contains the demo-specific environment, demo seed, demo tooling, and demo verification work.

Current working branch:

`demo-build`

All demo changes should be made here unless a deliberate project decision says otherwise.

---

## 3. Demo School Dataset

The demo seed creates a realistic school dataset intended for end-to-end demonstrations.

### School

- **School:** Green Basket Demo School
- **Country:** Nigeria
- **Academic scope:** Secondary school
- **Classes:** SS1–SS3
- **Sections:** A and B
- **Academic session:** 2025/2026
- **Terms:** First, Second, Third

### Students

- **192 students**
- Realistic Nigerian names
- Students distributed across SS1, SS2, and SS3
- Students are linked to parents
- Students have academic, attendance, and financial history

### Parents

- Parent records linked to students
- Parent/student relationships are represented in the demo dataset
- Parent-facing information can be used when testing portal workflows

### Teachers and staff

- **14 teachers/staff records**
- Includes the featured demo teachers:
  - **Musa Ibrahim**
  - **Johno Okafor**

### Subjects

The dataset includes a broad secondary-school subject set so academic workflows look and behave like a real school environment.

### Financial data

The seed includes:

- Fee types
- Student fee assignments
- Historical payments
- Receipts
- Payment history
- Outstanding balances where applicable

### Academic data

The seed includes:

- Exams
- Assessment components
- Marks
- Results
- Grades
- Student/class context
- Subject results
- Academic summaries

### Attendance

The dataset includes historical attendance for students and staff so attendance pages and summaries are not empty.

### Communication

The demo includes school announcements and communication data for testing school-wide communication workflows.

### Administration

The demo includes administrative/audit data required to exercise core trust and administration workflows.

---

## 4. Main Product Areas Demonstrated

The demo is designed around the school's real operating cycle.

### School & Organization

- School identity
- School settings
- Branding
- Organization context

### Academic Structure

- Academic sessions
- Terms
- Classes
- Subjects
- Class/subject relationships

### Students

- Student records
- Student profiles
- Student/class relationships
- Parent relationships
- Student history

### Staff & Teachers

- Staff records
- Teacher records
- Teacher/class/subject relationships
- Staff administration

### Attendance

- Student attendance
- Staff attendance
- Attendance history
- Attendance summaries
- Class-level attendance views

### Exams & Results

- Exams
- Assessment components
- Marks
- Results
- Grades
- Positions
- Academic summaries
- Report-card data

### Fees, Billing & Payments

- Fee types
- Fee assignments
- Payments
- Payment history
- Receipts
- Balances
- Financial transparency

### Communication

- School announcements
- School-wide communication

### Portals

The demo is intended to exercise the available:

- Parent portal
- Student portal
- Teacher portal

Portal behavior should be verified against the actual application workflow during end-to-end testing.

### Reports

The demo contains enough academic, attendance, and financial history to exercise current reporting workflows.

### Administration & Trust

- User/role controls
- Permissions
- School-scoped audit history
- Administrative actions

### Platform / Operations

The demo also contains the supporting platform boundary used for provisioning and demo operation.

---

## 5. Demo Authentication

The demo contains a dedicated demo-login experience intended to make demonstrations easy without requiring a presenter to create or remember a large set of passwords.

The existing login system should not be unnecessarily redesigned just to support the demo.

When testing authentication, use the application's current demo-login flow and verify that the selected role reaches the expected school workflow.

> Authentication is part of the demo experience, but it is not a reason to alter the production authentication design.

---

## 6. Database Safety

The demo database must be treated as **disposable**.

### Required rule

Never point the demo seed at a production school database.

The seed contains an explicit safety guard that requires:

```text
DEMO_SEED=true
```

It also refuses to seed a database that already contains a School record.

This prevents accidental modification of an existing school database.

### Expected workflow

1. Create/use a dedicated demo database or Neon branch.
2. Confirm the database is empty.
3. Initialize the database against the application's contract.
4. Seed RBAC data if required.
5. Run the demo seed.
6. Verify the resulting dataset.
7. Run the application.
8. Test workflows.

### Never

- Never run the demo seed against production.
- Never remove the seed safety guard to make seeding easier.
- Never use production credentials in a public/demo environment.
- Never commit `.env` or database credentials.

---

## 7. Environment Variables

Create a local `.env` file.

At minimum, the demo requires the database connection used by the application:

```env
DATABASE_URL="postgresql://..."
```

For demo seeding:

```powershell
$env:DEMO_SEED="true"
```

Keep all credentials private.

### `.env` rules

- `.env` is local configuration.
- Do not commit database passwords.
- Do not paste a real database URL into GitHub.
- Use a dedicated demo database/branch.
- Rotate credentials immediately if they are accidentally exposed.

---

## 8. Installation

From the repository root:

```powershell
npm install
```

The project uses the following major technologies:

- Next.js
- React
- TypeScript
- Prisma ORM / Prisma Postgres runtime
- PostgreSQL
- Tailwind CSS
- `tsx` for TypeScript scripts

The exact versions are maintained in `package.json`.

---

## 9. Database Initialization

After configuring `.env` with a valid dedicated demo database:

```powershell
npx prisma db init
```

This initializes/checks the database against the project's Prisma contract.

A successful result should indicate that the database matches the contract or has been initialized successfully.

---

## 10. RBAC Seed

The role/permission seed can be run with:

```powershell
npx tsx .\scripts\seed-rbac.ts
```

The RBAC seed establishes the application's permissions and system roles.

The demo has previously been verified with the RBAC seed producing:

- 73 permissions
- 7 system roles

These numbers should be treated as a verification reference for the current codebase rather than a permanent product requirement.

---

## 11. Demo School Seed

The package script is:

```powershell
npm run demo:seed
```

Internally this runs:

```text
scripts/run-demo-seed.ts
```

The wrapper provides runtime compatibility required by the current generated Prisma/Postgres runtime and then loads the main demo dataset seed.

The main dataset is defined in:

```text
scripts/seed-demo-school.ts
```

### Recommended command

```powershell
$env:DEMO_SEED="true"
npm run demo:seed
```

### Seed safety behavior

The seed checks that:

1. `DEMO_SEED` is explicitly enabled.
2. The database is connected.
3. The database does not already contain a School record.

If a School already exists, the seed stops instead of modifying the database.

This is intentional.

---

## 12. Seed Runtime Compatibility

The demo uses:

```text
scripts/run-demo-seed.ts
```

instead of directly running the large seed file.

The wrapper handles current runtime compatibility without rewriting the large seed source.

Current compatibility handling includes:

- Installing the Temporal implementation expected by the runtime.
- Loading the main seed after runtime setup.
- Avoiding the unsupported top-level `PaymentAllocation` ORM namespace used by the current generated runtime.
- Normalizing the demo attendance value that the current runtime does not accept (`LATE`) to the supported attendance value.

The purpose of the wrapper is to keep the demo seed source stable while adapting it to the runtime currently installed in the demo repository.

---

## 13. Running the Application

Development mode:

```powershell
npm run dev
```

Then open the local URL shown by Next.js, normally:

```text
http://localhost:3000
```

Production-style local run:

```powershell
npm run build
npm start
```

---

## 14. Recommended Demo Walkthrough

A good demonstration should follow a real school workflow rather than jumping randomly between pages.

### Step 1 — School

Show:

- School identity
- School settings
- Branding
- Current academic session

### Step 2 — Academic structure

Show:

- Sessions
- Terms
- SS1–SS3 classes
- Subjects

### Step 3 — Students

Open a student profile and demonstrate:

- Student information
- Class
- Parent relationship
- Academic history
- Attendance
- Financial history

### Step 4 — Teachers

Use the featured demo teachers:

- Musa Ibrahim
- Johno Okafor

Show their staff/teacher information and available teaching-related workflows.

### Step 5 — Attendance

Demonstrate:

- Student attendance
- Historical attendance
- Class summaries
- Staff attendance where applicable

### Step 6 — Exams and results

Show:

- Examination data
- Assessment marks
- Subject results
- Grades
- Positions
- Academic summary

### Step 7 — Fees and payments

Show:

- Fee assignments
- Payment history
- Receipts
- Outstanding balances

This is especially important because financial information should be transparent and traceable.

### Step 8 — Communication

Show school announcements and communication workflows.

### Step 9 — Portals

Test the appropriate parent, student, and teacher experiences.

### Step 10 — Reports

Show academic, attendance, and payment reporting based on the seeded history.

### Step 11 — Administration

Show:

- Roles
- Permissions
- Audit history
- School-scoped administrative activity

---

## 15. Verification Philosophy

The objective is not to prove that every page exists.

The objective is to prove that **real school workflows work correctly from beginning to end**.

Use this verification loop:

> **Audit → Real Gap → Smallest Useful Solution → Implement → Verify → Document → Move On**

A feature should be considered practically complete when a real school can use its important workflow safely and consistently.

---

## 16. End-to-End Verification Checklist

### School

- [ ] School loads correctly
- [ ] School settings work
- [ ] Branding displays correctly

### Academic

- [ ] Session loads
- [ ] Terms load
- [ ] SS1 classes load
- [ ] SS2 classes load
- [ ] SS3 classes load
- [ ] Subjects load

### Students

- [ ] 192 students exist
- [ ] Student search works
- [ ] Student profiles open
- [ ] Class relationships are correct
- [ ] Parent relationships are visible

### Staff

- [ ] 14 teachers/staff records exist
- [ ] Musa Ibrahim exists
- [ ] Johno Okafor exists
- [ ] Teacher profiles/workflows open

### Attendance

- [ ] Attendance records exist
- [ ] Attendance can be viewed
- [ ] Attendance summaries work
- [ ] Staff attendance is available where expected

### Exams & Results

- [ ] Exams exist
- [ ] Assessment marks exist
- [ ] Results exist
- [ ] Grades display
- [ ] Positions display where applicable
- [ ] Academic summary displays

### Fees & Payments

- [ ] Fee types exist
- [ ] Fee assignments exist
- [ ] Payment history exists
- [ ] Receipts exist
- [ ] Balances calculate/display correctly
- [ ] Receipt printing works where available

### Communication

- [ ] Announcements exist
- [ ] Announcements display to the appropriate audience

### Portals

- [ ] Parent workflow works
- [ ] Student workflow works
- [ ] Teacher workflow works

### Administration

- [ ] Roles exist
- [ ] Permissions exist
- [ ] Audit history exists
- [ ] School scoping is respected

### Platform

- [ ] Demo database is isolated
- [ ] Production database is untouched
- [ ] Provisioning boundary behaves as expected
- [ ] Environment secrets are not exposed

---

## 17. What Must Not Be Done

### Do not modify production for demo convenience

If the demo needs special data or demo-only behavior, implement it in this repository or in an explicitly agreed shared source change—not by silently changing the production repository.

### Do not remove safety guards

The seed refusing to touch an existing School database is a safety feature.

### Do not hard-code fake success

The demo should contain real database records and real application workflows, not screenshots pretending that a workflow works.

### Do not overbuild

Do not add features simply because a checklist can be made longer.

The product principle remains:

> Build what schools really need. Keep it simple, transparent, connected, and trustworthy.

---

## 18. Current Product Status

The underlying school-management product is organized around these operational groups:

| Group | Current direction |
|---|---|
| School & Organization | Practically complete |
| Academic Structure | Practically complete |
| Students | Practically complete |
| Staff & Teachers | In review |
| Attendance | Practically complete for current core workflow |
| Exams & Results | Practically complete |
| Fees, Billing & Payments | Practically complete for current core workflow |
| Communication | Practically complete for core school announcements |
| Portals | In review |
| Reports | Practically complete for current core workflow |
| Administration & Trust | Practically complete for current core workflow |
| Platform / Operations | Practically complete for current product stage |

The next priority for the demo is **end-to-end verification**, not unnecessary feature expansion.

---

## 19. Important Architectural/Product Principles

### One school workflow

The system should avoid creating separate competing ways to perform the same school operation.

### Configuration over unnecessary custom versions

Most private schools share the same core operational needs. Configuration should handle genuine differences where possible.

### Preserve history

Academic and financial history should remain transparent and traceable.

### School-scoped data

Users and administrative actions must operate within the correct school context.

### No destructive shortcuts

A demo should never be made easier by weakening safeguards that matter in production.

### Realistic data matters

A school-management demo is much more useful when the presenter can search, navigate, inspect history, and follow a student through several connected workflows.

---

## 20. Known Demo-Specific Runtime Notes

The current demo branch contains compatibility work around the generated Prisma runtime.

### Payment allocations

The main seed contains payment allocation logic, but the currently generated ORM runtime does not expose `PaymentAllocation` as a top-level ORM namespace.

The runtime wrapper therefore skips those optional allocation rows while retaining the core payment/receipt demo data.

If payment-allocation support becomes necessary for the demo's verified workflow, it should be addressed deliberately against the current generated contract/runtime rather than by weakening type safety or editing generated files manually.

### Attendance status

The source seed contains a `LATE` branch for generated attendance. The current runtime contract accepts `PRESENT` and `ABSENT` for the relevant attendance record, so the runtime wrapper normalizes the unsupported `LATE` value to `PRESENT`.

This is demo compatibility behavior and should be revisited if the product contract later adds a supported late status.

### Generated contract files

Do not manually edit generated Prisma contract/type files to silence seed errors.

Fix the source/runtime boundary deliberately instead.

---

## 21. Development Workflow

When making a demo change:

1. Confirm the change belongs in the demo.
2. Inspect the existing implementation.
3. Avoid rewriting large files unnecessarily.
4. Make the smallest useful change.
5. Test the affected workflow.
6. Check the Git diff.
7. Commit with a clear message.
8. Update this README when the product/demo state materially changes.

Recommended Git commands:

```powershell
git status
git diff
git add .
git commit -m "describe the change"
git push origin demo-build
```

Before any destructive operation:

```powershell
git status
git log -5 --oneline
```

Never use a destructive Git/database operation blindly.

---

## 22. Troubleshooting

### `DEMO_SEED` error

Set:

```powershell
$env:DEMO_SEED="true"
```

Then rerun:

```powershell
npm run demo:seed
```

### Seed says a School already exists

Do not delete records blindly.

The message means the seed safety guard detected an existing school. Verify that `DATABASE_URL` points to the intended dedicated demo database.

### `Postgres URL must be a valid URL`

Check `.env`.

The value must contain a real PostgreSQL URL, for example:

```text
DATABASE_URL="postgresql://..."
```

Do not leave:

```text
DATABASE_URL="PASTE_YOUR_DEMO_NEON_DATABASE_URL_HERE"
```

### `ENOTFOUND base`

This generally indicates that the database URL is malformed and is being parsed with an invalid hostname.

Check the `.env` value rather than changing application code.

### Temporal runtime error

Run the demo seed through:

```powershell
npm run demo:seed
```

rather than importing the large seed directly. The wrapper installs the required Temporal runtime compatibility.

### Database connection failure

Verify:

- Neon branch is available.
- `DATABASE_URL` is correct.
- Credentials have not expired or been rotated.
- The database is reachable.
- The local `.env` is being loaded.

Do not publish the connection string when asking for help.

---

## 23. Security

This repository may be public or shared more widely than the private production environment, so assume everything committed to Git is visible to anyone with repository access.

Never commit:

- Database passwords
- Session secrets
- API keys
- Platform secrets
- Private tokens
- Real customer data
- Production credentials

Use environment variables for secrets.

If a secret is exposed, rotate it rather than merely deleting it from a later commit.

---

## 24. Demo Data Policy

The demo dataset is synthetic demonstration data.

It should not contain real student, parent, teacher, or school personal information.

The purpose of realistic Nigerian names and school records is to make workflows understandable during demonstrations, not to reproduce a real school's confidential information.

---

## 25. Roadmap for This Demo

### Phase 1 — Foundation

- [x] Demo repository
- [x] Dedicated demo branch
- [x] Demo seed architecture
- [x] Runtime-compatible seed wrapper
- [x] Expanded school dataset
- [x] Demo-specific API fixes

### Phase 2 — Database

- [ ] Confirm dedicated clean Neon demo database
- [ ] Run contract initialization
- [ ] Seed RBAC
- [ ] Run full demo seed
- [ ] Verify record counts

### Phase 3 — End-to-End Verification

- [ ] Verify school setup
- [ ] Verify academic structure
- [ ] Verify students and parents
- [ ] Verify teachers/staff
- [ ] Verify attendance
- [ ] Verify exams/results
- [ ] Verify fees/payments
- [ ] Verify communication
- [ ] Verify portals
- [ ] Verify reports
- [ ] Verify administration/audit

### Phase 4 — Presentation Readiness

- [ ] Prepare clean demo login flow
- [ ] Prepare presenter walkthrough
- [ ] Verify representative student records
- [ ] Verify representative payment/receipt records
- [ ] Verify representative result/report records
- [ ] Verify demo deployment
- [ ] Verify reset/disposable-data process

---

## 26. Definition of Done for the Demo

The demo is ready for a real presentation when a presenter can start with a clean demo environment and successfully demonstrate a connected school journey such as:

**School → Class → Student → Parent → Attendance → Exam Result → Fees/Payment → Receipt → Announcement → Portal → Report**

without manually repairing database records during the presentation.

The demo should feel like a functioning school system, not a collection of isolated feature screens.

---

## 27. Final Principle

The goal of this repository is simple:

> **Make the Green Basket School Management System easy to understand, easy to demonstrate, and credible as a real school operations platform—without compromising the production system or weakening its safety boundaries.**

The right next step after meaningful implementation is always:

**Verify the real workflow. Document what was learned. Then move forward.**
