# Story 1.5 Auth: guest create + session cookie

As an end user (guest),
I want to open the app and have a guest session created with a cookie,
so that I can try the app without registering.

Acceptance Criteria
1. `POST /auth/guest` creates a guest `users` row with `is_guest=true` and a `sessions` row with a token_hash; returns 201 and sets an HttpOnly `sid` cookie.
2. `GET /auth/me` returns user info when `sid` cookie is present.
3. Session cookie uses `HttpOnly`, `Secure` (if served over https), and reasonable expiry (e.g., 30 days) per config.
