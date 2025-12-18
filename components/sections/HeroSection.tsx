"use client";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] bg-[#F5F7FA] overflow-hidden">
      {/* ================= BACKGROUND STROKE TEXT ================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* DESKTOP VERSION */}
        <div className="hidden lg:block">
          <div className="absolute left-20 top-[55%] -translate-y-1/2 text-[300px] font-bold text-transparent opacity-40 [-webkit-text-stroke:1px_#1e427e] whitespace-nowrap">
            ESHAAN
          </div>
          <div className="absolute left-20 top-[82%] -translate-y-1/2 text-[300px] font-bold text-transparent opacity-40 [-webkit-text-stroke:1px_#1e427e] whitespace-nowrap">
            LOGISTICS
          </div>
        </div>

        {/* MOBILE & TABLET VERSION - POSITIONED LOWER TO ONLY OVERLAP TRUCK */}
        <div className="lg:hidden">
          <div className="absolute left-1/2 -translate-x-1/2 top-[68%] text-[80px] sm:text-[120px] md:text-[160px] font-bold text-transparent opacity-30 [-webkit-text-stroke:1px_#1e427e] whitespace-nowrap">
            ESHAAN
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-[78%] text-[80px] sm:text-[120px] md:text-[160px] font-bold text-transparent opacity-30 [-webkit-text-stroke:1px_#1e427e] whitespace-nowrap">
            LOGISTICS
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16 lg:pt-20 pb-6 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <h1 className="font-clash font-bold leading-[1.1] sm:leading-[1.05]">
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
                font-clash
                w-fit 
                px-6 
                sm:px-7 
                py-5 
                sm:py-6 
                bg-[#fe0000] 
                hover:bg-[#fe0000]/90 
                rounded-lg 
                text-white 
                text-base 
                sm:text-lg 
                font-semibold
                transition-colors
                duration-200
              "
            >
              Get Instant Quote
            </Button>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-5 sm:gap-6 max-w-xl">
            <p className="font-clash text-black text-[17px] sm:text-[19px] leading-relaxed">
              Delivering excellence through technology driven logistics solutions
              with guaranteed on-time delivery and complete supply chain
              management.
            </p>

            {/* CERTIFICATIONS (CIRCULAR, NO WRAPPER) */}
            <div className="flex items-center gap-4 sm:gap-6">
              <img
                src="/images/certifications/iso-certification.jpg"
                alt="ISO Certification"
                className="w-[90px] h-[90px] sm:w-[105px] sm:h-[105px] rounded-full object-contain bg-transparent shadow-md"
              />
              <img
                src="/images/certifications/iba-logo.png"
                alt="IBA Certification"
                className="w-[90px] h-[90px] sm:w-[105px] sm:h-[105px] rounded-full object-contain bg-transparent shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= TRUCK IMAGE ================= */}
      <div className="relative mt-6 sm:mt-8 lg:mt-0 lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:w-[65%] z-10 px-4 sm:px-0">
        <img
          src="/images/trucks/mahindra-truck.png"
          alt="Eshaan Logistics Truck"
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
  );
}