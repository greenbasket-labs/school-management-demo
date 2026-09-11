# Phase 3 — Real Application Migration

This repository is the dedicated demo deployment target for `greenbasket-labs/school-management-system`.

## Safety boundary

- `school-management-system` is read-only for this project.
- Demo implementation changes happen only in this repository.
- Production authentication and production data are not modified.
- The demo uses a separate PostgreSQL database.

## Source snapshot

Source repository: `greenbasket-labs/school-management-system`
Source branch: `main`
Source commit audited: `04650d7505d826211d2150fcd79cdaff6d1d1e3f`

## Migration phases

1. Source alignment and safety boundary
2. Runtime/deployment contract
3. Complete application source migration
4. Expanded demo school data: SS1–SS3, 180+ students, 12+ teachers, linked parents, history
5. Passwordless demo role entry: Owner, Musa, Johno, Student, Parent
6. Visitor-safe non-persistent writes
7. Build/deploy/end-to-end verification

Do not mark Phase 3 complete until the full runnable application tree has been migrated and verified. Avoid partial copies that cannot build.