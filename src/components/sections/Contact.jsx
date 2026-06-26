import SectionHeading from '../ui/SectionHeading'
import { site } from '../../data/portfolio'

export default function Contact() {
  return (
    <section className="py-20">
      <SectionHeading
        id="contact"
        label="04. Contact"
        title="연락처"
        description="프로젝트 협업이나 채용 관련 문의를 환영합니다."
      />
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
        <p className="max-w-lg text-zinc-400">
          이메일이나 GitHub를 통해 편하게 연락해 주세요.
          보통 1~2일 이내에 답변드립니다.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-medium text-zinc-950 transition hover:bg-emerald-400"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {site.email}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-zinc-100"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-zinc-100"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
