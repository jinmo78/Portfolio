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
        description="웹, 모바일, 게임 등 다양한 스택으로 진행한 사이드 프로젝트입니다."
      />
      <ProjectCarousel projects={projects} />
    </section>
  )
}
