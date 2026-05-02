import { motion } from 'framer-motion'
import { SectionHeader } from './UI'
import { useScrollReveal, fadeUp, stagger } from '../hooks/useScrollReveal'
import { PORTFOLIO } from '../data'

export default function PortfolioSection() {
  const header = useScrollReveal()
  const grid = useScrollReveal()

  return (
    <section id="portfolio" className="relative py-24 lg:py-32 bg-[#060d1f] overflow-hidden">
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
              badge="Portfolio"
              title="Project yang"
              highlight="Telah Kami Bangun"
              subtitle="Setiap project dikerjakan dengan detail, dedikasi, dan standar kualitas tinggi."
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
          {PORTFOLIO.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="group relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.07] hover:border-white/15 transition-all duration-300 cursor-default"
            >
           {/* Preview thumbnail */}
<div className={`relative h-52 bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}>
  
  {/* Gambar Portfolio dari Assets */}
  {p.image && (
    <img 
      src={p.image} 
      alt={p.title} 
      className="absolute inset-0 w-full h-full object-cover opacity-90 z-0" 
    />
  )}

  {/* Overlay agar icon tetap kontras */}
  <div className="absolute inset-0 bg-black/30 z-10" />

  {/* Icon (Z-index harus lebih tinggi dari gambar) */}
 
</div>

              {/* Info */}
              <div className="p-5">
                <span className="inline-block px-2.5 py-0.5 mb-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[10px] font-semibold uppercase tracking-wide">
                  {p.category}
                </span>
                <h3 className="font-semibold text-white text-[15px] mb-2">{p.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-white/5 text-white/40 text-[10px] font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
