import SectionHeading from '../ui/SectionHeading'
import { site } from '../../data/portfolio'

const links = [
  {
    label: site.email,
    href: `mailto:${site.email}`,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
    primary: true,
  },
  {
    label: 'GitHub',
    href: site.github,
    external: true,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    ),
  },
  {
    label: 'LinkedIn',
    href: site.linkedin,
    external: true,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
      />
    ),
  },
]

export default function Contact() {
  return (
    <section className="border-t border-slate-800/50 py-14 sm:py-16">
      <SectionHeading
        id="contact"
        label="04 — Contact"
        title="연락처"
        description="프로젝트 협업이나 채용 관련 문의를 환영합니다."
      />
      <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-sm sm:p-8">
        <p className="max-w-md text-sm leading-relaxed text-slate-400">
          이메일이나 GitHub를 통해 편하게 연락해 주세요.
          보통 1~2일 이내에 답변드립니다.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className={
                link.primary
                  ? 'inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-5 py-2.5 text-sm font-medium text-emerald-400 transition hover:border-emerald-400/50 hover:bg-emerald-400/15'
                  : 'inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700/80 bg-slate-950/40 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:border-sky-400/40 hover:text-sky-400'
              }
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {link.icon}
              </svg>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
