import { useState } from "react";

const WA_NUMBER = "628951183961"; // Ganti dengan nomor WhatsApp PekaDev Studio

const plans = [
  {
    name: "Starter",
    price: "Rp 1.000.000",
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
      style={{
        position: "relative",
        background: "#111827",
        border: plan.popular ? "2px solid #2563eb" : "1px solid #1f2937",
        borderRadius: "16px",
        padding: "32px 28px",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 12px 32px rgba(37,99,235,0.15)"
          : plan.popular
          ? "0 4px 16px rgba(37,99,235,0.15)"
          : "none",
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {plan.popular && (
        <div
          style={{
            position: "absolute",
            top: "-14px",
            left: "28px",
            background: "#2563eb",
            color: "#fff",
            fontSize: "11px",
            fontWeight: 600,
            padding: "4px 14px",
            borderRadius: "999px",
            letterSpacing: "0.04em",
          }}
        >
          Paling Populer
        </div>
      )}

      <p
        style={{
          fontSize: "12px",
          fontWeight: 600,
          color: plan.popular ? "#2563eb" : "#9ca3af",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          margin: "0 0 12px",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {plan.name}
      </p>

      <div style={{ marginBottom: "6px", display: "flex", alignItems: "baseline", gap: "4px" }}>
        <span
          style={{
            fontSize: "32px",
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: 1,
          }}
        >
          {plan.price}
        </span>
        {plan.price !== "Custom" && (
          <span style={{ fontSize: "13px", color: "#9ca3af" }}>/ sekali bayar</span>
        )}
      </div>

      <p
        style={{
          fontSize: "13.5px",
          color: "#d1d5db",
          lineHeight: 1.6,
          margin: "0 0 24px",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {plan.tagline}
      </p>

      <div
        style={{
          borderTop: "1px solid #1f2937",
          paddingTop: "20px",
          marginBottom: "28px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          flex: 1,
        }}
      >
        {plan.features.map((f, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {f.included ? <CheckIcon /> : <MinusIcon />}
            <span
              style={{
                fontSize: "13.5px",
                color: f.included ? "#e5e7eb" : "#6b7280",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {f.text}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={handleWA}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          width: "100%",
          padding: "13px 20px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: 600,
          fontFamily: "'DM Sans', sans-serif",
          background: plan.popular ? "#2563eb" : "#111827",
          color: "#fff",
          transition: "opacity 0.15s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        <WhatsAppIcon />
        {plan.cta}
      </button>
    </div>
  );
}

export default function PricingSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap');
        .pricing-wrapper * { box-sizing: border-box; }
      `}</style>

      <section
        className="pricing-wrapper"
        style={{
          padding: "80px 24px",
          background: "#050b18",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ marginBottom: "56px", textAlign: "center" }}>
            <p
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "#2563eb",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                margin: "0 0 12px",
              }}
            >
              Layanan Kami
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 40px)",
                fontWeight: 700,
                color: "#ffffff",
                margin: "0 0 14px",
                lineHeight: 1.2,
                fontFamily: "'DM Serif Display', serif",
              }}
            >
              Pilih paket yang tepat
              <br />untuk bisnis Anda
            </h2>
            <p style={{ fontSize: "15px", color: "#a0aec0", margin: 0, maxWidth: "480px", marginInline: "auto", lineHeight: 1.7 }}>
              Solusi digital profesional untuk UMKM, perusahaan, sekolah, dan instansi di Pekalongan dan sekitarnya.
            </p>
          </div>

          {/* Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              alignItems: "start",
            }}
          >
            {plans.map((plan, i) => (
              <PricingCard key={plan.name} plan={plan} index={i} />
            ))}
          </div>

          {/* Footer note */}
          <p
            style={{
              textAlign: "center",
              fontSize: "13px",
              color: "#6b7280",
              marginTop: "40px",
            }}
          >
            Harga belum termasuk biaya revisi di luar kesepakatan.{" "}
            <span style={{ color: "#2563eb", fontWeight: 500 }}>Konsultasi gratis</span> tersedia untuk semua paket.
          </p>
        </div>
      </section>
    </>
  );
}
