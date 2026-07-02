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
    <section id="portfolio" className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden">
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
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border shadow-sm
                  ${activeFilter === cat
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                    : 'border-slate-200 bg-white text-slate-500 hover:border-slate-350 hover:text-slate-700'}`}>
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
              className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200/60
                hover:border-blue-500/20 hover:shadow-lg transition-all duration-300 shadow-sm">

              {/* Thumbnail */}
              <div className={`relative h-52 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                {p.image && <img src={p.image} alt={p.title} loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-105" />}
              </div>

              {/* Info */}
              <div className="p-5">
                <span className="inline-block px-2.5 py-0.5 mb-2.5 rounded-full bg-blue-50
                  border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-wide">
                  {p.category}
                </span>
                <h3 className="font-bold text-slate-800 text-[15px] mb-2">{p.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4 font-medium">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 text-[10px] font-mono font-semibold">{t}</span>
                  ))}
                </div>

                {/* Tombol demo */}
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/10 hover:shadow-blue-500/20
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