import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { projects } from '../data/portfolio'

const cardStyles = 'bg-stone-900 text-white'
const tagStyles = 'border-white/20 text-white/50'

function ProjectCard({
  children,
  className,
  href,
}: {
  children: ReactNode
  className: string
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">
          {projects.map((proj, i) => (
            <ProjectCard
              key={i}
              href={proj.link ?? '#'}
              className={`group flex flex-col justify-between rounded-2xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${cardStyles}`}
            >
              <div>
                <h3 className="font-display text-2xl tracking-wide mb-3 text-white transition-colors duration-300 group-hover:text-accent">
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
                    className={`rounded-full border px-3 py-0.5 text-xs font-medium ${tagStyles}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </ProjectCard>
          ))}
        </div>
      </div>
    </section>
  )
}
