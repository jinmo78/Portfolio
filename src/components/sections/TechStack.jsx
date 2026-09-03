import SectionHeading from '../ui/SectionHeading'
import TechBadge from '../ui/TechBadge'
import { skillBadges } from '../../data/portfolio'

export default function TechStack() {
  return (
    <section className="border-t border-slate-800/50 py-14 sm:py-16">
      <SectionHeading
        id="tech"
        label="01 — Tech Stack"
        title="기술 스택"
        description="AI Agent 스택을 앞에 두고, 출시·운영에 쓴 웹·앱 기술을 이었습니다."
      />
      <div className="flex flex-wrap gap-2.5 sm:gap-3">
        {skillBadges.map((skill) => (
          <TechBadge key={skill.name} name={skill.name} accent={skill.accent} />
        ))}
      </div>
    </section>
  )
}
