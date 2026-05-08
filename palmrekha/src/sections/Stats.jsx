import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

function CountUp({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const [ref, visible] = useReveal(0.3)

  useEffect(() => {
    if (visible && !started) {
      setStarted(true)
      const startTime = Date.now()
      const tick = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(eased * end))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }
  }, [visible, started, end, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const stats = [
  { value: 10000, suffix: '+', label: 'Readings Done', sublabel: 'Across India & beyond' },
  { value: 4.9, suffix: '★', label: 'Average Rating', sublabel: 'User satisfaction score', isDecimal: true },
  { value: 98, suffix: '%', label: 'Personally Relevant', sublabel: 'Users report accuracy' },
  { value: 80, suffix: '+', label: 'Palm Markers', sublabel: 'Analysed per reading' },
]

export default function Stats() {
  const [ref, visible] = useReveal(0.1)

  return (
    <section className="py-24 relative" ref={ref}>
      {/* Full-width gold line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative text-center py-12 px-6 group"
              style={{
                borderRight: i < 3 ? '1px solid rgba(201,168,76,0.1)' : 'none',
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.05) 0%, transparent 70%)' }}
              />

              <p
                className="text-5xl md:text-6xl font-light gold-text mb-2 relative"
                style={{ fontFamily: 'Cormorant Garamond' }}
              >
                {stat.isDecimal ? (
                  <>4.9{stat.suffix}</>
                ) : (
                  <CountUp end={stat.value} suffix={stat.suffix} />
                )}
              </p>
              <p className="text-cream text-sm font-medium">{stat.label}</p>
              <p className="text-mist/40 text-xs mt-1 font-mono">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-width gold line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  )
}
