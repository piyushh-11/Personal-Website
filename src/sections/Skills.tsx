import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '../data/portfolio'

export default function Skills() {
  const allSkills = skills.flatMap((c) => c.items)
  const mid = Math.ceil(allSkills.length / 2)
  const row1 = allSkills.slice(0, mid)
  const row2 = allSkills.slice(mid)

  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' })
  const catRef = useRef(null)
  const catInView = useInView(catRef, { once: true, margin: '-60px' })

  return (
    <section id="skills" className="py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 mb-16">
        <motion.div
          ref={headerRef}
          className="flex items-end gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="font-display text-[4rem] sm:text-[5.5rem] lg:text-[7rem] leading-none text-stone-300 select-none"
            aria-hidden
          >
            04
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 pb-2 sm:pb-3">
            Skills
          </h2>
        </motion.div>
      </div>

      <div className="group/marquee mb-4">
        <div className="flex w-max animate-marquee gap-4 will-change-transform group-hover/marquee:[animation-play-state:paused]">
          {[...row1, ...row1].map((skill, i) => (
            <span
              key={i}
              className="inline-block whitespace-nowrap rounded-full border-2 border-stone-600 px-6 py-3 text-base font-medium text-stone-700 transition-colors hover:border-accent hover:text-accent sm:text-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="group/marquee mb-16">
        <div className="flex w-max animate-marquee-reverse gap-4 will-change-transform group-hover/marquee:[animation-play-state:paused]">
          {[...row2, ...row2].map((skill, i) => (
            <span
              key={i}
              className="inline-block whitespace-nowrap rounded-full bg-stone-800 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-accent sm:text-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div
        ref={catRef}
        className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {skills.map((cat, i) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            animate={catInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.1,
            }}
          >
            <h3 className="font-mono text-[11px] text-stone-400 uppercase tracking-widest mb-3">
              {cat.category}
            </h3>
            <ul className="space-y-1.5">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-stone-700 transition-colors hover:text-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
