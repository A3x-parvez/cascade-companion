# India Waterfalls Database Frontend

Lightweight Vite + React + TypeScript starter using shadcn-style components and Tailwind CSS.

**Overview**

This repository contains a UI-focused application for browsing and presenting waterfall data. It ships with a collection of small, reusable components under `src/components/` and example pages under `src/pages/`.

**Status**: Active development. No external service-specific references remain in this README.

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm (or an alternative package manager: pnpm, bun)

## Quickstart

1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

3. Open the app at the address printed by Vite (typically `http://localhost:8080`).

4. Build for production:

```bash
npm run build
```

5. Preview the production build locally:

```bash
npm run preview
```

## Available scripts

- `dev` — Run Vite dev server
- `build` — Build production assets
- `build:dev` — Build in development mode
- `preview` — Preview production build
- `lint` — Run ESLint

## Project structure

- `src/` — application source
	- `main.tsx` — entry point
	- `App.tsx` — root app component
	- `components/` — UI components and `ui/` primitives
	- `data/` — example datasets (e.g., `waterfallData.ts`)
	- `pages/` — route pages
- `public/` — static assets
- `vite.config.ts`, `tsconfig.json`, `tailwind.config.ts` — config and tooling

## Notes on cleanup

I removed references to the external scaffolding service from the README and removed the external devDependency from `package.json`. To fully clean local state, delete `node_modules` and regenerate the lockfile by running `npm install`.

```bash
rm -rf node_modules package-lock.json
npm install
```

## Contributing

- Fork or branch, make focused changes, and open a Pull Request.
- Run `npm run lint` and ensure basic functionality before submitting.

## License

Add a `LICENSE` file to indicate the desired license for this project.

---

If you want, I can also remove the existing `package-lock.json` entries referencing removed packages so your next `npm install` produces a clean lockfile.
