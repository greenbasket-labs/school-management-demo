# Green Basket School Management System — Demo

A realistic, disposable demonstration environment for the Green Basket School Management System.

> **Production/source of truth:** `greenbasket-labs/school-management-system`
>
> **Demo repository:** `greenbasket-labs/school-management-demo`
>
> **Working branch:** `demo-build`

The demo is the **marketing face of the product**. A prospect should be able to enter a believable Nigerian private school, sign in as a representative role, and use the real school workflows.

This is **not** a screenshot/mockup site and it must not become a second product architecture.

---

## 1. Product Direction

### Marketing principle

> **Don't just see screenshots. Enter the school and use it.**

The demo should:

1. Present a believable real school.
2. Let a visitor choose a representative role.
3. Use the real authentication flow.
4. Show real database-backed school data.
5. Let the visitor use connected school workflows.
6. Stay simple enough to understand immediately.

**No overbuilding. The real product does the selling.**

---

## 2. Fresh-Start Reset — Current State

We are intentionally restarting the demo verification/build cycle from a clean source-of-truth mindset.

### What is already established

- Public marketing homepage exists in `app/page.tsx`.
- Role cards use the real login flow with `?demo=` username preselection.
- Demo authentication still uses normal `authenticateUser()` logic; the demo query parameter does not bypass authentication.
- Real Owner/Admin dashboard has been implemented in `app/dashboard/page.tsx`.
- Demo seed already creates a substantial Nigerian school dataset.
- Production remains the source of truth.

### Why we are resetting the verification cycle

The previous deployment/build investigation exposed a mixture of:

- generated Prisma contract artifacts;
- a package/lockfile synchronization problem;
- a Prisma 8 relation-authoring problem;
- several TypeScript errors that are likely downstream of the generated contract state.

We will **not** patch application files blindly to silence those errors.

The clean sequence is:

> **Source contract → dependency lock → generated contract → build → runtime seed → browser verification**

Only after that sequence is healthy should we continue expanding the demo.

---

## 3. Current Technical Blockers

### A. Prisma contract relation

`src/prisma/contract.prisma` currently declares `School.attendanceSetting` as a mirror of the `AttendanceSetting.school` relation.

`AttendanceSetting` owns the foreign key:

```text
schoolId Int @unique
school   School @relation(fields:[schoolId], references:[id])
```

Prisma 8 currently documents one-to-one relations as being declared on the side that holds the foreign key; the mirror field on the other model is not currently supported by the Prisma 8 contract relation model.

The previous `contract emit` failure therefore needs to be fixed at the **source contract**, not by editing generated files.

### B. Package lock

The local clean-install attempt also reported:

```text
npm ci can only install packages when package.json and package-lock.json are in sync.
Missing: tsx@4.23.13 from lock file
```

`package.json` intentionally contains:

- Prisma `^8.0.0-rc.10`
- `tsx` `^4.20.3`

The lockfile must be regenerated/synchronized from that source state before using `npm ci` as the clean verification command.

### C. Generated contract artifacts

Do **not** hand-edit:

- `src/prisma/contract.d.ts`
- `src/prisma/contract.json`
- migration reference artifacts

They must be regenerated from the source contract after the dependency state is clean.

### D. Downstream TypeScript errors

Previous build output included missing `PaymentAllocation` types, missing school branding fields, decimal/string mismatches, attendance enum mismatches and many nullability errors.

These should be re-evaluated **after contract emission succeeds**. Do not assume every previous error needs an individual application-code patch.

---

## 4. Clean Verification Order

The next implementation cycle must follow this exact order:

1. Confirm `demo-build` source is clean.
2. Synchronize `package.json` and `package-lock.json`.
3. Fix the source Prisma 8 relation model.
4. Run `contract emit` successfully.
5. Run the production/demo build.
6. Fix only the remaining real source errors.
7. Verify the demo seed against the generated contract.
8. Verify the deployed application manually.
9. Update this README.
10. Commit and move to the next role/workflow.

### Rule

> **Do not fix downstream errors before the contract/toolchain is healthy.**

---

## 5. Demo Dataset

The current seed creates a realistic Nigerian private-school environment.

### School

- **Green Basket Demo School**
- Plot 18, Gwarinpa District, Abuja, Nigeria
- Academic session: **2025/2026**
- First, Second and Third terms
- SS1 A, SS1 B, SS2 A, SS2 B, SS3 A, SS3 B

### Current seed scale

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
- Announcements
- RBAC/audit-related data

### Planned small dataset improvement

Increase the student seed from **192 to about 210** so the marketing demo clearly represents a 200+ student school.

Do not expand the dataset beyond what improves the demo experience.

---

## 6. Representative Demo Accounts

The database can contain many users. The public homepage should expose only a few representative accounts.

| Role | Username |
|---|---|
| Owner / Admin | `admin` |
| Cashier | `cashier` |
| Teacher | `teacher1` |
| Parent | `parent1` |
| Student | `student1` |

