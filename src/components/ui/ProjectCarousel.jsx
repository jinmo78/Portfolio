import { useState } from 'react'
import ProjectCard from './ProjectCard'

const PROJECTS_PER_SLIDE = 6
const MOBILE_INITIAL_COUNT = 4

function chunkProjects(items, size) {
  const chunks = []
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size))
  }
  return chunks
}

function DesktopCarousel({ projects }) {
  const slides = chunkProjects(projects, PROJECTS_PER_SLIDE)
  const [current, setCurrent] = useState(0)
  const hasCarousel = slides.length > 1

  const goPrev = () => setCurrent((index) => Math.max(0, index - 1))
  const goNext = () => setCurrent((index) => Math.min(slides.length - 1, index + 1))

  return (
    <div className="relative hidden md:block">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slideProjects, slideIndex) => (
            <div key={slideIndex} className="w-full shrink-0">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {slideProjects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {hasCarousel && (
        <>
          <button
            type="button"
            onClick={goPrev}
            disabled={current === 0}
            aria-label="이전 프로젝트"
            className="absolute top-1/2 -left-5 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 text-slate-300 shadow-lg backdrop-blur-sm transition hover:border-emerald-400/40 hover:text-emerald-400 disabled:pointer-events-none disabled:opacity-30"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={goNext}
            disabled={current === slides.length - 1}
            aria-label="다음 프로젝트"
            className="absolute top-1/2 -right-5 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 text-slate-300 shadow-lg backdrop-blur-sm transition hover:border-emerald-400/40 hover:text-emerald-400 disabled:pointer-events-none disabled:opacity-30"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="mt-6 flex items-center justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`프로젝트 ${index + 1}페이지`}
                className={`h-2 rounded-full transition-all ${
                  index === current
                    ? 'w-6 bg-emerald-400'
                    : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function MobileProjectList({ projects }) {
  const [expanded, setExpanded] = useState(false)
  const hasMore = projects.length > MOBILE_INITIAL_COUNT
  const visibleProjects = expanded ? projects : projects.slice(0, MOBILE_INITIAL_COUNT)

  return (
    <div className="md:hidden">
      <div className="grid gap-5">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {hasMore && !expanded && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-emerald-400/40 hover:text-emerald-400"
        >
          프로젝트 더 보기
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default function ProjectCarousel({ projects }) {
  return (
    <>
      <MobileProjectList projects={projects} />
      <DesktopCarousel projects={projects} />
    </>
  )
}
