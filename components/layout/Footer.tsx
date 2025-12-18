"use client";

import { ArrowUpIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Button } from "../../components/ui/button";

const navigationLinks = ["Home", "About", "Services", "Contact Us"];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white">
      <div className="max-w-[1400px] mx-auto px-16 py-20">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_0.8fr_1.6fr] gap-24 items-start">
          
          {/* BRAND */}
          <div className="space-y-6">
            <img
              src="/images/logos/eshaan-logo.png"
              alt="Eshaan Logistics"
              className="h-14 w-auto"
            />

            <h2 className="font-sans font-medium text-[48px] text-black leading-tight">
              Ehsaan Logistics
            </h2>

            <p className="font-sans text-[#6B6B6B] text-xl leading-relaxed max-w-[520px]">
              We are dedicated to providing top-notch logistics solutions for
              businesses worldwide. With years of experience in the industry, we
              have built a strong reputation for delivering reliable and
              efficient transportation and supply chain services.
            </p>
          </div>

          {/* NAVIGATION */}
          <nav className="flex flex-col gap-6 pt-[88px]">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="font-sans font-medium text-2xl text-black hover:text-blue transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* CONTACT INFO */}
          <div className="flex flex-col gap-8 pt-[88px]">
            {/* LOCATION */}
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red text-white flex-shrink-0">
                <MapPinIcon className="w-5 h-5" />
              </div>
              <p className="font-sans text-xl text-black leading-relaxed">
                Eshaan Logistics Pataudi Road, Wazirpur Chowk, Dhorka Village,
                Sector 92, Gurgaon - 122505 (HR)
              </p>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue text-white flex-shrink-0">
                <MailIcon className="w-5 h-5" />
              </div>
              <p className="font-sans text-xl text-black">
                Subhash@eshaanlogistics.com
              </p>
            </div>

            {/* PHONE */}
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red text-white flex-shrink-0">
                <PhoneIcon className="w-5 h-5" />
              </div>
              <p className="font-sans text-xl text-black">
                +91-9810374007
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL TO TOP */}
      <Button
        onClick={scrollToTop}
        className="absolute bottom-10 right-10 w-14 h-14 rounded-full bg-white shadow-lg hover:bg-gray-100 p-0"
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="w-6 h-6 text-black" />
      </Button>
    </footer>
  );
};
