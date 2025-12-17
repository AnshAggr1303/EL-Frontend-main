"use client"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#F5F7FA]">
      {/* Background Text - ESHAAN */}
      <div className="absolute top-[260px] left-[100px] [-webkit-text-stroke:1px_#1e427e] opacity-50 [font-family:'Clash_Display_Variable-Bold',Helvetica] font-bold text-transparent text-[352.8px] tracking-[0] leading-[normal] whitespace-nowrap pointer-events-none z-[1]">
        ESHAAN
      </div>

      {/* Background Text - LOGISTICS */}
      <div className="absolute top-[560px] left-[100px] [-webkit-text-stroke:1px_#1e427e] opacity-50 [font-family:'Clash_Display_Variable-Bold',Helvetica] font-bold text-transparent text-[352.8px] tracking-[0] leading-[normal] whitespace-nowrap pointer-events-none z-[1]">
        LOGISTICS
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-10 pt-12">
        <div className="flex items-start justify-between gap-12">
          {/* Left Content */}
          <div className="flex flex-col w-[54%] gap-6">
            <h1
              className="font-bold text-[64px] leading-[1.1]"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              <span className="text-[#fe0000]">INDIA'S LEADING 🚚</span>
              <br />
              <span className="text-[#131313]">LOGISTICS SOLUTION</span>
              <br />
              <span className="text-[#131313]">PROVIDER SINCE </span>
              <span className="text-[#fe0000]">2011</span>
            </h1>

            <Button
              onClick={() => window.dispatchEvent(new CustomEvent("openQuoteModal"))}
              className="inline-flex w-fit px-6 py-4 h-auto bg-[#fe0000] hover:bg-[#fe0000]/90 rounded-lg text-white text-2xl font-semibold"
            >
              Get Instant Quote
            </Button>
          </div>

          {/* Right Content */}
          <div className="flex flex-col w-[38%] gap-6 pt-4">
            <p
              className="text-black text-[26px] leading-normal"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              Delivering excellence through technology driven logistics solutions with guaranteed on-time delivery and
              complete supply chain management.
            </p>

            {/* Certification Badges */}
            <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
              <img
                className="relative w-[136px] h-[136px] object-contain"
                alt="ISO Certification"
                src="/images/certifications/iso-certification.png"
              />
              <img
                className="relative w-[136px] h-[136px] object-contain"
                alt="IBA Certification"
                src="/images/certifications/iba-logo.png"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Truck Image */}
      <img
        className="absolute top-[350px] left-[182px] w-[1202px] h-[618px] object-cover z-[5]"
        alt="Mahindra Truck"
        src="/images/trucks/mahindra-truck.png"
      />
    </section>
  )
}
