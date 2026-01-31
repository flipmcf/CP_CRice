The “Issue Tracker” MVP
Objective

Build a minimal but production-minded Issue Tracker that supports users, projects, and issues,
with real-time updates and role-based access.


Scope (MVP):

●​ Auth:
○​ Sign up / login (email+password) or OAuth
Sign up page created, but not functional.

1○​ Protected routes
●​ Domain:
○​ Project with name, owner
○​ Issue with title, description, status (open, in-progress, closed), priority
○​ Issues assigned to users and owned by projects
●​ API:
○​ CRUD for Projects and Issues
○​ Server-side pagination & filtering (status, priority, assigneeId, tag, text
search on title).
●​ UI:
○​ Project list & detail.
○​ Issue list with filters, sort, and text search.
 - Issue list sort-of exists at http://localhost:4200/
○​ Issue detail view with edit, comment thread, and activity log.
●​ Real-time: Push updates when an issue changes (WebSocket/SSE).
●​ Data model: Relational or document—justify the choice and indexing strategy.
●​ Quality gates:
○​ Unit tests for core business logic.
○​ At least one integration test hitting API + DB.
○​ Basic input validation and error handling.
●​ Ops hygiene:

DONE ○​ Minimal README: stack, run instructions, trade-offs, and “If I had 2 more days”
section.

DONE ○​ Turnkey startup: Dockerfile + docker-compose (or equivalent) to run API, DB,
and web app; any required seed data
