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
        description="루미와 PDF OCR로 Agent·RAG를 증명합니다. 그다음이 출시 앱과 웹입니다."
      />
      <ProjectCarousel projects={projects} />
    </section>
  )
}
