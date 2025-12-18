"use client"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] bg-[#F5F7FA] overflow-hidden font-clash">

      {/* ================= BACKGROUND STROKE TEXT ================= */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-20 top-[55%] -translate-y-1/2 text-[300px] font-bold text-transparent opacity-40 [-webkit-text-stroke:1px_#1e427e] whitespace-nowrap">
          ESHAAN
        </div>
        <div className="absolute left-20 top-[82%] -translate-y-1/2 text-[300px] font-bold text-transparent opacity-40 [-webkit-text-stroke:1px_#1e427e] whitespace-nowrap">
          LOGISTICS
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-6 lg:px-10 pt-16 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT */}
          <div className="flex flex-col gap-6">
            <h1 className="font-bold leading-[1.05]">
              <span className="block text-[#fe0000] text-[34px] sm:text-[42px] lg:text-[50px]">
                INDIA&apos;S LEADING 🚚
              </span>
              <span className="block text-black text-[34px] sm:text-[42px] lg:text-[50px]">
                LOGISTICS SOLUTION
              </span>
              <span className="block text-black text-[34px] sm:text-[42px] lg:text-[50px]">
                PROVIDER SINCE{" "}
                <span className="text-[#fe0000]">2011</span>
              </span>
            </h1>

            <Button
              onClick={() => window.dispatchEvent(new CustomEvent("openQuoteModal"))}
              className="
                w-fit 
                px-7 
                py-6 
                bg-[#fe0000] 
                hover:bg-[#fe0000]/90 
                rounded-lg 
                text-white 
                text-base 
                sm:text-lg 
                font-semibold
              "
            >
              Get Instant Quote
            </Button>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6 max-w-xl">
            <p className="text-black text-[17px] sm:text-[19px] leading-relaxed">
              Delivering excellence through technology driven logistics solutions
              with guaranteed on-time delivery and complete supply chain
              management.
            </p>

            {/* CERTIFICATIONS (NO WHITE WRAPPER, SAME BG, CIRCULAR) */}
            <div className="flex items-center gap-6">
              <img
                src="/images/certifications/iso-certification.jpg"
                alt="ISO"
                className="w-[105px] h-[105px] rounded-full object-contain bg-transparent"
              />

              <img
                src="/images/certifications/iba-logo.png"
                alt="IBA"
                className="w-[105px] h-[105px] rounded-full object-contain bg-transparent"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ================= TRUCK ================= */}
      <div className="relative mt-10 lg:mt-0 lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:w-[65%] z-10">
        <img
          src="/images/trucks/mahindra-truck.png"
          alt="Logistics Truck"
          className="
            w-full 
            max-w-[1080px] 
            mx-auto 
            object-contain 
            lg:translate-y-[10%]
          "
        />
      </div>

    </section>
  )
}
