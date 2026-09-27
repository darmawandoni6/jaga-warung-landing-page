# Jaga Warung Landing Page — Implementation Plan (shadcn/ui)

## Goal Description

Build a **static marketing landing page** for the Jaga Warung POS app using **shadcn/ui** as the component framework (as referenced from [https://context7.com/websites/shadcn_io](https://context7.com/websites/shadcn_io)).

**Tech Stack:**
| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS v3 + shadcn/ui |
| Icons | Lucide React (shadcn default) |
| i18n | react-i18next (ID/EN) |
| Deployment | Vercel / Netlify / Cloudflare Pages |

**Color Palette** (from `jaga-warung-pos-plan-code.md` — mapped to shadcn CSS variables):

| Role | Hex | Tailwind | shadcn Token |
|---|---|---|---|
| Background | `#F8FAFC` | `slate-50` | `--background` |
| Text | `#0F172A` | `slate-900` | `--foreground` |
| Primary (CTA) | `#10B981` | `emerald-500` | `--primary` |
| Primary text | `#FFFFFF` | `white` | `--primary-foreground` |
| Warning | `#F59E0B` | `amber-500` | `--chart-4` |
| Danger | `#EF4444` | `red-500` | (not used on landing) |
| Card | `#FFFFFF` | `white` | `--card` |
| Card border | `#F1F5F9` | `slate-100` | `--border` |
| Muted | `#F1F5F9` | `slate-100` | `--muted` |
| Muted text | `#64748B` | `slate-500` | `--muted-foreground` |

---

## Proposed Changes

### Phase 1 — Project Setup

#### Step 1.1: Initialize Vite + React + TypeScript

```bash
cd /Users/donidarmawan/Documents/me/mobile/jaga-warung-landing-page
npm create vite@latest . -- --template react-ts
npm install
```

#### Step 1.2: Init shadcn/ui with Vite template

```bash
npx shadcn@latest init
```

During init:
- Style: **Nova** (clean modern look)
- Base color: **Slate** (matches brand palette)
- CSS variables: **Yes**
- TypeScript: **Yes**
- Tailwind config: auto-generated
- Components alias: `@/components`

#### Step 1.3: Override CSS variables for brand colors

In `src/index.css`, override `:root` with Jaga Warung brand:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 248 250 252;      /* slate-50 = #F8FAFC */
    --foreground: 15 23 42;         /* slate-900 = #0F172A */
    --primary: 16 185 129;          /* emerald-500 = #10B981 */
    --primary-foreground: 255 255 255;
    --card: 255 255 255;
    --card-foreground: 15 23 42;
    --border: 241 245 249;          /* slate-100 */
    --muted: 241 245 249;           /* slate-100 */
    --muted-foreground: 100 116 139; /* slate-500 */
    --ring: 16 185 129;             /* emerald-500 */
    /* ... rest of shadcn defaults */
  }
}
```

#### Step 1.4: Install i18n

```bash
npm install react-i18next i18next i18next-browser-languagedetector
```

#### Step 1.5: Add shadcn components

```bash
npx shadcn@latest add button card badge accordion sheet separator navigation-menu
```

---

### Phase 2 — i18n Layer

#### [NEW] `src/i18n/index.ts`
```ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import id from './locales/id.json';
import en from './locales/en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { id: { translation: id }, en: { translation: en } },
    fallbackLng: 'id',
    interpolation: { escapeValue: false },
  });

export default i18n;
```

#### [NEW] `src/i18n/locales/id.json`
All Indonesian strings for every section.

#### [NEW] `src/i18n/locales/en.json`
All English strings (mirrors id.json structure).

---

### Phase 3 — Section Components

#### [NEW] `src/components/Navbar.tsx`

Uses: `NavigationMenu`, `Sheet`, `SheetContent`, `SheetTitle`, `Button`

- Logo: "Jaga Warung" with `ShieldCheck` icon from lucide, text in `text-primary`
- Desktop nav: `NavigationMenu` with links → `#fitur`, `#harga`, `#faq`
- Language switcher: two `Button variant="ghost"` (ID / EN), active one gets `text-primary`
- Mobile: `Sheet` (side drawer) triggered by `Menu` icon button
- Sticky: `fixed top-0 z-50 w-full bg-background/90 backdrop-blur border-b border-border`

#### [NEW] `src/components/Hero.tsx`

Layout: 2-column grid on desktop, stacked on mobile

- Left: headline `text-4xl md:text-6xl font-bold text-foreground`, subhead `text-muted-foreground`
- CTAs using shadcn `Button`:
  ```tsx
  <Button size="lg">Download Gratis</Button>
  <Button size="lg" variant="outline">Lihat Demo</Button>
  ```
- Right: CSS phone mockup (pure Tailwind — no image needed)
- Stats bar: 3 `Card` mini-cards with numbers
- Background: `bg-gradient-to-br from-emerald-50 to-background`

#### [NEW] `src/components/Features.tsx`

Section ID: `id="fitur"`

Uses: `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `Badge`

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {features.map(f => (
    <Card key={f.id} className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
          <f.Icon className="size-6 text-primary" />
        </div>
        <CardTitle>{t(f.titleKey)}</CardTitle>
        <CardDescription>{t(f.descKey)}</CardDescription>
      </CardHeader>
    </Card>
  ))}
</div>
```

6 features (icons from lucide-react): `Package`, `CreditCard`, `FileText`, `Banknote`, `BarChart3`, `WifiOff`

