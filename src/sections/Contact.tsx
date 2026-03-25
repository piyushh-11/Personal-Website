import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { contact } from '../data/portfolio'

function AnimatedEmail({ email }: { email: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={`mailto:${email}`}
      className="inline-block cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {email.split('').map((char, i) => (
        <motion.span
          key={i}
          className="inline-block font-display text-3xl sm:text-5xl lg:text-6xl text-accent"
          animate={
            hovered
              ? {
                  y: [0, -6, 0],
                  transition: {
                    duration: 0.4,
                    delay: i * 0.02,
                    ease: 'easeInOut',
                  },
                }
              : { y: 0 }
          }
        >
          {char}
        </motion.span>
      ))}
    </a>
  )
}

export default function Contact() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' })

  return (
    <section
      id="contact"
      className="relative bg-stone-900 text-white py-32 pb-26 px-6 md:px-12 lg:px-24 rounded-t-[2.5rem] mt-16 overflow-hidden"
    >
      {/* Decorative accent glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.06] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/[0.03] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 mb-16">
        <motion.div
          ref={headerRef}
          className="flex items-end gap-4 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="font-display text-[4rem] sm:text-[5.5rem] lg:text-[7rem] leading-none text-stone-600 select-none"
            aria-hidden
          >
            05
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold pb-2 sm:pb-3 text-balance">{contact.heading}</h2>
        </motion.div>

        <motion.p
          className="text-stone-400 max-w-lg text-lg leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
          }}
        >
          {contact.message}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.4,
          }}
        >
          <AnimatedEmail email={contact.email} />
        </motion.div>

        <motion.div
          className="mt-16 pt-8 border-t border-stone-800 flex flex-wrap gap-8"
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {contact.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group font-mono text-sm text-stone-500 transition-colors hover:text-accent"
            >
              <span className="relative">
                {s.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </span>
              {' '}&#8599;
            </a>
          ))}
        </motion.div>

        <p className="mt-16 text-stone-600 text-xs font-mono">
          &copy; {new Date().getFullYear()} Piyush Hole
        </p>
      </div>
    </section>
  )
}
