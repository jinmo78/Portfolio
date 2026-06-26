import { site } from '../../data/portfolio'

export default function Intro() {
  return (
    <section className="flex min-h-[85vh] flex-col justify-center py-20">
      <p className="mb-4 font-mono text-sm text-emerald-400">
        안녕하세요, 저는
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-6xl">
        {site.name}
        <span className="text-emerald-400">.</span>
      </h1>
      <p className="mt-2 font-mono text-lg text-zinc-400 sm:text-xl">
        {site.role}
      </p>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
        {site.tagline}
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-lg bg-emerald-500 px-6 py-3 text-sm font-medium text-zinc-950 transition hover:bg-emerald-400"
        >
          프로젝트 보기
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-zinc-100"
        >
          연락하기
        </a>
      </div>
      <div className="mt-16 hidden font-mono text-xs text-zinc-600 sm:block">
        <span className="text-emerald-500/80">$</span> cd ~/portfolio && npm run dev
        <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-emerald-500/60" />
      </div>
    </section>
  )
}
