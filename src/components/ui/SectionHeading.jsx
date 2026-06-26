export default function SectionHeading({ id, label, title, description }) {
  return (
    <div id={id} className="mb-12 scroll-mt-24">
      <p className="mb-2 font-mono text-sm tracking-widest text-emerald-400 uppercase">
        {label}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-zinc-400">{description}</p>
      )}
    </div>
  )
}
