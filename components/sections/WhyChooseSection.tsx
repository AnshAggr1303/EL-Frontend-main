/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';

const differentiators = [
  {
    id: 1,
    title: 'On-Time Delivery',
    description: 'Trusted, technology-led logistics with owned fleet, pan-India reach, and an on-time delivery commitment.',
    image: '/images/team/man-wearing-helmet.jpg'
  },
  {
    id: 2,
    title: 'Advanced Tracking',
    description: 'Real-time GPS tracking and monitoring systems for complete shipment visibility.',
    image: '/images/team/man-wearing-helmet.jpg'
  },
  {
    id: 3,
    title: 'Dedicated Fleet',
    description: 'Own fleet of 5,415+ vehicles ensuring reliability and quality service.',
    image: '/images/team/man-wearing-helmet.jpg'
  },
  {
    id: 4,
    title: 'Pan-India Network',
    description: 'Extensive coverage across all major cities and remote locations in India.',
    image: '/images/team/man-wearing-helmet.jpg'
  },
  {
    id: 5,
    title: 'Expert Team',
    description: '15+ years of logistics expertise with trained professionals.',
    image: '/images/team/man-wearing-helmet.jpg'
  },
  {
    id: 6,
    title: 'Technology Driven',
    description: 'Advanced logistics management systems for efficient operations.',
    image: '/images/team/man-wearing-helmet.jpg'
  },
  {
    id: 7,
    title: 'Safety First',
    description: 'Highest safety standards and insurance coverage for all shipments.',
    image: '/images/team/man-wearing-helmet.jpg'
  },
  {
    id: 8,
    title: 'Customer Support',
    description: '24/7 dedicated customer support for all your logistics needs.',
    image: '/images/team/man-wearing-helmet.jpg'
  }
];

export default function WhyChooseSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % differentiators.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + differentiators.length) % differentiators.length);
  };

  const current = differentiators[currentSlide];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-10 py-20 bg-white">
      <div className="flex items-start justify-between gap-12 mb-16">
        {/* Left: Description */}
        <div className="w-[45%]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <h3 className="text-xl font-medium text-black">Core Differentiators</h3>
          </div>
          <p className="text-[28px] leading-[1.4] text-black font-normal">
            {current.description}
          </p>
        </div>

        {/* Right: Title */}
        <div className="w-[50%]">
          <h2 className="text-[64px] font-bold leading-tight">
            <span className="text-[#1e427e]">WHY CHOOSE</span>
            <br />
            <span className="text-black">ESHAAN </span>
            <span className="text-[#fe0000]">?</span>
          </h2>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative">
        <div className="flex items-end gap-8">
          {/* Counter and Navigation */}
          <div className="flex flex-col gap-8 pb-12">
            <div className="flex items-baseline gap-2">
              <span className="text-[80px] font-bold text-[#1e427e] leading-none">
                {String(currentSlide + 1).padStart(2, '0')}
              </span>
              <span className="text-[32px] text-gray-400 font-medium">
                / {String(differentiators.length).padStart(2, '0')}
              </span>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors flex items-center justify-center"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors flex items-center justify-center"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Image Card */}
          <div className="flex-1 relative rounded-3xl overflow-hidden h-[500px] shadow-2xl">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Title Overlay */}
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white text-[48px] font-bold leading-tight">
                {current.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}