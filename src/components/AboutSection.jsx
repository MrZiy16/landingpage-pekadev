import { motion } from 'framer-motion'
import { Code2, Smartphone, Zap, Shield } from 'lucide-react'
import { GlowOrb, SectionHeader } from './UI'
import { useScrollReveal, fadeUp, stagger } from '../hooks/useScrollReveal'
import { TECH_STACK } from '../data'

const ABOUT_CARDS = [
  { icon: Code2,      label: 'Clean Code',   value: 'Best Practice',  gradient: 'from-blue-600 to-blue-400' },
  { icon: Smartphone, label: 'Responsive',   value: 'All Devices',    gradient: 'from-cyan-600 to-blue-400' },
  { icon: Zap,        label: 'Fast Loading', value: '< 2s Load Time', gradient: 'from-indigo-600 to-blue-400' },
  { icon: Shield,     label: 'Secure',       value: 'SSL & Firewall', gradient: 'from-blue-700 to-cyan-500' },
]

export default function AboutSection() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#060d1f] overflow-hidden">
      <GlowOrb className="w-[400px] h-[400px] -top-20 right-0 opacity-20" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left – text */}
          <div>
            <motion.div variants={fadeUp}>
              <SectionHeader
                badge="Tentang Kami"
                title="Studio Digital dari"
                highlight="Pekalongan"
                center={false}
              />
            </motion.div>

            <motion.p variants={fadeUp} className="text-white/50 leading-relaxed mb-5 text-sm lg:text-base">
              PekaDev Studio adalah web development &amp; digital solution agency yang lahir dari
              Pekalongan untuk membantu bisnis lokal berkembang secara digital. Kami percaya bahwa
              setiap bisnis — sekecil apapun — berhak tampil profesional di dunia digital.
            </motion.p>
            <motion.p variants={fadeUp} className="text-white/50 leading-relaxed mb-8 text-sm lg:text-base">
              Tim kami terdiri dari developer dan designer berpengalaman yang telah menangani 50+
              project untuk klien dari berbagai sektor: UMKM, sekolah, klinik, konstruksi, dan
              instansi pemerintahan.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5">
              {TECH_STACK.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 text-xs font-mono"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right – feature cards */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
            {ABOUT_CARDS.map((c) => (
              <div
                key={c.label}
                className="group p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 cursor-default"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <c.icon size={18} className="text-white" />
                </div>
                <div className="text-sm font-semibold text-white mb-1">{c.label}</div>
                <div className="text-xs text-white/40">{c.value}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
