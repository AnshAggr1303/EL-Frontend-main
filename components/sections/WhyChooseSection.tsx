/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react"

const differentiators = [
  { title: "On-Time Delivery", image: "/images/team/man-wearing-helmet.jpg" },
  { title: "Advanced Tracking", image: "/images/team/man-wearing-helmet.jpg" },
  { title: "Dedicated Fleet", image: "/images/team/man-wearing-helmet.jpg" },
  { title: "Pan-India Network", image: "/images/team/man-wearing-helmet.jpg" },
  { title: "Expert Team", image: "/images/team/man-wearing-helmet.jpg" },
  { title: "Technology Driven", image: "/images/team/man-wearing-helmet.jpg" },
  { title: "Safety First", image: "/images/team/man-wearing-helmet.jpg" },
  { title: "Customer Support", image: "/images/team/man-wearing-helmet.jpg" },
]

export default function WhyChooseSection() {
  const [index, setIndex] = useState(0)
  const current = differentiators[index]

  return (
    <section className="min-h-screen max-w-[1440px] mx-auto px-6 md:px-10 py-20 font-sans">
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
            <span className="text-[56px] md:text-[72px] font-bold text-[#1e427e] leading-none">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-[28px] md:text-[40px] text-gray-400 leading-none">/</span>
            <span className="text-[20px] md:text-[28px] text-gray-400 leading-none">08</span>
          </div>

          <div className="flex gap-4">
            <button onClick={() => setIndex((p) => (p + 7) % 8)} className="w-10 h-10 border rounded-full">←</button>
            <button onClick={() => setIndex((p) => (p + 1) % 8)} className="w-10 h-10 border rounded-full">→</button>
          </div>
        </div>

        {/* IMAGE CARD */}
        <div className="relative h-[320px] md:h-[55vh] rounded-[32px] overflow-hidden shadow-2xl">
          <img src={current.image} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent" />
          <h3 className="absolute bottom-6 left-6 text-white text-[28px] md:text-[40px] font-semibold">
            {current.title}
          </h3>
        </div>
      </div>
    </section>
  )
}
