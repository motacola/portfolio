# Task Completion Checklist
- Run `npm run lint` to ensure Next/ESLint checks pass; the project currently has no automated tests, so linting + targeted manual verification in the browser are expected.
- For feature work that affects the UI, verify in `npm run dev` at http://localhost:3000 including keyboard/focus interactions, responsive layouts, and any filtering or API calls being touched.
- Update any relevant documentation/notes under the repo root (`README.md`, specialized update logs) after implementing a change that affects user-facing behaviour.
- Keep CSS/TS files formatted with the existing style (2-space indentation, single quotes in TSX via ESLint defaults).