import SectionHeading from '../ui/SectionHeading'
import { projects } from '../../data/portfolio'

const categoryStyles = {
  Flutter: 'text-sky-400 border-sky-400/25 bg-sky-400/10',
  Godot: 'text-emerald-400 border-emerald-400/25 bg-emerald-400/10',
  React: 'text-sky-400 border-sky-400/25 bg-sky-400/10',
}

export default function Projects() {
  return (
    <section className="border-t border-slate-800/50 py-14 sm:py-16">
      <SectionHeading
        id="projects"
        label="02 — Projects"
        title="개인 프로젝트"
        description="Flutter, Godot, React로 진행한 사이드 프로젝트입니다."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-xl border border-slate-800/80 bg-slate-900/40 p-5 backdrop-blur-sm transition hover:border-sky-400/20 hover:bg-slate-900/60"
          >
            <span
              className={`mb-3 inline-flex w-fit rounded-full border px-2.5 py-0.5 font-mono text-[11px] tracking-wide uppercase ${categoryStyles[project.category] ?? 'text-slate-400 border-slate-700 bg-slate-800/50'}`}
            >
              {project.category}
            </span>
            <h3 className="text-base font-bold tracking-tight text-slate-100">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
              {project.description}
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1">
              {project.tech.map((item) => (
                <li key={item} className="font-mono text-[11px] text-slate-500">
                  #{item}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-4 border-t border-slate-800/60 pt-4 text-xs">
              <a
                href={project.link}
                className="inline-flex items-center gap-1 text-emerald-400 transition hover:text-emerald-300"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live
              </a>
              <a
                href={project.github}
                className="inline-flex items-center gap-1 text-slate-500 transition hover:text-sky-400"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
