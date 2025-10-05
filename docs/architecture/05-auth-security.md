 # Authentication & Security

 - Sessions stored in PostgreSQL with SHA-256 token_hash
 - Cookies: HttpOnly, Secure, SameSite=Lax
 - Passwords: argon2id
 - WS auth: short-lived JWT from `/auth/ws-token`
