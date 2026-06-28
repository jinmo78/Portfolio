import { site } from '../../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800/50 py-6">
      <div className="mx-auto max-w-5xl px-5 text-center text-xs text-slate-500 sm:px-6">
        <p>
          &copy; {year}{' '}
          <span className="text-slate-400">{site.name}</span>
        </p>
      </div>
    </footer>
  )
}
