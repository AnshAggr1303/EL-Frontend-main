import React, { JSX } from "react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";

const leadershipCards = [
  {
    id: "vision",
    title: "Company Vision",
    description:
      "Be the picture-perfect solution provider in supply chain management through best QCDMS practices and global standard operations.",
    imageHeight: "h-[280px] md:h-[380px] lg:h-[453px]",
    images: [
      { src: "/rectangle-1-2.png", alt: "Rectangle" },
      { src: "/rectangle-2.png", alt: "Rectangle" },
    ],
    badge: null,
  },
  {
    id: "founder",
    title: "Founder Introduction",
    description:
      "Visionary logistician with 25+ years in transportation, born into a transport business family with solutions in the bloodstream.",
    imageHeight: "h-[280px] md:h-[300px] lg:h-[322px]",
    images: [
      { src: "/rectangle-1-2.png", alt: "Rectangle" },
      { src: "/rectangle-2-1.png", alt: "Rectangle" },
    ],
    badge: {
      text: "Mr. Subhash Sharma, Founder",
    },
  },
  {
    id: "mission",
    title: "Company Mission",
    description:
      "Achieve customer delight through quality, cost-effectiveness, delivery, maintenance, and safety excellence.",
    imageHeight: "h-[280px] md:h-[380px] lg:h-[453px]",
    images: [
      { src: "/rectangle-1-2.png", alt: "Rectangle" },
      { src: "/rectangle-2-2.png", alt: "Rectangle" },
    ],
    badge: null,
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    /* FULL WIDTH WRAPPER */
    <section className="w-full bg-white py-12 md:py-16 lg:py-[93px] flex justify-center">
      {/* CENTERED CONTAINER */}
      <div className="flex flex-col w-full max-w-[1360px] items-center gap-6 md:gap-8 lg:gap-10 px-4 md:px-6 lg:px-10">
        {/* HERO CARD */}
        <Card className="flex items-center gap-5 md:gap-[21px] p-5 md:p-6 lg:p-8 w-full rounded-2xl md:rounded-3xl border border-[#eeeeee] shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardContent className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-[21px] p-0 w-full">
            {/* HEADING SECTION */}
            <div className="flex flex-col items-start gap-4 md:gap-[25px] flex-1 w-full">
              <h1 className="[font-family:'Clash_Display_Variable',Helvetica] font-bold text-[32px] leading-[1.2] md:text-[48px] md:leading-[1.15] lg:text-[68px] lg:leading-normal">
                <span className="text-[#131313]">HEAR 👂FROM </span>
                <span className="text-[#1e427e]">
                  <br />
                  OUR LEADERS 🤵
                </span>
              </h1>
            </div>

            {/* DESCRIPTION SECTION */}
            <div className="flex flex-col w-full md:w-auto md:min-w-[400px] lg:w-[658px] items-start md:items-end gap-3 md:border-l md:border-[#6b6b6b] md:pl-6 lg:pl-8">
              <Badge className="inline-flex items-center gap-2.5 px-3 py-2 md:px-4 md:py-2.5 bg-white rounded-full border border-[#e4e4e4] hover:border-[#1e427e] hover:bg-[#f8f9fb] transition-all duration-200">
                <div className="w-2 h-2 bg-[#1e427e] rounded animate-pulse" />
                <span className="[font-family:'Clash_Display',Helvetica] font-medium text-black text-base md:text-lg lg:text-xl">
                  About Us
                </span>
              </Badge>

              <p className="[font-family:'Clash_Display',Helvetica] font-normal text-black text-base md:text-xl lg:text-2xl text-left md:text-right leading-relaxed">
                Built in 2011, Eshaan Logistics merges owned, tech-enabled fleet
                control with pan-India reach to deliver safely, transparently, and
                on time.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CENTERED IMAGE */}
        <div className="w-full relative rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
          <img
            className="w-full h-[300px] md:h-[450px] lg:h-[596px] object-cover transform group-hover:scale-105 transition-transform duration-500"
            alt="Why choose us card"
            src="/why-choose-us-card.svg"
          />
          {/* Optional gradient overlay for better visual depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* LEADERSHIP CARDS */}
        <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-6 lg:gap-8 w-full">
          {leadershipCards.map((card) => (
            <article
              key={card.id}
              className="flex flex-col gap-4 md:gap-5 lg:gap-6 flex-1 group"
            >
              {/* IMAGE CONTAINER */}
              <div
                className={`relative w-full ${card.imageHeight} bg-[#00000033] rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                {card.images.map((image, index) => (
                  <img
                    key={`${card.id}-image-${index}`}
                    className={`absolute w-[171.65%] h-full top-0 left-0 transform group-hover:scale-105 transition-transform duration-500 ${
                      index === 0 ? "rounded-2xl object-cover" : ""
                    }`}
                    alt={image.alt}
                    src={image.src}
                  />
                ))}
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* CONTENT CONTAINER */}
              <div className="flex flex-col gap-2 md:gap-3 w-full">
                <h2 className="[font-family:'Clash_Display',Helvetica] font-medium text-black text-[28px] leading-[1.2] md:text-[32px] lg:text-[40px] lg:leading-[1.15]">
                  {card.title}
                </h2>

                {card.badge && (
                  <Badge className="inline-flex items-center gap-2.5 px-3 py-2 md:px-4 md:py-2.5 bg-white rounded-full border border-[#e4e4e4] w-fit hover:border-[#1e427e] hover:bg-[#f8f9fb] transition-all duration-200">
                    <div className="w-2 h-2 bg-[#1e427e] rounded animate-pulse" />
                    <span className="[font-family:'Clash_Display',Helvetica] font-medium text-black text-base md:text-lg lg:text-xl">
                      {card.badge.text}
                    </span>
                  </Badge>
                )}

                <p className="[font-family:'Clash_Display',Helvetica] font-normal text-black text-base md:text-lg lg:text-2xl leading-relaxed">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};