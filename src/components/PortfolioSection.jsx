import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from './UI'
import { useScrollReveal, fadeUp, stagger } from '../hooks/useScrollReveal'
import { PORTFOLIO } from '../data'

const CATEGORIES = ['Semua', 'Sistem Informasi', 'Website UMKM', 'Company Profile', 'Mobile App']

export default function PortfolioSection() {
  const header = useScrollReveal()
  const grid = useScrollReveal()
  const [activeFilter, setActiveFilter] = useState('Semua')

  const filtered = activeFilter === 'Semua'
    ? PORTFOLIO
    : PORTFOLIO.filter(p => p.category === activeFilter)

  return (
    <section id="portfolio" className="relative py-24 lg:py-32 bg-[#060d1f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <motion.div ref={header.ref} variants={stagger} initial="hidden"
          animate={header.isInView ? 'visible' : 'hidden'} className="text-center">
          <motion.div variants={fadeUp}>
            <SectionHeader badge="Karya Kami" title="Hasil Nyata yang"
              highlight="Telah Kami Wujudkan"
              subtitle="Setiap project adalah bukti komitmen kami terhadap kualitas dan kepuasan klien." />
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2 mt-8">
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border
                  ${activeFilter === cat
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'border-white/10 text-white/40 hover:border-white/20 hover:text-white/60'}`}>
                {cat}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div ref={grid.ref} variants={stagger} initial="hidden"
          animate={grid.isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {filtered.map(p => (
            <motion.div key={p.title} variants={fadeUp}
              className="group relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.07]
                hover:border-white/15 transition-all duration-300">

              {/* Thumbnail */}
              <div className={`relative h-52 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                {p.image && <img src={p.image} alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-90" />}
              </div>

              {/* Info */}
              <div className="p-5">
                <span className="inline-block px-2.5 py-0.5 mb-2.5 rounded-full bg-blue-500/10
                  border border-blue-500/20 text-blue-300 text-[10px] font-semibold uppercase tracking-wide">
                  {p.category}
                </span>
                <h3 className="font-semibold text-white text-[15px] mb-2">{p.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 text-white/40 text-[10px] font-mono">{t}</span>
                  ))}
                </div>

                {/* Tombol demo */}
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500
                      text-white text-xs font-semibold transition-all duration-200">
                    🔗 Lihat Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}