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
