import SectionHeading from '../ui/SectionHeading'
import { experiences } from '../../data/portfolio'

export default function Experience() {
  return (
    <section className="py-20">
      <SectionHeading
        id="experience"
        label="02. Experience"
        title="회사 경력"
        description="SI 업체에서의 웹 개발 경험입니다."
      />
      <div className="space-y-8">
        {experiences.map((job) => (
          <article
            key={`${job.company}-${job.period}`}
            className="group rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 transition hover:border-zinc-700"
          >
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h3 className="text-lg font-semibold text-zinc-100">
                  {job.role}
                  <span className="text-zinc-500"> @ </span>
                  <span className="text-emerald-400">{job.company}</span>
                </h3>
                <p className="mt-1 font-mono text-sm text-zinc-500">{job.period}</p>
              </div>
            </div>
            <p className="mt-4 text-zinc-400">{job.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {job.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-zinc-800 px-3 py-1 text-xs text-zinc-400"
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
