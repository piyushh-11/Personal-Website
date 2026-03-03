import Navbar from './components/Navbar'
import GrainOverlay from './components/GrainOverlay'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-stone-900 font-sans antialiased">
      <GrainOverlay />
      <Navbar />
      <main>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
