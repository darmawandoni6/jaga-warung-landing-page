# AGENTS.md — Jaga Warung Landing Page

## Project Overview

A React + Vite + TypeScript landing page for **Jaga Warung**, built with Tailwind CSS, shadcn/ui (Radix UI primitives), and `react-i18next` for internationalization.

- **Framework**: React 19 + Vite 8
- **Language**: TypeScript ~6
- **Styling**: Tailwind CSS v3 + `class-variance-authority`
- **UI Primitives**: Radix UI (Accordion, Dialog, NavigationMenu)
- **i18n**: i18next + react-i18next + i18next-browser-languagedetector
- **Linter**: oxlint (configured via `.oxlintrc.json`)
- **Node version**: see `.nvmrc`

---

## Repository Structure

```
jaga-warung-landing-page/
├── public/                        # Static assets served as-is
├── src/
│   ├── App.tsx                    # Root component — imports and orders all sections
│   ├── main.tsx                   # Entry point — mounts React, initialises i18n
│   ├── index.css                  # Global base styles (Tailwind directives)
│   ├── assets/                    # Images and SVGs imported by components
│   ├── components/
│   │   ├── Navbar.tsx             # Top navigation bar
│   │   ├── Hero.tsx               # Hero / above-the-fold section
│   │   ├── Features.tsx           # Product features grid
│   │   ├── HowItWorks.tsx         # Step-by-step explainer
│   │   ├── Screenshots.tsx        # App screenshot gallery
│   │   ├── Pricing.tsx            # Pricing tiers
│   │   ├── Testimonials.tsx       # Customer testimonials
│   │   ├── FAQ.tsx                # Accordion FAQ
│   │   ├── Contact.tsx            # Contact / CTA section
│   │   ├── Footer.tsx             # Site footer
│   │   ├── shared/                # Reusable sub-components (e.g. PhoneMockup)
│   │   └── ui/                    # shadcn/ui primitives — do not edit directly
│   ├── i18n/
│   │   ├── index.ts               # i18next initialisation
│   │   └── locales/
│   │       ├── en.json            # English strings
│   │       └── id.json            # Indonesian strings
│   └── lib/
│       └── utils.ts               # cn() helper (clsx + tailwind-merge)
├── .nvmrc                         # Required Node version
├── .oxlintrc.json                 # Lint rules (react, typescript, oxc plugins)
├── components.json                # shadcn/ui configuration
├── tailwind.config.js             # Tailwind theme + content paths
├── vite.config.ts                 # Vite config — defines @ alias to ./src
└── tsconfig.app.json              # TypeScript config for the app
```

---

## Dev Environment Tips

- Use `node --version` and compare with `.nvmrc` to confirm the correct Node version is active. Switch with `nvm use` if needed.
- Path alias `@` maps to `./src` — always import using `@/components/...` instead of relative paths like `../../components/...`.
- Run `npm install` (or `npm ci` for a clean install) before starting work.
- Start the dev server with `npm run dev`.
- Build for production with `npm run build` (runs `tsc -b && vite build`).
- Preview the production build locally with `npm run preview`.
- Section components live directly in `src/components/`. Shared sub-components go in `src/components/shared/`. shadcn primitives live in `src/components/ui/`.
- i18n locale files are in `src/i18n/locales/`. Add or update keys in **every** locale file when changing user-visible strings.

---

## Code Style & Conventions

### ✅ Do — Named exports

```tsx
// ✅ Good
export function HeroSection() { ... }

// ❌ Bad
export default function HeroSection() { ... }
```

### ✅ Do — Use `cn()` for conditional classes

```tsx
// ✅ Good
import { cn } from '@/lib/utils'
<div className={cn('base-class', isActive && 'active-class')} />

// ❌ Bad
<div className={`base-class ${isActive ? 'active-class' : ''}`} />
```

### ✅ Do — Use `@` alias for imports

```tsx
// ✅ Good
import { Button } from '@/components/ui/button'

// ❌ Bad
import { Button } from '../../components/ui/button'
```

