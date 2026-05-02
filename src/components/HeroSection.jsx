import { motion, useScroll, useTransform } from 'framer-motion'
import { MessageCircle, ExternalLink, ChevronDown, Zap, ArrowRight } from 'lucide-react'
import { GlowOrb } from './UI'
import { HERO_STATS } from '../data'

const FLOATING_TAGS = [
  { label: 'React.js',  pos: 'top-[20%] right-[8%]',   delay: 0 },
  { label: 'Laravel',   pos: 'top-[35%] left-[5%]',    delay: 0.5 },
  { label: 'Node.js',   pos: 'bottom-[28%] right-[7%]', delay: 0.3 },
  { label: 'MySQL',     pos: 'bottom-[32%] left-[10%]', delay: 0.7 },
]

function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 120])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050b18]"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.028]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,130,246,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.8) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glows */}
      <motion.div style={{ y }} aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <GlowOrb className="w-[600px] h-[600px] -top-32 -right-32 opacity-40" />
        <GlowOrb className="w-[500px] h-[500px] bottom-0 -left-20 opacity-30" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[120px] opacity-10"
          style={{ background: 'radial-gradient(ellipse,rgba(99,102,241,0.8),transparent 70%)' }}
        />
      </motion.div>

      {/* Floating tech badges */}
      {FLOATING_TAGS.map((b) => (
        <motion.div
          key={b.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{ delay: b.delay + 1, duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute hidden lg:flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs text-white/50 font-mono ${b.pos}`}
          aria-hidden="true"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          {b.label}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 text-center pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-medium mb-8"
        >
          <Zap size={12} className="text-cyan-400" />
          Web Development &amp; Digital Solutions — Pekalongan
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
        >
          Build Better
          <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
            Digital Solutions
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-white/50 text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Kami membantu UMKM, perusahaan, sekolah, dan instansi membangun website profesional
          dan solusi digital modern yang{' '}
          <span className="text-white/80">menghasilkan nyata</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('#contact')}
            className="group flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 text-base"
          >
            <MessageCircle size={18} />
            Konsultasi Gratis
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo('#portfolio')}
            className="flex items-center gap-2.5 px-8 py-4 rounded-2xl border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10 font-semibold transition-all duration-300 text-base backdrop-blur-sm"
          >
            Lihat Portfolio
            <ExternalLink size={16} />
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-16 flex items-center justify-center gap-8 sm:gap-14 flex-wrap"
        >
          {HERO_STATS.map((s, i) => (
            <div key={s.label} className="flex items-center gap-8 sm:gap-14">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{s.val}</div>
                <div className="text-xs text-white/40 mt-0.5">{s.label}</div>
              </div>
              {i < HERO_STATS.length - 1 && (
                <div className="hidden sm:block w-px h-8 bg-white/10" />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ delay: 1.3, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors"
        aria-label="Scroll ke bawah"
      >
        <ChevronDown size={24} />
      </motion.button>
    </section>
  )
}
