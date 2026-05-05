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


export default function App() {
  return (
    <div className="bg-[#050b18] text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <WhyUsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />

      <WhatsAppBubble />
    </div>
  )
}
