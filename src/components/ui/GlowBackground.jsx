export default function GlowBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute -top-40 left-1/4 h-[28rem] w-[28rem] rounded-full bg-emerald-500/[0.07] blur-3xl" />
      <div className="absolute top-1/2 -right-20 h-80 w-80 rounded-full bg-sky-500/[0.06] blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-emerald-400/[0.04] blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
    </div>
  )
}
