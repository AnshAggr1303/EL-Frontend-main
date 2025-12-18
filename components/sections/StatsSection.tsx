"use client";

import React, { JSX } from "react";
import { Card, CardContent } from "../../components/ui/card";

const statsData = [
  {
    title: "14+\nYEARS",
    description: "INDUSTRY EXPERIENCE",
  },
  {
    title: "400+ EMPLOYEES",
    description: "DEDICATED\nTEAM",
  },
  {
    title: "345+\nVEHICLES",
    description: "OWN FLEET STRENGTH",
  },
  {
    title: "₹800M REVENUE",
    description: "ANNUAL TURNOVER FY23-24",
  },
];

export const StatsSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[1100px] bg-white overflow-visible flex flex-col items-center justify-start px-4 md:px-0">
      
      {/* ================= BACKGROUND TEXT ================= */}
      {/* Mobile Background Text */}
      <div className="md:hidden absolute top-[-20px] left-1/2 -translate-x-1/2 [-webkit-text-stroke:0.5px_#fe0000] [font-family:'Clash_Display_Variable-Regular',Helvetica] font-normal text-transparent text-[80px] sm:text-[120px] tracking-[0] leading-[normal] whitespace-nowrap">
        ESHAAN
      </div>

      <div className="md:hidden absolute top-[50px] sm:top-[80px] left-1/2 -translate-x-1/2 [-webkit-text-stroke:0.5px_#1e427e] [font-family:'Clash_Display_Variable-Regular',Helvetica] font-normal text-transparent text-[80px] sm:text-[120px] tracking-[0] leading-[normal] whitespace-nowrap">
        LOGISTICS
      </div>

      {/* Desktop Background Text */}
      <div className="hidden md:block absolute top-[calc(50.00%_-_621px)] left-[calc(50.00%_-_759px)] [-webkit-text-stroke:1.05px_#fe0000] [font-family:'Clash_Display_Variable-Regular',Helvetica] font-normal text-transparent text-[371.5px] tracking-[0] leading-[normal] whitespace-nowrap">
        ESHAAN
      </div>

      <div className="hidden md:block absolute top-[calc(50.00%_-_350px)] left-[calc(50.00%_-_934px)] [-webkit-text-stroke:1.05px_#1e427e] [font-family:'Clash_Display_Variable-Regular',Helvetica] font-normal text-transparent text-[371.5px] tracking-[0] leading-[normal] whitespace-nowrap">
        LOGISTICS
      </div>

      {/* ================= STATS GRID ================= */}
      <div className="w-full max-w-[1361px] absolute top-[200px] md:top-[356px] left-1/2 -translate-x-1/2 grid grid-cols-2 md:grid-cols-4 gap-0">
        {statsData.map((stat, index) => (
          <Card
            key={index}
            className="rounded-none border-[#cfcfcf] border-l-0 first:border-l"
          >
            <CardContent className="flex flex-col gap-6 md:gap-[29px] p-6 md:p-8">
              <h3 className="[font-family:'Clash_Display_Variable-Bold',Helvetica] font-bold text-[#FE0000] text-[32px] md:text-[40px] tracking-[0] leading-[100%] whitespace-pre-line uppercase">
                {stat.title}
              </h3>
              <p className="[font-family:'Clash_Display_Variable-Regular',Helvetica] font-normal text-black text-lg md:text-2xl tracking-[0] leading-[normal] whitespace-pre-line">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ================= IMAGE ================= */}
      {/* Mobile: positioned below stats */}
      <img
        className="md:hidden relative mt-[550px] w-full max-w-[90%] h-auto object-cover rounded-xl mx-auto"
        alt="Container"
        src="/images/container/container-2-1.png"
      />

      {/* Desktop: absolute positioning as in original */}
      <img
        className="hidden md:block absolute top-[554px] left-[calc(50%_-_502px)] w-[1004px] h-[600px] object-cover z-10"
        alt="Container"
        src="/images/container/container-2-1.png"
      />
    </section>
  );
};