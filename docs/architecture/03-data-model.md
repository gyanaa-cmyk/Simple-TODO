 # Data Model (ERD & DDL)

 ## ERD (conceptual)
 users (1) ──< sessions
   │
   └──< lists (owner_id)
         │
         ├──< list_members >── users
         │
         └──< tasks ──< comments
                     └──< task_reactions

## Core Tables (DDL Summary)
- users(id, email, username, password_hash, is_guest, created_at)
- sessions(id, user_id, token_hash, ua, ip, expires_at, created_at)
- lists(id, owner_id, title, is_shared, created_at)
- tasks(id, list_id, title, notes, due_date, is_done, sort_index, created_by, created_at, updated_at)
