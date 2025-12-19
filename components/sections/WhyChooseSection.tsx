/* eslint-disable @next/next/no-img-element */
"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const differentiators = [
  { 
    title: "On-Time Delivery", 
    description: "Guaranteed delivery timelines with 99.5% on-time success rate across all routes.",
    image: "/images/team/man-wearing-helmet.jpg" 
  },
  { 
    title: "Advanced Tracking", 
    description: "Real-time GPS tracking with live updates and predictive ETA calculations.",
    image: "/images/team/man-wearing-helmet.jpg" 
  },
  { 
    title: "Dedicated Fleet", 
    description: "Owned and operated fleet ensuring quality control and service reliability.",
    image: "/images/team/man-wearing-helmet.jpg" 
  },
  { 
    title: "Pan-India Network", 
    description: "Extensive coverage across all major industrial corridors and remote locations.",
    image: "/images/team/man-wearing-helmet.jpg" 
  },
  { 
    title: "Expert Team", 
    description: "Highly trained professionals committed to excellence in logistics management.",
    image: "/images/team/man-wearing-helmet.jpg" 
  },
  { 
    title: "Technology Driven", 
    description: "Cutting-edge logistics technology for seamless operations and transparency.",
    image: "/images/team/man-wearing-helmet.jpg" 
  },
  { 
    title: "Safety First", 
    description: "Stringent safety protocols and comprehensive insurance coverage for all shipments.",
    image: "/images/team/man-wearing-helmet.jpg" 
  },
  { 
    title: "Customer Support", 
    description: "24/7 dedicated support team ready to assist with any logistics requirements.",
    image: "/images/team/man-wearing-helmet.jpg" 
  },
]

export default function WhyChooseSection() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isHovered, setIsHovered] = useState(false)
  const current = differentiators[index]

  const goToNext = () => {
    setDirection(1)
    setIndex((p) => (p === 7 ? 0 : p + 1))
  }

  const goToPrev = () => {
    setDirection(-1)
    setIndex((p) => (p === 0 ? 7 : p - 1))
  }

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setIndex((p) => (p === 7 ? 0 : p + 1))
    }, 5000)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen max-w-[1440px] mx-auto px-6 md:px-10 py-20 font-sans overflow-hidden">
      {/* HEADER */}
      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-10 items-start">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[18px] md:text-[26px] max-w-[520px] text-gray-700 leading-relaxed"
        >
          Trusted, technology-led logistics with owned fleet, pan-India reach,
          and an on-time delivery commitment.
        </motion.p>

        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden md:block w-px h-[120px] bg-gradient-to-b from-transparent via-gray-300 to-transparent origin-top"
        />

        <motion.h2 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[36px] md:text-[64px] font-bold leading-tight"
        >
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[#1e427e]"
          >
            WHY CHOOSE
          </motion.span>
          <br />
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-black"
          >
            ESHAAN
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.8, type: "spring" }}
            className="text-[#fe0000]"
          >
            {" ?"}
          </motion.span>
        </motion.h2>
      </div>

      {/* IMAGE */}
      <div className="mt-12 grid md:grid-cols-[160px_1fr] gap-10 items-end">
        {/* COUNTER */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-baseline gap-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-[56px] md:text-[72px] font-bold text-[#1e427e] leading-none"
              >
                {String(index + 1).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
            <span className="text-[28px] md:text-[40px] text-gray-400 leading-none">/</span>
            <span className="text-[20px] md:text-[28px] text-gray-400 leading-none">08</span>
          </div>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#1e427e", color: "#fff" }}
              whileTap={{ scale: 0.95 }}
              onClick={goToPrev}
              className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-600 transition-all duration-300 hover:border-[#1e427e]"
            >
              ←
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#1e427e", color: "#fff" }}
              whileTap={{ scale: 0.95 }}
              onClick={goToNext}
              className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-600 transition-all duration-300 hover:border-[#1e427e]"
            >
              →
            </motion.button>
          </div>
        </motion.div>

        {/* IMAGE CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative h-[320px] md:h-[55vh] rounded-[32px] overflow-hidden shadow-2xl group cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ 
                opacity: 0, 
                x: direction > 0 ? 300 : -300,
                scale: 0.95
              }}
              animate={{ 
                opacity: 1, 
                x: 0,
                scale: 1
              }}
              exit={{ 
                opacity: 0, 
                x: direction > 0 ? -300 : 300,
                scale: 0.95
              }}
              transition={{ 
                duration: 0.6, 
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              className="absolute inset-0"
            >
              <motion.img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Gradient Overlay - darker on hover */}
          <motion.div 
            animate={{ 
              background: isHovered 
                ? "linear-gradient(to top, rgba(0,0,0,0.85), transparent)" 
                : "linear-gradient(to top, rgba(0,0,0,0.7), transparent)"
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 pointer-events-none" 
          />

          {/* Text Content */}
          <div className="absolute bottom-6 left-6 right-6">
            {/* Title */}
            <AnimatePresence mode="wait">
              <motion.h3
                key={index}
                initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(4px)" }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
                className="font-clash text-white text-[28px] md:text-[40px] font-semibold"
              >
                {current.title}
              </motion.h3>
            </AnimatePresence>

            {/* Description - appears on hover */}
            <AnimatePresence>
              {isHovered && (
                <motion.p
                  key={`desc-${index}`}
                  initial={{ opacity: 0, y: 20, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: 20, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="font-clash text-white/90 text-[14px] md:text-[18px] mt-3 leading-relaxed"
                >
                  {current.description}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Decorative Element */}
            <motion.div
              key={`line-${index}`}
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-1 bg-[#fe0000] rounded-full mt-4"
            />
          </div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1e427e] rounded-full blur-[150px] pointer-events-none -z-10"
      />
    </section>
  )
}