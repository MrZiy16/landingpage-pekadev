import { Code2, Mail, Instagram, MapPin } from 'lucide-react'
import { NAV_LINKS } from '../data'

function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="bg-[#030810] border-t border-white/[0.05] py-14">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                Peka<span className="text-blue-400">Dev</span>
                <span className="text-white/40 font-light ml-1 text-sm">Studio</span>
              </span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs">
              Build Better Digital Solutions. Web development &amp; digital agency dari Pekalongan
              untuk membantu bisnis Anda berkembang secara digital.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5">Navigasi</h4>
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.label}
                  onClick={() => scrollTo(l.href)}
                  className="text-white/35 hover:text-white text-sm text-left transition-colors duration-200"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5">Kontak</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@pekadev.id"
                className="flex items-center gap-2.5 text-white/35 hover:text-white text-sm transition-colors duration-200"
              >
                <Mail size={14} />
                hello@pekadev.id
              </a>
              <a
                href="https://instagram.com/pekadev.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/35 hover:text-white text-sm transition-colors duration-200"
              >
                <Instagram size={14} />
                @pekadevstudio
              </a>
              <div className="flex items-center gap-2.5 text-white/35 text-sm">
                <MapPin size={14} />
                Pekalongan, Jawa Tengah
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} PekaDev Studio. All rights reserved.
          </p>
          <p className="text-white/20 text-xs font-mono tracking-wide">
            Build Better Digital Solutions ✦
          </p>
        </div>
      </div>
    </footer>
  )
}
