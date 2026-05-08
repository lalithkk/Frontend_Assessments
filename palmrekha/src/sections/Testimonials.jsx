import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

const reviews = [
  {
    initials: 'RS',
    name: 'Rohit Sharma',
    location: 'Pune · April 2026',
    stars: 5,
    text: '"The heart line reading described my relationship patterns so precisely — things I had never articulated to anyone."',
  },
  {
    initials: 'MV',
    name: 'Megha Verma',
    location: 'Jaipur · March 2026',
    stars: 5,
    text: '"The insights about my thinking style made me reflect on patterns I hadn\'t noticed. Genuinely useful and surprisingly deep."',
  },
  {
    initials: 'DK',
    name: 'Dr. Kavita Iyer',
    location: 'Chennai · March 2026',
    stars: 5,
    text: '"As a doctor, I appreciate thoughtful interpretation. The depth and accuracy genuinely impressed me — I wasn\'t expecting this."',
  },
  {
    initials: 'SK',
    name: 'Sneha Kulkarni',
    location: 'Nagpur · April 2026',
    stars: 5,
    text: '"I shared my results on WhatsApp and my whole family was amazed at the accuracy. Now everyone wants to try it!"',
  },
  {
    initials: 'AN',
    name: 'Arjun Nair',
    location: 'Bangalore · Feb 2026',
    stars: 4,
    text: '"The fate line reading was spot on about my career shift last year. I finally felt like something made sense about that period."',
  },
  {
    initials: 'PM',
    name: 'Priya Menon',
    location: 'Mumbai · April 2026',
    stars: 5,
    text: '"Never believed in palmistry until this. The reading was surprisingly accurate and made me see my life differently."',
  },
]

function StarRow({ count }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ color: i <= count ? '#C9A84C' : 'rgba(201,168,76,0.2)', fontSize: 12 }}>★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [ref, visible] = useReveal(0.1)
  const [active, setActive] = useState(0)

  return (
    <section id="reviews" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-xs tracking-[0.25em] font-mono mb-4">REAL EXPERIENCES</p>
          <h2 className="text-4xl md:text-6xl font-light" style={{ fontFamily: 'Cormorant Garamond' }}>
            Thousands have<br />
            <em className="gold-text italic">found their path.</em>
          </h2>
        </motion.div>

        {/* Featured review */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <p
                className="text-3xl md:text-4xl font-light leading-relaxed text-cream/90 italic mb-8"
                style={{ fontFamily: 'Cormorant Garamond' }}
              >
                {reviews[active].text}
              </p>
              <div className="flex items-center justify-center gap-4">
                <div
                  className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-sm font-mono text-gold"
                  style={{ background: 'rgba(201,168,76,0.08)' }}
                >
                  {reviews[active].initials}
                </div>
                <div className="text-left">
                  <p className="text-cream text-sm font-medium">{reviews[active].name}</p>
                  <p className="text-mist/50 text-xs">{reviews[active].location}</p>
                </div>
                <StarRow count={reviews[active].stars} />
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Review selector grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {reviews.map((r, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
              onClick={() => setActive(i)}
              className={`text-left p-4 border transition-all duration-300 ${
                active === i
                  ? 'border-gold/50 bg-gold/8'
                  : 'border-gold/10 hover:border-gold/25'
              }`}
              style={{ background: active === i ? 'rgba(201,168,76,0.06)' : 'transparent' }}
            >
              <StarRow count={r.stars} />
              <div className="flex items-center gap-2 mt-3">
                <div
                  className="w-7 h-7 rounded-full border border-gold/20 flex items-center justify-center text-xs font-mono shrink-0"
                  style={{ color: '#C9A84C', background: 'rgba(201,168,76,0.08)' }}
                >
                  {r.initials}
                </div>
                <div>
                  <p className="text-cream text-xs font-medium leading-tight">{r.name.split(' ')[0]}</p>
                  <p className="text-mist/40 text-xs">{r.location.split('·')[0].trim()}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
