import { motion, useReducedMotion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

// ====== EDIT BAGIAN INI ======
const WA_NUMBER = '6289630961201'

const PLANS = [
	{
		name: 'Starter',
		price: 'Rp 1.489.000',
		note: 'sekali bayar',
		tagline: 'Untuk UMKM dan usaha rintisan yang baru mulai online.',
		features: [
			'Landing page maksimal 3 halaman',
			'Desain responsif (nyaman di HP)',
			'Domain dan hosting 1 tahun',
		],
		cta: 'Pilih Starter',
		waMessage: 'Halo PekaDev Studio, saya tertarik dengan paket Starter (Rp 1.489.000). Boleh info lebih lanjut?',
	},
	{
		name: 'Pro',
		price: 'Rp 3.500.000',
		note: 'sekali bayar',
		tagline: 'Untuk perusahaan, sekolah, dan instansi yang butuh website lengkap.',
		features: [
			'Website multi-halaman (sampai 10)',
			'Desain responsif (nyaman di HP)',
			'Domain dan hosting 1 tahun',
			'Bisa edit konten sendiri (CMS)',
		],
		cta: 'Pilih Pro',
		recommended: true,
		waMessage: 'Halo PekaDev Studio, saya tertarik dengan paket Pro (Rp 3.500.000). Boleh info lebih lanjut?',
	},
	{
		name: 'Custom',
		price: 'Sesuai kebutuhan',
		note: 'harga dibahas setelah konsultasi',
		tagline: 'Untuk toko online dan sistem khusus.',
		features: [
			'Jumlah halaman tidak dibatasi',
			'Pembayaran online (payment gateway)',
			'Domain dan hosting 1 tahun',
			'Bisa edit konten sendiri (CMS)',
		],
		cta: 'Diskusi kebutuhan',
		waMessage: 'Halo PekaDev Studio, saya ingin konsultasi soal website custom / toko online. Boleh dibantu?',
	},
]

const MAINTENANCE = {
	price: 'Rp 250.000',
	period: '/bulan',
	features: [
		'Backup rutin',
		'Update keamanan',
		'Pemantauan website',
		'Edit kecil, sampai 4 jam per bulan',
	],
	waMessage: 'Halo PekaDev Studio, saya tertarik paket perawatan bulanan (Rp 250.000/bulan). Boleh info?',
}

const STUDENT = {
	price: 'Rp 80.000',
	waMessage: 'Halo PekaDev Studio, saya butuh bantuan tugas kuliah/skripsi. Paket mulai Rp 80.000 masih tersedia?',
}
// =============================

const waLink = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`

const KAWUNG = `<svg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72'><g fill='none' stroke='#0891B2' stroke-width='1.4'><ellipse cx='36' cy='18' rx='9' ry='18'/><ellipse cx='36' cy='54' rx='9' ry='18'/><ellipse cx='18' cy='36' rx='18' ry='9'/><ellipse cx='54' cy='36' rx='18' ry='9'/></g></svg>`
const KAWUNG_URL = `url("data:image/svg+xml,${encodeURIComponent(KAWUNG)}")`

function PlanCard({ plan, index, reduceMotion }) {
	const dark = plan.recommended
	const reveal = reduceMotion
		? {}
		: {
			initial: { opacity: 0, y: 16 },
			whileInView: { opacity: 1, y: 0 },
			viewport: { once: true, amount: 0.2 },
			transition: { duration: 0.5, delay: index * 0.1, ease: 'easeOut' },
		}

	return (
		<motion.div
			{...reveal}
			className={`relative flex flex-col rounded-2xl p-8 ${dark
					? 'bg-[#0B2540] text-white shadow-[0_24px_60px_rgba(11,37,64,0.35)] lg:-translate-y-3'
					: 'bg-white text-[#0B2540] border border-cyan-900/10 shadow-[0_8px_28px_rgba(11,37,64,0.06)]'
				}`}
		>
			{dark && (
				<div className="absolute -top-3 left-8 bg-[#22D3EE] text-[#0B2540] text-xs font-bold px-3 py-1 rounded-full">
					Direkomendasikan
				</div>
			)}

			<h3 className="text-lg font-bold mb-4">{plan.name}</h3>

			<div className="text-3xl sm:text-[34px] font-extrabold tracking-tight leading-none mb-1.5">{plan.price}</div>
			<div className={`text-xs font-medium mb-5 ${dark ? 'text-cyan-100/70' : 'text-slate-400'}`}>{plan.note}</div>

			<p className={`text-sm leading-relaxed mb-6 ${dark ? 'text-cyan-50/80' : 'text-slate-500'}`}>{plan.tagline}</p>

			<ul className={`flex flex-col gap-3 pt-6 mb-8 flex-1 border-t ${dark ? 'border-white/15' : 'border-slate-200'}`}>
				{plan.features.map((f) => (
					<li key={f} className="flex items-start gap-3 text-sm">
						<span
							className={`mt-0.5 flex w-5 h-5 shrink-0 items-center justify-center rounded-full ${dark ? 'bg-[#22D3EE] text-[#0B2540]' : 'bg-cyan-50 text-[#0E7490]'
								}`}
						>
							<Check size={12} strokeWidth={3} />
						</span>
						<span className={dark ? 'text-white/90' : 'text-slate-700'}>{f}</span>
					</li>
				))}
			</ul>

			<a
				href={waLink(plan.waMessage)}
				target="_blank"
				rel="noopener noreferrer"
				className={`group inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-lg font-bold text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${dark
						? 'bg-[#22D3EE] text-[#0B2540] hover:bg-[#67E8F9] focus-visible:outline-white'
						: 'bg-[#0E7490] text-white hover:bg-[#0B5F77] focus-visible:outline-[#0B2540]'
					}`}
			>
				{plan.cta}
				<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
			</a>
		</motion.div>
	)
}

export default function PricingSection() {
	const reduceMotion = useReducedMotion()

	return (
		<section
			id="pricing"
			className="relative py-24 lg:py-32 overflow-hidden"
			style={{
				fontFamily: "'Plus Jakarta Sans', sans-serif",
				background: 'linear-gradient(180deg, #ecfafd 0%, #ffffff 100%)',
			}}
		>
			<div
				aria-hidden="true"
				className="absolute top-0 left-0 w-3/5 h-[360px] pointer-events-none"
				style={{
					backgroundImage: KAWUNG_URL,
					backgroundSize: '72px 72px',
					opacity: 0.25,
					WebkitMaskImage: 'linear-gradient(to bottom right, black 20%, transparent 70%)',
					maskImage: 'linear-gradient(to bottom right, black 20%, transparent 70%)',
				}}
			/>

			<div className="relative max-w-6xl mx-auto px-6 sm:px-10">
				<div className="max-w-2xl mb-14">
					<h2 className="text-4xl sm:text-5xl font-extrabold text-[#0B2540] leading-[1.06] tracking-[-0.025em] mb-5">
						Harga yang jelas dari awal.
					</h2>
					<p className="text-slate-600 text-base sm:text-lg leading-relaxed">
						Pilih paket pembuatan website. Perawatan bulanan bisa ditambahkan kapan saja.
					</p>
				</div>

				{/* Paket pembuatan */}
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch mb-12">
					{PLANS.map((p, i) => (
						<PlanCard key={p.name} plan={p} index={i} reduceMotion={reduceMotion} />
					))}
				</div>

				{/* Perawatan bulanan */}
				<div className="rounded-2xl bg-white border border-cyan-900/10 border-l-4 border-l-[#22D3EE] p-8 grid lg:grid-cols-[1fr_1.2fr_auto] gap-8 items-center shadow-[0_8px_28px_rgba(11,37,64,0.06)] mb-6">
					<div>
						<h3 className="text-lg font-bold text-[#0B2540] mb-2">Perawatan bulanan</h3>
						<div className="flex items-baseline gap-1">
							<span className="text-3xl font-extrabold text-[#0B2540] tracking-tight">{MAINTENANCE.price}</span>
							<span className="text-sm text-slate-500 font-medium">{MAINTENANCE.period}</span>
						</div>
					</div>
					<ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
						{MAINTENANCE.features.map((f) => (
							<li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
								<Check size={16} strokeWidth={3} className="mt-0.5 shrink-0 text-[#0E7490]" />
								{f}
							</li>
						))}
					</ul>
					<a
						href={waLink(MAINTENANCE.waMessage)}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg border-2 border-[#0E7490] text-[#0E7490] font-bold text-sm transition-colors hover:bg-[#0E7490] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2540]"
					>
						Tambah perawatan
					</a>
				</div>

				{/* Tugas kuliah, dipisah dari paket bisnis */}
				<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-dashed border-cyan-900/25 px-6 py-4 mb-8">
					<p className="text-sm text-slate-600">
						Mahasiswa butuh bantuan tugas, skripsi, atau proyek akademik? Mulai dari{' '}
						<span className="font-bold text-[#0B2540]">{STUDENT.price}</span>.
					</p>
					<a
						href={waLink(STUDENT.waMessage)}
						target="_blank"
						rel="noopener noreferrer"
						className="text-sm font-bold text-[#0B2540] underline underline-offset-4 decoration-[#22D3EE] decoration-2 hover:decoration-[#0B2540] transition-colors whitespace-nowrap"
					>
						Tanya lewat WhatsApp
					</a>
				</div>

				<p className="text-sm text-slate-500">
					Konsultasi gratis untuk semua paket. Harga belum termasuk revisi di luar kesepakatan.
				</p>
			</div>
		</section>
	)
}