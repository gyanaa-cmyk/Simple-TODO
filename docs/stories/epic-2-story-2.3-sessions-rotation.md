# Story 2.3 Sessions: rotation & cleanup job

As an ops engineer,
I want session rotation on privilege change and a daily cleanup job for expired sessions,
so that stale sessions are removed and security posture is maintained.

Acceptance Criteria
1. Session rotation API exists and updates `sessions.token_hash` appropriately.
2. A script or scheduled job `scripts/cleanup-sessions.js` deletes expired sessions when run.
3. Tests or a smoke script validate cleanup logic.
