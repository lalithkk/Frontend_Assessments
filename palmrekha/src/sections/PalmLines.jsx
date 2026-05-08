import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

const lines = [
  {
    num: '01',
    name: 'Heart Line',
    tag: 'Emotional Depth',
    desc: 'Reveals your capacity for love, emotional resilience, and the patterns that shape your most intimate relationships.',
    color: '#C9A84C',
    path: 'M10,50 C30,35 55,30 80,35',
  },
  {
    num: '02',
    name: 'Life Line',
    tag: 'Vital Energy',
    desc: 'Reflects the quality and richness of your life journey — vitality, physical strength, and your key turning points.',
    color: '#E8D5A3',
    path: 'M45,10 C35,30 25,55 25,80',
  },
  {
    num: '03',
    name: 'Head Line',
    tag: 'Mental Clarity',
    desc: 'Governs how you think, decide, and process the world — your intellectual style and natural depth of focus.',
    color: '#A8B4BC',
    path: 'M12,45 C35,40 60,42 85,38',
  },
  {
    num: '04',
    name: 'Fate Line',
    tag: 'Destined Path',
    desc: 'Shows how strongly external forces and destiny shape your career choices and overall life direction.',
    color: '#C9A84C',
    path: 'M50,90 C48,65 48,40 50,15',
    dashed: true,
  },
  {
    num: '05',
    name: 'Apollo Line',
    tag: 'Creative Fulfilment',
    desc: 'Reveals your potential for recognition, creative achievement, and satisfaction in your chosen calling.',
    color: '#E8D5A3',
    path: 'M65,85 C64,65 63,45 62,25',
    dashed: true,
  },
  {
    num: '06',
    name: 'Mercury Line',
    tag: 'Intuition & Acumen',
    desc: 'Governs your business instincts, intuitive gifts, and the subtle art of reading what others leave unsaid.',
    color: '#A8B4BC',
    path: 'M72,80 C75,60 77,45 78,28',
    dashed: true,
  },
]

export default function PalmLines() {
  const [ref, visible] = useReveal(0.1)
  const [active, setActive] = useState(0)

  return (
    <section id="lines" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-gold text-xs tracking-[0.25em] font-mono mb-4">TRADITIONAL WISDOM</p>
          <h2 className="text-4xl md:text-6xl font-light" style={{ fontFamily: 'Cormorant Garamond' }}>
            The Six Lines of<br />
            <em className="gold-text italic">Your Destiny</em>
          </h2>
          <p className="text-mist/60 mt-4 max-w-md">
            Every hand is a unique cosmic blueprint. Each Rekha reveals a different chapter of your life's story.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Line cards */}
          <div className="space-y-3">
            {lines.map((line, i) => (
              <motion.div
                key={line.num}
                initial={{ opacity: 0, x: -30 }}
                animate={visible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                onClick={() => setActive(i)}
                className={`group cursor-pointer border transition-all duration-300 ${
                  active === i
                    ? 'border-gold/40 bg-gold/5'
                    : 'border-gold/10 hover:border-gold/25 bg-transparent'
                }`}
              >
                <div className="flex items-start gap-5 p-5">
                  <span
                    className="text-xs font-mono mt-1 shrink-0"
                    style={{ color: active === i ? line.color : 'rgba(168,180,188,0.4)' }}
                  >
                    {line.num}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3">
                      <h3
                        className="font-light text-lg transition-colors"
                        style={{
                          fontFamily: 'Cormorant Garamond',
                          color: active === i ? line.color : '#F5F0E8',
                        }}
                      >
                        {line.name}
                      </h3>
                      <span className="text-mist/40 text-xs italic">
                        {line.tag}
                      </span>
                    </div>
                    <AnimatePresence>
                      {active === i && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-mist/60 text-sm mt-2 leading-relaxed font-light"
                        >
                          {line.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <svg
                    viewBox="0 0 100 100"
                    width="48"
                    height="48"
                    className="shrink-0 mt-1"
                    fill="none"
                  >
                    <path
                      d={line.path}
                      stroke={active === i ? line.color : 'rgba(168,180,188,0.2)'}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray={line.dashed ? '4,4' : 'none'}
                      style={{ transition: 'stroke 0.3s ease' }}
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active detail panel + palm viz */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="sticky top-24"
          >
            <div className="border border-gold/15 p-8" style={{ background: 'rgba(201,168,76,0.03)' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-xs font-mono tracking-widest mb-3" style={{ color: lines[active].color }}>
                    {lines[active].num} · {lines[active].tag.toUpperCase()}
                  </p>
                  <h3
                    className="text-4xl font-light mb-4 italic"
                    style={{ fontFamily: 'Cormorant Garamond', color: lines[active].color }}
                  >
                    {lines[active].name}
                  </h3>
                  <p className="text-mist/70 leading-relaxed font-light">
                    {lines[active].desc}
                  </p>

                  <div className="mt-8 h-px w-full bg-gradient-to-r from-gold/20 to-transparent" />

                  <div className="mt-8 flex justify-center">
                    <svg viewBox="0 0 200 220" width="180" height="200" fill="none">
                      <path
                        d="M55,200 C40,185 35,155 38,125 C40,105 48,85 52,70 C54,60 52,48 56,40 C60,32 72,28 78,34 C82,36 83,42 82,52 C83,44 85,34 91,30 C97,26 106,28 108,36 C110,28 116,22 123,22 C130,22 136,28 137,36 C139,28 146,22 153,24 C160,26 164,34 162,44 C164,36 169,30 175,30 C181,30 185,38 184,48 C184,90 190,115 188,145 C185,170 172,195 154,205 Z"
                        stroke={lines[active].color}
                        strokeWidth="1"
                        strokeOpacity="0.4"
                        fill="rgba(201,168,76,0.03)"
                      />
                      {/* Highlight the selected line */}
                      {active === 0 && <path d="M50,85 C68,78 88,75 110,78 C132,81 152,76 175,70" stroke={lines[0].color} strokeWidth="2" strokeLinecap="round" filter="url(#lineGlow)"/>}
                      {active === 1 && <path d="M92,42 C84,65 76,90 74,115 C72,140 74,165 78,185" stroke={lines[1].color} strokeWidth="2" strokeLinecap="round"/>}
                      {active === 2 && <path d="M52,108 C72,103 95,100 118,102 C140,104 162,98 182,92" stroke={lines[2].color} strokeWidth="2" strokeLinecap="round"/>}
                      {active === 3 && <path d="M108,190 C107,165 106,135 106,110 C106,85 107,60 108,40" stroke={lines[3].color} strokeWidth="1.5" strokeDasharray="4,4"/>}
                      {active === 4 && <path d="M125,185 C124,160 123,135 122,110 C121,88 121,65 122,45" stroke={lines[4].color} strokeWidth="1.5" strokeDasharray="4,4"/>}
                      {active === 5 && <path d="M140,178 C142,155 143,130 144,108 C145,88 145,68 144,50" stroke={lines[5].color} strokeWidth="1.5" strokeDasharray="4,4"/>}
                    </svg>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
