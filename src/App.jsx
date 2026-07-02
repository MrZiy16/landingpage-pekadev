import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TrustSection from './components/TrustSection'

const AboutSection = React.lazy(() => import('./components/AboutSection'))
const WhyUsSection = React.lazy(() => import('./components/WhyUsSection'))
const ServicesSection = React.lazy(() => import('./components/ServicesSection'))
const PricingSection = React.lazy(() => import('./components/PriccingSection'))
const ProcessSection = React.lazy(() => import('./components/ProcessSection'))
const PortfolioSection = React.lazy(() => import('./components/PortfolioSection'))
const TestimonialsSection = React.lazy(() => import('./components/TestimonialsSection'))
const ContactSection = React.lazy(() => import('./components/ContactSection'))
const Footer = React.lazy(() => import('./components/Footer'))
const WhatsAppBubble = React.lazy(() => import('./components/WhatsappBubble'))

export default function App() {
  return (
    <div className="bg-white text-slate-800 min-h-screen overflow-x-hidden">
      <Helmet>
        <title>PekaDev Digital | Jasa Pembuatan Website Pekalongan</title>
        <meta name="description" content="Jasa pembuatan website profesional di Pekalongan. PekaDev Digital melayani UMKM, toko online, dan landing page dengan harga terjangkau. Hubungi sekarang!" />
        <meta name="keywords" content="jasa pembuatan website pekalongan, web developer pekalongan, jasa landing page pekalongan, website UMKM pekalongan, toko online pekalongan" />
        <meta property="og:title" content="PekaDev Digital | Jasa Website Pekalongan" />
        <meta property="og:description" content="Jasa pembuatan website profesional di Pekalongan untuk UMKM & bisnis lokal." />
        <meta property="og:url" content="https://pekadevstudio.web.id" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pekadevstudio.web.id" />
      </Helmet>

      <Navbar />
      <HeroSection />
      <TrustSection />

      <Suspense fallback={null}>
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
      </Suspense>
    </div>
  )
}