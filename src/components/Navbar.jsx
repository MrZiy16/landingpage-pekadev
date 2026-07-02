import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data'
import logo from '../assets/logo.png'

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'backdrop-blur-md md:backdrop-blur-xl shadow-lg'
        : 'bg-transparent'
        }`}
      style={scrolled ? {
        background: 'rgba(240, 247, 255, 0.92)',
        borderBottom: '1px solid rgba(59, 130, 246, 0.12)',
        boxShadow: '0 4px 20px rgba(37, 99, 235, 0.08)',
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav('#hero')}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
            <img src={logo} alt="PekaDev Logo" className="w-full h-full object-contain" />
          </div>
          <span className={`font-bold text-lg tracking-tight transition-colors duration-300 ${scrolled ? 'text-slate-800' : 'text-black'}`}>
            Peka<span className="text-blue-500">Dev</span>
            <span className={`font-light ml-1 text-sm transition-colors duration-300 ${scrolled ? 'text-slate-400' : 'text-white/50'}`}>Digital</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNav(l.href)}
              className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 ${scrolled ? 'text-slate-500 hover:text-slate-900 hover:bg-blue-50' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
            >
              {l.label}
            </button>
          ))}
        </nav>




        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-lg transition-all ${scrolled ? 'text-slate-500 hover:text-slate-900 hover:bg-blue-50' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
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
            className="md:hidden backdrop-blur-xl overflow-hidden"
            style={{ background: 'rgba(240, 247, 255, 0.96)', borderTop: '1px solid rgba(59, 130, 246, 0.1)' }}
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.label}
                  onClick={() => handleNav(l.href)}
                  className="px-4 py-3 text-sm text-slate-500 hover:text-slate-900 text-left rounded-lg hover:bg-blue-50 transition-all"
                >
                  {l.label}
                </button>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
