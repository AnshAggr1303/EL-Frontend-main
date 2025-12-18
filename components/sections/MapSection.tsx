import React, { JSX } from "react";
import { Badge } from "../../components/ui/badge";
export const MapSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-screen bg-white flex items-center justify-center py-12 px-4">
      <div className="flex w-full max-w-[1360px] items-start justify-center gap-12">
        <div className="flex flex-col items-start gap-12 flex-1">
          <div className="flex flex-col items-center justify-center gap-[21px] w-full">
            <Badge
              variant="outline"
              className="inline-flex items-center justify-center gap-2.5 px-4 py-2.5 bg-white rounded-[50px] border border-[#e4e4e4]"
            >
              <div className="w-2 h-2 bg-blue rounded" />
              <span className="[font-family:'Clash_Display-Medium',Helvetica] font-medium text-black text-xl tracking-[0] leading-[normal]">
                Our Coverage
              </span>
            </Badge>

            <h1 className="w-full [font-family:'Clash_Display_Variable-Bold',Helvetica] font-normal text-[68px] text-center leading-[normal]">
              <span className="font-bold text-[#fe0000] tracking-[0]">
                PAN-INDIA
              </span>
              <span className="font-bold text-[#131313] tracking-[0]"> 🇮</span>
              <span className="font-bold text-[#131313] tracking-[0]">
                🇳 PRESENCE
              </span>
            </h1>

            <p className="w-full max-w-[892px] [font-family:'Clash_Display-Regular',Helvetica] font-normal text-black text-2xl text-center tracking-[0] leading-[normal]">
              Strategic network spanning major industrial corridors and
              commercial centers across India with satellite offices for local
              support.
            </p>
          </div>

          <div className="flex h-[692px] items-center justify-center gap-2.5 p-6 w-full">
            <img
              className="flex-1 h-full object-cover"
              alt="Image"
              src="/image-21.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
