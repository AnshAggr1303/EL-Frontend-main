"use client";

import { JSX } from "react";
import { Card, CardContent } from "../../components/ui/card";

const statsData = [
  { title: "14+\nYEARS", description: "INDUSTRY EXPERIENCE" },
  { title: "400+ EMPLOYEES", description: "DEDICATED\nTEAM" },
  { title: "345+\nVEHICLES", description: "OWN FLEET STRENGTH" },
  { title: "₹800M REVENUE", description: "ANNUAL TURNOVER FY23-24" },
];

export const StatsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white overflow-hidden flex flex-col items-center">

      {/* ================= DISPLAY FONTS ================= */}
      <div className="w-screen flex flex-col items-center overflow-hidden select-none">

        <div
          className="
            w-screen
            text-center
            font-clash font-normal
            text-transparent
            [-webkit-text-stroke:0.1vw_#fe0000]
            [text-box-trim:trim-both]
            [text-box-edge:cap_alphabetic]
            text-[24vw]
            leading-none
            whitespace-nowrap
            block
          "
        >
          ESHAAN
        </div>

        <div
          className="
            w-screen
            text-center
            font-clash font-normal
            text-transparent
            [-webkit-text-stroke:0.1vw_#1e427e]
            [text-box-trim:trim-both]
            [text-box-edge:cap_alphabetic]
            text-[24vw]
            leading-none
            whitespace-nowrap
            block
          "
        >
          LOGISTICS
        </div>

      </div>


      {/* ================= STATS GRID ================= */}
      <div className="w-full max-w-[90vw] grid grid-cols-2 md:grid-cols-4 mt-[-5vw] border border-neutral-300">
        {statsData.map((stat, index) => (
          <Card
            key={index}
            className="rounded-none border-0 border-l border-neutral-300 first:border-l-0"
          >
            <CardContent className="flex flex-col gap-[2vh] px-4 py-4 sm:py-6 md:py-12">
              <h3 className="font-clash font-bold word-break text-[#F30000] leading-4 sm:leading-7 md:leading-7
                text-[4vw] sm:text-[2.5vw] 
                uppercase whitespace-pre-line">
                {stat.title}
              </h3>

              <p className="font-clash font-normal text-black 
                text-[3vw] sm:text-[2vw] leading-3 sm:leading-5 md:leading-8
                whitespace-pre-line">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ================= IMAGE ================= */}
      <div className="w-full flex justify-center">
        <img
          src="/images/container/container-2-1.png"
          alt="Container"
          className="w-[90vw] max-w-[80vw] h-auto object-cover rounded-[2vw]"
        />
      </div>

    </section>
  );
};
