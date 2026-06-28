import SectionHeading from '../ui/SectionHeading'
import { experiences } from '../../data/portfolio'

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function ExperienceItem({ job }) {
  return (
    <article className="relative pb-10 pl-8 last:pb-2">
      <span className="absolute top-1.5 left-0 h-3.5 w-3.5 -translate-x-[calc(50%+1px)] rounded-full border-2 border-emerald-400/60 bg-[#0b0f19] shadow-[0_0_10px_rgba(52,211,153,0.35)]" />

      <div className="grid gap-6 md:grid-cols-[11rem_1fr] lg:grid-cols-[13rem_1fr] lg:gap-10">
        <div className="md:pt-1">
          <time className="block font-mono text-sm font-medium text-sky-400">{job.period}</time>
          <p className="mt-2 text-base font-bold tracking-tight text-slate-100">{job.role}</p>
          <span className="mt-2 inline-flex rounded-md border border-slate-700/80 bg-slate-800/40 px-2 py-0.5 font-mono text-[10px] tracking-widest text-emerald-400/90 uppercase">
            {job.sector}
          </span>
          <p className="mt-2 text-sm text-slate-500">{job.company}</p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition-colors hover:border-slate-700">
          <p className="text-sm leading-relaxed text-slate-400">{job.description}</p>

          <ul className="mt-4 space-y-2.5">
            {job.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                <CheckIcon />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          {job.tech?.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-800/80 pt-4">
              {job.tech.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-slate-800/80 bg-slate-800/30 px-2.5 py-1 font-mono text-[11px] text-slate-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Experience() {
  return (
    <section className="border-t border-slate-800/50 py-14 sm:py-16">
      <SectionHeading
        id="experience"
        label="03 — Experience"
        title="회사 경력"
        description="총 14년+ 웹 개발 경력입니다. 아래 영역에서 스크롤하여 전체 경력을 확인할 수 있습니다."
      />

      <div className="experience-scroll max-h-[28rem] overflow-y-auto overscroll-y-contain pr-1 sm:max-h-[32rem]">
        <div className="relative border-l-2 border-slate-800">
          {experiences.map((job) => (
            <ExperienceItem key={`${job.company}-${job.period}`} job={job} />
          ))}
        </div>
      </div>
    </section>
  )
}
