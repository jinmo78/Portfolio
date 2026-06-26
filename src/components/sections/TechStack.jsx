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
        description="웹, 앱, 게임까지 — 실무와 사이드 프로젝트에서 활용하는 기술들입니다."
      />
      <div className="flex flex-wrap gap-2.5 sm:gap-3">
        {skillBadges.map((skill) => (
          <TechBadge key={skill.name} name={skill.name} accent={skill.accent} />
        ))}
      </div>
    </section>
  )
}
