"use client"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#F5F7FA] overflow-hidden">
      {/* Background Stroke Text */}
      <div className="absolute left-[100px] top-[320px] font-heading text-[340px] font-bold text-transparent opacity-40 [-webkit-text-stroke:1px_#1e427e] pointer-events-none">
        ESHAAN
      </div>
      <div className="absolute left-[100px] top-[640px] font-heading text-[340px] font-bold text-transparent opacity-40 [-webkit-text-stroke:1px_#1e427e] pointer-events-none">
        LOGISTICS
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-10 pt-20">
        <div className="flex justify-between">
          {/* Left */}
          <div className="w-[55%]">
            <h1 className="font-heading text-[64px] leading-[1.1]">
              <span className="text-[#fe0000]">INDIA'S LEADING 🚚</span>
              <br />
              <span className="text-black">LOGISTICS SOLUTION</span>
              <br />
              <span className="text-black">PROVIDER SINCE </span>
              <span className="text-[#fe0000]">2011</span>
            </h1>

            <Button className="mt-8 bg-[#fe0000] hover:bg-[#fe0000]/90 text-white text-xl px-8 h-[56px] font-heading">
              Get Instant Quote
            </Button>
          </div>

          {/* Right */}
          <div className="w-[35%] pt-6">
            <p className="font-body text-[22px] leading-[1.6] text-black">
              Delivering excellence through technology driven logistics solutions
              with guaranteed on-time delivery and complete supply chain management.
            </p>

            <div className="flex gap-6 mt-10">
              {["iso-certification.png", "iba-logo.png"].map((img) => (
                <div
                  key={img}
                  className="w-[120px] h-[120px] rounded-full bg-white shadow flex items-center justify-center"
                >
                  <img
                    src={`/images/certifications/${img}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Truck */}
      <img
        src="/images/trucks/mahindra-truck.png"
        className="absolute bottom-0 left-[120px] w-[1200px] z-10"
        alt="Truck"
      />
    </section>
  )
}
