# Demo source alignment

The demo must preserve the real application's existing portal/session contracts.

## Portal roles

The source application defines three portal user types: `STUDENT`, `PARENT`, and `TEACHER`.

Portal access is school-scoped and verifies that the authenticated user belongs to the same school. Student access resolves the student's record through `userId`; parent access resolves linked students through `StudentParent`; teacher access resolves students through class-teacher and class-subject assignments.

## Sessions

The source application uses an encrypted `school_session` cookie and a device identifier cookie. Current-user resolution validates the session key against the user's school-scoped `UserSession` record and applies inactivity/session status checks.

## Demo rule

The demo may add a passwordless entry mechanism, but it must establish a normal authenticated session that still passes the application's existing school/role access checks. It must not modify the canonical source repository's authentication code.
