import React, { JSX } from "react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";

const leadershipCards = [
  {
    id: "vision",
    title: "Company Vision",
    description:
      "Be the picture-perfect solution provider in supply chain management through best QCDMS practices and global standard operations.",
    imageHeight: "h-[453px]",
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
    imageHeight: "h-[322px]",
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
    imageHeight: "h-[453px]",
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
    <section className="w-full bg-white py-[93px] flex justify-center">
      {/* CENTERED CONTAINER */}
      <div className="flex flex-col w-full max-w-[1360px] items-center gap-10 px-10">
        {/* HERO CARD */}
        <Card className="flex items-center gap-[21px] p-8 w-full rounded-3xl border border-[#eeeeee]">
          <CardContent className="flex items-center gap-[21px] p-0 w-full">
            <div className="flex flex-col items-start gap-[25px] flex-1">
              <h1 className="[font-family:'Clash_Display_Variable-Bold',Helvetica] font-bold text-[68px] leading-normal">
                <span className="text-[#131313]">HEAR 👂FROM </span>
                <span className="text-[#1e427e]">
                  <br />
                  OUR LEADERS 🤵
                </span>
              </h1>
            </div>

            <div className="flex flex-col w-[658px] items-end gap-3 border-l border-[#6b6b6b] pl-8">
              <Badge className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-full border border-[#e4e4e4]">
                <div className="w-2 h-2 bg-blue rounded" />
                <span className="[font-family:'Clash_Display-Medium',Helvetica] font-medium text-black text-xl">
                  About Us
                </span>
              </Badge>

              <p className="[font-family:'Clash_Display-Regular',Helvetica] font-normal text-black text-2xl text-right">
                Built in 2011, Eshaan Logistics merges
                <br /> owned, tech-enabled fleet control with pan-India
                <br /> reach to deliver safely, transparently, and on time.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CENTERED IMAGE */}
        <img
          className="w-full h-[596px] object-cover rounded-3xl"
          alt="Why choose us card"
          src="/why-choose-us-card.svg"
        />

        {/* LEADERSHIP CARDS */}
        <div className="flex justify-center gap-8 w-full">
          {leadershipCards.map((card) => (
            <article
              key={card.id}
              className="flex flex-col gap-6 flex-1"
            >
              <div
                className={`relative w-full ${card.imageHeight} bg-[#00000033] rounded-3xl overflow-hidden`}
              >
                {card.images.map((image, index) => (
                  <img
                    key={`${card.id}-image-${index}`}
                    className={`absolute w-[171.65%] h-full top-0 left-0 ${
                      index === 0 ? "rounded-2xl object-cover" : ""
                    }`}
                    alt={image.alt}
                    src={image.src}
                  />
                ))}
              </div>

              <div className="flex flex-col gap-3 w-full">
                <h2 className="[font-family:'Clash_Display-Medium',Helvetica] font-medium text-black text-[40px]">
                  {card.title}
                </h2>

                {card.badge && (
                  <Badge className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-full border border-[#e4e4e4] w-fit">
                    <div className="w-2 h-2 bg-blue rounded" />
                    <span className="[font-family:'Clash_Display-Medium',Helvetica] font-medium text-black text-xl">
                      {card.badge.text}
                    </span>
                  </Badge>
                )}

                <p className="[font-family:'Clash_Display-Regular',Helvetica] font-normal text-black text-2xl">
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
