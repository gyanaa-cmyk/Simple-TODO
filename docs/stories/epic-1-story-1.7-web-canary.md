# Story 1.7 Web: minimal canary UI

As a user,
I want a minimal web page that triggers guest creation and shows the lists endpoint result,
so that we can visually verify the backend and cookie flow in the browser.

Acceptance Criteria
1. A simple SPA page `/web/src/App.*` with a button "Start as Guest" that calls `POST /auth/guest` and then `GET /lists` and displays the JSON response.
2. The page reflects a successful guest session (e.g., shows "Guest created" and the lists array).
3. The UI is reachable via a `dev` server and documented in README.
