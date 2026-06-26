import { site } from '../../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-800 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 sm:flex-row">
        <p>
          &copy; {year} {site.name}. Built with React &amp; Tailwind CSS.
        </p>
        <p className="font-mono text-xs text-zinc-600">v1.0.0</p>
      </div>
    </footer>
  )
}
