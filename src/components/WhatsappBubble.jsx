
import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppBubble = () => {
  const phoneNumber = "6289630961201"; // ganti dengan nomor WhatsApp kamu
  const message = "Halo, saya ingin konsultasi project website";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl bg-[#0B1120] border border-cyan-500/30 px-4 py-2 text-sm text-white opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
        Konsultasi Gratis via WhatsApp
      </div>

      {/* Ping ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 animate-ping opacity-20" />

      {/* Bubble */}
      <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.25)] hover:scale-110 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-all duration-300">
        <MessageCircle className="text-white" size={30} />
      </div>
    </a>
  );
};

export default WhatsAppBubble;

