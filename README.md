# Green Basket School Management System — Demo

A realistic, disposable demonstration environment for the Green Basket School Management System.

> **Production/source of truth:** `greenbasket-labs/school-management-system`
>
> **Demo repository:** `greenbasket-labs/school-management-demo`
>
> **Working branch:** `demo-build`

The demo exists to let a prospective school experience the real product with realistic school data. It is **not** a screenshot/mockup site and it should not become a second product architecture.

---

## 1. Current Direction

### Marketing principle

> **Don't just see screenshots. Enter the school and use it.**

The public demo should be the marketing face of Green Basket's school-management product:

1. Show a believable real school.
2. Let visitors choose a representative role.
3. Send them through the real authentication flow.
4. Let them use the actual school workflows.
5. Keep the experience simple and convincing.

**Do not overbuild the demo.** The product itself should do the selling.

---

## 2. Latest Completed Move

### Public demo front door

The public `/` page was changed from a generic empty module showcase into a marketing-facing product entrance.

It now presents:

- Green Basket Global branding
- School Management System branding
- "Live product demo" positioning
- "Don't just see screenshots. Enter the school and use it."
- Green Basket Demo School
- Gwarinpa, Abuja
- 2025/2026 session
- Representative role cards
- Direct sign-in access

The role cards currently use these representative usernames:

| Role | Username |
|---|---|
| Owner / Admin | `admin` |
| Cashier | `cashier` |
| Teacher | `teacher1` |
| Parent | `parent1` |
| Student | `student1` |
| School Admin | `admin` |

The homepage implementation is in `app/page.tsx`.

### Authentication

The existing real authentication flow was retained. The login page uses `authenticateUser()` and routes:

- Student → `/portal`
- Parent → `/portal`
- Teacher → `/portal`
- Other staff/admin users → `/dashboard`

Do **not** create a fake demo authentication system just for marketing.

### Important verification note

The homepage currently passes `?demo=<username>` to `/login`. The login page must read/use that parameter for the role cards to provide a true one-click demo entry. This is the next small authentication UX verification/fix to confirm before calling the role cards fully complete.

---

## 3. Current Next Move

### Owner/Admin dashboard

Build the first post-login Owner/Admin dashboard into a **real populated school dashboard** using existing database-backed data.

Keep it small:

- real student count
- real teacher count
- real class count
- current academic session/term
- useful finance summary if the existing data helpers support it
- a small number of useful recent/attention items

Do **not** hard-code fake statistics.

Do **not** rewrite the existing finance, academic, attendance or authorization engines.

After the Owner/Admin experience, verify the representative:

1. Cashier
2. Teacher
3. Parent
4. Student

one by one.

---

## 4. Demo Dataset

The current seed creates a realistic Nigerian private-school environment.

### School

- Green Basket Demo School
- Plot 18, Gwarinpa District, Abuja, Nigeria
- Academic session: 2025/2026
- First, Second and Third terms
- SS1 A, SS1 B, SS2 A, SS2 B, SS3 A, SS3 B

### Current seeded records

- **192 students**
- **14 teachers**
- **6 classes**
- **12 subjects**
- Exams/results data
- Attendance history
- Fee assignments
- Payments
- Receipts
- Outstanding balances
- Parent/student relationships
- School announcements
- RBAC/audit-related data

The student seed currently loops over `192` records in `scripts/seed-demo-school.ts`.

### Planned dataset improvement

Increase the student seed from **192 to about 210** so the public demo represents a clear 200+ student school.

This has **not** yet been implemented.

Also consider adding a dedicated **Accountant** representative login only after confirming that the existing RBAC seed contains the required role. Do not invent a role name.

---

## 5. Representative Demo Accounts

The demo is intended to expose only a small number of easy-to-understand representative accounts publicly, even though the database contains many records.

Current intended public roles:

- Owner / Admin
- Cashier
- Teacher
- Parent
- Student

The database may contain many teacher, parent and student users. That is intentional. The public homepage should not list all of them.

The seed uses the shared demo password defined by `DEMO_PASSWORD` in `scripts/seed-demo-school.ts`.

Never put real production credentials in this repository.

---

## 6. Database Safety

The demo database is **disposable and isolated**.

The demo seed requires:

```text
DEMO_SEED=true
```

The seed also refuses to run when a `School` record already exists.

This safety guard must not be removed.

### Recommended setup

```powershell
npm install

$env:DEMO_SEED="true"
npm run demo:seed

npm run dev
```

Use a dedicated demo database/branch.

Never point the demo seed at production.

Never commit `.env` or database credentials.

---

## 7. Seed Runtime Compatibility

The demo uses:

```text
scripts/run-demo-seed.ts
```

which wraps the main:

```text
scripts/seed-demo-school.ts
```

The wrapper exists because of current generated Prisma/Postgres runtime compatibility.

Known compatibility work includes:

