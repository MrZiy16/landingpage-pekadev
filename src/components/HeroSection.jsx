import { motion, useScroll, useTransform } from 'framer-motion'
import { MessageCircle, ExternalLink, ArrowRight } from 'lucide-react'
import heroBg from '../assets/hero.jpg?w=1920&format=webp&quality=75'
import { HERO_STATS } from '../data'

const FLOATING_TAGS = [
  { label: 'Flutter',  pos: 'top-[16%] right-[4%]',    delay: 0 },
  { label: 'Laravel',  pos: 'top-[32%] left-[3%]',     delay: 0.5 },
  { label: 'React.js', pos: 'bottom-[26%] right-[5%]', delay: 0.3 },
  { label: 'Node.js',  pos: 'bottom-[28%] left-[7%]',  delay: 0.7 },
]

function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 100])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden w-full"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", overflowX: 'hidden' }}
    >
      {/* Background image */}
      <motion.div style={{ y }} className="absolute inset-0 scale-110" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backfaceVisibility: 'hidden', // Prevent flickering
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      {/* Grid pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(30,90,220,0.055) 1px,transparent 1px),linear-gradient(90deg,rgba(30,90,220,0.055) 1px,transparent 1px)',
          backgroundSize: '52px 52px',
        }}
      />

      {/* Glow orbs */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 -right-20 w-[400px] h-[400px] lg:w-[560px] lg:h-[560px] rounded-full"
          style={{ background: 'radial-gradient(circle,rgba(29,78,216,0.22) 0%,transparent 65%)' }}
        />
        <div
          className="absolute -bottom-20 -left-24 w-[320px] h-[320px] lg:w-[480px] lg:h-[480px] rounded-full"
          style={{ background: 'radial-gradient(circle,rgba(79,30,160,0.18) 0%,transparent 65%)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] lg:w-[600px] lg:h-[280px] rounded-full"
          style={{ background: 'radial-gradient(ellipse,rgba(14,50,140,0.14) 0%,transparent 70%)' }}
        />
      </div>

      {/* Floating badges — lg only */}
      {FLOATING_TAGS.map((b) => (
        <motion.div
          key={b.label}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{ delay: b.delay + 1, duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] tracking-wider ${b.pos}`}
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(59,130,246,0.15)',
            color: 'rgba(148,179,255,0.5)',
          }}
          aria-hidden="true"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-70" />
          {b.label}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center w-full max-w-3xl mx-auto px-5 sm:px-8 pt-24 pb-16 flex flex-col items-center">

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-7"
          style={{
            border: '1px solid rgba(96,165,250,0.2)',
            background: 'rgba(96,165,250,0.06)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
          <span
            className="text-[10px] sm:text-[11px] font-normal tracking-widest uppercase"
            style={{ color: 'rgba(147,197,253,0.85)' }}
          >
            Digital Agency — Pekalongan, Jawa Tengah
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-[2rem] sm:text-5xl lg:text-[62px] font-extrabold text-white leading-[1.15] tracking-tight mb-5 w-full"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", wordBreak: 'keep-all' }}
        >
          Solusi Digital Modern{' '}
          <span className="block">
            untuk{' '}
            <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              UMKM, Sekolah,Kuliah
            </span>
          </span>
          <span className="block">dan Perusahaan</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-sm sm:text-base lg:text-[15.5px] font-light leading-relaxed max-w-[540px] mx-auto mb-9"
          style={{ color: 'rgba(203,213,255,0.52)' }}
        >
          Kami membantu bisnis meningkatkan kredibilitas, penjualan, dan efisiensi
          melalui website profesional yang{' '}
          <span style={{ color: 'rgba(203,213,255,0.82)' }}>
            cepat, modern, dan siap bersaing
          </span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollTo('#contact')}
            className="group flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 rounded-xl text-white font-medium text-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg,#1d4ed8 0%,#0284c7 100%)',
              boxShadow: '0 0 0 1px rgba(96,165,250,0.3), 0 8px 24px rgba(29,78,216,0.3)',
            }}
          >
            <MessageCircle size={16} />
            Konsultasi Project Sekarang
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollTo('#portfolio')}
            className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 hover:-translate-y-0.5"
            style={{
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.04)',
              color: 'rgba(255,255,255,0.72)',
              backdropFilter: 'blur(12px)',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
          >
            Lihat Hasil Project Kami
            <ExternalLink size={14} />
          </button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="flex items-center justify-center w-full max-w-sm sm:max-w-xl mx-auto rounded-2xl py-5 px-4 sm:px-10"
          style={{
            background: 'rgba(255,255,255,0.025)',
            border: '1px solid rgba(255,255,255,0.06)',
            backdropFilter: 'blur(16px)',
          }}
        >
          {HERO_STATS.map((s, i) => (
            <div key={s.label} className="flex items-center flex-1">
              <div className="text-center flex-1">
                <div
                  className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight"
                  style={{ fontFamily: "'Syne', sans-serif", color: '#fff' }}
                >
                  <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                    {s.val.replace('+', '')}
                  </span>+
                </div>
                <div
                  className="text-[10px] sm:text-[11px] uppercase tracking-widest mt-1.5 font-normal"
                  style={{ color: 'rgba(148,163,255,0.45)' }}
                >
                  {s.label}
                </div>
              </div>
              {i < HERO_STATS.length - 1 && (
                <div
                  className="hidden sm:block w-px h-10 mx-2 shrink-0"
                  style={{ background: 'rgba(255,255,255,0.07)' }}
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer"
        onClick={() => scrollTo('#about')}
      >
        <div
          className="w-px h-7"
          style={{ background: 'linear-gradient(to bottom,rgba(96,165,250,0.4),transparent)' }}
        />
        <div className="w-1 h-1 rounded-full" style={{ background: 'rgba(96,165,250,0.5)' }} />
      </motion.div>
    </section>
  )
}