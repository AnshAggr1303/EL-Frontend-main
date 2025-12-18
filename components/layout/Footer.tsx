"use client";
import { ArrowUpIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Button } from "../../components/ui/button";

const navigationLinks = ["Home", "About", "Services", "Contact Us"];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white border-t border-[#eeeeee]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 py-10 md:py-16 lg:py-20">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_0.8fr_1.6fr] gap-10 md:gap-16 lg:gap-24 items-start">
          
          {/* BRAND SECTION */}
          <div className="space-y-4 md:space-y-5 lg:space-y-6">
            <img
              src="/images/logos/eshaan-logo.png"
              alt="Eshaan Logistics"
              className="h-10 md:h-12 lg:h-14 w-auto transition-transform duration-300 hover:scale-105"
            />
            <h2 className="[font-family:'Clash_Display_Variable',Helvetica] font-bold text-[32px] leading-tight md:text-[40px] lg:text-[48px] text-black">
              Eshaan Logistics
            </h2>
            <p className="[font-family:'Clash_Display',Helvetica] font-normal text-[#6B6B6B] text-base md:text-lg lg:text-xl leading-relaxed max-w-[520px]">
              We are dedicated to providing top-notch logistics solutions for
              businesses worldwide. With years of experience in the industry, we
              have built a strong reputation for delivering reliable and
              efficient transportation and supply chain services.
            </p>
          </div>

          {/* NAVIGATION SECTION */}
          <nav className="flex flex-col gap-4 md:gap-5 lg:gap-6 md:pt-0 lg:pt-[88px]">
            <h3 className="[font-family:'Clash_Display',Helvetica] font-semibold text-xl md:text-2xl text-black mb-2 md:hidden">
              Quick Links
            </h3>
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="[font-family:'Clash_Display',Helvetica] font-medium text-lg md:text-xl lg:text-2xl text-black hover:text-[#1e427e] transition-all duration-200 hover:translate-x-2 inline-block"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* CONTACT INFO SECTION */}
          <div className="flex flex-col gap-6 md:gap-7 lg:gap-8 md:pt-0 lg:pt-[88px]">
            <h3 className="[font-family:'Clash_Display',Helvetica] font-semibold text-xl md:text-2xl text-black mb-2 md:hidden">
              Contact Us
            </h3>

            {/* LOCATION */}
            <div className="flex items-start gap-3 md:gap-4 group">
              <div className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full bg-[#fe0000] text-white flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <MapPinIcon className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <p className="[font-family:'Clash_Display',Helvetica] font-normal text-base md:text-lg lg:text-xl text-black leading-relaxed">
                Eshaan Logistics Pataudi Road, Wazirpur Chowk, Dhorka Village,
                Sector 92, Gurgaon - 122505 (HR)
              </p>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-3 md:gap-4 group">
              <div className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full bg-[#1e427e] text-white flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <MailIcon className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <a
                href="mailto:Subhash@eshaanlogistics.com"
                className="[font-family:'Clash_Display',Helvetica] font-normal text-base md:text-lg lg:text-xl text-black hover:text-[#1e427e] transition-colors duration-200"
              >
                Subhash@eshaanlogistics.com
              </a>
            </div>

            {/* PHONE */}
            <div className="flex items-start gap-3 md:gap-4 group">
              <div className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full bg-[#fe0000] text-white flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <PhoneIcon className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <a
                href="tel:+919810374007"
                className="[font-family:'Clash_Display',Helvetica] font-normal text-base md:text-lg lg:text-xl text-black hover:text-[#1e427e] transition-colors duration-200"
              >
                +91-9810374007
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT SECTION - Optional */}
        <div className="mt-10 md:mt-14 lg:mt-16 pt-6 md:pt-8 border-t border-[#eeeeee]">
          <p className="[font-family:'Clash_Display',Helvetica] font-normal text-sm md:text-base text-[#6B6B6B] text-center">
            © {new Date().getFullYear()} Eshaan Logistics. All rights reserved.
          </p>
        </div>
      </div>

      {/* SCROLL TO TOP BUTTON */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-lg hover:shadow-2xl hover:bg-[#1e427e] border-2 border-[#eeeeee] hover:border-[#1e427e] p-0 transition-all duration-300 hover:scale-110 group z-50"
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="w-5 h-5 md:w-6 md:h-6 text-black group-hover:text-white transition-colors duration-300" />
      </Button>
    </footer>
  );
};