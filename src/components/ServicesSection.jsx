import { motion } from 'framer-motion'
import { Globe, Home, TrendingUp, Monitor, ArrowRight } from 'lucide-react'
import { useScrollReveal, fadeUp, stagger } from '../hooks/useScrollReveal'

const SERVICES_NEW = [
  {
    icon: Globe,
    iconColor: '#60a5fa',
    iconBg: 'linear-gradient(135deg,rgba(29,78,216,0.3),rgba(8,145,178,0.3))',
    iconBorder: 'rgba(96,165,250,0.2)',
    tag: 'Paling Diminati',
    problem: 'Masalah: Bisnis kurang dipercaya online',
    title: 'Website Company Profile',
    desc: 'Ubah kesan pertama calon klien menjadi kepercayaan nyata. Website profesional yang mencerminkan nilai dan kualitas bisnis Anda.',
    features: ['Desain premium & mobile-friendly', 'SEO-ready untuk Google ranking', 'Loading cepat < 2 detik'],
  },
  {
    icon: Home,
    iconColor: '#6ee7b7',
    iconBg: 'linear-gradient(135deg,rgba(20,120,80,0.3),rgba(6,95,70,0.3))',
    iconBorder: 'rgba(52,211,153,0.2)',
    tag: null,
    problem: 'Masalah: Administrasi sekolah masih manual',
    title: 'Website Sekolah',
    desc: 'Digitalisasi institusi Anda dengan sistem informasi terintegrasi. Tampilkan profil sekolah dan kelola data akademik dalam satu platform.',
    features: ['Portal siswa, guru & orang tua', 'Sistem absensi & nilai digital', 'Branding institusi yang kuat'],
  },
  {
    icon: TrendingUp,
    iconColor: '#fcd34d',
    iconBg: 'linear-gradient(135deg,rgba(180,100,20,0.3),rgba(120,53,15,0.3))',
    iconBorder: 'rgba(251,191,36,0.2)',
    tag: 'High ROI',
    problem: 'Masalah: Produk bagus tapi penjualan sepi',
    title: 'Landing Page UMKM',
    desc: 'Halaman penjualan yang dirancang khusus untuk konversi. Setiap elemen ditempatkan strategis untuk mengubah pengunjung menjadi pembeli.',
    features: ['Copywriting persuasif & CTA kuat', 'Integrasi WhatsApp & marketplace', 'Optimasi iklan Meta & Google Ads'],
  },
  {
    icon: Monitor,
    iconColor: '#c4b5fd',
    iconBg: 'linear-gradient(135deg,rgba(99,40,180,0.3),rgba(67,56,202,0.3))',
    iconBorder: 'rgba(167,139,250,0.2)',
    tag: null,
    problem: 'Masalah: Proses bisnis lambat & tidak efisien',
    title: 'Custom Web App',
    desc: 'Sistem digital yang dibangun 100% sesuai alur kerja bisnis Anda. Otomasi proses, hemat waktu, dan tingkatkan produktivitas tim.',
    features: ['Analisis kebutuhan mendalam', 'Dashboard & laporan real-time', 'Skalabel & mudah dikembangkan'],
  },
]

export default function ServicesSection() {
  const header = useScrollReveal()
  const grid = useScrollReveal()

  return (
    <section
      id="services"
      className="relative py-20 lg:py-28 overflow-hidden"
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
      {/* Top glow */}
      <div
        aria-hidden="true"
        className="absolute -top-16 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(29,78,216,0.1) 0%,transparent 70%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div
          ref={header.ref}
          variants={stagger}
          initial="hidden"
          animate={header.isInView ? 'visible' : 'hidden'}
          className="text-center mb-14"
        >
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-5"
              style={{ border: '1px solid rgba(96,165,250,0.2)', background: 'rgba(96,165,250,0.06)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span className="text-[11px] font-medium tracking-[0.14em] uppercase"
                style={{ color: 'rgba(147,197,253,0.8)' }}>
                Layanan Kami
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight tracking-tight mb-4"
            >
              Solusi Digital{' '}
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                yang Menghasilkan
              </span>
            </h2>
            <p className="text-sm font-light max-w-xl mx-auto leading-relaxed"
              style={{ color: 'rgba(203,213,255,0.45)' }}>
              Kami tidak hanya membangun website — kami membangun aset digital yang bekerja keras untuk bisnis Anda.
            </p>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          ref={grid.ref}
          variants={stagger}
          initial="hidden"
          animate={grid.isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {SERVICES_NEW.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              className="group relative p-6 sm:p-7 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.065)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(96,165,250,0.25)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.045)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.065)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.025)'
              }}
            >
              {/* Neon top line */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: 'linear-gradient(90deg,transparent,rgba(96,165,250,0.5),transparent)' }}
              />
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 0%,rgba(59,130,246,0.08),transparent 60%)' }}
              />

              {/* Tag */}
              {s.tag && (
                <span
                  className="absolute top-5 right-5 px-2.5 py-0.5 rounded-full text-[9.5px] font-semibold tracking-widest uppercase"
                  style={{
                    background: 'rgba(96,165,250,0.1)',
                    border: '1px solid rgba(96,165,250,0.25)',
                    color: '#93c5fd',
                  }}
                >
                  {s.tag}
                </span>
              )}

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: s.iconBg, border: `1px solid ${s.iconBorder}` }}
              >
                <s.icon size={22} color={s.iconColor} strokeWidth={1.8} />
              </div>

              {/* Problem label */}
              <p className="text-[10.5px] font-500 tracking-widest uppercase mb-2"
                style={{ color: 'rgba(96,165,250,0.55)' }}>
                {s.problem}
              </p>

              {/* Title */}
              <h3 className="text-[16px] font-bold text-white mb-2.5 leading-snug">{s.title}</h3>

              {/* Desc */}
              <p className="text-[13.5px] font-light leading-relaxed mb-5"
                style={{ color: 'rgba(203,213,255,0.45)' }}>
                {s.desc}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-1.5 mb-5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[12px]"
                    style={{ color: 'rgba(255,255,255,0.35)' }}>
                    <span className="w-1 h-1 rounded-full bg-sky-400 opacity-60 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex items-center gap-1.5 text-[12.5px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: 'rgba(96,165,250,0.6)' }}>
                Konsultasi sekarang
                <ArrowRight size={13} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}