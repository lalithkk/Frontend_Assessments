# PalmRekha — Complete Website Redesign
AI-Powered Palm Reading · React + Tailwind + Framer Motion

---

## 🗂️ Folder Structure

```
palmrekha/
├── index.html                   ← Vite HTML entry, Google Fonts loaded here
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
│
└── src/
    ├── main.jsx                 ← ReactDOM.createRoot entry
    ├── App.jsx                  ← Layout shell: Navbar + all sections
    ├── index.css                ← Global styles, custom cursor, animations
    │
    ├── components/
    │   ├── Navbar.jsx           ← Sticky transparent→frosted nav with mobile menu
    │   └── CustomCursor.jsx     ← Gold custom cursor + trailing ring
    │
    ├── hooks/
    │   └── useReveal.js         ← IntersectionObserver scroll-reveal hook
    │
    └── sections/
        ├── Hero.jsx             ← Full-screen hero with animated SVG palm
        ├── Upload.jsx           ← Two-panel palm upload form
        ├── PalmLines.jsx        ← Interactive 6-line explorer
        ├── HowItWorks.jsx       ← 3-step process cards
        ├── Stats.jsx            ← Animated counter statistics
        ├── Testimonials.jsx     ← Featured review + selector grid
        ├── FAQ.jsx              ← Accordion FAQ with sticky left panel
        └── Footer.jsx           ← CTA banner + footer links
```

---

## ⚙️ Environment Setup

### Prerequisites
- Node.js ≥ 18.x
- npm ≥ 9.x (or yarn/pnpm)

### 1. Create project
```bash
mkdir palmrekha && cd palmrekha
```

### 2. Copy all files from this repository into the folder

### 3. Install dependencies
```bash
npm install
```

### 4. Start dev server
```bash
npm run dev
```
Open http://localhost:5173

### 5. Build for production
```bash
npm run build
# Output in /dist folder
```

### 6. Preview production build
```bash
npm run preview
```

---

## 📦 Dependencies

| Package | Purpose |
|---|---|
| react + react-dom | UI framework |
| framer-motion | Animations, scroll effects, page transitions |
| tailwindcss | Utility CSS system |
| vite | Dev server + build tool |
| react-intersection-observer | Scroll triggers (via custom hook) |

---

## 🎨 Design System

### Color Palette
| Token | Hex | Use |
|---|---|---|
| `--ink` | `#0D0A0B` | Background |
| `--cream` | `#F5F0E8` | Primary text |
| `--gold` | `#C9A84C` | Accent, CTAs, highlights |
| `--gold-light` | `#E8D5A3` | Gradient end, hover |
| `--mist` | `#A8B4BC` | Secondary text |

### Typography
- **Display/Headings**: Cormorant Garamond (serif, thin weight)
- **Body**: DM Sans (humanist, clean)
- **Labels/Tags**: DM Mono (monospace, uppercase)

---

## 🏗️ Key Features Built

### Animations & Interactions
- Custom gold cursor with trailing ring (desktop only)
- Hero: staggered text reveal + floating palm SVG with animated line draw
- Scroll-triggered reveal for every section (opacity + translateY)
- Animated stat counters (count up from 0 on scroll into view)
- Framer Motion exit/enter transitions on testimonials and palm line detail
- Shimmer hover effect on upload cards and step cards
- CSS palm line draw animation using stroke-dashoffset

### Sections
1. **Hero** — Full-screen with starfield background, parallax scroll, social proof
2. **Upload** — Clean two-panel image uploader with trust badges
3. **Palm Lines** — Interactive 6-line accordion with live palm preview
4. **How It Works** — 3-step card grid with decorative large numbers
5. **Stats** — 4-column animated counter bar
6. **Testimonials** — Featured quote + clickable reviewer selector
7. **FAQ** — Accordion with sticky left description panel
8. **Footer** — CTA banner with glow + links

### Responsive
- Mobile: single column hero, hidden desktop nav, stacked grids
- Tablet: 2-column grids
- Desktop: full 2-column hero, 3/4 column layouts

---

## 🚀 Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag /dist folder to netlify.com/drop
```

### GitHub Pages
```bash
# Add to vite.config.js: base: '/palmrekha/'
npm run build
# Push /dist to gh-pages branch
```
