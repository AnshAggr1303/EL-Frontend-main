/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'

const differentiators = [
  {
    id: 1,
    title: 'On-Time Delivery',
    description:
      'Trusted, technology-led logistics with owned fleet, pan-India reach, and an on-time delivery commitment.',
    image: '/images/team/man-wearing-helmet.jpg',
  },
  {
    id: 2,
    title: 'Advanced Tracking',
    description: 'Real-time GPS tracking and monitoring systems for complete shipment visibility.',
    image: '/images/team/man-wearing-helmet.jpg',
  },
  {
    id: 3,
    title: 'Dedicated Fleet',
    description: 'Own fleet of 5,415+ vehicles ensuring reliability and quality service.',
    image: '/images/team/man-wearing-helmet.jpg',
  },
  {
    id: 4,
    title: 'Pan-India Network',
    description: 'Extensive coverage across all major cities and remote locations in India.',
    image: '/images/team/man-wearing-helmet.jpg',
  },
  {
    id: 5,
    title: 'Expert Team',
    description: '15+ years of logistics expertise with trained professionals.',
    image: '/images/team/man-wearing-helmet.jpg',
  },
  {
    id: 6,
    title: 'Technology Driven',
    description: 'Advanced logistics management systems for efficient operations.',
    image: '/images/team/man-wearing-helmet.jpg',
  },
  {
    id: 7,
    title: 'Safety First',
    description: 'Highest safety standards and insurance coverage for all shipments.',
    image: '/images/team/man-wearing-helmet.jpg',
  },
  {
    id: 8,
    title: 'Customer Support',
    description: '24/7 dedicated customer support for all your logistics needs.',
    image: '/images/team/man-wearing-helmet.jpg',
  },
]

export default function WhyChooseSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const current = differentiators[currentSlide]

  const next = () =>
    setCurrentSlide((p) => (p + 1) % differentiators.length)

  const prev = () =>
    setCurrentSlide((p) => (p - 1 + differentiators.length) % differentiators.length)

  return (
    <section className="min-h-screen max-w-[1440px] mx-auto px-10 py-20 bg-white flex flex-col justify-between">
      {/* Top Content */}
      <div className="grid grid-cols-[1fr_auto_1fr] gap-16 items-start">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 mb-6">
            <span className="w-2 h-2 bg-[#1e427e] rounded-full" />
            <span className="text-sm font-medium">Core Differentiators</span>
          </div>

          <p className="text-[26px] leading-[1.45] text-black max-w-[520px]">
            {current.description}
          </p>
        </div>

        {/* Divider */}
        <div className="w-px h-[120px] bg-gray-300 mt-6" />

        {/* Right */}
        <div>
          <h2 className="text-[64px] font-bold leading-[1.1]">
            <span className="text-[#1e427e]">WHY CHOOSE</span>
            <br />
            <span className="text-black">ESHAAN</span>
            <span className="text-[#fe0000]"> ?</span>
          </h2>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-16 grid grid-cols-[160px_1fr] gap-10 items-end">
        {/* Counter + Controls (OUTSIDE IMAGE) */}
        <div className="flex flex-col gap-6">
          {/* ✅ FIXED COUNTER */}
          <div className="flex items-baseline gap-2">
            <span className="text-[72px] font-bold text-[#1e427e] leading-none">
              {String(currentSlide + 1).padStart(2, '0')}
            </span>

            <span className="text-[40px] font-medium text-gray-400 leading-none">
              /
            </span>

            <span className="text-[28px] font-medium text-gray-400 leading-none">
              {String(differentiators.length).padStart(2, '0')}
            </span>
          </div>

          <div className="flex gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              →
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-[55vh] rounded-[32px] overflow-hidden shadow-2xl">
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <div className="absolute bottom-8 left-8">
            <h3 className="text-white text-[40px] font-semibold">
              {current.title}
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
