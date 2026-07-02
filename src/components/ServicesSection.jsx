import { motion } from 'framer-motion'
import { Globe, Home, TrendingUp, Monitor, ArrowRight } from 'lucide-react'
import { useScrollReveal, fadeUp, stagger } from '../hooks/useScrollReveal'

const SERVICES_NEW = [
  {
    icon: Globe,
    iconColor: '#2563eb',
    iconBg: 'linear-gradient(135deg,rgba(59,130,246,0.15),rgba(6,182,212,0.15))',
    iconBorder: 'rgba(59,130,246,0.2)',
    tag: 'Paling Diminati',
    problem: 'Masalah: Bisnis kurang dipercaya online',
    title: 'Website Company Profile',
    desc: 'Ubah kesan pertama calon klien menjadi kepercayaan nyata. Website profesional yang mencerminkan nilai dan kualitas bisnis Anda.',
    features: ['Desain premium & mobile-friendly', 'SEO-ready untuk Google ranking', 'Loading cepat < 2 detik'],
  },
  {
    icon: Home,
    iconColor: '#16a34a',
    iconBg: 'linear-gradient(135deg,rgba(22,163,74,0.15),rgba(20,184,166,0.15))',
    iconBorder: 'rgba(22,163,74,0.2)',
    tag: null,
    problem: 'Masalah: Administrasi sekolah masih manual',
    title: 'Website Sekolah',
    desc: 'Digitalisasi institusi Anda dengan sistem informasi terintegrasi. Tampilkan profil sekolah dan kelola data akademik dalam satu platform.',
    features: ['Portal siswa, guru & orang tua', 'Sistem absensi & nilai digital', 'Branding institusi yang kuat'],
  },
  {
    icon: TrendingUp,
    iconColor: '#d97706',
    iconBg: 'linear-gradient(135deg,rgba(217,119,6,0.15),rgba(245,158,11,0.15))',
    iconBorder: 'rgba(217,119,6,0.2)',
    tag: 'High ROI',
    problem: 'Masalah: Produk bagus tapi penjualan sepi',
    title: 'Landing Page UMKM',
    desc: 'Halaman penjualan yang dirancang khusus untuk konversi. Setiap elemen ditempatkan strategis untuk mengubah pengunjung menjadi pembeli.',
    features: ['Copywriting persuasif & CTA kuat', 'Integrasi WhatsApp & marketplace', 'Optimasi iklan Meta & Google Ads'],
  },
  {
    icon: Monitor,
    iconColor: '#7c3aed',
    iconBg: 'linear-gradient(135deg,rgba(124,58,237,0.15),rgba(139,92,246,0.15))',
    iconBorder: 'rgba(124,58,237,0.2)',
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
      className="relative py-20 lg:py-28 overflow-hidden bg-white"
    >
      {/* Grid bg */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(37,99,235,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(37,99,235,0.03) 1px,transparent 1px)',
          backgroundSize: '52px 52px',
        }}
      />
      {/* Top glow */}
      <div
        aria-hidden="true"
        className="absolute -top-16 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(59,130,246,0.08) 0%,transparent 70%)' }}
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-5 border-blue-500/20 bg-blue-50">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-blue-600">
                Layanan Kami
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 leading-tight tracking-tight mb-4"
            >
              Solusi Digital{' '}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                yang Menghasilkan
              </span>
            </h2>
            <p className="text-sm font-medium max-w-xl mx-auto leading-relaxed text-slate-500">
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
              className="group relative p-6 sm:p-7 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 bg-slate-50 border border-slate-200/60 hover:border-blue-500/30 hover:bg-blue-50/20 shadow-sm hover:shadow-md"
            >
              {/* Neon top line */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: 'linear-gradient(90deg,transparent,rgba(59,130,246,0.4),transparent)' }}
              />
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 0%,rgba(59,130,246,0.04),transparent 60%)' }}
              />

              {/* Tag */}
              {s.tag && (
                <span
                  className="absolute top-5 right-5 px-2.5 py-0.5 rounded-full text-[9.5px] font-bold tracking-widest uppercase bg-blue-500/10 border border-blue-500/25 text-blue-600"
                >
                  {s.tag}
                </span>
              )}

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-sm"
                style={{ background: s.iconBg, border: `1px solid ${s.iconBorder}` }}
              >
                <s.icon size={22} color={s.iconColor} strokeWidth={1.8} />
              </div>

              {/* Problem label */}
              <p className="text-[10.5px] font-bold tracking-widest uppercase mb-2 text-blue-600/80">
                {s.problem}
              </p>

              {/* Title */}
              <h3 className="text-[16px] font-bold text-slate-800 mb-2.5 leading-snug">{s.title}</h3>

              {/* Desc */}
              <p className="text-[13.5px] font-medium leading-relaxed mb-5 text-slate-500">
                {s.desc}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-1.5 mb-5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[12px] text-slate-500 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex items-center gap-1.5 text-[12.5px] font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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