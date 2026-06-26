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

      <div className="mt-5 grid grid-cols-2 gap-2.5">
        <a
          href={project.link}
          className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-2.5 text-center text-xs font-semibold text-slate-950 transition-colors hover:bg-emerald-400 sm:text-sm"
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
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-transparent px-3 py-2.5 text-center text-xs font-medium text-slate-300 transition-colors hover:bg-slate-800 sm:text-sm"
        >
          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub Code
        </a>
      </div>
    </article>
  )
}
