import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const STARS = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: 2 + Math.random() * 4,
  delay: Math.random() * 4,
  size: Math.random() > 0.8 ? 2 : 1,
}))

function PalmSVG() {
  return (
    <svg viewBox="0 0 300 400" className="w-full h-full" fill="none">
      {/* Palm background glow */}
      <defs>
        <radialGradient id="palmGlow" cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <ellipse cx="150" cy="220" rx="140" ry="180" fill="url(#palmGlow)" />

      {/* Palm outline */}
      <path
        d="M80,360 C60,340 50,300 55,250 C58,220 65,190 70,160 C72,145 70,130 75,118 C80,106 95,100 105,108 C108,110 110,115 110,125 C110,115 112,100 120,94 C128,88 140,90 145,100 C148,92 155,84 165,84 C175,84 183,92 185,102 C188,94 196,88 206,90 C216,92 222,102 220,115 C220,105 224,96 232,95 C242,94 250,104 248,118 C248,180 255,220 252,260 C248,310 230,355 200,370 Z"
        stroke="#C9A84C"
        strokeWidth="1"
        strokeOpacity="0.3"
        fill="rgba(201,168,76,0.04)"
      />

      {/* Heart Line */}
      <path
        d="M70,155 C90,148 110,145 130,148 C155,152 175,148 205,140"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        filter="url(#glow)"
        className="palm-line"
        style={{ animationDelay: '0.2s' }}
      />

      {/* Head Line */}
      <path
        d="M75,195 C95,188 120,185 145,188 C170,191 195,185 220,178"
        stroke="#E8D5A3"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        filter="url(#glow)"
        className="palm-line"
        style={{ animationDelay: '0.6s' }}
      />

      {/* Life Line */}
      <path
        d="M125,110 C115,140 105,175 100,210 C95,245 95,275 100,310 C103,330 108,348 115,360"
        stroke="#A8B4BC"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        filter="url(#glow)"
        className="palm-line"
        style={{ animationDelay: '1s' }}
      />

      {/* Fate Line */}
      <path
        d="M155,340 C153,310 150,275 150,240 C150,210 152,175 155,150"
        stroke="#C9A84C"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="4,4"
        fill="none"
        className="palm-line"
        style={{ animationDelay: '1.4s' }}
      />

      {/* Floating labels */}
      <g opacity="0.7">
        <line x1="205" y1="140" x2="240" y2="128" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.5"/>
        <text x="242" y="126" fill="#C9A84C" fontSize="8" fontFamily="DM Mono">Heart</text>

        <line x1="220" y1="178" x2="240" y2="170" stroke="#E8D5A3" strokeWidth="0.5" strokeOpacity="0.5"/>
        <text x="242" y="168" fill="#E8D5A3" fontSize="8" fontFamily="DM Mono">Head</text>

        <line x1="100" y1="240" x2="50" y2="235" stroke="#A8B4BC" strokeWidth="0.5" strokeOpacity="0.5"/>
        <text x="8" y="233" fill="#A8B4BC" fontSize="8" fontFamily="DM Mono">Life</text>
      </g>

      {/* Scan line animation */}
      <line x1="60" y1="280" x2="245" y2="280" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.6">
        <animateTransform attributeName="transform" type="translate" values="0,-150;0,50;0,-150" dur="4s" repeatCount="indefinite"/>
      </line>

      {/* Accuracy badge */}
      <g transform="translate(22, 30)">
        <rect x="0" y="0" width="60" height="28" rx="4" fill="rgba(201,168,76,0.1)" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.4"/>
        <text x="30" y="12" fill="#C9A84C" fontSize="8" fontFamily="DM Mono" textAnchor="middle">98%</text>
        <text x="30" y="22" fill="#A8B4BC" fontSize="6" fontFamily="DM Mono" textAnchor="middle">ACCURACY</text>
      </g>
    </svg>
  )
}

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Star field */}
      <div className="stars">
        {STARS.map(s => (
          <div
            key={s.id}
            className="star"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              '--duration': `${s.duration}s`,
              '--delay': `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 70% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div style={{ y, opacity }} className="relative z-10">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <span className="text-gold text-xs tracking-[0.25em] font-mono">ANCIENT WISDOM</span>
            <span className="h-px w-8 bg-gold opacity-50" />
            <span className="text-mist text-xs tracking-[0.25em] font-mono">MODERN INTELLIGENCE</span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h1
              className="text-5xl md:text-7xl font-light leading-[1.1] mb-2"
              style={{ fontFamily: 'Cormorant Garamond' }}
            >
              Your hands
            </h1>
            <h1
              className="text-5xl md:text-7xl font-light leading-[1.1] mb-2 italic"
              style={{ fontFamily: 'Cormorant Garamond' }}
            >
              <span className="gold-text">hold a story</span>
            </h1>
            <h1
              className="text-5xl md:text-7xl font-light leading-[1.1]"
              style={{ fontFamily: 'Cormorant Garamond' }}
            >
              only they can tell.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-mist/70 mt-8 mb-10 text-lg leading-relaxed font-light max-w-md"
          >
            PalmRekha reads what your hands have always known — your nature, your path, and what the lines reveal about what's ahead.
          </motion.p>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="flex -space-x-2">
              {['RS', 'MV', 'DK', 'AN'].map((initials, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-xs font-mono text-gold"
                  style={{ background: `rgba(201,168,76,${0.05 + i * 0.03})` }}
                >
                  {initials}
                </div>
              ))}
            </div>
            <div>
              <p className="text-cream text-sm font-medium">10,000+ readings done</p>
              <p className="text-gold text-xs tracking-wide">4.9★ rated</p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#upload"
              className="group relative px-8 py-4 overflow-hidden text-ink font-medium tracking-wide"
              style={{
                background: 'linear-gradient(135deg, #0B1F18, #E8D5A3)',
                clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
              }}
            >
              <span className="relative z-10">Start Your Reading →</span>
            </a>
            <a
              href="#lines"
              className="text-sm text-mist/70 hover:text-gold transition-colors tracking-wide border-b border-mist/20 hover:border-gold pb-0.5"
            >
              Explore palm lines
            </a>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-16 flex items-center gap-3 text-mist/40"
          >
            <div className="w-px h-10 bg-gradient-to-b from-transparent to-gold/40" />
            <span className="text-xs tracking-[0.2em] font-mono">SCROLL</span>
          </motion.div>
        </motion.div>

        {/* Right — Palm illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-96 md:w-80 md:h-[420px]">
            <div
              className="absolute inset-0 rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)' }}
            />
            <PalmSVG />
          </div>

          {/* Floating stat cards */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -right-4 bottom-24 px-4 py-3 border border-gold/20 backdrop-blur-sm"
            style={{ background: 'rgba(13,10,11,0.8)' }}
          >
            <p className="text-gold text-2xl font-light" style={{ fontFamily: 'Cormorant Garamond' }}>80+</p>
            <p className="text-mist/60 text-xs tracking-wide font-mono">PALM MARKERS</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
