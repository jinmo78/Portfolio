import SectionHeading from '../ui/SectionHeading'
import { techStack } from '../../data/portfolio'

export default function TechStack() {
  return (
    <section className="border-t border-slate-800/50 py-14 sm:py-16">
      <SectionHeading
        id="tech"
        label="01 — Tech Stack"
        title="기술 스택"
        description="업무 환경과 개인 프로젝트에서 사용하는 기술들입니다."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {techStack.map((group) => (
          <div
            key={group.category}
            className="group rounded-xl border border-slate-800/80 bg-slate-900/40 p-5 backdrop-blur-sm transition hover:border-emerald-400/20 hover:bg-slate-900/60"
          >
            <div className="mb-3 flex items-center gap-2">
              <svg className="h-4 w-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
              </svg>
              <h3 className="font-mono text-xs font-medium tracking-wide text-emerald-400 uppercase">
                {group.category}
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-slate-800 bg-slate-950/50 px-2.5 py-1 text-xs text-slate-300 transition group-hover:border-slate-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
