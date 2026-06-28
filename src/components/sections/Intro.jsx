import { site } from '../../data/portfolio'

function ProfileAvatar() {
  const initial = site.name.charAt(0)

  return (
    <div className="profile-avatar relative mx-auto w-full max-w-[17rem] lg:max-w-[19rem]">
      <div className="profile-avatar-glow absolute -inset-3 rounded-[2.25rem] bg-gradient-to-br from-emerald-400/20 via-transparent to-sky-400/20 blur-2xl" />

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
    <section className="flex min-h-[calc(100vh-3.5rem)] items-center py-10 sm:py-12 lg:min-h-0 lg:items-start lg:py-8">
      <div className="grid w-full items-center gap-10 lg:grid-cols-[1.15fr_auto] lg:items-start lg:gap-12">
        <div className="order-2 lg:order-1">
          <h1 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
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

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-5 py-2.5 text-sm font-medium text-emerald-400 transition-all hover:-translate-y-0.5 hover:border-emerald-400/50 hover:bg-emerald-400/15"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              프로젝트 보기
            </a>
            <a
              href="#tech"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/50 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all hover:-translate-y-0.5 hover:border-sky-400/40 hover:text-sky-400"
            >
              기술 스택
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/50 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all hover:-translate-y-0.5 hover:border-sky-400/40 hover:text-sky-400"
            >
              연락하기
            </a>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end lg:pt-1">
          <ProfileAvatar />
        </div>
      </div>
    </section>
  )
}
