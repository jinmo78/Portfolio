import SectionHeading from '../ui/SectionHeading'
import { projects } from '../../data/portfolio'

const categoryColors = {
  Flutter: 'text-sky-400 border-sky-400/30 bg-sky-400/10',
  Godot: 'text-violet-400 border-violet-400/30 bg-violet-400/10',
  React: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10',
}

export default function Projects() {
  return (
    <section className="py-20">
      <SectionHeading
        id="projects"
        label="03. Projects"
        title="개인 프로젝트"
        description="Flutter, Godot, React로 진행한 사이드 프로젝트입니다."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:-translate-y-1 hover:border-zinc-700"
          >
            <span
              className={`mb-4 inline-flex w-fit rounded-full border px-3 py-1 font-mono text-xs ${categoryColors[project.category] ?? 'text-zinc-400 border-zinc-700'}`}
            >
              {project.category}
            </span>
            <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <li key={item} className="font-mono text-xs text-zinc-500">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-4 text-sm">
              <a
                href={project.link}
                className="text-emerald-400 transition hover:text-emerald-300"
              >
                Live →
              </a>
              <a
                href={project.github}
                className="text-zinc-500 transition hover:text-zinc-300"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
