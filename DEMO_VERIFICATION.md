# Demo Verification Checklist

This checklist applies only to `school-management-demo`.

## Source safety

- [ ] `greenbasket-labs/school-management-system` is used only as the read-only source.
- [ ] No customer database is referenced.
- [ ] Demo secrets are unique to the demo deployment.

## Application

- [ ] Complete real School Management System application tree is present.
- [ ] Next.js build succeeds.
- [ ] TypeScript validation succeeds.
- [ ] Lint succeeds where configured.
- [ ] Database migrations apply cleanly to an empty demo database.

## Demo school

- [ ] School name: Green Basket Demo School.
- [ ] Only SS1, SS2 and SS3 are populated.
- [ ] At least 180 students are present.
- [ ] At least 12 teachers are present.
- [ ] Musa Ibrahim is present as a teacher.
- [ ] Johno Okafor is present as a teacher.
- [ ] Parents are linked to students.
- [ ] Attendance history is populated.
- [ ] Fee assignments are populated across terms.
- [ ] Multiple historical payments and payment allocations exist.
- [ ] Receipts and outstanding balances are visible.
- [ ] Published examinations and results exist.
- [ ] Announcements are populated.
- [ ] Portal-ready student and parent accounts exist.

## Demo entry

- [ ] Visitor can enter as Owner without a password.
- [ ] Visitor can enter as Musa without a password.
- [ ] Visitor can enter as Johno without a password.
- [ ] Visitor can enter as a prepared Student without a password.
- [ ] Visitor can enter as a prepared Parent without a password.
- [ ] Production password authentication is not weakened or changed.

## Visitor safety

- [ ] Demo reads do not affect production data.
- [ ] Temporary demo writes do not permanently alter the baseline dataset.
- [ ] Reset/disposable-session behavior is verified before public write-enabled access.
- [ ] Re-entering the demo returns to the prepared baseline.

## Role smoke tests

### Owner

- [ ] Dashboard loads.
- [ ] Students list/detail loads.
- [ ] Teachers list/detail loads.
- [ ] Parents are visible through real school workflows.
- [ ] Fees/payment history loads.
- [ ] Attendance reporting loads.
- [ ] Exams/results load.
- [ ] Announcements load.
- [ ] Reports load.

### Teacher

- [ ] Teacher portal/dashboard loads.
- [ ] Assigned classes and subjects are visible.
- [ ] Attendance workflow is usable.
- [ ] Results workflow is visible.

### Student

- [ ] Student portal loads.
- [ ] Student profile is populated.
- [ ] Results/history are visible.
- [ ] Fees/payment information is visible where permitted.

### Parent

- [ ] Parent portal loads.
- [ ] Linked child/children are visible.
- [ ] Attendance/history is visible where permitted.
- [ ] Fees/payment history is visible where permitted.

## Deployment gate

The public GB-Global demo link must not be connected until the checks above are verified against the deployed demo application and dedicated demo database.
