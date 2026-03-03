import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { projects } from '../data/portfolio'

const cardStyles = [
  'md:col-span-2 md:row-span-2 bg-stone-900 text-white',
  'bg-accent text-white',
  'bg-orange-50 text-stone-800 border border-orange-100',
  'md:col-span-3 bg-stone-900 text-white',
]

const tagStyles = [
  'border-white/20 text-white/50',
  'border-white/25 text-white/60',
  'border-orange-200 text-orange-500',
  'border-white/20 text-white/50',
]

function RevealCard({
  children,
  className,
  href,
  index,
}: {
  children: ReactNode
  className: string
  href: string
  index: number
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.12,
      }}
    >
      {children}
    </motion.a>
  )
}

export default function Projects() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={headerRef}
          className="flex items-end gap-4 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="font-display text-[7rem] leading-none text-stone-300 select-none"
            aria-hidden
          >
            03
          </span>
          <h2 className="text-3xl font-semibold text-stone-900 pb-3">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
          {projects.map((proj, i) => (
            <RevealCard
              key={i}
              href={proj.link ?? '#'}
              index={i}
              className={`group flex flex-col justify-between rounded-2xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${cardStyles[i]}`}
            >
              <div>
                <h3 className="font-display text-2xl tracking-wide mb-3 group-hover:tracking-wider transition-all">
                  {proj.title}
                </h3>
                <p className="opacity-70 leading-relaxed text-sm sm:text-base">
                  {proj.description}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className={`rounded-full border px-3 py-0.5 text-xs font-medium ${tagStyles[i]}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  )
}
