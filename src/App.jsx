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
import WhatsAppBubble from "./components/WhatsappBubble";
import PricingSection from './components/PriccingSection'



export default function App() {
  return (
    <div className="bg-[#050b18] text-white min-h-screen overflow-x-hidden">
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
