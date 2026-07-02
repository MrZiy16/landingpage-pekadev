import { Code2, Mail, Instagram, MapPin } from 'lucide-react'
import { NAV_LINKS } from '../data'

function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-14">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                Peka<span className="text-blue-400">Dev</span>
                <span className="text-white/40 font-light ml-1 text-sm">Digital</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-medium">
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
                  className="text-slate-400 hover:text-white text-sm text-left transition-colors duration-200 font-medium"
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
                className="flex items-center gap-2.5 text-slate-400 hover:text-white text-sm transition-colors duration-200 font-medium"
              >
                <Mail size={14} />
                pekadevstudio@gmail.com
              </a>
              <a
                href="https://instagram.com/pekadev.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-400 hover:text-white text-sm transition-colors duration-200 font-medium"
              >
                <Instagram size={14} />
                @pekadevstudio
              </a>
              <div className="flex items-center gap-2.5 text-slate-400 text-sm font-medium">
                <MapPin size={14} />
                Pekalongan, Jawa Tengah
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs font-medium">
            © {new Date().getFullYear()} PekaDev Digital. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs font-mono tracking-wide">
            Build Better Digital Solutions ✦
          </p>
        </div>
      </div>
    </footer>
  )
}
