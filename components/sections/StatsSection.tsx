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
    <section className="relative w-full min-h-[1024px] bg-white overflow-hidden flex flex-col items-center justify-start">
      <div className="absolute top-[calc(50.00%_-_621px)] left-[calc(50.00%_-_759px)] [-webkit-text-stroke:1.05px_#fe0000] [font-family:'Clash_Display_Variable-Regular',Helvetica] font-normal text-transparent text-[371.5px] tracking-[0] leading-[normal] whitespace-nowrap">
        ESHAAN
      </div>

      <div className="absolute top-[calc(50.00%_-_350px)] left-[calc(50.00%_-_934px)] [-webkit-text-stroke:1.05px_#1e427e] [font-family:'Clash_Display_Variable-Regular',Helvetica] font-normal text-transparent text-[371.5px] tracking-[0] leading-[normal] whitespace-nowrap">
        LOGISTICS
      </div>

      <div className="w-full max-w-[1361px] absolute top-[356px] left-[calc(50.00%_-_681px)] grid grid-cols-4 gap-0">
        {statsData.map((stat, index) => (
          <Card
            key={index}
            className="rounded-none border-[#cfcfcf] border-l-0 first:border-l"
          >
            <CardContent className="flex flex-col gap-[29px] p-8">
              <h3 className="[font-family:'Clash_Display_Variable-Bold',Helvetica] font-bold text-[#FE0000] text-[40px] tracking-[0] leading-[100%] whitespace-pre-line uppercase w-[242px] h-[76px]">
                {stat.title}
              </h3>
              <p className="[font-family:'Clash_Display_Variable-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal] whitespace-pre-line">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <img
        className="absolute top-[554px] left-[calc(50.00%_-_502px)] w-[1004px] h-[600px] object-cover"
        alt="Container"
        src="/images/container/container-2-1.png"
      />
    </section>
  );
};
