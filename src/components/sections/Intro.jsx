import { site } from '../../data/portfolio'

function ProfileAvatar() {
  const initial = site.name.charAt(0)

  return (
    <div className="profile-avatar relative mx-auto w-full max-w-[15rem] sm:max-w-[17rem] lg:mx-0 lg:max-w-[14.5rem]">
      <div className="profile-avatar-glow absolute -inset-2 rounded-[2.25rem] bg-gradient-to-br from-emerald-400/20 via-transparent to-sky-400/20 blur-2xl lg:-inset-1" />

      <div className="profile-avatar-frame relative overflow-hidden rounded-[2rem] border border-slate-700/80 bg-slate-800/40 p-1.5 shadow-[0_0_40px_rgba(15,23,42,0.5)] backdrop-blur-sm">
        <div className="overflow-hidden rounded-[1.65rem] border border-slate-700/60 bg-slate-900/60">
          {site.profileImage ? (
            <img
              src={site.profileImage}
              alt={`${site.name} 프로필`}
              className="profile-avatar-image aspect-square w-full object-cover object-[center_20%]"
            />
          ) : (
            <div className="flex aspect-square flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-900 via-slate-800/80 to-slate-900">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-4xl font-bold text-emerald-400">
                {initial}
              </div>
              <p className="font-mono text-[11px] tracking-wider text-slate-500 uppercase">
                profile image
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="absolute -right-2 -bottom-2 rounded-xl border border-slate-700 bg-slate-800/90 px-3 py-1.5 font-mono text-[11px] text-sky-400 shadow-lg backdrop-blur-sm">
        {site.role}
      </div>
    </div>
  )
}

export default function Intro() {
  return (
    <section className="pt-4 pb-8 sm:py-12 lg:py-5">
      <div className="grid w-full items-start gap-5 sm:gap-8 lg:grid-cols-[1.15fr_auto] lg:gap-10">
        <div className="order-2 lg:order-1">
          <h1 className="text-[1.625rem] font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
            <span className="block text-slate-400">{site.identityLead}</span>
            <span className="mt-1 block">
              {site.identityTail}{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                {site.name}
              </span>
              입니다.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {site.tagline}
          </p>

          <div className="mt-6 flex flex-nowrap gap-2 sm:mt-8 sm:flex-wrap sm:gap-3">
            <a
              href="#projects"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-2 py-2 text-[11px] font-medium whitespace-nowrap text-emerald-400 transition-all hover:-translate-y-0.5 hover:border-emerald-400/50 hover:bg-emerald-400/15 sm:flex-none sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm"
            >
              <svg className="hidden h-4 w-4 sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              프로젝트 보기
            </a>
            <a
              href="#tech"
              className="inline-flex flex-1 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/50 px-2 py-2 text-[11px] font-medium whitespace-nowrap text-slate-300 transition-all hover:-translate-y-0.5 hover:border-sky-400/40 hover:text-sky-400 sm:flex-none sm:px-5 sm:py-2.5 sm:text-sm"
            >
              기술 스택
            </a>
            <a
              href="#contact"
              className="inline-flex flex-1 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/50 px-2 py-2 text-[11px] font-medium whitespace-nowrap text-slate-300 transition-all hover:-translate-y-0.5 hover:border-sky-400/40 hover:text-sky-400 sm:flex-none sm:px-5 sm:py-2.5 sm:text-sm"
            >
              연락하기
            </a>
          </div>
        </div>

        <div className="order-1 self-start lg:order-2 lg:justify-self-end">
          <ProfileAvatar />
        </div>
      </div>
    </section>
  )
}
