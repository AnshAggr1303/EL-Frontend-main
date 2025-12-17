import HeroSection from "@/components/sections/HeroSection"
import WhyChooseSection from "@/components/sections/WhyChooseSection"
import TrustedBySection from "@/components/sections/TrustedBySection"
import StatsSection from "@/components/sections/StatsSection"
import ServicesSection from "@/components/sections/ServicesSection"
import Footer from "@/components/layout/Footer"
import QuoteModal from "@/components/modals/QuoteModal"
import Navbar from "@/components/layout/Navbar"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <WhyChooseSection />
      <TrustedBySection />
      <StatsSection />
      <ServicesSection />
      <Footer />
      <QuoteModal />
    </main>
  )
}
