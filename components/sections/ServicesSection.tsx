"use client";

import { JSX, useState } from "react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

const servicesData = [
  {
    id: 1,
    title: "Domestic Long Haul",
    description:
      "Point-to-point full-truckload moves across major industrial corridors with GPS visibility, fixed ETAs, and proactive delay recovery.",
  },
  {
    id: 2,
    title: "Domestic Short Haul",
    description:
      "Trusted, technology-led logistics with owned fleet, pan-India reach, and an on-time delivery commitment.",
  },
  {
    id: 3,
    title: "Car Carrier Services (TR8/TR5)",
    description:
      "Trusted, technology-led logistics with owned fleet, pan-India reach, and an on-time delivery commitment.",
  },
  {
    id: 4,
    title: "Containerized Transport (14–36 ft)",
    description:
      "Trusted, technology-led logistics with owned fleet, pan-India reach, and an on-time delivery commitment.",
  },
  {
    id: 5,
    title: "Shuttle Operations",
    description:
      "Trusted, technology-led logistics with owned fleet, pan-India reach, and an on-time delivery commitment.",
  },
];

const imagesData = [
  {
    src: "/images/servicesec/frame-489.png",
    alt: "Logistics worker in warehouse",
    className: "row-[1_/_2] col-[1_/_2] w-full h-64 rounded-3xl object-cover",
  },
  {
    src: "/images/servicesec/truck.jpg",
    alt: "Container truck at sunset",
    className: "row-[1_/_2] col-[2_/_3] w-full h-64 rounded-3xl object-cover",
  },
  {
    src: "/images/servicesec/truck-driver.jpg",
    alt: "Truck driver portrait",
    className:
      "row-[2_/_3] col-[1_/_3] w-full h-[266px] rounded-3xl object-cover",
  },
];

export const ServicesSection = (): JSX.Element => {
  const [expandedCard, setExpandedCard] = useState<number>(1);

  return (
    <div className="w-full bg-[#f6f6f6]">
      <section className="flex flex-col w-full max-w-[1440px] mx-auto gap-12 px-10 py-24">
        {/* HEADER */}
        <header className="flex flex-col w-full max-w-[1360px] mx-auto items-center gap-[21px]">
          <Badge
            variant="outline"
            className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-full border border-[#e4e4e4]"
          >
            <div className="w-2 h-2 bg-blue rounded" />
            <span className="font-medium text-black text-xl">
              Our Services
            </span>
          </Badge>

          <h1 className="w-full font-bold text-[68px] text-center">
            <span className="text-[#131313]">HOW WE CAN 🤝</span>
            <span className="text-[#1e427e]"> HELP YOU</span>
          </h1>

          <p className="max-w-[892px] text-black text-2xl text-center">
            Trusted, technology-led logistics with owned fleet, pan-India reach,
            and an on-time delivery commitment.
          </p>
        </header>

        {/* TABS */}
        <Tabs
          defaultValue="transportation"
          className="w-full max-w-[1360px] mx-auto"
        >
          <TabsList className="flex gap-2.5 w-full bg-transparent p-0">
            <TabsTrigger
              value="transportation"
              className="flex-1 border-b-2 data-[state=active]:border-[#fe0000]"
            >
              <span className="text-2xl data-[state=active]:text-red">
                Transportation Services
              </span>
            </TabsTrigger>

            <TabsTrigger value="value-added" className="flex-1 border-b-2">
              <span className="text-2xl text-[#a6a6a6]">
                Value-Added Services
              </span>
            </TabsTrigger>

            <TabsTrigger value="complete" className="flex-1 border-b-2">
              <span className="text-2xl text-[#a6a6a6]">
                Complete Logistics Solutions
              </span>
            </TabsTrigger>
          </TabsList>

          {/* CONTENT */}
          <TabsContent value="transportation" className="mt-8">
            <div className="flex gap-8">
              {/* CARDS */}
              <div className="flex flex-col max-w-[664px] gap-5">
                {servicesData.map((service) => {
                  const isBlue = service.id === 2 || service.id === 4;

                  return (
                    <Card
                      key={service.id}
                      className="w-full bg-white rounded-2xl border border-[#cfcfcf] cursor-pointer"
                      onClick={() => setExpandedCard(service.id)}
                    >
                      <CardContent className="flex gap-[6.78px] p-6">
                        {/* SERIAL NUMBER */}
                        <div
                          className="
                            flex items-center justify-center
                            w-[40px]
                            h-[40.56px]
                            p-[6.78px]
                            rounded-[33.9px]
                            flex-shrink-0
                          "
                          style={{
                            backgroundColor: isBlue ? "#1E427E" : "#FE0000",
                          }}
                        >
                          <span
                            className="
                              text-white
                              text-[18px]
                              font-medium
                              leading-[100%]
                              [font-family:'Clash_Display']
                            "
                          >
                            {service.id}
                          </span>
                        </div>

                        {/* TEXT */}
                        <div className="flex flex-col gap-3">
                          <h3
                            className="
                              w-[556px]
                              text-[#141414]
                              font-medium
                              text-[32px]
                              leading-[100%]
                              tracking-[0%]
                              [font-family:'Clash_Display']
                            "
                          >
                            {service.title}
                          </h3>

                          {expandedCard === service.id && (
                            <p
                              className="
                                w-[556px]
                                text-[#6B6B6B]
                                font-normal
                                text-[20px]
                                leading-[100%]
                                tracking-[0%]
                                [font-family:'Clash_Display']
                              "
                            >
                              {service.description}
                            </p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* IMAGES */}
              <div className="grid grid-cols-2 grid-rows-2 gap-4 max-w-[664px] h-[564px]">
                {imagesData.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={image.className}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};
