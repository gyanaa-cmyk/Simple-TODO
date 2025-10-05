# Story 2.6 Security review & threat model basics

As a security engineer,
I want a short threat model and checklist covering auth, cookie handling, and WS auth,
so that we capture major risks before feature expansion.

Acceptance Criteria
1. `docs/architecture/security-checklist.md` contains the threat model and mitigations.
2. Checklist includes CSRF, token leakage, rate limiting, and logging redaction.
