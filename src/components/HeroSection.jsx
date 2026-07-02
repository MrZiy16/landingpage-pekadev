import { motion } from 'framer-motion'
import { ArrowRight, Zap, Star } from 'lucide-react'

const STATS = [
  { val: '50+', label: 'Proyek selesai' },
  { val: '24/7', label: 'Support' },
]

function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden flex items-center"
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background: 'linear-gradient(160deg, #ffffff 0%, #f5f9ff 45%, #e6f0ff 100%)',
      }}
    >
      {/* Glow orbs */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none hidden md:block">
        <div
          className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle,rgba(59,130,246,0.18) 0%,transparent 65%)' }}
        />
        <div
          className="absolute bottom-0 -left-20 w-[350px] h-[350px] rounded-full"
          style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.12) 0%,transparent 65%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{ border: '1px solid rgba(37,99,235,0.2)', background: 'rgba(37,99,235,0.06)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-[11px] font-medium tracking-wide text-blue-700">
              Digital agency dari Pekalongan
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.15] mb-5"
          >
            Website profesional yang bikin bisnis Anda{' '}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              naik kelas
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-slate-500 text-base leading-relaxed max-w-md mb-8"
          >
            PekaDev Studio membantu UMKM dan bisnis lokal memiliki website cepat, modern, dan siap berjualan online — dari desain hingga maintenance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 mb-12"
          >
            <button
              onClick={() => scrollTo('#kontak')}
              className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-sm transition hover:opacity-90 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg,#2563eb 0%,#0ea5e9 100%)',
                boxShadow: '0 8px 24px rgba(37,99,235,0.25)',
              }}
            >
              Konsultasi gratis
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('#portfolio')}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 transition hover:-translate-y-0.5"
              style={{ border: '1px solid rgba(15,23,42,0.12)', background: 'rgba(255,255,255,0.6)' }}
            >
              Lihat portfolio
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="flex items-center gap-8"
          >
            {STATS.map((s, i) => (
              <div key={s.label} className="flex items-center gap-8">
                <div>
                  <div className="text-2xl font-bold text-slate-900">{s.val}</div>
                  <div className="text-xs text-slate-400 mt-1">{s.label}</div>
                </div>
                {i < STATS.length - 1 && <div className="w-px h-8 bg-slate-200" />}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: mockup card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative hidden lg:block"
        >
          <div
            className="relative bg-white rounded-2xl p-5 max-w-sm ml-auto"
            style={{ boxShadow: '0 20px 60px rgba(15,23,42,0.12)', border: '1px solid rgba(15,23,42,0.06)' }}
          >
            <div className="flex items-center gap-1.5 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <div className="h-3 w-2/3 bg-slate-800 rounded mb-2" />
            <div className="h-2.5 w-full bg-slate-200 rounded mb-2" />
            <div className="h-2.5 w-5/6 bg-slate-200 rounded mb-4" />
            <div className="grid grid-cols-2 gap-3">
              <div className="h-16 rounded-xl bg-[#0a1f44] flex items-center justify-center">
                <Zap size={20} className="text-white" />
              </div>
              <div className="h-16 rounded-xl bg-blue-500 flex items-center justify-center">
                <Star size={20} className="text-white" />
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-4 left-2 flex items-center gap-1.5 bg-white rounded-xl px-3 py-2 text-xs font-medium text-slate-700"
            style={{ boxShadow: '0 8px 24px rgba(15,23,42,0.1)' }}
          >
            <Zap size={12} className="text-blue-500" />
            Loading &lt; 2 detik
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 left-0 bg-white rounded-xl px-4 py-3 max-w-[220px]"
            style={{ boxShadow: '0 8px 24px rgba(15,23,42,0.1)' }}
          >
            <div className="flex gap-0.5 mb-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs text-slate-600 mb-2 leading-snug">
              Website jadi lebih cepat, klien kami naik 40%.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-700">
                RH
              </div>
              <div>
                <div className="text-[11px] font-semibold text-slate-800 leading-none">Rina H.</div>
                <div className="text-[10px] text-slate-400 leading-none mt-0.5">pemilik toko busana</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute top-1/2 -right-4 bg-white rounded-xl px-3 py-2 text-xs font-medium text-slate-700"
            style={{ boxShadow: '0 8px 24px rgba(15,23,42,0.1)' }}
          >
            100% Responsive
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}