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
  const duplicatedClients = [...CLIENTS, ...CLIENTS]

  return (
    <section
      id="clients"
      className="relative py-16 overflow-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="relative z-10 max-w-full">
        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-12 px-5 sm:px-8">
          <div className="flex-1 max-w-[120px] h-px"
            style={{ background: 'linear-gradient(to right,transparent,rgba(255,255,255,0.08))' }} />
          <span className="text-[11px] font-medium tracking-[0.18em] uppercase whitespace-nowrap"
            style={{ color: 'rgba(148,163,255,0.4)' }}>
            Dipercaya oleh 40+ Instansi &amp; Bisnis
          </span>
          <div className="flex-1 max-w-[120px] h-px"
            style={{ background: 'linear-gradient(to left,transparent,rgba(255,255,255,0.08))' }} />
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />

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
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 pt-8 border-t border-slate-800"
        >
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-emerald-400">✓</span>
            <span className="text-xs text-slate-400">Skalabilitas Enterprise</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700" />
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-emerald-400">✓</span>
            <span className="text-xs text-slate-400">Kecepatan Terjamin</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700" />
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-emerald-400">✓</span>
            <span className="text-xs text-slate-400">Kepercayaan 40+ Bisnis</span>
          </div>
        </div>
      </div>

      {/* CSS animation for marquee */}
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: scroll 40s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  )
}