import { motion } from 'framer-motion'
import { useScrollReveal, fadeUp, stagger } from '../hooks/useScrollReveal'
import {
  MessageCircle, FileText, Code2, RefreshCw, Rocket, HeadphonesIcon
} from 'lucide-react'

const STEPS = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Konsultasi',
    desc: 'Kami dengarkan kebutuhan, tujuan, dan tantangan bisnis Anda secara mendalam sebelum memulai apapun.',
    detail: 'Gratis, tanpa komitmen',
    color: '#60a5fa',
    glow: 'rgba(96,165,250,0.15)',
    border: 'rgba(96,165,250,0.25)',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Perencanaan',
    desc: 'Kami susun proposal, sitemap, wireframe, dan timeline project yang transparan dan terukur.',
    detail: 'Timeline & budget jelas',
    color: '#818cf8',
    glow: 'rgba(129,140,248,0.15)',
    border: 'rgba(129,140,248,0.25)',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Development',
    desc: 'Tim developer kami mulai membangun dengan standar kode bersih, performa tinggi, dan desain pixel-perfect.',
    detail: 'Update progres berkala',
    color: '#38bdf8',
    glow: 'rgba(56,189,248,0.15)',
    border: 'rgba(56,189,248,0.25)',
  },
  {
    number: '04',
    icon: RefreshCw,
    title: 'Revisi',
    desc: 'Anda bebas memberikan masukan. Kami pastikan hasil akhir sesuai ekspektasi sebelum diluncurkan.',
    detail: 'Revisi hingga puas',
    color: '#34d399',
    glow: 'rgba(52,211,153,0.15)',
    border: 'rgba(52,211,153,0.25)',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Launching',
    desc: 'Website Anda go-live dengan domain, hosting, SSL, dan semua konfigurasi teknis yang sudah siap.',
    detail: 'Deploy & domain setup',
    color: '#fbbf24',
    glow: 'rgba(251,191,36,0.15)',
    border: 'rgba(251,191,36,0.25)',
  },
  {
    number: '06',
    icon: HeadphonesIcon,
    title: 'Support',
    desc: 'Kami tidak menghilang setelah project selesai. Tim kami siap membantu maintenance dan pengembangan lanjutan.',
    detail: 'Garansi & after-sales',
    color: '#c084fc',
    glow: 'rgba(192,132,252,0.15)',
    border: 'rgba(192,132,252,0.25)',
  },
]

export default function ProcessSection() {
  const header = useScrollReveal()
  const timeline = useScrollReveal()

  return (
    <section
      id="process"
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: '#020710', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Grid bg */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(30,90,220,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(30,90,220,0.035) 1px,transparent 1px)',
          backgroundSize: '52px 52px',
        }}
      />

      {/* Center glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(29,78,216,0.07) 0%,transparent 70%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div
          ref={header.ref}
          variants={stagger}
          initial="hidden"
          animate={header.isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
              style={{ border: '1px solid rgba(96,165,250,0.2)', background: 'rgba(96,165,250,0.06)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span
                className="text-[11px] font-medium tracking-[0.14em] uppercase"
                style={{ color: 'rgba(147,197,253,0.8)' }}
              >
                Cara Kami Bekerja
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight tracking-tight mb-4"
            >
              Proses Transparan,{' '}
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                Hasil Terjamin
              </span>
            </h2>
            <p
              className="text-sm font-light max-w-lg mx-auto leading-relaxed"
              style={{ color: 'rgba(203,213,255,0.45)' }}
            >
              Setiap project kami kerjakan dengan alur yang terstruktur — dari konsultasi pertama hingga support jangka panjang.
            </p>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          ref={timeline.ref}
          variants={stagger}
          initial="hidden"
          animate={timeline.isInView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Vertical line desktop */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden lg:block"
            style={{ background: 'linear-gradient(to bottom,transparent,rgba(96,165,250,0.15) 10%,rgba(96,165,250,0.15) 90%,transparent)' }}
          />

          <div className="flex flex-col gap-6 lg:gap-0">
            {STEPS.map((s, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={s.number}
                  variants={fadeUp}
                  className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-0 ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } lg:mb-10`}
                >
                  {/* Card */}
                  <div className={`w-full lg:w-[calc(50%-40px)] ${isLeft ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div
                      className="group relative p-6 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                      style={{
                        background: 'rgba(255,255,255,0.025)',
                        border: `1px solid rgba(255,255,255,0.065)`,
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = s.border
                        e.currentTarget.style.background = s.glow
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.065)'
                        e.currentTarget.style.background = 'rgba(255,255,255,0.025)'
                      }}
                    >
                      {/* Neon top */}
                      <div
                        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: `linear-gradient(90deg,transparent,${s.color},transparent)` }}
                      />

                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                          style={{ background: s.glow, border: `1px solid ${s.border}` }}
                        >
                          <s.icon size={20} color={s.color} strokeWidth={1.8} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span
                              className="text-[10px] font-bold tracking-widest"
                              style={{ color: s.color, opacity: 0.6 }}
                            >
                              STEP {s.number}
                            </span>
                          </div>
                          <h3 className="text-[15px] font-bold text-white mb-2">{s.title}</h3>
                          <p
                            className="text-[13px] font-light leading-relaxed mb-3"
                            style={{ color: 'rgba(203,213,255,0.45)' }}
                          >
                            {s.desc}
                          </p>
                          <span
                            className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full"
                            style={{ background: s.glow, border: `1px solid ${s.border}`, color: s.color }}
                          >
                            <span className="w-1 h-1 rounded-full" style={{ background: s.color }} />
                            {s.detail}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center dot — desktop only */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-20 items-center justify-center z-10">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-[11px] font-bold"
                      style={{
                        background: '#03080f',
                        border: `1.5px solid ${s.border}`,
                        color: s.color,
                        boxShadow: `0 0 16px ${s.glow}`,
                      }}
                    >
                      {s.number}
                    </div>
                  </div>

                  {/* Spacer opposite side — desktop */}
                  <div className="hidden lg:block w-[calc(50%-40px)]" />
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-sm mb-5" style={{ color: 'rgba(203,213,255,0.35)' }}>
            Siap memulai project Anda?
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg,#1d4ed8,#0284c7)',
              boxShadow: '0 0 0 1px rgba(96,165,250,0.3), 0 8px 24px rgba(29,78,216,0.3)',
            }}
          >
            <MessageCircle size={16} />
            Mulai Konsultasi Gratis
          </button>
        </motion.div>

      </div>
    </section>
  )
}