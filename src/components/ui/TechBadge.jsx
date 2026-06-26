const accentStyles = {
  emerald: 'text-emerald-400 hover:border-emerald-400/50 hover:shadow-emerald-400/10',
  sky: 'text-sky-400 hover:border-sky-400/50 hover:shadow-sky-400/10',
}

export default function TechBadge({ name, accent = 'emerald' }) {
  return (
    <span
      className={`inline-flex items-center rounded-lg border border-slate-700 bg-slate-800/50 px-3.5 py-2 text-sm font-medium shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${accentStyles[accent] ?? accentStyles.emerald}`}
    >
      {name}
    </span>
  )
}
