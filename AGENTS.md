# AGENTS Guidelines
1. Install deps: `npm install`; dev run: `npm run watch`; start: `node src/server.js`.
2. No test suite yet; placeholder `npm test` fails—create tests under `__tests__/` and invoke single test via `npx jest path/to/file.test.js` (add Jest first).
3. Use Node 18+ on Render; set `Build Command: npm install`; `Start Command: node src/server.js`.
4. Provide `MONGO_URL` env var in Render dashboard; never hardcode secrets.
5. Prefer `async/await`; always wrap awaiting DB calls in try/catch returning `res.status(500).json({error: 'message'})`.
6. Logging: use `morgan` for HTTP; avoid `console.log` for secrets; remove profanity constants (e.g. cookie key).
7. Imports: use `const name = require('module')`; local requires ordered: core, npm, internal (by path length).
8. File naming: use `camelCase` for JS files; avoid dots and numbers like `symtom.modal.3.js`—refactor to meaningful names.
9. Functions/vars: `camelCase`; Classes (if added): `PascalCase`; constants: `UPPER_SNAKE_CASE`.
10. Avoid duplicated logic—centralize auth in middleware (`authenticate`).
11. Responses: always terminate with single return; choose proper status codes (201 for creations, 400 validation, 401 auth, 404 not found).
12. Input validation: add layer before DB (e.g. check required fields).
13. Do not expose session IDs; rotate `cookie_session` keys via env `SESSION_KEYS`.
14. Formatting: 2-space indent; single quotes; semicolons; trailing commas optional.
15. Avoid global mutable state; use dependency injection for future services.
16. Error messages: human-readable, no internal stack traces to client.
17. Add lint: `npm i -D eslint`; run `npx eslint .` before commits; fix warnings.
18. Git hygiene: small focused changes; no committing node_modules or secrets.
19. When adding tests, mock Mongo using in-memory server to keep CI fast.
20. Security: validate redirects; never trust `req.body`; escape/validate user input.
