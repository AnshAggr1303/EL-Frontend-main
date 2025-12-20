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

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setIndex((p) => (p === 7 ? 0 : p + 1))
    }, 5000)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="why-choose" className="min-h-screen max-w-[1440px] mx-auto px-6 md:px-10 py-20 font-sans">
      {/* HEADER */}
      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-10 items-start">
        <p className="text-[18px] md:text-[26px] max-w-[520px]">
          Trusted, technology-led logistics with owned fleet, pan-India reach,
          and an on-time delivery commitment.
        </p>

        <div className="hidden md:block w-px h-[120px] bg-gray-300" />

        <h2 className="text-[36px] md:text-[64px] font-bold leading-tight">
          <span className="text-[#1e427e]">WHY CHOOSE</span>
          <br />
          <span className="text-black">ESHAAN</span>
          <span className="text-[#fe0000]"> ?</span>
        </h2>
      </div>

      {/* IMAGE */}
      <div className="mt-12 grid md:grid-cols-[160px_1fr] gap-10 items-end">
        {/* COUNTER */}
        <div className="flex flex-col gap-6">
          <div className="flex items-baseline gap-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-[56px] md:text-[72px] font-bold text-[#1e427e] leading-none"
              >
                {String(index + 1).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
            <span className="text-[28px] md:text-[40px] text-gray-400 leading-none">/</span>
            <span className="text-[20px] md:text-[28px] text-gray-400 leading-none">08</span>
          </div>

          <div className="flex gap-4">
            <button
              onClick={goToPrev}
              className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#1e427e] hover:text-white hover:border-[#1e427e] transition-colors duration-300"
            >
              ←
            </button>
            <button
              onClick={goToNext}
              className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#1e427e] hover:text-white hover:border-[#1e427e] transition-colors duration-300"
            >
              →
            </button>
          </div>
        </div>

        {/* IMAGE CARD */}
        <div 
          className="relative h-[320px] md:h-[55vh] rounded-[32px] overflow-hidden shadow-2xl cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 300 : -300, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction > 0 ? -300 : 300, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="absolute inset-0"
            >
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
                style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.4s' }}
              />
            </motion.div>
          </AnimatePresence>

          <div 
            className="absolute inset-0 pointer-events-none transition-all duration-300"
            style={{ 
              background: isHovered 
                ? "linear-gradient(to top, rgba(0,0,0,0.85), transparent)" 
                : "linear-gradient(to top, rgba(0,0,0,0.7), transparent)"
            }}
          />

          {/* Text Content */}
          <div className="absolute bottom-6 left-6 right-6">
            <AnimatePresence mode="wait">
              <motion.h3
                key={index}
                initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="font-clash text-white text-[28px] md:text-[40px] font-semibold"
              >
                {current.title}
              </motion.h3>
            </AnimatePresence>

            <AnimatePresence>
              {isHovered && (
                <motion.p
                  key={`desc-${index}`}
                  initial={{ opacity: 0, y: 20, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: 20, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="font-clash text-white/90 text-[14px] md:text-[18px] mt-3 leading-relaxed"
                >
                  {current.description}
                </motion.p>
              )}
            </AnimatePresence>

            <div className="h-1 bg-[#fe0000] rounded-full mt-4 w-[100px]" />
          </div>
        </div>
      </div>
    </section>
  )
}