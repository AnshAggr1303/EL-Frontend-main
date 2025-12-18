// MapSection.tsx
import React, { JSX } from "react";
import { Badge } from "../../components/ui/badge";

export const MapSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-screen bg-white flex items-center justify-center py-8 md:py-10 lg:py-12 px-4 md:px-6 lg:px-4">
      <div className="flex w-full max-w-[1360px] items-start justify-center">
        <div className="flex flex-col items-start gap-8 md:gap-10 lg:gap-12 flex-1">
          {/* HEADER SECTION */}
          <div className="flex flex-col items-center justify-center gap-4 md:gap-5 lg:gap-[21px] w-full">
            {/* BADGE */}
            <Badge
              variant="outline"
              className="inline-flex items-center justify-center gap-2.5 px-3 py-2 md:px-4 md:py-2.5 bg-white rounded-full border border-[#e4e4e4] hover:border-[#fe0000] hover:bg-[#fff5f5] transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <div className="w-2 h-2 bg-[#fe0000] rounded animate-pulse" />
              <span className="[font-family:'Clash_Display',Helvetica] font-medium text-black text-base md:text-lg lg:text-xl tracking-[0] leading-[normal]">
                Our Coverage
              </span>
            </Badge>

            {/* HEADING */}
            <h1 className="w-full [font-family:'Clash_Display_Variable',Helvetica] font-bold text-[36px] leading-[1.2] md:text-[52px] md:leading-[1.15] lg:text-[68px] lg:leading-[normal] text-center">
              <span className="text-[#fe0000] tracking-[0] inline-block hover:scale-105 transition-transform duration-300">
                PAN-INDIA
              </span>
              <span className="text-[#131313] tracking-[0]"> 🇮🇳 </span>
              <span className="text-[#131313] tracking-[0]">PRESENCE</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="w-full max-w-[892px] [font-family:'Clash_Display',Helvetica] font-normal text-black text-base leading-relaxed md:text-xl md:leading-relaxed lg:text-2xl lg:leading-[normal] text-center tracking-[0] px-2 md:px-4">
              Strategic network spanning major industrial corridors and
              commercial centers across India with satellite offices for local
              support.
            </p>
          </div>

          {/* MAP IMAGE SECTION */}
          <div className="flex items-center justify-center w-full p-3 md:p-4 lg:p-6">
            <div className="relative w-full h-[400px] md:h-[550px] lg:h-[692px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
              {/* Map Image */}
              <img
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                alt="India map showing pan-India presence"
                src="/image-21.png"
              />
              
              {/* Gradient Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#fe0000]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Optional: Decorative corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 md:w-20 md:h-20 border-t-4 border-l-4 border-[#fe0000] opacity-0 group-hover:opacity-60 transition-all duration-500 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20 border-b-4 border-r-4 border-[#fe0000] opacity-0 group-hover:opacity-60 transition-all duration-500 rounded-br-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};