import { skills } from '../data/portfolio'

export default function Skills() {
  const allSkills = skills.flatMap((c) => c.items)
  const mid = Math.ceil(allSkills.length / 2)
  const row1 = allSkills.slice(0, mid)
  const row2 = allSkills.slice(mid)

  return (
    <section id="skills" className="py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 mb-16">
        <div className="flex items-end gap-4">
          <span className="font-display text-[7rem] leading-none text-stone-300 select-none" aria-hidden>
            04
          </span>
          <h2 className="text-3xl font-semibold text-stone-900 pb-3">Skills</h2>
        </div>
      </div>

      {/* Marquee row 1 */}
      <div className="mb-4">
        <div className="flex w-max animate-marquee gap-4 will-change-transform">
          {[...row1, ...row1].map((skill, i) => (
            <span
              key={i}
              className="inline-block whitespace-nowrap rounded-full border-2 border-stone-600 px-6 py-3 text-base font-medium text-stone-700 sm:text-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Marquee row 2 (reverse) */}
      <div className="mb-16">
        <div className="flex w-max animate-marquee-reverse gap-4 will-change-transform">
          {[...row2, ...row2].map((skill, i) => (
            <span
              key={i}
              className="inline-block whitespace-nowrap rounded-full bg-stone-800 px-6 py-3 text-base font-medium text-white sm:text-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Category breakdown */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((cat) => (
          <div key={cat.category}>
            <h3 className="font-mono text-[11px] text-stone-400 uppercase tracking-widest mb-3">
              {cat.category}
            </h3>
            <ul className="space-y-1.5">
              {cat.items.map((item) => (
                <li key={item} className="text-sm text-stone-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
