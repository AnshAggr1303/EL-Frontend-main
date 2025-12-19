"use client";
import { JSX, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const transportationServices = [
  {
    id: 1,
    title: "Domestic Long Haul",
    description: "Point-to-point full-truckload moves across major industrial corridors with GPS visibility, fixed ETAs, and proactive delay recovery.",
    image: "/images/servicesec/frame-489.png",
  },
  {
    id: 2,
    title: "Domestic Short Haul",
    description: "Trusted, technology-led logistics with owned fleet and assured delivery timelines.",
    image: "/images/servicesec/truck.jpg",
  },
  {
    id: 3,
    title: "Car Carrier Services (TR8/TR5)",
    description: "Specialized car carrier transport with strict safety and handling standards.",
    image: "/images/servicesec/truck-driver.jpg",
  },
  {
    id: 4,
    title: "Containerized Transport (14–36 ft)",
    description: "Secure containerized logistics for diverse industrial cargo needs.",
    image: "/images/servicesec/truck.jpg",
  },
  {
    id: 5,
    title: "Shuttle Operations",
    description: "Dedicated shuttle services for predictable, high-frequency routes.",
    image: "/images/servicesec/frame-489.png",
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
    className: "row-[2_/_3] col-[1_/_3] w-full h-[266px] rounded-3xl object-cover",
  },
];

export const ServicesSection = (): JSX.Element => {
  const [mobileCategory, setMobileCategory] = useState<"transportation" | "value" | "complete">("transportation");
  const [activeService, setActiveService] = useState<number>(1);
  const [expandedCard, setExpandedCard] = useState<number>(1);

  const currentService = transportationServices.find((s) => s.id === activeService)!;

  return (
    <div id="services" className="w-full bg-[#f6f6f6]">
      <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-10 py-16 lg:py-24 flex flex-col gap-12">
        {/* ================= HEADER ================= */}
        <header className="flex flex-col items-center gap-4 lg:gap-[21px] text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="inline-flex items-center gap-2 lg:gap-2.5 px-4 py-2 lg:py-2.5 bg-white rounded-full border border-[#e4e4e4]"
            >
              <span className="w-2 h-2 rounded-full bg-[#1e427e]" />
              <span className="text-sm sm:text-base lg:text-xl font-medium text-black">
                Our Services
              </span>
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bold text-[32px] sm:text-[48px] lg:text-[68px] leading-tight"
          >
            <span className="text-[#131313]">HOW WE CAN 🤝</span>{" "}
            <span className="text-[#1e427e]">HELP YOU</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-[900px] text-sm sm:text-lg lg:text-2xl text-black"
          >
            Trusted, technology-led logistics with owned fleet, pan-India reach, and an on-time delivery commitment.
          </motion.p>
        </header>

        {/* ================= MOBILE VIEW ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:hidden space-y-6"
        >
          {/* CATEGORY SWITCHER */}
          <div className="flex gap-2 p-1 bg-white rounded-lg shadow-sm">
            {[
              { key: "transportation", label: "Transportation" },
              { key: "value", label: "Value-Added" },
              { key: "complete", label: "Complete" },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setMobileCategory(item.key as typeof mobileCategory)}
                className={`flex-1 py-3 px-2 text-xs sm:text-sm font-medium rounded-md transition-all duration-300 ${
                  mobileCategory === item.key
                    ? "bg-[#1e427e] text-white shadow-md"
                    : "bg-transparent text-[#6b6b6b] hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* TRANSPORTATION */}
          {mobileCategory === "transportation" && (
            <>
              {/* HORIZONTAL SCROLL */}
              <div className="relative">
                <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory">
                  {transportationServices.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setActiveService(service.id)}
                      className={`flex-shrink-0 px-4 py-2.5 text-sm font-medium whitespace-nowrap rounded-lg transition-all duration-300 snap-center ${
                        activeService === service.id
                          ? "bg-[#1e427e] text-white shadow-lg"
                          : "bg-white text-[#6b6b6b] border border-[#e5e5e5] hover:border-[#1e427e]"
                      }`}
                    >
                      <span className={activeService === service.id ? "font-semibold" : ""}>
                        {service.id}. {service.title}
                      </span>
                    </button>
                  ))}
                </div>
                {/* Scroll indicator dots */}
                <div className="flex justify-center gap-1.5 mt-2">
                  {transportationServices.map((service) => (
                    <div
                      key={service.id}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeService === service.id
                          ? "w-6 bg-[#1e427e]"
                          : "w-1.5 bg-[#d4d4d4]"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* SERVICE CARD */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={currentService.image}
                    alt={currentService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#1e427e] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {currentService.id}
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#131313]">
                    {currentService.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#6b6b6b] leading-relaxed">
                    {currentService.description}
                  </p>
                </div>
              </div>
            </>
          )}

          {/* VALUE-ADDED */}
          {mobileCategory === "value" && (
            <div className="bg-white rounded-xl shadow-md p-5 space-y-4">
              <h3 className="text-lg font-semibold text-[#131313] pb-3 border-b border-[#e5e5e5]">
                Value-Added Services
              </h3>
              <ul className="space-y-3">
                {[
                  "Warehousing & Storage",
                  "GPS & Live Tracking",
                  "Route Optimization",
                  "Dedicated Fleet Planning",
                  "Custom SLA Management",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-[#f6f6f6] transition-colors">
                    <div className="w-2 h-2 rounded-full bg-[#1e427e] flex-shrink-0" />
                    <span className="text-sm sm:text-base text-[#131313] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* COMPLETE LOGISTICS */}
          {mobileCategory === "complete" && (
            <div className="bg-white rounded-xl shadow-md p-5 space-y-4">
              <h3 className="text-lg font-semibold text-[#131313] pb-3 border-b border-[#e5e5e5]">
                Complete Logistics Solutions
              </h3>
              <p className="text-sm sm:text-base text-[#6b6b6b] leading-relaxed">
                End-to-end logistics solutions tailored to enterprise and long-term operational needs.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  "First-mile to Last-mile",
                  "Multi-modal Transport",
                  "Enterprise Logistics",
                  "Long-term Contracts",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-center p-4 rounded-lg bg-[#f6f6f6] border border-[#e5e5e5]">
                    <span className="text-xs sm:text-sm text-center text-[#131313] font-medium leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* ================= DESKTOP VIEW ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden lg:block"
        >
          <Tabs defaultValue="transportation" className="w-full max-w-[1360px] mx-auto">
            {/* ENHANCED TABS */}
            <TabsList className="flex gap-0 w-full bg-transparent p-0 mb-10">
              <TabsTrigger
                value="transportation"
                className="flex-1 py-4 px-6 border-b-2 border-[#e5e5e5] transition-all duration-300 data-[state=active]:border-[#1e427e] hover:border-[#1e427e]/50"
              >
                <span className="text-xl font-semibold text-[#6b6b6b] data-[state=active]:text-[#1e427e] transition-colors">
                  Transportation Services
                </span>
              </TabsTrigger>
              <TabsTrigger 
                value="value-added"
                className="flex-1 py-4 px-6 border-b-2 border-[#e5e5e5] transition-all duration-300 data-[state=active]:border-[#1e427e] hover:border-[#1e427e]/50"
              >
                <span className="text-xl font-semibold text-[#6b6b6b] data-[state=active]:text-[#1e427e] transition-colors">
                  Value-Added Services
                </span>
              </TabsTrigger>
              <TabsTrigger 
                value="complete"
                className="flex-1 py-4 px-6 border-b-2 border-[#e5e5e5] transition-all duration-300 data-[state=active]:border-[#1e427e] hover:border-[#1e427e]/50"
              >
                <span className="text-xl font-semibold text-[#6b6b6b] data-[state=active]:text-[#1e427e] transition-colors">
                  Complete Logistics
                </span>
              </TabsTrigger>
            </TabsList>

            {/* TRANSPORTATION CONTENT */}
            <TabsContent value="transportation" className="mt-0">
              <div className="flex gap-8">
                {/* ENHANCED CARDS */}
                <div className="flex flex-col max-w-[664px] gap-5">
                  {transportationServices.map((service, index) => {
                    const isBlue = service.id === 2 || service.id === 4;
                    const isExpanded = expandedCard === service.id;
                    return (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card
                          className="w-full bg-white rounded-2xl border-2 border-[#e5e5e5] cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-[#1e427e]/30 hover:-translate-y-1"
                          onClick={() => setExpandedCard(service.id)}
                        >
                          <CardContent className="flex gap-4 p-6">
                            {/* SERIAL NUMBER */}
                            <div
                              className="flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0 transition-all duration-300"
                              style={{
                                backgroundColor: isBlue ? "#1E427E" : "#FE0000",
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                              }}
                            >
                              <span className="text-white text-xl font-bold">
                                {service.id}
                              </span>
                            </div>
                            
                            {/* TEXT WITH EXPAND INDICATOR */}
                            <div className="flex-1 flex flex-col gap-3">
                              <div className="flex items-start justify-between">
                                <h3 className="text-[#141414] font-semibold text-[28px] leading-tight flex-1">
                                  {service.title}
                                </h3>
                                <svg 
                                  className={`w-6 h-6 text-[#6b6b6b] transition-transform duration-300 flex-shrink-0 ml-2 ${
                                    isExpanded ? 'rotate-180' : 'rotate-0'
                                  }`} 
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </div>
                              
                              <div className={`overflow-hidden transition-all duration-500 ${
                                isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                              }`}>
                                <p className="text-[#6B6B6B] text-lg leading-relaxed">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>

                {/* IMAGES GRID WITH HOVER ANIMATION */}
                <div className="grid grid-cols-2 grid-rows-2 gap-4 max-w-[664px] h-[564px]">
                  {imagesData.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className={`relative group overflow-hidden ${image.className}`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-lg font-semibold">{image.alt}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* VALUE-ADDED CONTENT */}
            <TabsContent value="value-added" className="mt-0">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { 
                    title: "Warehousing & Storage", 
                    desc: "Secure, climate-controlled facilities with 24/7 monitoring and advanced inventory management systems." 
                  },
                  { 
                    title: "GPS & Live Tracking", 
                    desc: "Real-time shipment visibility with minute-by-minute updates and predictive ETA calculations." 
                  },
                  { 
                    title: "Route Optimization", 
                    desc: "AI-powered routing that reduces transit time, fuel costs, and ensures on-time delivery." 
                  },
                  { 
                    title: "Dedicated Fleet Planning", 
                    desc: "Custom fleet solutions designed around your unique logistics requirements and schedules." 
                  },
                  { 
                    title: "Custom SLA Management", 
                    desc: "Tailored service level agreements with performance guarantees and transparent reporting." 
                  },
                  { 
                    title: "Insurance & Security", 
                    desc: "Comprehensive cargo insurance and enhanced security protocols for high-value shipments." 
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white p-6 rounded-xl border-2 border-[#e5e5e5] hover:border-[#1e427e]/30 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex flex-col gap-3">
                      <h3 className="text-xl font-semibold text-[#131313] group-hover:text-[#1e427e] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[#6b6b6b] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* COMPLETE LOGISTICS CONTENT */}
            <TabsContent value="complete" className="mt-0">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-8 rounded-xl border-2 border-[#e5e5e5]"
                >
                  <h3 className="text-2xl font-semibold text-[#131313] mb-3">
                    Complete Logistics Solutions
                  </h3>
                  <p className="text-lg text-[#6b6b6b] leading-relaxed mb-6">
                    End-to-end logistics solutions tailored to enterprise and long-term operational needs.
                  </p>
                </motion.div>

                <div className="grid grid-cols-3 gap-6">
                  {[
                    { 
                      title: "First-mile to Last-mile", 
                      desc: "Complete journey management from pickup to final delivery with full visibility"
                    },
                    { 
                      title: "Multi-modal Transport", 
                      desc: "Seamless integration of road, rail, air, and sea logistics for optimal efficiency"
                    },
                    { 
                      title: "Enterprise Logistics", 
                      desc: "Scalable solutions designed for large-scale industrial operations and complex supply chains"
                    },
                    { 
                      title: "Long-term Contracts", 
                      desc: "Strategic partnerships with flexible terms and dedicated resources for ongoing needs"
                    },
                    { 
                      title: "Analytics & Reporting", 
                      desc: "Data-driven insights and comprehensive reporting for continuous improvement"
                    },
                    { 
                      title: "Dedicated Account Management", 
                      desc: "Personal point of contact ensuring seamless communication and service excellence"
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="bg-white p-6 rounded-xl border-2 border-[#e5e5e5] hover:border-[#1e427e]/30 hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className="flex flex-col gap-3">
                        <h3 className="text-lg font-semibold text-[#131313] group-hover:text-[#1e427e] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#6b6b6b] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </section>
    </div>
  );
};