### ✅ Do — Tailwind classes only, no custom CSS

```tsx
// ✅ Good
<p className="text-sm font-medium text-gray-600" />

// ❌ Bad — avoid writing custom CSS rules
<p style={{ fontSize: '14px', color: '#4B5563' }} />
```

### ✅ Do — All strings via i18n

```tsx
// ✅ Good
const { t } = useTranslation()
<h1>{t('hero.title')}</h1>

// ❌ Bad
<h1>Kelola warung Anda dengan mudah</h1>
```

---

## Guardrails

### Always
- Run `npx tsc --noEmit` → `npm run lint` → `npm run build` in that order before any commit.
- Add every new user-facing string to **all** locale files (`en.json` and `id.json`) at the same time.
- Export components as **named exports** only.
- Use `cn()` from `@/lib/utils` for all conditional class merging.

### Ask First (check with the user before doing)
- Adding a new npm dependency — confirm it's necessary and not already covered by existing packages.
- Modifying `tailwind.config.js` theme tokens — changes affect the entire site.
- Restructuring the `src/` directory layout.
- Changing the i18n initialisation in `src/i18n/index.ts`.

### Never
- Edit files inside `src/components/ui/` manually — these are shadcn primitives managed via the shadcn CLI.
- Hardcode display text directly in JSX — all strings must go through `react-i18next`.
- Commit with failing lint errors or TypeScript errors.
- Add inline `style={{}}` attributes — use Tailwind classes instead.
- Use relative import paths like `../../` — always use the `@` alias.

---

## Linting Instructions

- Run `npm run lint` to check the entire project with oxlint.
- Lint configuration is in [`.oxlintrc.json`](.oxlintrc.json) — plugins enabled: `react`, `typescript`, `oxc`.
- Fix all lint errors before committing. Warnings should be reviewed and addressed if possible.
- After moving files or changing imports, always re-run lint to catch broken paths or rule violations.

---

## Testing Instructions

> **Note**: This project currently has no test runner configured. Until tests are added, follow these steps to validate correctness:

1. **Type-check**: Run `npx tsc --noEmit` to catch TypeScript errors without building.
2. **Lint**: Run `npm run lint` and resolve all errors.
3. **Build**: Run `npm run build` and confirm it completes without errors.
4. **Manual smoke test**: Run `npm run preview` and verify key sections render correctly (Navbar, Hero, Features, How It Works, Screenshots, Pricing, Testimonials, FAQ, Contact, Footer).
5. **i18n check**: Toggle the language in the browser and confirm all strings switch correctly — `[key]` placeholders appearing means a translation key is missing.

When a test runner is introduced, add test scripts to `package.json` and update this section accordingly.

---

## PR Instructions

- **Title format**: `[jaga-warung-landing-page] <Short imperative description>`
  - Example: `[jaga-warung-landing-page] Add Indonesian locale for Pricing section`
- Always run `npm run lint` and `npm run build` successfully before opening a PR.
- Run `npx tsc --noEmit` to confirm zero type errors.
- Update locale files in `src/i18n/locales/` for every user-visible string change.
- Keep PRs focused — one feature or fix per PR.
- Reference related issues or Jira tickets in the PR description.

---

## i18n Guidelines

- All user-facing strings must go through `react-i18next` (`useTranslation` hook or `<Trans>` component).
- Never hardcode display text directly in JSX.
- Locale files live in `src/i18n/locales/`. Keep all locale files in sync — a key present in one must exist in all others.
- The browser language detector is active; test with different `navigator.language` values or manually switch the language.

---

## Adding New Sections

1. Create a new component file in `src/components/`, e.g., `src/components/NewSection.tsx`.
2. Export it as a **named export**.
3. Import and place it in `src/App.tsx` at the appropriate position.
4. Add all i18n keys to **every** locale file under `src/i18n/locales/`.
5. Run `npx tsc --noEmit` → `npm run lint` → `npm run build` to confirm no errors.
