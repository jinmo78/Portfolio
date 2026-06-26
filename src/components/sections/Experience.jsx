import SectionHeading from '../ui/SectionHeading'
import { experiences } from '../../data/portfolio'

export default function Experience() {
  return (
    <section className="border-t border-slate-800/50 py-14 sm:py-16">
      <SectionHeading
        id="experience"
        label="03 — Experience"
        title="회사 경력"
        description="SI 업체에서의 웹 개발 경험입니다."
      />
      <div className="space-y-4">
        {experiences.map((job) => (
          <article
            key={`${job.company}-${job.period}`}
            className="group rounded-xl border border-slate-800/80 bg-slate-900/40 p-5 backdrop-blur-sm transition hover:border-emerald-400/20 hover:bg-slate-900/60"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-base font-bold tracking-tight text-slate-100">
                <span className="text-emerald-400">{job.role}</span>
                <span className="mx-2 font-normal text-slate-600">/</span>
                <span className="text-slate-300">{job.company}</span>
              </h3>
              <time className="font-mono text-xs text-sky-400/80">{job.period}</time>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{job.description}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {job.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-slate-800 bg-slate-950/50 px-2.5 py-1 text-xs text-slate-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
