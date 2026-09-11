# Passwordless Demo Entry

This document defines the demo-only role entry that will be implemented once the complete application tree from `school-management-system` is present in this repository.

## Prepared roles

- School Owner — **Grace Ibrahim**
- Teacher — **Musa Ibrahim**
- Teacher — **Johno Okafor**
- Student — **Amina Abdullahi**
- Parent — **Abdullahi Family**

## Behavior

Visitors must not type a password for these prepared accounts.

The demo entry selects a prepared demo identity and creates a normal application session for that identity. It must use the application's normal school-scoped authorization and portal routing after the demo identity has been established.

## Safety requirements

1. This mechanism exists only in `school-management-demo`.
2. `school-management-system` authentication must not be changed for this feature.
3. The demo database must be dedicated and disposable.
4. The demo session must never expose customer data.
5. Visitor mutations must be isolated from the permanent demo baseline through transaction isolation, disposable sessions, or a reliable reset mechanism.
6. Demo identities must have the minimum role needed for the intended showcase.

## UI target

The login page should present large role choices rather than username/password fields:

- Enter as School Owner
- Enter as Musa Ibrahim
- Enter as Johno Okafor
- Enter as Student
- Enter as Parent

The visitor should immediately enter the appropriate real school workflow after selecting a role.

## Implementation dependency

The complete application source, including the real session and database modules, must exist in this repository before this document is turned into executable code. This prevents a partial migration from producing a demo login that cannot run safely.
