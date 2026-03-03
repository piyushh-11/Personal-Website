import { contact } from '../data/portfolio'

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-stone-900 text-white py-32 pb-40 px-6 md:px-12 lg:px-24 rounded-t-[2.5rem] mt-8"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end gap-4 mb-16">
          <span className="font-display text-[7rem] leading-none text-stone-600 select-none" aria-hidden>
            05
          </span>
          <h2 className="text-3xl font-semibold pb-3">{contact.heading}</h2>
        </div>

        <p className="text-stone-400 max-w-lg text-lg leading-relaxed mb-12">
          {contact.message}
        </p>

        <a
          href={`mailto:${contact.email}`}
          className="inline-block font-display text-3xl sm:text-5xl lg:text-6xl text-accent decoration-2 underline-offset-8 transition-all hover:underline"
        >
          {contact.email}
        </a>

        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-wrap gap-8">
          {contact.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-stone-500 transition-colors hover:text-accent"
            >
              {s.label} &#8599;
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
