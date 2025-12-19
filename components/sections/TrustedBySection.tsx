"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const logoStrip1 = [
  "/images/logos/amazon.png",
  "/images/logos/NTPC.png",
  "/images/logos/HCFL.png",
  "/images/logos/ECL.png",
  "/images/logos/Hyundai.png",
  "/images/logos/Flipkart.png",
]

const logoStrip2 = [
  "/images/logos/MarutiSuzuki.png",
  "/images/logos/Toyota.png",
  "/images/logos/Kajaria.png",
  "/images/logos/v-guard-logo.jpg",
  "/images/logos/tata-logo-blue.jpg",
]

export default function TrustedBySection() {
  return (
    <section className="w-full bg-[#f6f6f6] py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col items-center gap-3 md:gap-4 lg:gap-6 text-center mb-10 md:mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 md:gap-2.5 px-3 md:px-4 py-2 md:py-2.5 bg-white rounded-full border border-[#e4e4e4]"
          >
            <span className="w-2 h-2 rounded-full bg-[#1e427e]" />
            <span className="text-xs md:text-sm lg:text-xl font-medium text-black">
              Our Clients
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bold text-[24px] sm:text-[32px] md:text-[48px] lg:text-[68px] leading-tight"
          >
            <span className="text-[#131313]">TRUSTED BY 🤝</span>{" "}
            <span className="text-[#1e427e]">INDUSTRY LEADERS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-[900px] text-xs sm:text-sm md:text-lg lg:text-2xl text-black px-4"
          >
            Serving automotive, e-commerce, FMCG, energy, and industrial sectors
            with 95% business through permanent contracts.
          </motion.p>
        </div>
      </div>

      {/* ================= DIAGONAL STRIPS ================= */}
      <div className="relative w-full space-y-6 md:space-y-8 lg:space-y-12">
        {/* STRIP 1 - Left to Right */}
        <motion.div
          initial={{ opacity: 0, x: -200, rotateZ: -3 }}
          whileInView={{ opacity: 1, x: 0, rotateZ: -3 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative -rotate-2 md:-rotate-3 overflow-hidden bg-white border-y border-[#e5e5e5] md:border-y-2 py-4 md:py-6 lg:py-8"
        >
          <div className="flex gap-6 md:gap-10 lg:gap-12">
            {/* First set of logos */}
            <motion.div
              animate={{ x: [0, -1800] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-6 md:gap-10 lg:gap-12 flex-shrink-0"
            >
              {logoStrip1.map((logo, idx) => (
                <motion.div
                  key={`strip1-first-${idx}`}
                  whileHover={{ scale: 1.15, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-[100px] h-[50px] md:w-[140px] md:h-[70px] lg:w-[180px] lg:h-[90px] flex items-center justify-center"
                >
                  <Image
                    src={logo}
                    alt="Client logo"
                    width={160}
                    height={80}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 filter drop-shadow-md"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Duplicate set for seamless loop */}
            <motion.div
              animate={{ x: [0, -1800] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-6 md:gap-10 lg:gap-12 flex-shrink-0"
            >
              {logoStrip1.map((logo, idx) => (
                <motion.div
                  key={`strip1-second-${idx}`}
                  whileHover={{ scale: 1.15, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-[100px] h-[50px] md:w-[140px] md:h-[70px] lg:w-[180px] lg:h-[90px] flex items-center justify-center"
                >
                  <Image
                    src={logo}
                    alt="Client logo"
                    width={160}
                    height={80}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 filter drop-shadow-md"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Third set for seamless loop */}
            <motion.div
              animate={{ x: [0, -1800] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-6 md:gap-10 lg:gap-12 flex-shrink-0"
            >
              {logoStrip1.map((logo, idx) => (
                <motion.div
                  key={`strip1-third-${idx}`}
                  whileHover={{ scale: 1.15, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-[100px] h-[50px] md:w-[140px] md:h-[70px] lg:w-[180px] lg:h-[90px] flex items-center justify-center"
                >
                  <Image
                    src={logo}
                    alt="Client logo"
                    width={160}
                    height={80}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 filter drop-shadow-md"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* STRIP 2 - Right to Left */}
        <motion.div
          initial={{ opacity: 0, x: 200, rotateZ: 3 }}
          whileInView={{ opacity: 1, x: 0, rotateZ: 3 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative rotate-2 md:rotate-3 overflow-hidden bg-white border-y border-[#e5e5e5] md:border-y-2 py-4 md:py-6 lg:py-8"
        >
          <div className="flex gap-6 md:gap-10 lg:gap-12">
            {/* First set of logos */}
            <motion.div
              animate={{ x: [-1500, 0] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-6 md:gap-10 lg:gap-12 flex-shrink-0"
            >
              {logoStrip2.map((logo, idx) => (
                <motion.div
                  key={`strip2-first-${idx}`}
                  whileHover={{ scale: 1.15, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-[100px] h-[50px] md:w-[140px] md:h-[70px] lg:w-[180px] lg:h-[90px] flex items-center justify-center"
                >
                  <Image
                    src={logo}
                    alt="Client logo"
                    width={160}
                    height={80}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 filter drop-shadow-md"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Duplicate set for seamless loop */}
            <motion.div
              animate={{ x: [-1500, 0] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-6 md:gap-10 lg:gap-12 flex-shrink-0"
            >
              {logoStrip2.map((logo, idx) => (
                <motion.div
                  key={`strip2-second-${idx}`}
                  whileHover={{ scale: 1.15, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-[100px] h-[50px] md:w-[140px] md:h-[70px] lg:w-[180px] lg:h-[90px] flex items-center justify-center"
                >
                  <Image
                    src={logo}
                    alt="Client logo"
                    width={160}
                    height={80}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 filter drop-shadow-md"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Third set for seamless loop */}
            <motion.div
              animate={{ x: [-1500, 0] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-6 md:gap-10 lg:gap-12 flex-shrink-0"
            >
              {logoStrip2.map((logo, idx) => (
                <motion.div
                  key={`strip2-third-${idx}`}
                  whileHover={{ scale: 1.15, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-[100px] h-[50px] md:w-[140px] md:h-[70px] lg:w-[180px] lg:h-[90px] flex items-center justify-center"
                >
                  <Image
                    src={logo}
                    alt="Client logo"
                    width={160}
                    height={80}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 filter drop-shadow-md"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}