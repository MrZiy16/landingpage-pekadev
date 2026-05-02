import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { GlowOrb, SectionHeader } from './UI'
import { useScrollReveal, fadeUp, stagger } from '../hooks/useScrollReveal'
import { TESTIMONIALS } from '../data'

export default function TestimonialsSection() {
  const header = useScrollReveal()
  const grid = useScrollReveal()

  return (
    <section className="relative py-24 lg:py-32 bg-[#060d1f] overflow-hidden">
      <GlowOrb className="w-[400px] h-[400px] top-0 left-1/2 -translate-x-1/2 opacity-15" />

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
              badge="Testimoni"
              title="Apa Kata"
              highlight="Klien Kami?"
              subtitle="Kepuasan klien adalah prioritas utama kami di setiap project."
            />
          </motion.div>
        </motion.div>

        <motion.div
          ref={grid.ref}
          variants={stagger}
          initial="hidden"
          animate={grid.isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-5"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/15 transition-all duration-300 overflow-hidden group"
            >
              {/* Top line accent */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-white/60 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-white/30 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
