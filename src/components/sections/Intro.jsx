import { site } from '../../data/portfolio'

export default function Intro() {
  return (
    <section className="flex min-h-[calc(100vh-3.5rem)] flex-col justify-center py-16 sm:py-20">
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/50 px-3 py-1 font-mono text-xs text-slate-400 backdrop-blur-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
        available for opportunities
      </div>

      <p className="mt-6 font-mono text-sm text-sky-400">안녕하세요, 저는</p>

      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
        {site.name}
        <span className="text-emerald-400">.</span>
      </h1>

      <p className="mt-3 font-mono text-base text-emerald-400/90 sm:text-lg">{site.role}</p>

      <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
        {site.tagline}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-5 py-2.5 text-sm font-medium text-emerald-400 transition hover:border-emerald-400/50 hover:bg-emerald-400/15"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          프로젝트 보기
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-900/40 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:border-sky-400/40 hover:text-sky-400"
        >
          연락하기
        </a>
      </div>

      <div className="mt-12 hidden rounded-xl border border-slate-800/80 bg-slate-900/40 p-4 font-mono text-xs backdrop-blur-sm sm:block sm:max-w-md">
        <p className="text-slate-500">
          <span className="text-sky-400">const</span>{' '}
          <span className="text-emerald-400">developer</span> = {'{'}
        </p>
        <p className="pl-4 text-slate-400">
          name: <span className="text-emerald-400/90">&apos;{site.name}&apos;</span>,
        </p>
        <p className="pl-4 text-slate-400">
          stack: <span className="text-sky-400/90">[&apos;React&apos;, &apos;Flutter&apos;, &apos;PHP&apos;]</span>
        </p>
        <p className="text-slate-500">{'}'}</p>
      </div>
    </section>
  )
}
