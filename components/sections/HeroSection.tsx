"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] bg-[#F5F7FA] overflow-hidden">
      {/* ================= BACKGROUND STROKE TEXT ================= */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* DESKTOP VERSION */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 0.4, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute left-20 top-[55%] -translate-y-1/2 text-[300px] font-bold text-transparent [-webkit-text-stroke:1px_#1e427e] whitespace-nowrap"
          >
            ESHAAN
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 0.4, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-20 top-[82%] -translate-y-1/2 text-[300px] font-bold text-transparent [-webkit-text-stroke:1px_#1e427e] whitespace-nowrap"
          >
            LOGISTICS
          </motion.div>
        </div>

        {/* MOBILE & TABLET VERSION */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute left-1/2 -translate-x-1/2 top-[68%] text-[80px] sm:text-[120px] md:text-[160px] font-bold text-transparent [-webkit-text-stroke:1px_#1e427e] whitespace-nowrap"
          >
            ESHAAN
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute left-1/2 -translate-x-1/2 top-[78%] text-[80px] sm:text-[120px] md:text-[160px] font-bold text-transparent [-webkit-text-stroke:1px_#1e427e] whitespace-nowrap"
          >
            LOGISTICS
          </motion.div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16 lg:pt-20 pb-6 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-clash font-bold leading-[1.1] sm:leading-[1.05]"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="block text-[#fe0000] text-[34px] sm:text-[42px] lg:text-[50px]"
              >
                INDIA&apos;S LEADING 🚚
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="block text-black text-[34px] sm:text-[42px] lg:text-[50px]"
              >
                LOGISTICS SOLUTION
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="block text-black text-[34px] sm:text-[42px] lg:text-[50px]"
              >
                PROVIDER SINCE{" "}
                <span className="text-[#fe0000]">2011</span>
              </motion.span>
            </motion.h1>

            {/* BUTTON WITH BASIC LOADING ANIMATION */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-fit"
            >
              <Button
                onClick={() => window.dispatchEvent(new CustomEvent("openQuoteModal"))}
                className="
                  font-clash
                  w-auto
                  px-6 
                  sm:px-7 
                  py-5 
                  sm:py-6 
                  bg-[#fe0000] 
                  hover:bg-[#d60000]
                  hover:shadow-lg
                  hover:scale-[1.02]
                  rounded-lg 
                  text-white 
                  text-base 
                  sm:text-lg 
                  font-semibold
                  transition-all
                  duration-200
                "
              >
                Get Instant Quote
              </Button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-5 sm:gap-6 max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-clash text-black text-[17px] sm:text-[19px] leading-relaxed"
            >
              Delivering excellence through technology driven logistics solutions
              with guaranteed on-time delivery and complete supply chain
              management.
            </motion.p>

            {/* CERTIFICATIONS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4 sm:gap-6"
            >
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
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= TRUCK IMAGE - BASIC FADE IN ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative mt-6 sm:mt-8 lg:mt-0 lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:w-[65%] z-10 px-4 sm:px-0"
      >
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
      </motion.div>
    </section>
  );
}