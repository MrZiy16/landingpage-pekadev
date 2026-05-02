import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { GlowOrb, SectionHeader } from './UI'
import { useScrollReveal, fadeUp, stagger } from '../hooks/useScrollReveal'
import { SERVICES } from '../data'

export default function ServicesSection() {
  const header = useScrollReveal()
  const grid = useScrollReveal()

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#050b18] overflow-hidden">
      <GlowOrb className="w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 opacity-15" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          ref={header.ref}
          variants={stagger}
          initial="hidden"
          animate={header.isInView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              badge="Layanan Kami"
              title="Solusi Digital"
              highlight="Lengkap & Profesional"
              subtitle="Dari website sederhana hingga sistem informasi kompleks, kami siap mewujudkan kebutuhan digital Anda."
            />
          </motion.div>
        </motion.div>

        <motion.div
          ref={grid.ref}
          variants={stagger}
          initial="hidden"
          animate={grid.isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SERVICES.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.06] hover:border-blue-500/20 transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Hover glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 60%)',
                }}
              />

              {s.tag && (
                <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-[10px] font-semibold uppercase tracking-wide">
                  {s.tag}
                </span>
              )}

              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-5 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/35 group-hover:scale-110 transition-all duration-300">
                <s.icon size={20} className="text-white" />
              </div>

              <h3 className="font-semibold text-white text-[15px] mb-2.5">{s.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>

              <div className="mt-5 flex items-center gap-1.5 text-blue-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Pelajari lebih lanjut <ArrowRight size={12} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
