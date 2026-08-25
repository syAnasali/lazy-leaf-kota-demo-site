# The Lazy Leaf — Kota, Rajasthan 🌿
### *An Antidote to Hurry • Specialty Cafe & Botanical Sanctuary*

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.14-88ce02?style=for-the-badge&logo=greensock)](https://greensock.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

---

## 🍃 About The Lazy Leaf

**The Lazy Leaf** is a premier specialty cafe, artisan kitchen, and botanical sanctuary located in **Talwandi, Kota, Rajasthan**. Designed as an antidote to modern hurry, the space invites guests to slow down, read, work, and linger over single-origin pour-overs, stone-baked sourdough pizzas, and handcrafted desserts.

This web experience is crafted with an editorial, luxury hospitality aesthetic: fluid typography, smooth parallax momentum, interactive time journals, and rich gastronomy showcases.

---

## ☕ Core Brand Philosophy

> *"Take your time. There is no rush in a place made for living."*

- **Location**: B-257, Commerce College Road, Talwandi, Kota, Rajasthan, India — 324005
- **Atmosphere**: Botanical light, warm timber acoustics, cozy reading corners, and high-speed Wi-Fi workstations.
- **Gastronomy**: Single-origin Arabica roasts, 16-hour slow cold steeps, 48-hour fermented sourdough pizzas, artisan pasta, and fresh daily bakes.

---

## ✨ Features & Architecture

| Section | Architectural Implementation | Key Highlights |
| :--- | :--- | :--- |
| **Hero** | Unpinned natural scroll scrub | Multi-tone serif headline (*The Lazy Leaf*), warm amber accents, subtle botanical emblem divider, instant 0ms visual rendering. |
| **Manifesto & Signature Sequence** | GSAP pinned desktop scrub + mobile tab stage | 4 core pillars (*COFFEE, FOOD, PEOPLE, TIME*) with non-overlapping transitions and a compact mobile matrix reducing scroll depth by 70%. |
| **Stay for a While** | Spatial Time Journal & Botanical Climax | Interactive time-dial filters (`08:30 AM`, `11:45 AM`, `07:30 PM`), 3-column moments grid, and a full-width panoramic twilight sanctuary climax card. |
| **Our Story Chapters** | Horizontal pinned scroll scrub | 3 chapters (*A Calm Sanctuary, The Honest Kitchen, The Shared Table*) featuring bespoke high-resolution interior and gastronomy photography. |
| **Gastronomy & Menu** | Interactive category showcase | 7 distinct gastronomy categories (`Coffee`, `Bites`, `Pizza`, `Pasta`, `Asian`, `South Indian`, `Desserts`) with matching fine-art photography. |
| **Fullscreen Menu Modal** | Isolated scroll layer | Smooth independent native scrolling (`wheel`/`touch` event isolation), high-contrast typography, and direct WhatsApp order/inquiry integration. |
| **Visiting Guide & Hours** | Responsive 2-column guide | Location details (Commerce College Road, Talwandi), service hours, stylized vector coordinate map (`25.1396° N, 75.8344° E`), and instant action triggers. |
| **Guest Reflections** | Touch-enabled review carousel | Auto-cycling guest reviews with touch swipe, navigation controls, and star rating badges. |
| **Header & Drawer Nav** | Framer Motion letter choreography | Fluid hamburger drawer with staggered letter animation and smooth page-target transitions. |

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, React 18, Static Prerendering)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) with custom luxury color palette (`#0c0e0d`, `#c89c6c`, `#e8cda7`, `#8a9a86`)
- **Animation Suite**:
  - [GSAP 3.14](https://greensock.com/gsap/) & [ScrollTrigger](https://greensock.com/scrolltrigger/) for pinned scroll sequences and horizontal scrubbing
  - [Framer Motion 11](https://www.framer.com/motion/) for kinetic UI transitions, modals, and navigation letter choreography
  - [Locomotive Scroll 5](https://github.com/locomotivemtl/locomotive-scroll) for momentum-based smooth scrolling and parallax
- **SEO & Schema**: Full OpenGraph, Twitter Card metadata, and `CafeOrCoffeeShop` JSON-LD structured data for Kota local search optimization.

---

## 📂 Project Structure

```bash
Lazy_Leaf_Kota-demo-site/
├── app/
│   ├── globals.css         # Tailwind directives, custom typography & button classes
│   ├── layout.tsx          # Root layout with SEO metadata, theme colors & JSON-LD schema
│   └── page.tsx            # Home page composition with Locomotive Scroll lifecycle guards
├── components/
│   ├── About.tsx           # 3 Story chapters with GSAP horizontal pin scrub & custom photos
│   ├── Badge.tsx           # Rotating circular botanical badge
│   ├── Footer.tsx          # Closing brand footer with official logo & quick links
│   ├── Header.tsx          # Sticky glass navigation header
│   ├── Hero.tsx            # Cinematic hero with boxy scroll scaling & serif branding
│   ├── OpeningHours.tsx    # Visiting guide, hours, and stylized coordinate map
│   ├── Separator.tsx       # Botanical divider line
│   ├── SignatureSequence.tsx # 4-Pillar manifesto with desktop pinned scrub & mobile tabs
│   ├── StayForAWhile.tsx   # Interactive Spatial Time Journal & panoramic sanctuary card
│   ├── Testimonials.tsx    # Touch-enabled guest reflections carousel
│   ├── Menu/
│   │   ├── FullscreenMenuModal.tsx # Isolated scrollable full menu with WhatsApp CTA
│   │   └── Menu.tsx        # Interactive category showcase with dedicated photo canvases
│   └── Nav/
│       ├── Nav.tsx         # Fullscreen mobile navigation overlay
│       └── NavList.tsx     # Framer Motion animated nav links
├── data/
│   └── menuCategories.ts   # Complete structured menu items & category image mappings
├── public/
│   ├── apple-touch-icon.png # 180x180 Apple touch icon
│   ├── favicon.ico         # Multi-size official favicon
│   ├── hero-bg.jpg         # High-resolution hero background
│   ├── icon.png            # 512x512 App icon
│   └── assets/
│       ├── about/          # Chapter photography (sanctuary, kitchen, community)
│       ├── menu/           # Category photography (coffee, bites, pizza, pasta, asian, etc.)
│       ├── moments/        # Time journal photography (morning, work, date, noreason)
│       └── signature/      # Pillar photography (coffee, food, people, time)
├── next.config.mjs         # Image formats, dev stability configuration
├── tailwind.config.ts      # Custom theme colors, typography, and viewport screens
└── tsconfig.json           # TypeScript path mappings (@/*)
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.x or higher
- **npm** (or yarn, pnpm)

### Installation & Local Development

1. **Clone or navigate to the repository:**
   ```bash
   cd Lazy_Leaf_Kota-demo-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   ```
   http://localhost:3000
   ```

---

## 📦 Build & Production Verification

Run the production build pipeline to verify type validity and static prerendering:

```bash
# Run ESLint check
npm run lint

# Build production bundle
npm run build

# Start production server
npm run start
```

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
