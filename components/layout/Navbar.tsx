"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X, Menu, ChevronDown } from "lucide-react";

const servicesItems = [
  "Domestic Long-Haul",
  "Domestic Short-Haul",
  "ODC Carrier and ODC TRUCK-PICK",
  "ODC/BULK/General PWC-SDL",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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
            <a
              href="#home"
              className="font-clash text-[18px] lg:text-[20px] font-medium text-black hover:text-[#1e427e] transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#1e427e] group-hover:w-full transition-all duration-300"></span>
            </a>

            <a
              href="#testimonials"
              className="font-clash text-[18px] lg:text-[20px] font-medium text-black hover:text-[#1e427e] transition-colors duration-200 relative group"
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#1e427e] group-hover:w-full transition-all duration-300"></span>
            </a>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="font-clash text-[18px] lg:text-[20px] font-medium text-black hover:text-[#1e427e] transition-colors duration-200 relative group flex items-center gap-1">
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#1e427e] group-hover:w-full transition-all duration-300"></span>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[280px] bg-white border border-[#cfcfcf] rounded-lg shadow-lg overflow-hidden">
                  {servicesItems.map((service) => (
                    <a
                      key={service}
                      href={`#service-${service}`}
                      className="block font-clash px-4 py-3 text-[16px] text-black hover:bg-[#f5f7fa] hover:text-[#1e427e] transition-colors duration-200 border-b border-[#eeeeee] last:border-b-0"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <Button
            variant="outline"
            onClick={() => window.dispatchEvent(new CustomEvent("openQuoteModal"))}
            className="hidden md:inline-flex font-clash border-2 border-[#1e427e] text-[#1e427e] hover:bg-[#1e427e] hover:text-white text-[16px] lg:text-[18px] font-semibold px-5 lg:px-6 h-[44px] lg:h-[48px] rounded-lg transition-all duration-200"
          >
            Get Instant Quote
          </Button>

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

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-[#cfcfcf] ${
            open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 sm:px-6 py-6 space-y-4 bg-white">
            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="block font-clash text-[20px] sm:text-[22px] font-medium text-black hover:text-[#1e427e] py-2 transition-colors duration-200"
            >
              Home
            </a>

            <a
              href="#testimonials"
              onClick={() => setOpen(false)}
              className="block font-clash text-[20px] sm:text-[22px] font-medium text-black hover:text-[#1e427e] py-2 transition-colors duration-200"
            >
              About
            </a>

            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full font-clash text-[20px] sm:text-[22px] font-medium text-black hover:text-[#1e427e] py-2 transition-colors duration-200"
              >
                Services
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {servicesItems.map((service) => (
                    <a
                      key={service}
                      href={`#service-${service}`}
                      onClick={() => {
                        setOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className="block font-clash text-[16px] sm:text-[18px] text-gray-700 hover:text-[#1e427e] py-2 transition-colors duration-200"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <Button
              onClick={() => {
                setOpen(false);
                window.dispatchEvent(new CustomEvent("openQuoteModal"));
              }}
              className="w-full font-clash bg-[#fe0000] hover:bg-[#fe0000]/90 text-white h-[50px] sm:h-[52px] text-base sm:text-lg font-semibold rounded-lg mt-4 transition-all duration-200"
            >
              Get Instant Quote
            </Button>
          </div>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}