import {
  Globe, LayoutDashboard, TrendingUp, ShoppingBag, Wrench, Palette,
  Award, Clock, Code2, DollarSign, HeadphonesIcon, Shield,
  Terminal, Database, Smartphone,
} from 'lucide-react'
import batikImage from '../assets/batik.png';
import eduConnect from '../assets/educonnect.png';
import proBuild from '../assets/probuild.png';
import Kebaya from '../assets/kebaya.png';
import Rental from '../assets/rental.png';
import { link } from 'framer-motion/client';

export const NAV_LINKS = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Tentang', href: '#about' },
  { label: 'Layanan', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Kontak', href: '#contact' },
]

export const SERVICES = [
  {
    icon: Globe,
    title: 'Website Company Profile',
    desc: 'Tampilkan identitas bisnis Anda dengan website profesional yang elegan dan meyakinkan calon klien.',
    tag: 'Popular',
  },
  {
    icon: LayoutDashboard,
    title: 'Sistem Informasi Web',
    desc: 'Sistem manajemen data berbasis web yang efisien, aman, dan mudah digunakan untuk bisnis Anda.',
    tag: null,
  },
  {
    icon: TrendingUp,
    title: 'Landing Page Bisnis',
    desc: 'Halaman konversi tinggi yang dirancang khusus untuk meningkatkan leads dan penjualan produk Anda.',
    tag: 'High ROI',
  },
  {
    icon: ShoppingBag,
    title: 'Website UMKM',
    desc: 'Solusi digital terjangkau untuk pelaku usaha kecil menengah agar dapat bersaing secara online.',
    tag: null,
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    desc: 'Layanan pemeliharaan website berkelanjutan agar website Anda selalu optimal dan up-to-date.',
    tag: null,
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Desain antarmuka modern, intuitif, dan estetis yang memberikan pengalaman terbaik bagi pengguna.',
    tag: null,
  },
]

export const PORTFOLIO = [
  {
    title: 'Admin Dashboard UMKM',
    category: 'Sistem Informasi',
    tech: ['Laravel', 'MySQL', 'Tailwind'],
    gradient: 'from-blue-600 to-cyan-500',
    icon: LayoutDashboard,
    desc: 'Portal manajemen sekolah lengkap dengan fitur akademik, absensi, dan laporan.',
    image: eduConnect,
    link: 'https://demo-admin-dashboard-tan.vercel.app/'

  },
  {
    title: 'Batik Nusantara Store',
    category: 'Website UMKM',
    tech: ['React', 'Node.js', 'MongoDB'],
    gradient: 'from-violet-600 to-blue-500',
    icon: ShoppingBag,
    desc: 'Toko online UMKM batik dengan fitur katalog produk dan WhatsApp checkout.',
    image: batikImage,
    link: 'https://demo-batik-nusantara.vercel.app/'
  },
  {
    title: 'Ironforge Construction',
    category: 'Company Profile',
    tech: ['React.js', 'Framer Motion'],
    gradient: 'from-slate-700 to-blue-600',
    icon: Globe,
    desc: 'Website company profile premium untuk kontraktor dengan animasi modern.',
    image: proBuild,
    link: 'https://demo-ui-ironforge.vercel.app//'
  },
  {
    title: 'Kenanga Kebaya',
    category: 'Website UMKM',
    tech: ['Laravel', 'MySQL'],
    gradient: 'from-slate-700 to-blue-600',
    icon: Globe,
    desc: 'Website UMKM untuk brand kebaya dengan desain elegan dan fitur e-commerce.',
    image: Kebaya,
    link: 'https://kebaya-demo.netlify.app/'
  },
  {
    title: 'Rental Mobil AutoNusa',
    category: 'Website UMKM',
    tech: ['Laravel', 'MySQL'],
    gradient: 'from-slate-700 to-blue-600',
    icon: Globe,
    desc: 'Website UMKM untuk layanan rental mobil dengan sistem pemesanan online.',
    image: Rental,
    link: 'https://demo-rental-mobill.netlify.app/'
  },

]

