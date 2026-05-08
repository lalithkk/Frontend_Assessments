import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const links = [
  { label: 'Upload Palm', href: '#upload' },
  { label: 'How It Works', href: '#how' },
  { label: 'Palm Lines', href: '#lines' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQs', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 backdrop-blur-md border-b border-gold/10'
          : 'py-6'
      }`}
      style={{ background: scrolled ? 'rgba(13,10,11,0.85)' : 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-gold text-xl" style={{ fontFamily: 'DM Mono' }}>⭐</span>
          <span
            className="text-cream font-light tracking-[0.15em] text-lg"
            style={{ fontFamily: 'Cormorant Garamond' }}
          >
          Hast<span className="gold-text font-medium">REKHA</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-mist text-sm tracking-wide hover:text-gold transition-colors duration-300 font-light"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#upload"
            className="relative px-5 py-2 text-sm text-ink font-medium tracking-wide overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #C9A84C, #E8D5A3)',
              clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
            }}
          >
            Begin Reading
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gold text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-ink/95 backdrop-blur-md border-t border-gold/10 px-6 py-6"
        >
          <div className="flex flex-col gap-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-mist text-base hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#upload"
              onClick={() => setMenuOpen(false)}
              className="text-ink text-center py-3 font-medium"
              style={{
                background: 'linear-gradient(135deg, #C9A84C, #E8D5A3)',
                clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
              }}
            >
              Begin Reading ✦
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
