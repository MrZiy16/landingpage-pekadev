import { motion } from 'framer-motion'
import { GlowOrb, SectionHeader } from './UI'
import { useScrollReveal, fadeUp, stagger } from '../hooks/useScrollReveal'
import { WHY_US } from '../data'

export default function WhyUsSection() {
  const header = useScrollReveal()
  const grid = useScrollReveal()

  return (
    <section className="relative py-24 lg:py-32 bg-[#050b18] overflow-hidden">
      <GlowOrb className="w-[500px] h-[500px] bottom-0 right-0 opacity-15" />

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
              badge="Keunggulan Kami"
              title="Kenapa Pilih"
              highlight="PekaDev Studio?"
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
          {WHY_US.map((w) => (
            <motion.div
              key={w.label}
              variants={fadeUp}
              className="group flex gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.06] hover:border-blue-500/20 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <w.icon size={18} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-1.5">{w.label}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{w.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
