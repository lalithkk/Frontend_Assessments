import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

const steps = [
  {
    num: '01',
    title: 'Capture & Upload',
    desc: 'Take a clear photo of both palms in good light — natural or bright indoor. Upload directly from your camera or gallery.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="6" y="8" width="28" height="22" rx="2"/>
        <circle cx="20" cy="19" r="5"/>
        <path d="M16 8 L18 5 L22 5 L24 8"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Rekha Analysis',
    desc: 'Our AI maps 80+ palm markers — major lines, mounts, and minor markings — cross-referenced with classical palmistry texts.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="20" cy="20" r="12"/>
        <path d="M20 8 L20 20 L28 20"/>
        <circle cx="20" cy="20" r="2" fill="currentColor"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Your Life Blueprint',
    desc: 'Receive a personalised report on personality, relationships, career, and destiny — then ask Rekha anything in a live AI chat.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M8 12 L32 12 M8 20 L26 20 M8 28 L22 28"/>
        <circle cx="32" cy="26" r="5"/>
        <path d="M30 26 L31 27 L34 24"/>
      </svg>
    ),
  },
]

export default function HowItWorks() {
  const [ref, visible] = useReveal(0.1)

  return (
    <section id="how" className="py-32 relative" ref={ref}>
      {/* Decorative vertical line */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-px pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.1), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-gold text-xs tracking-[0.25em] font-mono mb-4">THE PROCESS</p>
          <h2 className="text-4xl md:text-6xl font-light" style={{ fontFamily: 'Cormorant Garamond' }}>
            Three steps to<br />
            <em className="gold-text italic">your destiny</em>
          </h2>
          <p className="text-mist/60 mt-4">
            From photo to full life blueprint — in under a minute.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div
            className="hidden md:block absolute top-20 left-1/6 right-1/6 h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.2), rgba(201,168,76,0.2), transparent)' }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group"
            >
              <div
                className="border border-gold/10 hover:border-gold/30 p-8 h-full transition-all duration-500 relative overflow-hidden"
                style={{ background: 'rgba(201,168,76,0.02)' }}
              >
                <div className="shimmer-bg absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Number */}
                <span
                  className="text-7xl font-light absolute -top-4 -right-2 leading-none select-none pointer-events-none"
                  style={{
                    fontFamily: 'Cormorant Garamond',
                    color: 'rgba(201,168,76,0.06)',
                  }}
                >
                  {step.num}
                </span>

                {/* Icon */}
                <div className="text-gold mb-6 relative z-10">{step.icon}</div>

                {/* Step num badge */}
                <p className="text-gold text-xs font-mono tracking-widest mb-3 relative z-10">{step.num}</p>

                <h3
                  className="text-2xl font-light mb-4 relative z-10"
                  style={{ fontFamily: 'Cormorant Garamond' }}
                >
                  {step.title}
                </h3>
                <p className="text-mist/60 text-sm leading-relaxed font-light relative z-10">{step.desc}</p>

                {/* Step connector dot */}
                <div
                  className="mt-8 w-2 h-2 border border-gold/40 rounded-full relative z-10"
                  style={{ background: 'rgba(201,168,76,0.2)' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#upload"
            className="inline-flex items-center gap-3 px-8 py-4 text-ink font-medium tracking-wide"
            style={{
              background: 'linear-gradient(135deg, #C9A84C, #E8D5A3)',
              clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
            }}
          >
            Begin Your Reading ✦
          </a>
          <p className="text-mist/30 text-xs font-mono mt-4 tracking-wide">
            NO ACCOUNT · NO SUBSCRIPTION · INSTANT RESULTS
          </p>
        </motion.div>
      </div>
    </section>
  )
}