#### [NEW] `src/components/HowItWorks.tsx`

3 steps with numbered circles + connecting line (desktop):

```tsx
<div className="flex flex-col md:flex-row gap-8 items-start">
  {steps.map((step, i) => (
    <div key={i} className="flex-1 flex flex-col items-center text-center gap-3">
      <div className="size-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
        {i + 1}
      </div>
      <h3 className="font-semibold text-foreground">{t(step.titleKey)}</h3>
      <p className="text-muted-foreground text-sm">{t(step.descKey)}</p>
    </div>
  ))}
</div>
```

Section background: `bg-muted`

#### [NEW] `src/components/Screenshots.tsx`

4 CSS phone mockups using `Card` with gradient overlays:
- POS Screen: emerald gradient + grid of colored squares (products)
- Inventory: amber/slate + list rows
- Debt Screen: blue/slate + avatar rows
- Reports: emerald + bar chart bars

```tsx
<div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-4">
  {screens.map(s => (
    <Card key={s.id} className="min-w-[200px] aspect-[9/16] ...">
      {/* Gradient content */}
    </Card>
  ))}
</div>
```

#### [NEW] `src/components/Testimonials.tsx`

3 testimonial cards:

```tsx
<Card className="p-6">
  <CardContent className="flex flex-col gap-4">
    <p className="text-foreground italic">"{t(quote)}"</p>
    <div className="flex items-center gap-3">
      <div className="size-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
        {initials}
      </div>
      <div>
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{business}</p>
      </div>
    </div>
  </CardContent>
</Card>
```

#### [NEW] `src/components/Pricing.tsx`

Section ID: `id="harga"`

2 pricing cards side-by-side:

- **Free tier** (highlighted):
  ```tsx
  <Card className="border-2 border-primary ring-4 ring-primary/10">
    <Badge className="bg-primary text-primary-foreground">PILIHAN UTAMA</Badge>
    ...
    <Button className="w-full mt-4">Download Gratis</Button>
  </Card>
  ```
- **Premium** (coming soon): `<Badge variant="secondary">Segera Hadir</Badge>`, muted styling

#### [NEW] `src/components/FAQ.tsx`

Section ID: `id="faq"`

Uses shadcn `Accordion` (from Context7 docs):

```tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

<Accordion type="single" collapsible className="rounded-lg border">
  {faqs.map((faq, i) => (
    <AccordionItem key={i} value={`item-${i}`} className="border-b px-4 last:border-b-0">
      <AccordionTrigger>{t(faq.qKey)}</AccordionTrigger>
      <AccordionContent>{t(faq.aKey)}</AccordionContent>
    </AccordionItem>
  ))}
</Accordion>
```

7 FAQ items per PRD §5.8.

#### [NEW] `src/components/Footer.tsx`

```tsx
<footer className="bg-foreground text-background/70">
  {/* Logo + tagline | Nav links | Social */}
  <Separator className="bg-background/10 my-6" />
  <p className="text-center text-sm">© 2024 Jaga Warung. Semua hak dilindungi.</p>
</footer>
```

---

### Final File Structure

```
jaga-warung-landing-page/
├── index.html                     # SEO meta tags (per PRD §10)
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js             # Brand color overrides
├── postcss.config.js
├── components.json                # shadcn config
├── src/
│   ├── main.tsx                   # React + i18n bootstrap
│   ├── App.tsx                    # Section ordering
│   ├── index.css                  # Tailwind + shadcn CSS vars
│   ├── i18n/
│   │   ├── index.ts
│   │   └── locales/
│   │       ├── id.json
│   │       └── en.json
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Screenshots.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   ├── Footer.tsx
│   │   └── ui/                    # shadcn auto-generated
│   │       ├── accordion.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── separator.tsx
│   │       └── sheet.tsx
│   └── lib/
│       └── utils.ts               # shadcn cn() helper
```

> [!NOTE]
> All phone mockup visuals are **pure Tailwind CSS** (no image files). The bundle stays lightweight.

> [!IMPORTANT]
> shadcn components follow **semantic color tokens** (`bg-primary`, `text-muted-foreground`) — **not raw hex values**. Brand colors are set once in `src/index.css` CSS variables, and flow through automatically.

---

## Responsive Breakpoints

| Screen | Layout |
|---|---|
| `< 640px` mobile | Single column, `Sheet` hamburger menu, horizontal scroll screenshots |
| `640–1024px` tablet | 2-col feature grid |
| `> 1024px` desktop | Full layout, `max-w-7xl` centered |

---

## Verification Plan

### Automated Tests

```bash
cd /Users/donidarmawan/Documents/me/mobile/jaga-warung-landing-page
npm run build   # TypeScript check + Vite production build
npm run preview # Preview at localhost:4173
```

### Manual Verification Checklist

1. ✅ Dev server starts: `npm run dev`
2. ✅ All 9 sections render (Navbar → Footer)
3. ✅ Sticky navbar with blur on scroll
4. ✅ Language switcher toggles ID ↔ EN across all text
5. ✅ Mobile hamburger (`Sheet`) opens/closes
6. ✅ FAQ `Accordion` expands/collapses correctly
7. ✅ Primary CTA buttons are emerald (`bg-primary`)
8. ✅ Free pricing tier has emerald ring highlight
9. ✅ Responsive at 375px, 768px, 1280px widths
10. ✅ `npm run build` exits code 0 (no TS errors)
