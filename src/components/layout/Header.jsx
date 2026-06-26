import { useState } from 'react'
import { navItems, site } from '../../data/portfolio'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-900/60 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-6">
        <a
          href="#intro"
          className="group flex items-center gap-2 font-mono text-sm"
        >
          <span className="text-sky-400 transition group-hover:text-sky-300">&lt;</span>
          <span className="font-medium text-slate-200 transition group-hover:text-emerald-400">
            {site.name}
          </span>
          <span className="text-sky-400 transition group-hover:text-sky-300">/&gt;</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-md px-3 py-1.5 text-sm text-slate-400 transition hover:bg-slate-800/60 hover:text-emerald-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-slate-400 transition hover:bg-slate-800/60 hover:text-sky-400 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="메뉴 열기"
          aria-expanded={isOpen}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-slate-800/60 bg-slate-900/80 px-5 py-3 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block rounded-md px-3 py-2 text-sm text-slate-400 transition hover:bg-slate-800/60 hover:text-emerald-400"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
