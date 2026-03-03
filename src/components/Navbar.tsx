const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <ul className="flex items-center gap-0.5 rounded-full bg-stone-900 px-2 py-2 shadow-2xl shadow-stone-900/25">
        {links.map((l) => (
          <li key={l.id}>
            <a
              href={`#${l.id}`}
              className="block rounded-full px-3 py-1.5 text-[11px] font-medium text-stone-400 transition-colors hover:text-white hover:bg-white/10 sm:text-sm sm:px-4 sm:py-2"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
