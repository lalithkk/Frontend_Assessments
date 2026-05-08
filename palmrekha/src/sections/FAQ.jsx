import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

const faqs = [
  {
    q: 'How accurate is the reading?',
    a: 'PalmRekha analyses 80+ palm markers cross-referenced with classical palmistry texts. 98% of users report their reading feels personally relevant. Your results are unique to your palm — no two readings are ever the same.',
  },
  {
    q: 'What do I need for the reading?',
    a: 'A clear photo of both palms in good lighting, and your name. No account creation, no app download, no sign-up required.',
  },
  {
    q: 'How long does it take?',
    a: 'Your full reading appears within seconds. No waiting, no email delays — instant access as soon as analysis is complete.',
  },
  {
    q: 'Is my information kept private?',
    a: 'Absolutely. Palm images are encrypted end-to-end and used solely to generate your reading. We never sell or share your data with any third party.',
  },
  {
    q: 'What does the full reading include?',
    a: 'The complete reading covers personality, hand type, all major palm lines (life, head, heart, fate), thumb analysis, mounts, career, money, love, energy balance, growth phase, and personal guidance — plus 5 live AI chat questions with Rekha.',
  },
  {
    q: 'Can I download my reading?',
    a: 'Yes — a PDF download button appears on your results page after your reading is generated. Save it and revisit your insights anytime.',
  },
]

export default function FAQ() {
  const [ref, visible] = useReveal(0.1)
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-32 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:sticky md:top-24 self-start"
          >
            <p className="text-gold text-xs tracking-[0.25em] font-mono mb-4">QUESTIONS & ANSWERS</p>
            <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: 'Cormorant Garamond' }}>
              Everything you<br />
              <em className="gold-text italic">need to know.</em>
            </h2>
            <p className="text-mist/60 leading-relaxed mb-8 font-light">
              Still have questions? Write to us at{' '}
              <a href="mailto:info@palmrekha.com" className="text-gold hover:text-gold-light transition-colors">
                info@palmrekha.com
              </a>{' '}
              — we reply within 24 hours.
            </p>

            {/* Accuracy badge */}
            <div className="inline-flex items-center gap-3 border border-gold/20 px-5 py-3"
              style={{ background: 'rgba(201,168,76,0.04)' }}>
              <span className="text-gold text-2xl font-light" style={{ fontFamily: 'Cormorant Garamond' }}>98%</span>
              <span className="text-mist/60 text-sm">Accuracy Rate</span>
            </div>
          </motion.div>

          {/* FAQ list */}
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="border-b border-gold/10 last:border-0"
              >
                <button
                  className="w-full flex items-center justify-between py-5 text-left group"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span
                    className={`text-base font-light transition-colors ${open === i ? 'text-gold' : 'text-cream/80 group-hover:text-cream'}`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`text-gold text-lg ml-4 shrink-0 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-mist/60 pb-5 leading-relaxed font-light text-sm">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
