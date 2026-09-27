# Jaga Warung Landing Page

Static marketing landing page for Jaga Warung POS application.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3 + shadcn/ui
- **Icons**: Lucide React
- **i18n**: react-i18next (ID/EN)
- **Video**: Demo video modal with shadcn Dialog

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
│   ├── Navbar.tsx              # Sticky navbar with blur, language switcher, mobile sheet
│   ├── Hero.tsx               # Headline, CTAs, phone mockup, demo video modal
│   ├── Features.tsx           # 6 feature cards with icons
│   ├── HowItWorks.tsx         # 3-step process
│   ├── Screenshots.tsx        # Card slider with Android phone mockups
│   ├── Testimonials.tsx       # 3 testimonial cards
│   ├── Pricing.tsx            # Free (highlighted) + Premium (coming soon)
│   ├── FAQ.tsx                # Accordion with 7 items
│   ├── Footer.tsx             # Brand logo, nav links, copyright
│   ├── shared/
│   │   └── PhoneMockup.tsx    # Reusable Android phone mockup component
│   └── ui/                    # shadcn components
│       ├── accordion.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── navigation-menu.tsx
│       ├── separator.tsx
│       └── sheet.tsx
├── i18n/
│   ├── index.ts
│   └── locales/
│       ├── id.json            # Indonesian translations
│       └── en.json            # English translations
├── lib/
│   └── utils.ts               # shadcn cn() helper
├── App.tsx                    # Section ordering
├── main.tsx                   # React + i18n bootstrap
└── index.css                 # Tailwind + shadcn CSS vars (hex colors)

public/
├── favicon.png                # Browser favicon
├── demo/
│   └── demo.webm              # App demo video
└── images/
    ├── icon.png               # Main app icon (navbar & footer)
    ├── logo-glow.png          # Logo with glow effect
    ├── splash-icon.png        # Splash screen icon
    ├── manifest.json          # Image manifest with descriptions
    └── Screenshot_*.png       # 8 app design screenshots
```

## Color Palette

| Role | Hex | Tailwind | shadcn Token |
|------|-----|----------|--------------|
| Background | `#F8FAFC` | slate-50 | `--background` |
| Foreground | `#0F172A` | slate-900 | `--foreground` |
| Primary (CTA) | `#10B981` | emerald-500 | `--primary` |
| Primary Text | `#FFFFFF` | white | `--primary-foreground` |
| Card | `#FFFFFF` | white | `--card` |
| Card Border | `#F1F5F9` | slate-100 | `--border` |
| Muted | `#F1F5F9` | slate-100 | `--muted` |
| Muted Text | `#64748B` | slate-500 | `--muted-foreground` |

Colors are defined as hex values in `src/index.css` and flow through shadcn semantic tokens.

## Features

- **Responsive design** (mobile, tablet, desktop)
- **Language switcher** (Indonesian/English) with react-i18next
- **Sticky navbar** with backdrop blur and mobile hamburger menu (Sheet)
- **Android phone mockups** - Reusable component for app screenshots
- **Screenshot slider** with prev/next navigation and dots indicator
- **Demo video modal** using shadcn Dialog component
- **FAQ accordion** with 7 items
- **Pricing cards** - Free tier highlighted, Premium coming soon
- **SEO optimized** - Open Graph, Twitter Card, JSON-LD structured data
- **Brand assets** - Custom favicon, app icon, and logo

## Sections

1. **Navbar** - Sticky with blur, nav links, language switcher, mobile sheet
2. **Hero** - Headline, CTAs (download + demo video), phone mockup, stats (beta/free/features)
3. **Features** - 6 feature cards (POS, Inventory, Reports, Debt, Offline, Expenses)
4. **HowItWorks** - 3-step process (Download, Setup, Start)
5. **Screenshots** - 8 app screenshots in Android phone mockup slider
6. **Testimonials** - 3 testimonial cards
7. **Pricing** - Free (highlighted) + Premium (coming soon)
8. **FAQ** - 7 FAQ items in accordion
9. **Footer** - Brand logo, nav links, copyright

## SEO

- Primary meta tags (title, description, keywords)
- Open Graph tags (Facebook)
- Twitter Card (summary_large_image)
- JSON-LD SoftwareApplication schema
- Canonical URL
- Theme color (#10B981)

## Deployment

Build output in `dist/` folder. Deploy to Vercel, Netlify, or Cloudflare Pages.

```bash
npm run build
npm run preview  # Preview at localhost:4173
```

## Changelog

| Commit | Description |
|--------|-------------|
| `14c420a` | Initial commit: Vite + React + TypeScript, Tailwind, shadcn/ui, i18n, all 9 sections |
| `6a82abb` | Update README with project documentation |
| `4122f07` | Replace icons with Jaga Warung brand assets (favicon, logo, hero image) |
| `0105404` | Add app screenshots with Android phone mockup slider |
| `0f7af4b` | Add demo video, shared PhoneMockup, honest beta stats |
| `441b962` | Update SEO with Open Graph, Twitter Card, and structured data |
