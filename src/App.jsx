import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TrustSection from './components/TrustSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ProcessSection from './components/ProcessSection'
import PortfolioSection from './components/PortfolioSection'
import WhyUsSection from './components/WhyUsSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import WhatsAppBubble from "./components/WhatsappBubble"
import PricingSection from './components/PriccingSection'

export default function App() {
  return (
    <div className="bg-[#050b18] text-white min-h-screen overflow-x-hidden">
      <Helmet>
        <title>PekaDev Studio | Jasa Pembuatan Website Pekalongan</title>
        <meta name="description" content="Jasa pembuatan website profesional di Pekalongan. PekaDev Studio melayani UMKM, toko online, dan landing page dengan harga terjangkau. Hubungi sekarang!" />
        <meta name="keywords" content="jasa pembuatan website pekalongan, web developer pekalongan, jasa landing page pekalongan, website UMKM pekalongan, toko online pekalongan" />
        <meta property="og:title" content="PekaDev Studio | Jasa Website Pekalongan" />
        <meta property="og:description" content="Jasa pembuatan website profesional di Pekalongan untuk UMKM & bisnis lokal." />
        <meta property="og:url" content="https://pekadevstudio.web.id" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pekadevstudio.web.id" />
      </Helmet>

      <Navbar />
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <WhyUsSection />
      <ServicesSection />
      <PricingSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppBubble />
    </div>
  )
}