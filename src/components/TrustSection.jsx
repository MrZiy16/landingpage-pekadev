import { CLIENTS } from '../data'
const COLOR_MAP = {
  blue:   { bg: 'rgba(29,78,216,0.12)',   border: 'rgba(29,78,216,0.2)',   text: '#93c5fd' },
  green:  { bg: 'rgba(20,120,80,0.12)',   border: 'rgba(20,180,100,0.2)',  text: '#6ee7b7' },
  purple: { bg: 'rgba(99,40,180,0.12)',   border: 'rgba(139,92,246,0.2)',  text: '#c4b5fd' },
  amber:  { bg: 'rgba(180,100,20,0.12)',  border: 'rgba(251,191,36,0.2)',  text: '#fcd34d' },
  rose:   { bg: 'rgba(200,40,80,0.12)',   border: 'rgba(251,113,133,0.2)', text: '#fda4af' },
  cyan:   { bg: 'rgba(14,80,160,0.12)',   border: 'rgba(56,189,248,0.2)',  text: '#7dd3fc' },
}
export default function TrustSection() {
  return (
    <section
      id="clients"
      className="relative py-20 overflow-hidden"
      style={{ background: '#03080f', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Grid bg */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(30,90,220,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(30,90,220,0.04) 1px,transparent 1px)',
          backgroundSize: '52px 52px',
        }}
      />
      {/* Center glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(29,78,216,0.08) 0%,transparent 70%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">

        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="flex-1 max-w-[120px] h-px"
            style={{ background: 'linear-gradient(to right,transparent,rgba(255,255,255,0.08))' }} />
          <span className="text-[11px] font-medium tracking-[0.18em] uppercase whitespace-nowrap"
            style={{ color: 'rgba(148,163,255,0.4)' }}>
            Dipercaya oleh berbagai instansi &amp; bisnis
          </span>
          <div className="flex-1 max-w-[120px] h-px"
            style={{ background: 'linear-gradient(to left,transparent,rgba(255,255,255,0.08))' }} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {CLIENTS.map((c) => {
            const col = COLOR_MAP[c.color]
            return (
              <div
                key={c.abbr}
                className="group flex flex-col items-center justify-center gap-2.5 p-5 rounded-xl cursor-pointer transition-all duration-300 hover:-translate-y-1"
                style={{
                  border: '1px solid rgba(255,255,255,0.055)',
                  background: 'rgba(255,255,255,0.02)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(96,165,250,0.2)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.055)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-300"
                  style={{
                    background: col.bg,
                    border: `1px solid ${col.border}`,
                    color: col.text,
                    filter: 'grayscale(0.7)',
                    opacity: 0.5,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.filter = 'grayscale(0)'
                    e.currentTarget.style.opacity = '1'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.filter = 'grayscale(0.7)'
                    e.currentTarget.style.opacity = '0.5'
                  }}
                >
                  {c.abbr}
                </div>
                <div className="text-[11.5px] font-medium text-center leading-snug transition-colors duration-300"
                  style={{ color: 'rgba(255,255,255,0.3)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
                >
                  {c.name}
                </div>
                <div className="text-[9.5px] font-normal tracking-wider uppercase transition-colors duration-300"
                  style={{ color: 'rgba(148,163,255,0.25)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'rgba(148,163,255,0.6)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(148,163,255,0.25)'}
                >
                  {c.cat}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>dan</span>
          <span className="text-xs font-semibold" style={{ color: 'rgba(96,165,250,0.6)' }}>40+ client lainnya</span>
          <span className="w-1 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }} />
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>di berbagai industri</span>
        </div>

      </div>
    </section>
  )
}   