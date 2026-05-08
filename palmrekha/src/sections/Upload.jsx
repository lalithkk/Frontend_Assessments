import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

function UploadCard({ side, label, sublabel, onFile, preview }) {
  const inputRef = useRef(null)

  return (
    <div className="flex-1">
      <div className="text-center mb-3">
        <p className="text-cream text-sm font-medium">{side} Palm</p>
        <p className="text-mist/50 text-xs font-mono">{sublabel}</p>
      </div>
      <div
        onClick={() => inputRef.current?.click()}
        className="relative border border-gold/20 hover:border-gold/50 transition-all duration-300 cursor-pointer group overflow-hidden"
        style={{ minHeight: 200, background: 'rgba(201,168,76,0.03)' }}
      >
        {preview ? (
          <img src={preview} alt="palm" className="w-full h-full object-cover" style={{ minHeight: 200 }} />
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 p-8 h-full" style={{ minHeight: 200 }}>
            <div
              className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold/60 transition-all"
              style={{ background: 'rgba(201,168,76,0.06)' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
                <path d="M12 16V8M8 12l4-4 4 4"/>
                <rect x="3" y="3" width="18" height="18" rx="2"/>
              </svg>
            </div>
            <div className="text-center">
              <p className="text-mist/70 text-sm">{label}</p>
              <p className="text-mist/30 text-xs mt-1 font-mono">TAP TO UPLOAD</p>
            </div>
          </div>
        )}
        <div className="shimmer-bg absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" />
        <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={e => onFile(e.target.files[0])} />
      </div>
    </div>
  )
}

export default function Upload() {
  const [ref, visible] = useReveal(0.1)
  const [leftPreview, setLeftPreview] = useState(null)
  const [rightPreview, setRightPreview] = useState(null)
  const [name, setName] = useState('')

  const handleFile = (side, file) => {
    if (!file) return
    const url = URL.createObjectURL(file)
    if (side === 'left') setLeftPreview(url)
    else setRightPreview(url)
  }

  return (
    <section id="upload" className="py-32 relative" ref={ref}>
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-xs tracking-[0.25em] font-mono mb-4">YOUR JOURNEY STARTS HERE</p>
          <h2 className="text-4xl md:text-6xl font-light" style={{ fontFamily: 'Cormorant Garamond' }}>
            Get Your <em className="gold-text italic">Personalised</em>
            <br />Palm Reading
          </h2>
          <p className="text-mist/60 mt-4 max-w-lg mx-auto leading-relaxed">
            Upload both palms. Our AI, trained on centuries of palmistry tradition, reads your personality, path, and what lies ahead.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {/* Step indicator */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-gold text-xs font-mono tracking-widest">✦ STEP 1 OF 2 — UPLOAD YOUR PALMS</span>
          </div>

          {/* Name input */}
          <div className="mb-6">
            <label className="text-mist/60 text-xs font-mono tracking-wide block mb-2">YOUR NAME</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter your name..."
              className="w-full bg-transparent border border-gold/20 text-cream placeholder-mist/30 px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors font-light"
            />
          </div>

          {/* Upload cards */}
          <div className="flex gap-4 mb-8">
            <UploadCard
              side="Left"
              label="Innate traits & potential"
              sublabel="INNATE TRAITS"
              preview={leftPreview}
              onFile={f => handleFile('left', f)}
            />
            <UploadCard
              side="Right"
              label="Current path & destiny"
              sublabel="CHOSEN PATH"
              preview={rightPreview}
              onFile={f => handleFile('right', f)}
            />
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {[
              { icon: '🔒', label: 'End-to-end encrypted' },
              { icon: '⚡', label: 'Results in seconds' },
              { icon: '✓', label: 'No sign-up required' },
            ].map(b => (
              <div key={b.label} className="flex items-center gap-2 text-mist/50 text-xs">
                <span>{b.icon}</span>
                <span className="font-mono">{b.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-5 text-ink font-medium tracking-wider text-lg relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #C9A84C, #E8D5A3)',
              clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
            }}
          >
            Analyse My Destiny ✦
          </motion.button>

          <p className="text-center text-mist/30 text-xs mt-4 font-mono">
            INSTANT · NO SUBSCRIPTION · NO ACCOUNT NEEDED
          </p>
        </motion.div>
      </div>

      {/* Bottom border gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  )
}
