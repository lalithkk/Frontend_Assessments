import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Upload from './sections/Upload'
import PalmLines from './sections/PalmLines'
import HowItWorks from './sections/HowItWorks'
import Stats from './sections/Stats'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import Footer from './sections/Footer'
import CustomCursor from './components/CustomCursor'

export default function App() {
  return (
    <div className="noise relative bg-ink min-h-screen">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Upload />
        <PalmLines />
        <HowItWorks />
        <Stats />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