The seed uses the shared demo password defined by `DEMO_PASSWORD` in `scripts/seed-demo-school.ts`.

An Accountant representative may be added only after confirming that the existing RBAC source already supports the intended role. **Do not invent a role name just for the demo.**

Never put real production credentials in this repository.

---

## 7. Marketing Front Door

The public homepage is intended to communicate:

- Green Basket Global branding
- School Management System
- Live product demo positioning
- Green Basket Demo School
- Gwarinpa, Abuja
- 2025/2026 session
- Representative role cards
- Direct sign-in access
- Real school workflow messaging

The role-card path is already implemented in code:

```text
Homepage → role card → /login?demo=<username> → real authentication → real portal/dashboard
```

The query parameter only preselects the known demo username. It does not authenticate the visitor.

---

## 8. Real Owner/Admin Experience

`app/dashboard/page.tsx` is now database-backed rather than a static shell.

It calculates real values for:

- active students;
- active teachers;
- classes;
- current academic session;
- current academic term;
- outstanding fees after payment allocations;
- attendance rate;
- completed payments.

It links into the existing Students, Teachers, Academics, Finance, Attendance and Exams/Results areas.

The dashboard must remain a **thin presentation layer**. Reuse existing business logic rather than creating another finance, attendance or academic engine.

---

## 9. Representative Role Verification Plan

After the clean build/deploy succeeds, verify in this order:

### 1. Owner / Admin

- [ ] Login works
- [ ] Dashboard loads
- [ ] Real student count appears
- [ ] Real teacher count appears
- [ ] Real class count appears
- [ ] Current session/term appears
- [ ] Finance summary is believable
- [ ] Attendance summary is believable
- [ ] Main modules open

### 2. Cashier

- [ ] Login works
- [ ] Payment workflow works
- [ ] Receipt workflow works
- [ ] Existing balances/payment history are visible

### 3. Teacher

- [ ] Login works
- [ ] Teacher portal loads
- [ ] Classes/students load
- [ ] Attendance workflow works
- [ ] Assessment/results workflow works

### 4. Parent

- [ ] Login works
- [ ] Parent portal loads
- [ ] Child relationship works
- [ ] Attendance works
- [ ] Results work
- [ ] Fees/payments work
- [ ] Announcements work

### 5. Student

- [ ] Login works
- [ ] Student portal loads
- [ ] Subjects work
- [ ] Attendance works
- [ ] Results work
- [ ] Announcements work

Do not add another role until these representative journeys are convincing.

---

## 10. Database Safety

The demo database is disposable and isolated.

The demo seed requires:

```text
DEMO_SEED=true
```

The seed refuses to run when a `School` record already exists.

This guard must not be removed.

Recommended local flow after the dependency/contract reset:

```powershell
npm ci

$env:DEMO_SEED="true"
npm run contract:emit
npm run build
npm run demo:seed
npm run dev
```

Use a dedicated demo database.

**Never point the demo seed at production.**

Never commit `.env` or database credentials.

---

## 11. Important Source-of-Truth Rules

### Production

`greenbasket-labs/school-management-system` remains the production/source-of-truth implementation.

### Demo

`greenbasket-labs/school-management-demo` is the controlled public demonstration environment.

### When a demo build fails

Always:

1. inspect the exact error;
2. inspect the corresponding production/source-of-truth implementation;
3. confirm the referenced module exists;
4. compare dependency and generated-artifact state;
5. make the smallest safe demo change;
6. verify before moving on.

Never guess a missing module.

Never create a fake replacement when the real production implementation already exists.

---

## 12. Development Rule

Every meaningful move follows:

> **Inspect → Implement → Verify → Document → Commit → Move On**

### Always

- Work on `demo-build` for demo changes.
- Treat production as source of truth.
- Inspect before editing.
- Make the smallest useful change.
- Reuse existing business logic.
- Use real database data.
- Update this README after every meaningful move.
- Record the next concrete move.

### Never

- Do not modify production just to make the demo easier.
- Do not create fake statistics.
- Do not create a parallel authentication system.
- Do not duplicate business engines.
- Do not weaken demo safety guards.
- Do not overbuild the marketing page.
- Do not hand-edit generated Prisma artifacts.
- Do not patch dozens of downstream TypeScript errors before fixing the contract/toolchain root cause.

---

## 13. Handover Record

This README is part of the project's handover record.

After every implementation move record:

- what changed;
- why it changed;
- what is verified;
- what is not verified;
- known limitations;
- the next move.

A new developer should be able to continue from this file without reconstructing the project history from chat messages.

---

## 14. Current Next Move

> **Fresh-start the demo toolchain from source: fix the Prisma 8 source relation, synchronize the npm lockfile, regenerate the contract, then rebuild.**

After the build is clean, move to seeded runtime verification and then the real Owner/Admin browser journey.
