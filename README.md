# The Lazy Leaf — Kota, Rajasthan 🌿
### *An Antidote to Hurry • Specialty Cafe, Kitchen & Botanical Sanctuary*

[![Next.js](https://img.shields.io/badge/Next.js-15.5.12-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.14-88ce02?style=for-the-badge&logo=greensock)](https://greensock.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.18.2-ff0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## 📖 Table of Contents

- [About The Lazy Leaf](#-about-the-lazy-leaf)
- [Core Brand Philosophy](#-core-brand-philosophy)
- [Design System & Aesthetics](#-design-system--aesthetics)
- [Detailed Section Walkthrough](#-detailed-section-walkthrough)
- [Tech Stack & Architecture](#-tech-stack--architecture)
- [Project Directory Structure](#-project-directory-structure)
- [Data & Content Schemas](#-data--content-schemas)
- [Performance & UX Engineering](#-performance--ux-engineering)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [SEO & Schema Metadata](#-seo--schema-metadata)
- [Deployment Guidelines](#-deployment-guidelines)
- [License](#-license)

---

## 🍃 About The Lazy Leaf

**The Lazy Leaf** is a premier specialty cafe, artisan kitchen, and botanical sanctuary nestled in **Talwandi, Kota, Rajasthan**. Created as a conscious antidote to the hurried modern world, the sanctuary invites students, creators, thinkers, and families to slow down, read, work, and linger over single-origin pour-overs, hand-stretched sourdough pizzas, and handcrafted desserts.

This digital experience reflects the physical sanctuary's calm luxury: fluid typography, momentum-based smooth scrolling, interactive time journals, and rich gastronomy showcases.

---

## ☕ Core Brand Philosophy

> *"Take your time. There is no rush in a place made for living."*

- **📍 Location**: B-257, Commerce College Road, Talwandi, Kota, Rajasthan, India — 324005
- **🌿 Atmosphere**: Lush tropical flora, warm acoustic timber, comfortable reading nooks, and dedicated power-equipped workstations with high-speed Wi-Fi.
- **🥐 Gastronomy**: Single-origin Arabica roasts, 16-hour slow-steeped cold brews, 48-hour fermented sourdough pizzas, artisan pasta, Asian comfort bowls, and freshly baked confections.

---

## 🎨 Design System & Aesthetics

The design system is grounded in organic, warm earthy tones with refined editorial typography:

### Color Palette
- **Deep Charcoal Background**: `#0c0e0d` (Dark, immersive canvas)
- **Charcoal Surface**: `#131615` (Elevated card layers)
- **Warm Cream**: `#f4eee4` (Primary high-contrast text)
- **Muted Cream**: `#cfc8bc` / `#d6cebf` (Secondary descriptive text)
- **Caramel Amber Accent**: `#c89c6c` (Highlights, active badges, glowing links)
- **Warm Gold Accent**: `#e8cda7` (Subtle gradients, active tabs)
- **Botanical Olive Light**: `#8a9a86` (Pillars, index numbering, micro tags)

### Typography
- **Primary Serif**: `Cormorant Upright` — Elegantly proportioned serif for luxury editorial headings.
- **Secondary Sans-Serif**: `Open Sans` — Clean, legible modern sans-serif for body descriptions and metadata.

---

## 🏛️ Detailed Section Walkthrough

```
┌─────────────────────────────────────────────────────────────┐
│  01. HERO (Cinematic Boxy Scrub & Serif Headline)           │
├─────────────────────────────────────────────────────────────┤
│  02. A MANIFESTO OF SLOWNESS & SIGNATURE SEQUENCE (4 Pillars)│
├─────────────────────────────────────────────────────────────┤
│  03. STAY FOR A WHILE (Spatial Time Journal & Climax Card)  │
├─────────────────────────────────────────────────────────────┤
│  04. OUR STORY CHAPTERS (GSAP Horizontal Story Scroll)     │
├─────────────────────────────────────────────────────────────┤
│  05. GASTRONOMY & BREWS (Interactive Category Showcase)     │
│      └─ FULLSCREEN MENU MODAL (Isolated Scroll + WhatsApp) │
├─────────────────────────────────────────────────────────────┤
│  06. VISITING GUIDE & HOURS (Coordinate Vector Map)         │
├─────────────────────────────────────────────────────────────┤
│  07. GUEST REFLECTIONS (Touch-Enabled Review Carousel)      │
├─────────────────────────────────────────────────────────────┤
│  08. BRAND FOOTER (Official Emblem Branding)                │
└─────────────────────────────────────────────────────────────┘
```

| Section | Component | Description & Architectural Highlights |
| :--- | :--- | :--- |
| **01. Hero** | `Hero.tsx` | Instant 0ms visual load (unpinned), scroll-driven boxy card scaling (`scale: 0.88`, `borderRadius: 32px`), multi-tone serif headline (*The Lazy Leaf*), and botanical leaf emblem divider. |
| **02. Sequence** | `SignatureSequence.tsx` | 4 pillars (*COFFEE, FOOD, PEOPLE, TIME*). Desktop utilizes a pinned ScrollTrigger sequence with non-overlapping transitions; Mobile features an interactive Pillar Matrix Tab Switcher, cutting scroll depth by 70%. |
| **03. Time Journal** | `StayForAWhile.tsx` | Interactive Time-Dial selector (`All Hours`, `08:30 AM Morning`, `11:45 AM Work`, `07:30 PM Evening`), 3-column moments grid, and a full-width panoramic twilight sanctuary feature card. |
| **04. Our Story** | `About.tsx` | 3 editorial storytelling chapters (*A Calm Sanctuary, The Honest Kitchen, The Shared Table*) rendered via desktop GSAP horizontal pinned scrubbing and custom high-resolution photography. |
| **05. Gastronomy** | `Menu.tsx` | 7 distinct gastronomy categories (`Coffee`, `Bites`, `Pizza`, `Pasta`, `Asian`, `South Indian`, `Desserts`) with dedicated photo canvases and interactive live preview. |
| **05.1 Menu Modal** | `FullscreenMenuModal.tsx` | Isolated wheel and touch event propagation (`overscroll-contain`), high-contrast item typography, and direct WhatsApp order / table inquiry integration. |
| **06. Visiting Guide** | `OpeningHours.tsx` | Location details (Talwandi, Kota), opening hours, custom dark vector coordinate map (`25.1396° N, 75.8344° E`), and direct action buttons (*Get Directions*, *Instagram*, *Call Us*). |
| **07. Reviews** | `Testimonials.tsx` | Viewport-dominant quote stage with touch-swipe handlers, auto-cycle timer (7s), star rating badges, and keyboard/button controls. |
| **08. Navigation** | `Nav.tsx`, `NavList.tsx` | Framer Motion kinetic drawer with staggered letter choreography and smooth scroll anchors. |

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js 15.5.12](https://nextjs.org/) (App Router, Server & Client Components)
- **Language**: [TypeScript 5.9](https://www.typescriptlang.org/) (Strict type-checking)
- **Styling**: [Tailwind CSS 3.4.1](https://tailwindcss.com/)
- **Kinetic Animations**:
  - **GSAP 3.14 + ScrollTrigger**: Pinned sequences, horizontal story scrubbing, and parallax triggers.
  - **Framer Motion 11.18.2**: Navigation drawers, modal transitions, and letter animations.
  - **Locomotive Scroll 5**: Momentum virtual scrolling with safe Fast Refresh cleanup lifecycle guards.
- **Icons**: [React Icons 5](https://react-icons.github.io/react-icons/) (`FaInstagram`, `FaPhoneAlt`, `FaDirections`, `IoMdQuote`)
- **Image Processing & Formats**: Modern `avif` and `webp` optimization with [Sharp](https://sharp.pixelplumbing.com/).

---

## 📂 Project Directory Structure

```bash
Lazy_Leaf_Kota-demo-site/
├── app/
│   ├── globals.css         # Custom typography, animations & button utility classes
│   ├── layout.tsx          # Root layout, theme color, SEO metadata & JSON-LD schema
│   └── page.tsx            # Home page composition & Locomotive Scroll lifecycle
├── components/
│   ├── About.tsx           # 3 Story chapters with GSAP horizontal pin scrub
│   ├── Badge.tsx           # Rotating circular botanical emblem badge
│   ├── Footer.tsx          # Closing brand footer with official branding
│   ├── Header.tsx          # Sticky glass navigation header & hamburger toggle
│   ├── Hero.tsx            # Cinematic hero with boxy scroll scrub
│   ├── OpeningHours.tsx    # Visiting guide, service hours & coordinate vector map
│   ├── Separator.tsx       # Botanical accent divider SVG
│   ├── SignatureSequence.tsx # 4-Pillar manifesto (Desktop scrub + Mobile tabs)
│   ├── StayForAWhile.tsx   # Interactive Spatial Time Journal & Climax Card
│   ├── Testimonials.tsx    # Touch-enabled guest reflections carousel
│   ├── Menu/
│   │   ├── FullscreenMenuModal.tsx # Full menu modal with isolated scroll & WhatsApp CTA
│   │   └── Menu.tsx        # Interactive category showcase
│   └── Nav/
│       ├── Nav.tsx         # Fullscreen mobile navigation overlay
│       └── NavList.tsx     # Framer Motion animated nav links
├── data/
│   └── menuCategories.ts   # Structured gastronomy data (7 categories with items)
├── public/
│   ├── apple-touch-icon.png # 180x180 Apple touch icon
│   ├── favicon.ico         # Multi-size official favicon
│   ├── hero-bg.jpg         # High-resolution hero background
│   ├── hero-bg.webp        # Compressed WebP hero asset
│   ├── icon.png            # 512x512 App icon
│   ├── lazy-leaf-logo.jpg  # Official brand logo
│   └── assets/
│       ├── about/          # Chapter photography (sanctuary, kitchen, community)
│       ├── menu/           # Category photography (coffee, bites, pizza, pasta, etc.)
│       ├── moments/        # Time journal photography (morning, work, date, noreason)
│       └── signature/      # Pillar photography (coffee, food, people, time)
├── next.config.mjs         # Image formats, dev stability configuration
├── tailwind.config.ts      # Custom theme colors, typography, and viewport screens
└── tsconfig.json           # TypeScript path mappings (@/*)
```

---

## 📦 Data & Content Schemas

All menu items, categories, and reviews are structured in type-safe data modules:

```typescript
// data/menuCategories.ts
export type MenuItemHighlight = {
  name: string;
  description: string;
  isVeg?: boolean;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  imgSrc: string;
  highlights: MenuItemHighlight[];
};
```

---

## ⚡ Performance & UX Engineering

1. **Instant 0ms Hero Load**:
   - Eliminated top pinned ScrollTriggers to prevent virtual spacer collisions on page load, guaranteeing zero grey/black flashes.
2. **Crash-Resistant Fast Refresh**:
   - `reactStrictMode: false` in `next.config.mjs` and lifecycle `isMounted` guards in `app/page.tsx` eliminate double-mounting collisions between Locomotive Scroll and GSAP during development.
3. **Isolated Modal Scrolling**:
   - Fullscreen Menu Modal isolates `wheel` and `touch` events with `overscroll-contain`, allowing smooth native scrolling without interference from background smooth-scroll libraries.
4. **Mobile Scroll Depth Reduction**:
   - Replaced multi-viewport linear stacks with interactive matrix tabs, cutting mobile vertical scrolling by **over 70%**.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.x or higher ([Download Node.js](https://nodejs.org/))
- **npm**, **yarn**, or **pnpm**

### Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/Lazy_Leaf_Kota-demo-site.git
   cd Lazy_Leaf_Kota-demo-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local development server at `localhost:3000` with hot module replacement. |
| `npm run build` | Compiles the TypeScript code and generates an optimized production static build. |
| `npm run start` | Runs the compiled production server. |
| `npm run lint` | Runs Next.js ESLint checks to ensure code quality and zero errors. |

---

## 🔍 SEO & Schema Metadata

Configured in [`app/layout.tsx`](app/layout.tsx) with comprehensive metadata for Kota local discoverability:

- **Canonical URL**: `https://the-lazy-leaf.vercel.app`
- **Theme Color**: `#0c0e0d` (Seamless mobile browser toolbar matching)
- **OpenGraph & Twitter Cards**: High-resolution brand preview cards
- **JSON-LD Schema**:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": "The Lazy Leaf",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "B-257, Commerce College Road, Talwandi",
      "addressLocality": "Kota",
      "addressRegion": "Rajasthan",
      "postalCode": "324005",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.1396,
      "longitude": 75.8344
    },
    "servesCuisine": ["Specialty Coffee", "Sourdough Pizza", "Artisan Pasta", "Desserts", "South Indian"]
  }
  ```

---

## 🌐 Deployment Guidelines

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub / GitLab / Bitbucket.
2. Import the repository into [Vercel](https://vercel.com).
3. Framework Preset: **Next.js**.
4. Click **Deploy**. Vercel will automatically build and host the static application globally on edge CDN.

---

## 📍 Visit The Lazy Leaf

- **Address**: B-257, Commerce College Road, Talwandi, Kota, Rajasthan 324005
- **Hours**:
  - Monday – Thursday: `09:00 AM – 10:30 PM`
  - Friday – Sunday: `09:00 AM – 11:30 PM`
- **WhatsApp Inquiries & Table Reservations**: [wa.me/919876543210](https://wa.me/919876543210)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
