"use client";
import { useState } from "react";
import Image from "next/image";
import { X, Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white border-b border-[#cfcfcf] shadow-sm">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 h-[70px] sm:h-[80px] md:h-[96px] flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logos/eshaan-logo.png"
              alt="Eshaan Logistics"
              width={70}
              height={70}
              className="w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] md:w-[90px] md:h-[90px]"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            <button
              onClick={() => scrollToSection('home')}
              className="font-clash text-[18px] lg:text-[20px] font-medium text-black hover:text-[#1e427e] transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#1e427e] group-hover:w-full transition-all duration-300"></span>
            </button>

            <button
              onClick={() => scrollToSection('about')}
              className="font-clash text-[18px] lg:text-[20px] font-medium text-black hover:text-[#1e427e] transition-colors duration-300 relative group"
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#1e427e] group-hover:w-full transition-all duration-300"></span>
            </button>

            <button
              onClick={() => scrollToSection('services')}
              className="font-clash text-[18px] lg:text-[20px] font-medium text-black hover:text-[#1e427e] transition-colors duration-300 relative group"
            >
              Services
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#1e427e] group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>

          <button
            onClick={() => window.dispatchEvent(new CustomEvent("openQuoteModal"))}
            className="hidden md:inline-flex font-clash border-2 border-[#1e427e] text-[#1e427e] hover:bg-[#1e427e] hover:text-white text-[16px] lg:text-[18px] font-semibold px-5 lg:px-6 h-[44px] lg:h-[48px] rounded-lg transition-all duration-300 items-center justify-center"
          >
            Get Instant Quote
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? (
              <X className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
            ) : (
              <Menu className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
            )}
          </button>
        </div>
      </header>

      {/* Backdrop Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          style={{ top: 0 }}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed top-[70px] sm:top-[80px] left-0 right-0 z-50 md:hidden bg-white border-b border-[#cfcfcf] shadow-lg">
          <div className="px-4 sm:px-6 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left font-clash text-[20px] sm:text-[22px] font-medium text-black hover:text-[#1e427e] py-2 transition-colors duration-300"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left font-clash text-[20px] sm:text-[22px] font-medium text-black hover:text-[#1e427e] py-2 transition-colors duration-300"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left font-clash text-[20px] sm:text-[22px] font-medium text-black hover:text-[#1e427e] py-2 transition-colors duration-300"
            >
              Services
            </button>

            <button
              onClick={() => {
                setOpen(false);
                window.dispatchEvent(new CustomEvent("openQuoteModal"));
              }}
              className="w-full font-clash bg-[#fe0000] hover:bg-[#fe0000]/90 text-white h-[50px] sm:h-[52px] text-base sm:text-lg font-semibold rounded-lg mt-4 transition-all duration-300"
            >
              Get Instant Quote
            </button>
          </div>
        </div>
      )}
    </>
  );
}