import { CLIENTS } from '../data'

const COLOR_MAP = {
  blue:   { bg: 'rgba(59,130,246,0.08)',  border: 'rgba(59,130,246,0.2)',   text: '#2563eb' },
  green:  { bg: 'rgba(22,163,74,0.08)',   border: 'rgba(22,163,74,0.2)',    text: '#16a34a' },
  purple: { bg: 'rgba(124,58,237,0.08)',  border: 'rgba(124,58,237,0.2)',   text: '#7c3aed' },
  amber:  { bg: 'rgba(217,119,6,0.08)',   border: 'rgba(217,119,6,0.2)',    text: '#d97706' },
  rose:   { bg: 'rgba(225,29,72,0.08)',   border: 'rgba(225,29,72,0.2)',    text: '#e11d48' },
  cyan:   { bg: 'rgba(6,182,212,0.08)',   border: 'rgba(6,182,212,0.2)',    text: '#0891b2' },
}

export default function TrustSection() {
  const duplicatedClients = [...CLIENTS, ...CLIENTS]

  return (
    <section
      id="clients"
      className="relative py-16 overflow-hidden"
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background: '#f8fafc',
      }}
    >
      <div className="relative z-10 max-w-full">
        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-12 px-5 sm:px-8">
          <div className="flex-1 max-w-[120px] h-px"
            style={{ background: 'linear-gradient(to right,transparent,rgba(148,163,184,0.3))' }} />
          <span className="text-[11px] font-medium tracking-[0.18em] uppercase whitespace-nowrap text-slate-400">
            Dipercaya oleh 40+ Instansi &amp; Bisnis
          </span>
          <div className="flex-1 max-w-[120px] h-px"
            style={{ background: 'linear-gradient(to left,transparent,rgba(148,163,184,0.3))' }} />
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none" />

          {/* Scrolling track */}
          <div className="flex gap-4 marquee-track">
            {duplicatedClients.map((c, idx) => {
              const col = COLOR_MAP[c.color]
              return (
                <div
                  key={`${c.abbr}-${idx}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border flex-shrink-0 transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    border: `1px solid ${col.border}`,
                    background: col.bg,
                    minWidth: 'fit-content',
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{
                      background: col.bg,
                      border: `1px solid ${col.border}`,
                      color: col.text,
                    }}
                  >
                    {c.abbr}
                  </div>
                  <div className="text-sm font-medium leading-snug whitespace-nowrap" style={{ color: col.text }}>
                    {c.name}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom note */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 pt-8 border-t border-slate-200">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-blue-500">✓</span>
            <span className="text-xs text-slate-500">Skalabilitas Enterprise</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" />
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-blue-500">✓</span>
            <span className="text-xs text-slate-500">Kecepatan Terjamin</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" />
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-blue-500">✓</span>
            <span className="text-xs text-slate-500">Kepercayaan 40+ Bisnis</span>
          </div>
        </div>
      </div>
    </section>
  )
}