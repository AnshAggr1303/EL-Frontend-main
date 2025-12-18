"use client"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative bg-[#F5F7FA] overflow-hidden pt-[96px] min-h-[90vh]">
      {/* BACKGROUND STROKE TEXT */}
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none">
        {/* ESHAAN */}
        <div className="absolute left-[80px] top-[260px] text-[320px] font-bold text-transparent opacity-25 [-webkit-text-stroke:1px_#1e427e]">
          ESHAAN
        </div>

        {/* LOGISTICS — MOVED UP */}
        <div className="absolute left-[80px] top-[540px] text-[320px] font-bold text-transparent opacity-25 [-webkit-text-stroke:1px_#1e427e]">
          LOGISTICS
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-20 max-w-[1360px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[52%_48%] gap-12 items-start">
          {/* LEFT — HEADING */}
          <div>
            <h1 className="font-bold leading-[1.05]">
              {/* Line 1 */}
              <span className="block text-[#fe0000] text-[36px] md:text-[56px]">
                INDIA&apos;S LEADING <span className="inline-block align-middle">🚚</span>
              </span>

              {/* Line 2 */}
              <span className="block text-black text-[40px] md:text-[60px]">
                LOGISTICS SOLUTION
              </span>

              {/* Line 3 — FORCE SINGLE LINE */}
              <span className="block text-black text-[40px] md:text-[60px] whitespace-nowrap">
                PROVIDER SINCE <span className="text-[#fe0000]">2011</span>
              </span>
            </h1>

            <Button
              onClick={() =>
                window.dispatchEvent(new CustomEvent("openQuoteModal"))
              }
              className="mt-8 bg-[#fe0000] hover:bg-[#fe0000]/90 text-white h-[52px] px-8 text-lg rounded-md"
            >
              Get Instant Quote
            </Button>
          </div>

          {/* RIGHT — TEXT + BADGES */}
          <div className="pt-2">
            <p className="text-[18px] md:text-[22px] leading-[1.6] text-black max-w-[520px]">
              Delivering excellence through technology driven logistics solutions
              with guaranteed on-time delivery and complete supply chain
              management.
            </p>

            <div className="flex gap-6 mt-8">
              {["iso-certification.png", "iba-logo.png"].map((img) => (
                <div
                  key={img}
                  className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full bg-white shadow flex items-center justify-center"
                >
                  <img
                    src={`/images/certifications/${img}`}
                    alt=""
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TRUCK */}
      <div className="absolute bottom-[-60px] md:bottom-[-80px] left-0 w-full z-10">
        <div className="max-w-[1360px] mx-auto px-6 md:px-10">
          <div className="flex justify-end">
            <img
              src="/images/trucks/mahindra-truck.png"
              alt="Eshaan Logistics Truck"
              className="w-full max-w-[900px] md:max-w-[1100px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
