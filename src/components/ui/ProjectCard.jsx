const categoryMeta = {
  Flutter: {
    label: 'FLUTTER APP',
    neon: 'text-sky-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.45)]',
    hoverBorder: 'hover:border-sky-400/50 hover:shadow-sky-500/10',
  },
  Godot: {
    label: 'GODOT GAME',
    neon: 'text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.45)]',
    hoverBorder: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10',
  },
  React: {
    label: 'REACT WEBAPP',
    neon: 'text-sky-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.45)]',
    hoverBorder: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10',
  },
  'Next.js': {
    label: 'NEXT.JS WEBAPP',
    neon: 'text-sky-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.45)]',
    hoverBorder: 'hover:border-sky-400/50 hover:shadow-sky-500/10',
  },
  Python: {
    label: 'PYTHON WEBAPP',
    neon: 'text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.45)]',
    hoverBorder: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10',
  },
  PHP: {
    label: 'INVENTORY SYSTEM',
    neon: 'text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.45)]',
    hoverBorder: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10',
  },
  Game: {
    label: 'MULTIPLAYER GAME',
    neon: 'text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.45)]',
    hoverBorder: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10',
  },
}

const fallbackMeta = {
  label: 'PROJECT',
  neon: 'text-slate-400',
  hoverBorder: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10',
}

export default function ProjectCard({ project }) {
  const meta = categoryMeta[project.category] ?? fallbackMeta
  const categoryLabel = project.categoryLabel ?? meta.label

  return (
    <article
      className={`group flex flex-col rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${meta.hoverBorder}`}
    >
      <div className="mb-4 flex items-center gap-2 border-l-2 border-slate-700 pl-3 transition-colors duration-300 group-hover:border-emerald-400/60">
        <p className={`font-mono text-[10px] font-semibold tracking-[0.2em] uppercase ${meta.neon}`}>
          {categoryLabel}
        </p>
      </div>

      <h3 className="text-lg font-bold tracking-tight text-slate-50">{project.title}</h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <li
            key={item}
            className="rounded-md border border-slate-800 bg-slate-800/50 px-2 py-0.5 font-mono text-[10px] text-slate-500"
          >
            {item}
          </li>
        ))}
      </ul>

      {project.link && project.link !== '#' && (
        <div className="mt-5">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-2.5 text-center text-xs font-semibold text-slate-950 transition-colors hover:bg-emerald-400 sm:text-sm"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Live Demo
          </a>
        </div>
      )}
    </article>
  )
}
