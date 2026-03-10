import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { experiences } from '../data/portfolio'
import type { Experience as Exp } from '../data/portfolio'

const ease = [0.22, 1, 0.36, 1] as const

export default function Experience() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' })
  const listRef = useRef(null)
  const listInView = useInView(listRef, { once: true, margin: '-60px' })

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={headerRef}
          className="flex items-end gap-4 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <span
            className="font-display text-[4rem] sm:text-[5.5rem] lg:text-[7rem] leading-none text-stone-300 select-none"
            aria-hidden
          >
            02
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 pb-2 sm:pb-3">
            Experience
          </h2>
        </motion.div>

        <div ref={listRef} className="space-y-5">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={listInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
            >
              <ExperienceCard exp={exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ exp }: { exp: Exp }) {
  return (
    <div className="group rounded-2xl border border-stone-200 bg-paper p-7 sm:p-8 transition-all hover:border-orange-200 hover:bg-orange-50/30 hover:shadow-xl hover:shadow-orange-100/80 hover:-translate-y-0.5">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
        <div className="min-w-0">
          <h3 className="font-display text-2xl tracking-wide text-stone-900 group-hover:text-accent transition-colors">
            {exp.role}
          </h3>
          <p className="text-accent/70 font-medium text-sm transition-colors">{exp.company}</p>
        </div>
        <span className="font-mono text-xs text-stone-400 shrink-0 sm:pt-1">
          {exp.period}
        </span>
      </div>
      <p className="mt-3 text-stone-500 leading-relaxed">{exp.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {exp.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-stone-200 bg-stone-50 px-3 py-0.5 text-xs font-medium text-stone-500 transition-colors group-hover:border-orange-200 group-hover:bg-orange-50 group-hover:text-orange-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
