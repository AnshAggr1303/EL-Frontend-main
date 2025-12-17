"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const navigationItems = [
  { label: "Home", hasDropdown: false },
  { label: "About", hasDropdown: false },
  { label: "Services", hasDropdown: true },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="flex w-full max-w-[1360px] items-center justify-between px-4 md:px-0 py-2 mx-auto border-b border-solid border-[#6b6b6b] bg-white">
      {/* Logo */}
      <Image
        className="relative w-[80px] h-[80px] md:w-[107px] md:h-[107px]"
        alt="Eshaan Logistics"
        src="/images/logos/eshaan-logo.png"
        width={107}
        height={107}
        priority
      />

      {/* Desktop Navigation */}
      <nav className="hidden md:inline-flex items-center gap-12 relative flex-[0_0_auto]">
        {navigationItems.map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto] cursor-pointer group"
          >
            <div className="relative w-fit mt-[-1px] font-medium text-[#000000] text-2xl tracking-[0] leading-normal group-hover:text-[#1e427e] transition-colors">
              {item.label}
            </div>
            {item.hasDropdown && (
              <svg
                className="relative w-6 h-6 text-[#000000] group-hover:text-[#1e427e] transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </div>
        ))}
      </nav>

      {/* Desktop CTA Button */}
      <Button
        variant="outline"
        onClick={() => window.dispatchEvent(new CustomEvent("openQuoteModal"))}
        className="hidden md:inline-flex items-center justify-center gap-2.5 px-6 py-4 h-[62px] w-[250px] rounded border border-solid border-[#1e427e] bg-transparent hover:bg-[#1e427e]/10"
        style={{ borderRadius: "4px" }}
      >
        <span className="relative w-fit mt-[-1px] font-medium text-[#1e427e] text-2xl tracking-[0] leading-normal">
          Get Instant Quote
        </span>
      </Button>

      {/* Mobile menu button */}
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-black" aria-label="Toggle menu">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 md:hidden py-4 px-4 space-y-4 z-50 shadow-lg">
          {navigationItems.map((item, index) => (
            <div key={index} className="text-black text-lg font-medium">
              {item.label}
            </div>
          ))}
          <Button
            onClick={() => {
              setIsMenuOpen(false)
              window.dispatchEvent(new CustomEvent("openQuoteModal"))
            }}
            className="w-full bg-[#1e427e] hover:bg-[#1e427e]/90 text-white"
          >
            Get Instant Quote
          </Button>
        </div>
      )}
    </header>
  )
}
