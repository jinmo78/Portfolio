import SectionHeading from '../ui/SectionHeading'
import { certificates } from '../../data/portfolio'

export default function Certificates() {
  return (
    <section className="border-t border-slate-800/50 py-14 sm:py-16">
      <SectionHeading
        id="certificates"
        label="04 — Certificates"
        title="수료증"
        description="스파르타클럽에서 이수한 AI·데이터 과정입니다."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {certificates.map((cert) => (
          <article
            key={cert.title}
            className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10"
          >
            <a href={cert.image} target="_blank" rel="noopener noreferrer">
              <img
                src={cert.image}
                alt={`${cert.title} 수료증`}
                className="w-full bg-white"
              />
            </a>
            <div className="p-5">
              <p className="font-mono text-[10px] font-semibold tracking-[0.2em] text-emerald-400 uppercase">
                {cert.issuer}
              </p>
              <h3 className="mt-2 text-lg font-bold tracking-tight text-slate-50">{cert.title}</h3>
              <p className="mt-1 font-mono text-sm text-sky-400">{cert.period}</p>
              <p className="mt-1 text-xs text-slate-500">발급 {cert.issued}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
