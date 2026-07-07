import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const WA_NUMBER = "6281991356251";

const plans = [
	{
		name: "Tugas Mahasiswa",
		price: "Start From Rp 80K",
		billing: "one-time",
		tagline: "Solusi cepat untuk tugas kuliah, skripsi, dan proyek akademik.",
		popular: false,
		features: [
			{ text: "Website/Aplikasi sederhana", included: true },
			{ text: "Konsultasi teknis", included: true },
			{ text: "Source code lengkap", included: true },
			{ text: "Support 1 minggu", included: true },
			{ text: "Revisi unlimited", included: false },
		],
		waMessage:
			"Halo PekaDev Digital, saya butuh bantuan tugas kuliah/skripsi. Paket Tugas Mahasiswa (Rp 70.000) tersedia?",
		cta: "Mulai dari Rp 70K",
	},
	{
		name: "Starter",
		price: "Rp 850.000",
		billing: "one-time",
		tagline: "Ideal untuk UMKM dan usaha rintisan.",
		popular: false,
		features: [
			{ text: "Landing page 1 halaman", included: true },
			{ text: "Desain responsif (mobile)", included: true },
			{ text: "Domain + hosting 1 tahun", included: true },
			{ text: "Sistem manajemen konten", included: false },
			{ text: "Integrasi payment gateway", included: false },
		],
		waMessage:
			"Halo PekaDev Digital, saya tertarik dengan paket *Starter* (Rp 1.000.000). Boleh info lebih lanjut?",
		cta: "Mulai dengan Starter",
	},
	{
		name: "Pro",
		price: "Rp 3.500.000",
		billing: "one-time",
		tagline: "Cocok untuk perusahaan, sekolah, dan instansi.",
		popular: true,
		features: [
			{ text: "Website multi-halaman (hingga 10)", included: true },
			{ text: "Desain responsif (mobile)", included: true },
			{ text: "Domain + hosting 1 tahun", included: true },
			{ text: "Sistem manajemen konten", included: true },
			{ text: "Integrasi payment gateway", included: false },
		],
		waMessage:
			"Halo PekaDev Digital, saya tertarik dengan paket *Pro* (Rp 3.500.000). Boleh info lebih lanjut?",
		cta: "Mulai dengan Pro",
	},
	{
		name: "Enterprise",
		price: "Custom",
		billing: "one-time",
		tagline: "Solusi penuh untuk kebutuhan enterprise dan e-commerce.",
		popular: false,
		features: [
			{ text: "Website tak terbatas halaman", included: true },
			{ text: "Desain responsif (mobile)", included: true },
			{ text: "Domain + hosting 1 tahun", included: true },
			{ text: "Sistem manajemen konten", included: true },
			{ text: "Integrasi payment gateway", included: true },
		],
		waMessage:
			"Halo PekaDev Digital, saya ingin konsultasi mengenai paket *Enterprise*. Boleh dibantu?",
		cta: "Hubungi Kami",
	},
];

const subscriptionPlans = [
	{
		name: "Lite",
		price: "Rp 250.000",
		billing: "subscription",
		period: "/bulan",
		tagline: "Maintenance & support untuk website existing.",
		popular: false,
		features: [
			{ text: "Uptime monitoring 99.9%", included: true },
			{ text: "Security updates otomatis", included: true },
			{ text: "Backup harian", included: true },
			{ text: "Fast response support", included: true },
			{ text: "Minor updates (max 4jam/bulan)", included: true },
			{ text: "Traffic unlimited", included: false },
		],
		waMessage:
			"Halo PekaDev Digital, saya tertarik Web-as-a-Service *Lite* (Rp 250.000/bulan). Boleh info?",
		cta: "Mulai Sekarang",
	},
	{
		name: "Professional",
		price: "Rp 500.000",
		billing: "subscription",
		period: "/bulan",
		tagline: "Growth support untuk UMKM yang berkembang.",
		popular: true,
		features: [
			{ text: "Uptime monitoring 99.9%", included: true },
			{ text: "Security updates otomatis", included: true },
			{ text: "Backup real-time", included: true },
			{ text: "Priority support (response < 2jam)", included: true },
			{ text: "Updates & improvements unlimited", included: true },
			{ text: "Traffic unlimited + CDN global", included: true },
		],
		waMessage:
			"Halo PekaDev Digital, saya tertarik Web-as-a-Service *Professional* (Rp 500.000/bulan). Boleh info?",
		cta: "Mulai Growth",
	},
	{
		name: "Enterprise Plus",
		price: "Rp 1.000.000",
		billing: "subscription",
		period: "/bulan",
		tagline: "Full management untuk perusahaan besar.",
		popular: false,
		features: [
			{ text: "Uptime monitoring 99.99%", included: true },
			{ text: "Security updates + penetration testing", included: true },
			{ text: "Backup real-time + disaster recovery", included: true },
			{ text: "Dedicated account manager", included: true },
			{ text: "Custom features & scaling unlimited", included: true },
			{ text: "Multi-region CDN + load balancing", included: true },
		],
		waMessage:
			"Halo PekaDev Digital, saya tertarik Web-as-a-Service *Enterprise Plus* (Rp 1.000.000/bulan). Boleh info?",
		cta: "Hubungi Sales",
	},
];

