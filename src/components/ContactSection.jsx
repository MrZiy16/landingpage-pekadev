import { motion } from 'framer-motion'
import { MessageCircle, Mail, Instagram, MapPin, ArrowRight } from 'lucide-react'
import { GlowOrb, SectionHeader } from './UI'
import { useScrollReveal, fadeUp, stagger } from '../hooks/useScrollReveal'

const ICON_MAP = { MessageCircle, Mail, Instagram, MapPin }

const CONTACT_ITEMS = [
  {
    iconName: 'MessageCircle',
    label: 'WhatsApp',
    value: '+62 819-9135-6251',
    href: 'https://wa.me/6281991356251?text=Halo%20PekaDev%20Digital,%20saya%20ingin%20konsultasi%20project',
    gradient: 'from-green-600 to-emerald-500',
  },
  {
    iconName: 'Mail',
    label: 'Email',
    value: 'pekadevstudio@gmail.com',
    href: 'mailto:pekadevstudio@gmail.com',
    gradient: 'from-blue-600 to-blue-400',
  },
  {
    iconName: 'Instagram',
    label: 'Instagram',
    value: '@pekadevstudio',
    href: 'https://instagram.com/pekadevstudio',
    gradient: 'from-pink-600 to-purple-400',
  },
  {
    iconName: 'MapPin',
    label: 'Lokasi',
    value: 'Pekalongan, Jawa Tengah',
    href: 'https://maps.google.com/?q=Pekalongan',
    gradient: 'from-orange-600 to-amber-400',
  },
]

export default function ContactSection() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden">
      <GlowOrb className="w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />

      <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              badge="Hubungi Kami"
              title="Siap Memulai"
              highlight="Project Anda?"
              subtitle="Konsultasi gratis untuk mendiskusikan kebutuhan website dan solusi digital Anda bersama kami."
            />
          </motion.div>

          {/* Contact cards */}
          <motion.div
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          >
            {CONTACT_ITEMS.map((c) => {
              const Icon = ICON_MAP[c.iconName]
              return (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeUp}
                  className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-slate-200/60 hover:border-blue-500/20 hover:shadow-lg transition-all duration-300 shadow-sm"
                >
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs mb-0.5 font-bold">{c.label}</div>
                    <div className="text-slate-700 text-xs font-extrabold">{c.value}</div>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Primary CTA */}
          <motion.a
            variants={fadeUp}
            href="https://wa.me/6281991356251?text=Halo%20PekaDev%20Digital,%20saya%20ingin%20konsultasi%20project%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/35 hover:scale-105 transition-all duration-300"
          >
            <MessageCircle size={22} />
            Chat via WhatsApp Sekarang
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