- Temporal runtime setup
- Payment allocation runtime limitation
- Attendance `LATE` normalization where the generated runtime does not currently accept it

Do not manually edit generated Prisma contract/type files to silence errors.

If the runtime contract changes, fix the source/runtime boundary deliberately.

---

## 8. Main Product Areas Already Represented

The demo dataset is intended to exercise:

- School & organization
- Academic sessions and terms
- Classes and subjects
- Students
- Parents
- Teachers/staff
- Attendance
- Exams and results
- Fees and payments
- Receipts
- Announcements
- Parent portal
- Student portal
- Teacher portal
- Reports
- Roles and permissions
- Audit/history

The objective is **end-to-end school workflow verification**, not proving that every possible page exists.

---

## 9. Development Rules

Every meaningful move must follow:

> **Inspect → Implement → Verify → Document → Commit → Move On**

### Always

- Work on `demo-build` for demo changes.
- Treat production as source of truth.
- Inspect the existing implementation before editing.
- Make the smallest useful change.
- Reuse existing business logic.
- Use real database data.
- Update this README after every meaningful move.
- Record the next concrete move.

### Never

- Do not modify production just to make the demo easier.
- Do not create fake statistics.
- Do not create a parallel fake authentication system.
- Do not duplicate business engines.
- Do not weaken safety guards.
- Do not overbuild the marketing page.
- Do not guess missing modules when a build fails.

---

## 10. README Handover Rule

This README is part of the project's handover record.

After every implementation move, update it with:

- what changed;
- why it changed;
- what is verified;
- what is not verified;
- known limitations;
- the next move.

The next developer should be able to continue without reconstructing the project history from chat messages.

---

## 11. Verification Checklist

### Public demo

- [x] Green Basket branding
- [x] Live product demo positioning
- [x] Role cards
- [ ] `?demo=` role selection verified end-to-end
- [ ] All representative accounts verified on deployed demo

### Owner/Admin

- [ ] Real populated dashboard
- [ ] Real student count
- [ ] Real teacher count
- [ ] Real class count
- [ ] Current session/term
- [ ] Useful finance summary

### Cashier

- [ ] Login works
- [ ] Payment workflow works
- [ ] Receipts work
- [ ] Balance/payment history is visible

### Teacher

- [ ] Login works
- [ ] Teacher portal loads
- [ ] Classes/students load
- [ ] Attendance workflow works
- [ ] Academic/result workflow works

### Parent

- [ ] Login works
- [ ] Parent portal loads
- [ ] Child/student relationship works
- [ ] Attendance works
- [ ] Results work
- [ ] Fees/payments work
- [ ] Announcements work

### Student

- [ ] Login works
- [ ] Student portal loads
- [ ] Subjects work
- [ ] Attendance works
- [ ] Results work
- [ ] Announcements work

### Dataset

- [ ] 192 current students confirmed
- [ ] Increase to ~210
- [ ] 14 teachers confirmed
- [ ] 6 classes confirmed
- [ ] Academic data confirmed
- [ ] Attendance data confirmed
- [ ] Finance data confirmed

### Safety

- [ ] Dedicated demo database
- [ ] Production untouched
- [ ] `.env` not committed
- [ ] Demo seed safety guard intact

---

## 12. Known Troubleshooting

### `DEMO_SEED` error

```powershell
$env:DEMO_SEED="true"
npm run demo:seed
```

### Seed says a School already exists

Do not delete records blindly. Check that `DATABASE_URL` points to the intended empty demo database.

### Role card reaches login but does not preselect the user

Check `app/page.tsx` and `app/login/page.tsx`. The homepage currently sends `?demo=<username>`; the login page must consume that parameter without bypassing normal authentication.

### Dashboard/portal is empty

Check:

1. the demo seed completed;
2. the app and seed use the same database;
3. the user belongs to the demo school;
4. the selected workflow has seeded records.

### Build/import error

Do not guess. Inspect the exact failing import, compare the demo file with the production/source-of-truth implementation, and confirm the referenced module exists on the target branch.

---

## 13. Important Product Principles

### Real school, not fake showcase

The demo must behave like a real school system.

### Marketing through product reality

The best marketing experience is letting a prospect use the connected system.

### Configuration over unnecessary custom versions

Keep genuine school differences configurable rather than creating multiple competing workflows.

### Preserve history

Academic and financial records should remain transparent and traceable.

### School-scoped data

Users and administrative actions must remain within the correct school context.

### Simple and trustworthy

Build what schools really need. Keep it simple, transparent, connected and trustworthy.

---

## 14. Takeover Checklist

A new developer should:

1. Read this README.
2. Confirm branch `demo-build`.
3. Confirm production is `greenbasket-labs/school-management-system`.
4. Inspect the latest commits.
5. Check deployment/manual verification status.
6. Continue from **Current Next Move** above.
7. Update this README before stopping.

### Current next move

> **Build the real populated Owner/Admin dashboard using existing database-backed data, then verify it on the demo deployment.**
