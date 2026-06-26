export default function SectionHeading({ id, label, title, description }) {
  return (
    <div id={id} className="mb-8 scroll-mt-20">
      <p className="mb-2 font-mono text-xs tracking-[0.2em] text-emerald-400 uppercase">
        {label}
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
          {description}
        </p>
      )}
    </div>
  )
}
