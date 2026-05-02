// Shared reusable UI primitives

export function GlowOrb({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={{
        background:
          'radial-gradient(circle, rgba(59,130,246,0.22) 0%, transparent 70%)',
      }}
    />
  )
}

export function SectionBadge({ children }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-medium mb-6">
      {children}
    </div>
  )
}

export function SectionHeader({ badge, title, highlight, subtitle, center = true }) {
  return (
    <div className={`mb-14 ${center ? 'text-center' : ''}`}>
      <SectionBadge>{badge}</SectionBadge>
      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
        {title}{' '}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>
      {subtitle && (
        <p className="text-white/40 max-w-xl mx-auto text-sm leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export function GradientButton({ children, onClick, href, className = '', size = 'md' }) {
  const sizeClass = size === 'lg'
    ? 'px-10 py-5 text-base'
    : 'px-6 py-3 text-sm'

  const base = `inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/45 hover:scale-105 transition-all duration-300 ${sizeClass} ${className}`

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {children}
      </a>
    )
  }
  return (
    <button onClick={onClick} className={base}>
      {children}
    </button>
  )
}

export function OutlineButton({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10 font-semibold text-sm transition-all duration-300 backdrop-blur-sm ${className}`}
    >
      {children}
    </button>
  )
}
