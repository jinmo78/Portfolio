import SectionHeading from '../ui/SectionHeading'
import ProjectCarousel from '../ui/ProjectCarousel'
import { projects } from '../../data/portfolio'

export default function Projects() {
  return (
    <section className="border-t border-slate-800/50 py-14 sm:py-16">
      <SectionHeading
        id="projects"
        label="02 — Projects"
        title="개인 프로젝트"
        description="출시한 앱과 사이드 프로젝트를 소개합니다. 웹, 모바일, 게임을 넘나듭니다."
      />
      <ProjectCarousel projects={projects} />
    </section>
  )
}
