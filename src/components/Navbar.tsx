import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('about')
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1800)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: '-40% 0px -40% 0px' }
    )

    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <AnimatePresence>
        {show && (
          <motion.ul
            className="flex items-center gap-0.5 rounded-full bg-stone-900/80 backdrop-blur-xl px-2 py-2 shadow-2xl shadow-stone-900/30 border border-white/5"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          >
            {links.map((l) => (
              <li key={l.id} className="relative">
                {active === l.id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-full bg-white/[0.12]"
                    transition={{
                      type: 'spring',
                      damping: 25,
                      stiffness: 350,
                    }}
                  />
                )}
                <a
                  href={`#${l.id}`}
                  className={`relative block rounded-full px-3.5 py-2 text-xs font-medium transition-colors sm:text-sm sm:px-4 sm:py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
                    active === l.id
                      ? 'text-white'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  )
}