export const WHY_US = [
  { icon: Award, label: 'Profesional', desc: 'Tim berpengalaman dengan portofolio nyata dan standar kualitas tinggi.' },
  { icon: Clock, label: 'Fast Response', desc: 'Respon cepat maksimal 1x24 jam untuk setiap pertanyaan dan revisi.' },
  { icon: Code2, label: 'Custom Solution', desc: 'Setiap project dikerjakan sesuai kebutuhan spesifik bisnis Anda.' },
  { icon: DollarSign, label: 'Harga Terjangkau', desc: 'Kualitas premium dengan harga yang bersahabat untuk semua skala bisnis.' },
  { icon: HeadphonesIcon, label: 'Support Berkelanjutan', desc: 'Kami hadir setelah project selesai untuk memastikan segalanya berjalan lancar.' },
  { icon: Shield, label: 'Aman & Terpercaya', desc: 'Website aman, terjamin, dan dilindungi dari ancaman keamanan siber.' },
]

export const TESTIMONIALS = [
  {
    name: 'Budi Santoso',
    role: 'Owner, Batik Pesona Pekalongan',
    text: 'PekaDev Studio benar-benar mengubah bisnis saya! Website yang mereka buat sangat profesional dan order online meningkat drastis sejak diluncurkan.',
    rating: 5,
    avatar: 'BS',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    name: 'Ibu Siti Rahayu',
    role: 'Kepala Sekolah, SMP Terpadu Pekalongan',
    text: 'Sistem informasi sekolah yang dikembangkan sangat membantu administrasi kami. Responsif, mudah digunakan, dan tim support selalu siap membantu.',
    rating: 5,
    avatar: 'SR',
    gradient: 'from-violet-500 to-blue-400',
  },
  {
    name: 'Ahmad Fadhil',
    role: 'CEO, PT Maju Konstruksi',
    text: 'Company profile kami sekarang terlihat sekelas perusahaan nasional. Desain modern, loading cepat, dan hasilnya melebihi ekspektasi kami.',
    rating: 5,
    avatar: 'AF',
    gradient: 'from-blue-600 to-indigo-400',
  },
]

export const CONTACT_ITEMS = [
  {
    icon: null, // imported in component
    label: 'WhatsApp',
    value: '+62 819-9135-6251',
    href: 'https://wa.me/6281991356251?text=Halo%20PekaDev%20Studio',
    gradient: 'from-green-600 to-emerald-400',
    iconName: 'MessageCircle',
  },
  {
    label: 'Email',
    value: 'pekadevstudio@gmail.com',
    href: 'mailto:pekadevstudio@gmail.com',
    gradient: 'from-blue-600 to-blue-400',
    iconName: 'Mail',
  },
  {
    label: 'Instagram',
    value: '@pekadev.studio',
    href: 'https://instagram.com/pekadev.studio',
    gradient: 'from-pink-600 to-purple-400',
    iconName: 'Instagram',
  },
  {
    label: 'Lokasi',
    value: 'Pekalongan, Jawa Tengah',
    href: 'https://maps.google.com/?q=Pekalongan',
    gradient: 'from-orange-600 to-amber-400',
    iconName: 'MapPin',
  },
]

export const HERO_STATS = [
  { val: '50+', label: 'Project Selesai' },
  { val: '3+', label: 'Tahun Pengalaman' },
  { val: '100%', label: 'Custom Built' },
]

export const TECH_STACK = ['React.js', 'Laravel', 'Node.js', 'Flutter', 'MySQL', 'UI/UX Design']

export const ABOUT_CARDS = [
  { icon: Code2, label: 'Clean Code', value: 'Best Practice', gradient: 'from-blue-600 to-blue-400' },
  { icon: Smartphone, label: 'Responsive', value: 'All Devices', gradient: 'from-cyan-600 to-blue-400' },
  { icon: null, label: 'Fast Loading', value: '< 2s Load Time', gradient: 'from-indigo-600 to-blue-400', iconName: 'Zap' },
  { icon: Shield, label: 'Secure', value: 'SSL & Firewall', gradient: 'from-blue-700 to-cyan-500' },
]
export const CLIENTS = [


  { abbr: 'SMK', name: 'SMK Islam Nusantara Comal', cat: 'Pendidikan', color: 'green' },

  { abbr: 'BTK', name: 'Batik Trusmi Store', cat: 'UMKM', color: 'amber' },
  { abbr: 'KUE', name: 'Dapur Mbak Yuli', cat: 'UMKM', color: 'amber' },
  { abbr: 'CVS', name: 'CV Sejahtera Jaya', cat: 'Perusahaan', color: 'cyan' },
  { abbr: 'UMKM', name: 'Kemuning Catering Batang', cat: 'UMKM', color: 'cyan' },
]


