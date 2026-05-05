import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data'

function scrollTo(href) {
  if (!href) return
  // normalisasi: terima '#id', '/#id' atau URL penuh dengan hash
  const hashIndex = href.indexOf('#')
  const selector = hashIndex === -1 ? href : '#' + href.slice(hashIndex + 1)
  const id = selector.startsWith('#') ? selector : `#${selector}`
  const el = document.querySelector(id) || document.getElementById(id.replace('#', ''))
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    return true
  }
  return false
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    // beri delay supaya animasi tutup menu selesai dan tidak menghalangi scroll
    setTimeout(() => scrollTo(href), 220)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050b18]/90 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav('#hero')}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow">
          <img src="/src/assets/logo.png" alt="" />
          </div>
          <span className="font-bold text-white text-lg tracking-tight">
            Peka<span className="text-blue-400">Dev</span>
            <span className="text-white/50 font-light ml-1 text-sm">Studio</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNav(l.href)}
              className="px-4 py-2 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() => handleNav('#contact')}
          className="hidden md:flex px-5 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-200"
        >
          Konsultasi Gratis
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-all"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#050b18]/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.label}
                  onClick={() => handleNav(l.href)}
                  className="px-4 py-3 text-sm text-white/70 hover:text-white text-left rounded-lg hover:bg-white/5 transition-all"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('#contact')}
                className="mt-2 px-5 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
              >
                Konsultasi Gratis
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
