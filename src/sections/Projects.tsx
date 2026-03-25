import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { projects } from '../data/portfolio'

const ease = [0.22, 1, 0.36, 1] as const

function ProjectCard({
  children,
  className,
  href,
}: {
  children: ReactNode
  className: string
  href?: string
}) {
  const Tag = href && href !== '#' ? 'a' : 'div'
  const linkProps =
    href && href !== '#'
      ? { href, target: '_blank' as const, rel: 'noopener noreferrer' }
      : {}

  return (
    <Tag className={className} {...linkProps}>
      {children}
    </Tag>
  )
}

export default function Projects() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' })
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' })

  return (
    <section id="projects" className="px-6 md:px-12 lg:px-24 bg-paper/60">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 mb-20">
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
            03
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 pb-2 sm:pb-3 text-balance">
            Projects
          </h2>
        </motion.div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: i * 0.12 }}
            >
              <ProjectCard
                href={proj.link}
                className="group flex flex-col justify-between rounded-2xl bg-stone-900 text-white p-7 sm:p-8 h-full transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-display text-2xl tracking-wide text-white transition-colors duration-300 group-hover:text-accent">
                      {proj.title}
                    </h3>
                    {proj.link && proj.link !== '#' && (
                      <span className="text-white/40 text-lg shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent">
                        &#8599;
                      </span>
                    )}
                  </div>
                  <p className="opacity-70 leading-relaxed text-sm sm:text-base">
                    {proj.description}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/20 text-white/50 px-3 py-0.5 text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </ProjectCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
