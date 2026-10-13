import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// ====== EDIT BAGIAN INI ======
const WA_NUMBER = '6289630961201' // nomor WA lo, format 62..., tanpa + atau 0 di depan
const WA_TEXT = 'Halo, saya tertarik minta contoh tampilan website untuk usaha saya.'
const PREVIEW_SRC = '../assets/batik.png'  // screenshot project asli, rasio ~16:10
const PREVIEW_ALT = 'Tampilan website hasil kerja PekaDev Studio'
const PREVIEW_URL = 'pekatools.web.id'
const POINTS = [
  { title: 'Contoh tampilan gratis', desc: 'Lihat dulu hasilnya, cocok baru lanjut' },
  { title: 'Estimasi 3–7 hari', desc: 'Untuk landing page, sesuaikan dengan kenyataan' },
  { title: 'Perawatan bulanan', desc: 'Opsional, hosting dan update ditangani' },
]
// =============================

const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`

// Motif kawung (batik), garis cyan, diulang sebagai background
const KAWUNG = `<svg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72'><g fill='none' stroke='#0891B2' stroke-width='1.4'><ellipse cx='36' cy='18' rx='9' ry='18'/><ellipse cx='36' cy='54' rx='9' ry='18'/><ellipse cx='18' cy='36' rx='18' ry='9'/><ellipse cx='54' cy='36' rx='18' ry='9'/></g></svg>`
const KAWUNG_URL = `url("data:image/svg+xml,${encodeURIComponent(KAWUNG)}")`

function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function HeroSection() {
  const reduceMotion = useReducedMotion()
  const [previewOk, setPreviewOk] = useState(true)

  const reveal = reduceMotion
    ? {}
    : {
      initial: { opacity: 0, y: 14 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.7, ease: 'easeOut' },
    }

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden flex flex-col"
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background: 'linear-gradient(160deg, #ffffff 0%, #ecfafd 50%, #cdf1fa 100%)',
      }}
    >
      {/* Motif batik: jelas di kanan, pudar di belakang teks */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: KAWUNG_URL,
          backgroundSize: '72px 72px',
          opacity: 0.4,
          WebkitMaskImage: 'linear-gradient(to left, black 35%, transparent 80%)',
          maskImage: 'linear-gradient(to left, black 35%, transparent 80%)',
        }}
      />

      <motion.div
        {...reveal}
        className={`relative z-10 flex-1 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 pt-32 pb-16 grid gap-16 items-center ${previewOk ? 'lg:grid-cols-[1.1fr_1fr]' : ''
          }`}
      >
        {/* Kiri */}
        <div>
          <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-extrabold text-[#0B2540] leading-[1.02] tracking-[-0.03em] mb-7 max-w-2xl">
            Usaha Anda sudah ramai di dunia nyata. Saatnya ramai di Google.
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg mb-9">
            Saya bantu usaha batik, konveksi, kuliner, dan bengkel di Pekalongan punya website yang mudah ditemukan
            pelanggan, dari desain sampai online.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-[#0E7490] text-white font-bold text-sm shadow-[0_10px_28px_rgba(14,116,144,0.3)] transition-colors hover:bg-[#0B5F77] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2540]"
            >
              Chat WhatsApp, minta contoh gratis
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <button
              onClick={() => scrollTo('#portfolio')}
              className="px-1 py-2 font-semibold text-sm text-[#0B2540] underline underline-offset-4 decoration-[#22D3EE] decoration-2 hover:decoration-[#0B2540] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E7490]"
            >
              Lihat hasil kerja
            </button>
          </div>
        </div>

        {/* Kanan: screenshot asli dengan blok cyan di belakangnya */}
        {previewOk && (
          <div className="relative hidden lg:block">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-5 translate-y-5 rounded-xl bg-[#22D3EE]"
            />
            <div className="relative rounded-xl bg-white overflow-hidden border border-slate-200 shadow-[0_24px_60px_rgba(11,37,64,0.2)]">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100 bg-slate-50">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="ml-3 text-[11px] text-slate-400">{PREVIEW_URL}</span>
              </div>
              <img
                src={PREVIEW_SRC}
                alt={PREVIEW_ALT}
                width="1200"
                height="750"
                loading="eager"
                decoding="async"
                onError={() => setPreviewOk(false)}
                className="w-full h-auto block"
              />
            </div>
          </div>
        )}
      </motion.div>

      {/* Strip bawah: tiga janji, bukan angka */}
      <div className="relative z-10 border-t border-cyan-900/10 bg-white/50 backdrop-blur-sm">
        <ul className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-cyan-900/10">
          {POINTS.map((p) => (
            <li key={p.title} className="py-5 sm:px-6 first:sm:pl-0 last:sm:pr-0">
              <div className="text-sm font-bold text-[#0B2540]">{p.title}</div>
              <div className="text-xs text-slate-500 mt-1">{p.desc}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}