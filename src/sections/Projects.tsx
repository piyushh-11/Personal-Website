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

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end gap-4 mb-16">
          <span className="font-display text-[7rem] leading-none text-stone-300 select-none" aria-hidden>
            03
          </span>
          <h2 className="text-3xl font-semibold text-stone-900 pb-3">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
          {projects.map((proj, i) => (
            <a
              key={i}
              href={proj.link ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col justify-between rounded-2xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${cardStyles[i]}`}
            >
              <div>
                <h3 className="font-display text-2xl tracking-wide mb-3">
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
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
