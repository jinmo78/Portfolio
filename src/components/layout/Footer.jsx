import { site } from '../../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800/50 py-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-5 text-xs text-slate-500 sm:flex-row sm:px-6">
        <p>
          &copy; {year}{' '}
          <span className="text-slate-400">{site.name}</span>
          <span className="mx-2 text-slate-700">·</span>
          React &amp; Tailwind CSS
        </p>
        <p className="font-mono text-slate-600">
          <span className="text-emerald-400/60">//</span> v1.1.0
        </p>
      </div>
    </footer>
  )
}
