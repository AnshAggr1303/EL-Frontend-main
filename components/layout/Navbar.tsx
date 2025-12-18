"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

const navigationItems = ["Home", "About", "Services"]

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-[#cfcfcf]">
      <div className="max-w-[1360px] mx-auto px-10 h-[96px] flex items-center justify-between">
        {/* Logo */}
        <Image
          src="/images/logos/eshaan-logo.png"
          alt="Eshaan Logistics"
          width={90}
          height={90}
          priority
        />

        {/* Navigation */}
        <nav className="flex items-center gap-12 font-heading text-[20px]">
          {navigationItems.map((item) => (
            <span
              key={item}
              className="cursor-pointer text-black hover:text-[#1e427e] transition"
            >
              {item}
            </span>
          ))}
          <span className="flex items-center gap-1 cursor-pointer">
            Services
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </span>
        </nav>

        {/* CTA */}
        <Button
          variant="outline"
          className="border-[#1e427e] text-[#1e427e] font-heading text-[18px] px-6 h-[48px]"
        >
          Get Instant Quote
        </Button>
      </div>
    </header>
  )
}
