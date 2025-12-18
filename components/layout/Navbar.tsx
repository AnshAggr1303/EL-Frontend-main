"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const navigationItems = ["Home", "About", "Services"]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-50 w-full bg-white border-b border-[#cfcfcf]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 h-[80px] md:h-[96px] flex items-center justify-between font-sans">
        {/* Logo */}
        <Image
          src="/images/logos/eshaan-logo.png"
          alt="Eshaan Logistics"
          width={90}
          height={90}
          priority
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12 text-[20px] font-medium">
          {navigationItems.map((item) => (
            <span
              key={item}
              className="cursor-pointer text-black hover:text-[#1e427e] transition"
            >
              {item}
            </span>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Button
          variant="outline"
          onClick={() => window.dispatchEvent(new CustomEvent("openQuoteModal"))}
          className="hidden md:inline-flex border-[#1e427e] text-[#1e427e] text-[18px] px-6 h-[48px]"
        >
          Get Instant Quote
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeWidth={2} strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeWidth={2} strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 py-8 space-y-6 bg-white border-t font-sans">
          {navigationItems.map((item) => (
            <div key={item} className="text-[22px] font-medium">
              {item}
            </div>
          ))}

          <Button
            onClick={() => {
              setOpen(false)
              window.dispatchEvent(new CustomEvent("openQuoteModal"))
            }}
            className="w-full bg-[#fe0000] text-white h-[52px] text-lg"
          >
            Get Instant Quote
          </Button>
        </div>
      )}
    </header>
  )
}
