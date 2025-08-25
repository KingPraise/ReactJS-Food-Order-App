# React Food Order App

A small, focused React application that demonstrates a food-ordering UI with a cart. The project was bootstrapped with Create React App and implements component-based UI, local state management with React Context, and a clean modular folder structure.

## Quick summary

- Purpose: a demo app to browse meals, add them to a cart, and review cart contents.
- Main technologies: React (functional components + hooks), CSS Modules, Create React App.
- Key patterns: component decomposition, presentational vs container components, centralized cart context for state.

## What was implemented

- Header with a cart button and a logo.
- Meals listing with individual MealItem components that include an add-to-cart form.
- Cart overlay modal showing added items and total amount.
- Cart context (`src/store/cart-context.js`) and provider (`src/store/CartProvider.js`) that expose an API to add/remove items and track totals.
- Reusable UI primitives: `Card`, `Modal`, and `Input` components.
- Styling via CSS Modules for component encapsulation (`*.module.css`).

## Project structure (high level)

- `public/` — static html and manifest
- `src/` — application source
	- `assets/` — images used by the app (logo, meals)
	- `components/` — UI components grouped by feature
		- `Cart/` — `Cart.jsx`, `CartItem.js`, `CartIcon.jsx`, styles
		- `Layout/` — `Header.jsx`, `HeaderCartButton.jsx`, styles
		- `Meals/` — `AvailableMeals.jsx`, `Meals.jsx`, `MealsSummary.jsx`, `MealItem/` with form
		- `UI/` — `Card.jsx`, `Modal.jsx`, `Input.jsx`, styles
	- `store/` — `cart-context.js` (context definition) and `CartProvider.js` (provider wiring)
	- `App.js`, `index.js`, and standard CRA files

## Data shapes / contract

- Cart item shape (used throughout the context and components):
	- id: string
	- name: string
	- amount: number (quantity)
	- price: number (per-item price in app currency)

- Cart context exposes:
	- items: Array<CartItem>
	- totalAmount: number
	- addItem(item)
	- removeItem(id)

Error modes: the app assumes valid data from the built-in meal list (no external API). Edge cases handled in UI: empty cart state, adding/removing quantities, disabling invalid form inputs.

## How to run (developer / local)

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm start
```

3. Build for production:

```bash
npm run build
```

4. Run tests (if you add tests later):

```bash
npm test
```

Notes:
- The project uses Create React App conventions. If you customized scripts or added TypeScript, update commands accordingly.

## Development & best practices applied (and recommended extras)

- Component-first design: UI is split into small, focused components to keep concerns isolated.
- Encapsulated styles: CSS Modules (`*.module.css`) prevent global style leakage.
- Single source of truth for cart state: React Context centralizes cart logic and reduces prop drilling.
- Accessibility: prefer semantic HTML, labeled inputs, and accessible button markup. (Verify with an a11y tool.)
- Performance: memoize pure components and avoid unnecessary re-renders when the UI grows.

Recommended small follow-ups you may want to add:
- Unit/integration tests for critical logic (cart reducer, add/remove flows). Use Jest + React Testing Library.
- Type safety: migrate to TypeScript or add PropTypes for public components to prevent bugs.
- Linting & formatting: add ESLint and Prettier, and configure Husky + lint-staged for pre-commit checks.
- E2E tests: add a minimal Cypress test that covers basic add-to-cart and checkout flows.

## Quality gates and verification

- Build: `npm run build` (CRA build). Should succeed on a standard Node environment.
- Lint: if ESLint is not configured, add it with `npx eslint --init` and fix issues.
- Tests: none included by default in this snapshot—add tests as recommended above.

Current status: the README documents implemented features and structure; recommended extras are listed as next steps.

## Troubleshooting

- If the server doesn't start: ensure Node (LTS) and npm are installed, remove `node_modules` and reinstall.
- If CSS Modules fail to load: ensure filenames follow the `*.module.css` pattern (already used here).

## Next steps / roadmap

1. Add unit tests for `CartProvider` and `CartItem` logic.
2. Add ESLint + Prettier and run across the codebase.
3. Add a lightweight CI workflow (GitHub Actions) that runs build and tests on PRs.
4. Consider persisting cart state to localStorage and restoring it on load.

## Contributing

If you'd like to contribute, please open an issue or a PR. Keep changes small and focused, and run the app locally before submitting.

## License

This repository does not include a license file. Add one (for example `MIT`) if you plan to publish or share the code.

---

If you'd like, I can also add ESLint/Prettier, a basic test for the cart, or a GitHub Actions CI workflow next — tell me which and I'll implement it.
