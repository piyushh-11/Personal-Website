import { experiences } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end gap-4 mb-16">
          <span className="font-display text-[7rem] leading-none text-stone-300 select-none" aria-hidden>
            02
          </span>
          <h2 className="text-3xl font-semibold text-stone-900 pb-3">Experience</h2>
        </div>

        <div className="space-y-5">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-stone-200 bg-white p-7 sm:p-8 transition-all hover:border-orange-200 hover:bg-orange-50/30 hover:shadow-xl hover:shadow-orange-100 hover:-translate-y-0.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                <div className="min-w-0">
                  <h3 className="font-display text-2xl tracking-wide text-stone-900 group-hover:text-accent transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-accent font-medium text-sm">{exp.company}</p>
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
                    className="rounded-full border border-stone-200 bg-stone-50 px-3 py-0.5 text-xs font-medium text-stone-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
