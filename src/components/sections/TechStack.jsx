import SectionHeading from '../ui/SectionHeading'
import { techStack } from '../../data/portfolio'

export default function TechStack() {
  return (
    <section className="py-20">
      <SectionHeading
        id="tech"
        label="01. Tech Stack"
        title="기술 스택"
        description="업무 환경과 개인 프로젝트에서 사용하는 기술들입니다."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {techStack.map((group) => (
          <div
            key={group.category}
            className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-zinc-700"
          >
            <h3 className="mb-4 font-mono text-sm font-medium text-emerald-400">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-zinc-800 px-3 py-1.5 text-sm text-zinc-300"
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