const CheckIcon = () => <Check className="w-4 h-4 text-emerald-500" />;
const XIcon = () => <X className="w-4 h-4 text-slate-350" />;

const WhatsAppIcon = () => (
	<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
		<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
	</svg>
);

function PricingCard({ plan, index }) {
	const handleWA = () => {
		const encoded = encodeURIComponent(plan.waMessage);
		window.open(`https://wa.me/${WA_NUMBER}?text=${encoded}`, "_blank");
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.1 }}
			className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${plan.popular
				? "border-2 border-blue-500 bg-white shadow-xl shadow-blue-500/10"
				: "border border-slate-200 bg-slate-50/50 shadow-sm hover:shadow-md hover:border-slate-300"
				}`}
		>
			{plan.popular && (
				<div className="absolute -top-3 left-8 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md shadow-blue-500/20">
					Paling Populer
				</div>
			)}

			{/* Billing type badge */}
			<div className="mb-3">
				{plan.billing === "subscription" ? (
					<span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200">
						Langganan / Bulanan
					</span>
				) : (
					<span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 border border-blue-200">
						One-time Payment
					</span>
				)}
			</div>

			<p
				className={`text-xs font-bold uppercase tracking-widest mb-3 ${plan.popular ? "text-blue-600" : "text-slate-500"
					}`}
			>
				{plan.name}
			</p>

			<div className="mb-2 flex items-baseline gap-1">
				<span className="text-4xl font-extrabold text-slate-800">{plan.price}</span>
				{plan.period && (
					<span className="text-sm text-slate-500 font-medium">{plan.period}</span>
				)}
				{plan.price !== "Custom" && !plan.period && (
					<span className="text-sm text-slate-500 font-medium">/ sekali bayar</span>
				)}
			</div>

			<p className="text-sm text-slate-500 leading-relaxed mb-6 font-medium">
				{plan.tagline}
			</p>

			<div className="border-t border-slate-200 pt-5 mb-7 flex flex-col gap-3 flex-1">
				{plan.features.map((f, i) => (
					<div key={i} className="flex items-start gap-3">
						{f.included ? <CheckIcon /> : <XIcon />}
						<span
							className={`text-sm font-medium ${f.included ? "text-slate-700" : "text-slate-400 line-through decoration-slate-300"
								}`}
						>
							{f.text}
						</span>
					</div>
				))}
			</div>

			<button
				onClick={handleWA}
				className={`flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl font-bold transition-all duration-150 ${plan.popular
					? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/25"
					: "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 hover:border-slate-350"
					}`}
			>
				<WhatsAppIcon />
				{plan.cta}
			</button>
		</motion.div>
	);
}

export default function PricingSection() {
	const [billingType, setBillingType] = useState("one-time");

	return (
		<section className="py-20 bg-gradient-to-b from-white to-slate-50">
			<div className="max-w-6xl mx-auto px-6">
				{/* Header */}
				<div className="text-center mb-14">
					<p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
						Harga Paket
					</p>
					<h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
						Pilih model pembayaran yang tepat
						<br />
						untuk kebutuhan Anda
					</h2>
					<p className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed font-medium">
						Mulai dari proyek sekali jadi atau langganan berkelanjutan untuk
						growth bisnis Anda.
					</p>
				</div>

				{/* Toggle buttons */}
				<div className="flex items-center justify-center gap-4 mb-12">
					<button
						onClick={() => setBillingType("one-time")}
						className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all ${billingType === "one-time"
							? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
							: "bg-slate-100 text-slate-500 border border-slate-200 hover:bg-slate-200"
							}`}
					>
						One-time Payment
					</button>
					<button
						onClick={() => setBillingType("subscription")}
						className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all ${billingType === "subscription"
							? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/25"
							: "bg-slate-100 text-slate-500 border border-slate-200 hover:bg-slate-200"
							}`}
					>
						Web-as-a-Service (Langganan)
					</button>
				</div>

				{/* Cards */}
				<div className="grid md:grid-cols-3 gap-6 items-start mb-8">
					{(billingType === "one-time" ? plans : subscriptionPlans).map(
						(plan, i) => (
							<PricingCard key={plan.name} plan={plan} index={i} />
						)
					)}
				</div>

				{/* Footer note */}
				<p className="text-center text-sm text-slate-500 font-medium">
					{billingType === "one-time"
						? "Harga belum termasuk biaya revisi di luar kesepakatan. Konsultasi gratis tersedia untuk semua paket."
						: "WaaS include update, maintenance, dan support. Tidak ada biaya setup tambahan."}
					<br />
					<span className="text-blue-600 font-bold">Konsultasi gratis</span>{" "}
					tersedia untuk semua paket.
				</p>
			</div>
		</section>
	);
}
