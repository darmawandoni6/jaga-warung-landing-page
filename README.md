# Jaga Warung Landing Page

Static marketing landing page for Jaga Warung POS application.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3 + shadcn/ui
- **Icons**: Lucide React
- **i18n**: react-i18next (ID/EN)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── Screenshots.tsx
│   ├── Testimonials.tsx
│   ├── Pricing.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   └── ui/           # shadcn components
├── i18n/
│   ├── index.ts
│   └── locales/
│       ├── id.json
│       └── en.json
├── lib/
│   └── utils.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Color Palette

| Role | Hex | Tailwind |
|------|-----|----------|
| Background | `#F8FAFC` | slate-50 |
| Foreground | `#0F172A` | slate-900 |
| Primary | `#10B981` | emerald-500 |
| Muted | `#F1F5F9` | slate-100 |
| Muted Text | `#64748B` | slate-500 |

## Features

- Responsive design (mobile, tablet, desktop)
- Language switcher (Indonesian/English)
- Sticky navbar with blur effect
- FAQ accordion
- Mobile hamburger menu

## Deployment

Build output in `dist/` folder. Deploy to Vercel, Netlify, or Cloudflare Pages.
