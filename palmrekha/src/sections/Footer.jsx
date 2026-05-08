import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

export default function Footer() {
  const [ref, visible] = useReveal(0.1)

  return (
    <footer ref={ref}>
      {/* CTA Banner */}
      <div
        className="relative py-32 overflow-hidden text-center"
        style={{
          background: 'linear-gradient(180deg, #0D0A0B 0%, #1a1208 50%, #0D0A0B 100%)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto px-6"
        >
          <p className="text-gold text-xs tracking-[0.3em] font-mono mb-8">
            {`{ 1 reading done today — yours takes under 60 seconds }`}
          </p>
          <h2
            className="text-5xl md:text-7xl font-light leading-tight mb-12"
            style={{ fontFamily: 'Cormorant Garamond' }}
          >
            Your destiny is{' '}
            <em className="gold-text italic">written</em>
            <br />in your palms.
          </h2>
          <a
            href="#upload"
            className="inline-block px-10 py-5 text-ink font-medium tracking-wider text-lg"
            style={{
              background: 'linear-gradient(135deg, #C9A84C, #E8D5A3)',
              clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
            }}
          >
            Read My Palm Now ✦
          </a>
        </motion.div>
      </div>

      {/* Footer links */}
      <div
        className="border-t border-gold/10 py-16"
        style={{ background: '#080606' }}
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gold text-xl" style={{ fontFamily: 'DM Mono' }}>✦</span>
              <span
                className="text-cream font-light tracking-[0.15em] text-lg"
                style={{ fontFamily: 'Cormorant Garamond' }}
              >
                PALM<span className="gold-text font-medium">REKHA</span>
              </span>
            </div>
            <p className="text-mist/40 text-sm leading-relaxed font-light max-w-xs">
              Ancient wisdom decoded by modern intelligence. Every line tells a story only you can live.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-mist/40 text-xs tracking-widest font-mono mb-5">NAVIGATE</p>
            <div className="space-y-3">
              {['Upload Palm', 'How It Works', 'Palm Lines', 'Testimonials', 'FAQs'].map(l => (
                <a key={l} href="#" className="block text-mist/60 text-sm hover:text-gold transition-colors font-light">
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-mist/40 text-xs tracking-widest font-mono mb-5">CONTACT</p>
            <div className="space-y-3">
              <a href="mailto:info@palmrekha.com" className="block text-mist/60 text-sm hover:text-gold transition-colors font-light">
                info@palmrekha.com
              </a>
            </div>
            <div className="mt-6 space-y-2">
              <p className="text-mist/40 text-xs tracking-widest font-mono">LEGAL</p>
              {['Terms & Conditions', 'Privacy Policy'].map(l => (
                <a key={l} href="#" className="block text-mist/60 text-xs hover:text-gold transition-colors font-light">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gold/5 flex flex-wrap justify-between items-center gap-4">
          <p className="text-mist/30 text-xs font-mono">
            © 2026 PalmRekha. All rights reserved.
          </p>
          <p className="text-mist/20 text-xs">
            Made with ✦ for seekers everywhere.
          </p>
        </div>
      </div>
    </footer>
  )
}
