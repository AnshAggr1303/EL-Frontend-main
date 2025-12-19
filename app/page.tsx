"use client"
import { useEffect } from "react"
import HeroSection from "@/components/sections/HeroSection"
import WhyChooseSection from "@/components/sections/WhyChooseSection"
import TrustedBySection from "@/components/sections/TrustedBySection"
import { StatsSection } from "@/components/sections/StatsSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { MapSection } from "@/components/sections/MapSection"
import { Footer } from "@/components/layout/Footer"
import QuoteModal from "@/components/modals/QuoteModal"
import Navbar from "@/components/layout/Navbar"

export default function HomePage() {
  // Reset scroll position and clear hash on page load
  useEffect(() => {
    // Remove hash from URL without triggering navigation
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname)
    }
    
    // Force scroll to top
    window.scrollTo(0, 0)
    
    // Disable browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <WhyChooseSection />
      <TrustedBySection />
      <StatsSection />
      <ServicesSection />
      <TestimonialsSection />
      <MapSection />
      <Footer />
      <QuoteModal />
    </main>
  )
}