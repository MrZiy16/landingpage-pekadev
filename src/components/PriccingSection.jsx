import { useState } from "react";

const WA_NUMBER = "628951183961";

const plans = [
  {
    name: "Tugas Mahasiswa",
    price: "Rp 70.000",
    tagline: "Solusi cepat dan terjangkau untuk tugas kuliah, skripsi, dan proyek akademik.",
    popular: false,
    features: [
      { text: "Website/Aplikasi sederhana", included: true },
      { text: "Konsultasi teknis", included: true },
      { text: "Source code lengkap", included: true },
      { text: "Buku Panduan", included: true },
      { text: "Revisi unlimited", included: false },
    ],
    waMessage: "Halo PekaDev Studio, saya butuh bantuan tugas kuliah/skripsi. Paket Tugas Mahasiswa (Rp 70.000) tersedia?",
    cta: "Mulai dari Rp 70K",
  },
  {
    name: "Starter",
    price: "Rp 500.000",
    tagline: "Ideal untuk UMKM dan usaha rintisan yang butuh kehadiran digital cepat.",
    popular: false,
    features: [
      { text: "Landing page 1 halaman", included: true },
      { text: "Desain responsif (mobile)", included: true },
      { text: "Domain + hosting 1 tahun", included: true },
      { text: "Sistem manajemen konten", included: false },
      { text: "Integrasi payment gateway", included: false },
    ],
    waMessage: "Halo PekaDev Studio, saya tertarik dengan paket *Starter* (Rp 1.000.000). Boleh info lebih lanjut?",
    cta: "Mulai dengan Starter",
  },
  {
    name: "Pro",
    price: "Rp 3.500.000",
    tagline: "Cocok untuk perusahaan, sekolah, dan instansi dengan kebutuhan lebih lengkap.",
    popular: true,
    features: [
      { text: "Website multi-halaman (hingga 10)", included: true },
      { text: "Desain responsif (mobile)", included: true },
      { text: "Domain + hosting 1 tahun", included: true },
      { text: "Sistem manajemen konten", included: true },
      { text: "Integrasi payment gateway", included: false },
    ],
    waMessage: "Halo PekaDev Studio, saya tertarik dengan paket *Pro* (Rp 3.500.000). Boleh info lebih lanjut?",
    cta: "Mulai dengan Pro",
  },
  {
    name: "Enterprise",
    price: "Custom",
    tagline: "Solusi penuh untuk kebutuhan enterprise, e-commerce, dan sistem kompleks.",
    popular: false,
    features: [
      { text: "Website tak terbatas halaman", included: true },
      { text: "Desain responsif (mobile)", included: true },
      { text: "Domain + hosting 1 tahun", included: true },
      { text: "Sistem manajemen konten", included: true },
      { text: "Integrasi payment gateway", included: true },
    ],
    waMessage: "Halo PekaDev Studio, saya ingin konsultasi mengenai paket *Enterprise*. Boleh dibantu?",
    cta: "Hubungi Kami",
  },
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="#d1fae5" />
    <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MinusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="#f3f4f6" />
    <path d="M5 8h6" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function PricingCard({ plan, index }) {
  const [hovered, setHovered] = useState(false);

  const handleWA = () => {
    const encoded = encodeURIComponent(plan.waMessage);
    window.open(`https://wa.me/${WA_NUMBER}?text=${encoded}`, "_blank");
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative bg-slate-900/50 border transition-all duration-200 ${
        plan.popular ? "border-blue-500 shadow-lg shadow-blue-500/20" : "border-slate-700"
      } ${hovered ? "transform -translate-y-1 shadow-xl shadow-blue-500/20" : ""} rounded-2xl p-8 flex flex-col`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-8 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Paling Populer
        </div>
      )}

      <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${plan.popular ? "text-blue-400" : "text-slate-400"}`}>
        {plan.name}
      </p>

      <div className="mb-2 flex items-baseline gap-1">
        <span className="text-4xl font-bold text-white">{plan.price}</span>
        {plan.price !== "Custom" && <span className="text-sm text-slate-400">/ sekali bayar</span>}
      </div>

      <p className="text-sm text-slate-300 leading-relaxed mb-6">{plan.tagline}</p>

      <div className="border-t border-slate-700 pt-5 mb-7 flex flex-col gap-3 flex-1">
        {plan.features.map((f, i) => (
          <div key={i} className="flex items-center gap-3">
            {f.included ? <CheckIcon /> : <MinusIcon />}
            <span className={`text-sm ${f.included ? "text-slate-200" : "text-slate-500"}`}>
              {f.text}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={handleWA}
        className={`flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl font-semibold transition-all duration-150 ${
          plan.popular
            ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30"
            : "bg-slate-800 text-white border border-slate-700 hover:bg-slate-700"
        }`}
      >
        <WhatsAppIcon />
        {plan.cta}
      </button>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">
            Layanan Kami
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Pilih paket yang tepat
            <br />
            untuk bisnis Anda
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">
            Solusi digital profesional untuk UMKM, perusahaan, sekolah, dan instansi di Pekalongan dan sekitarnya.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start mb-8">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-slate-400">
          Harga belum termasuk biaya revisi di luar kesepakatan.{" "}
          <span className="text-blue-400 font-medium">Konsultasi gratis</span> tersedia untuk semua paket.
        </p>
      </div>
    </section>
  );
}
