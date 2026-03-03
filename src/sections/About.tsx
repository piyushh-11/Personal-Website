import { about } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-5xl">
        <p className="font-mono text-sm text-stone-400 mb-6 tracking-wide">
          {about.greeting}
        </p>

        <h1 className="font-display text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] text-stone-900 mb-6">
          {about.name}
        </h1>

        <p className="text-xl sm:text-2xl text-accent font-medium max-w-xl mb-10">
          {about.tagline}
        </p>

        <div className="max-w-lg space-y-4 text-stone-500 leading-relaxed">
          {about.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 active:translate-y-0"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="rounded-full border-2 border-stone-900 px-7 py-3 text-sm font-semibold text-stone-900 transition-all hover:bg-stone-900 hover:text-white"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
