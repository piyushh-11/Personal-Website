import { useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import GrainOverlay from './components/GrainOverlay'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="min-h-screen bg-paper text-stone-900 font-sans antialiased">
        <GrainOverlay />
        <Navbar />
        <main id="main-content">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </MotionConfig>
  )
}
