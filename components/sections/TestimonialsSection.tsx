"use client";
import React, { JSX } from "react";
import { motion } from "framer-motion";
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
        {/* HERO CARD WITH ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <Card className="flex items-center gap-5 md:gap-[21px] p-5 md:p-6 lg:p-8 w-full rounded-2xl md:rounded-3xl border-2 border-[#eeeeee] shadow-sm hover:shadow-xl hover:border-[#1e427e]/20 transition-all duration-300 hover:-translate-y-1">
            <CardContent className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-[21px] p-0 w-full">
              {/* HEADING SECTION */}
              <div className="flex flex-col items-start gap-4 md:gap-[25px] flex-1 w-full">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-clash font-extrabold text-[36px] leading-[1.15] md:text-[48px] md:leading-[1.15] lg:text-[68px] lg:leading-normal"
                >
                  <span className="text-[#131313]">HEAR 👂 FROM </span>
                  <span className="text-[#1e427e]">
                    <br />
                    OUR LEADERS
                  </span>
                  <span className="block text-center text-6xl md:text-7xl lg:text-8xl mt-2">🤵</span>
                </motion.h1>
              </div>

              {/* DESCRIPTION SECTION */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col w-full md:w-auto md:min-w-[400px] lg:w-[658px] items-start md:items-end gap-3 md:border-l-2 md:border-[#e5e5e5] md:pl-6 lg:pl-8"
              >
                <Badge className="inline-flex items-center gap-2.5 px-3 py-2 md:px-4 md:py-2.5 bg-white rounded-full border-2 border-[#e4e4e4] hover:border-[#1e427e] hover:bg-[#f8f9fb] hover:scale-105 transition-all duration-200 cursor-pointer">
                  <div className="w-2 h-2 bg-[#1e427e] rounded-full animate-pulse" />
                  <span className="font-clash font-semibold text-black text-base md:text-lg lg:text-xl">
                    About Us
                  </span>
                </Badge>

                <p className="font-clash font-normal text-black text-base md:text-xl lg:text-2xl text-left md:text-right leading-relaxed">
                  Built in 2011, Eshaan Logistics merges owned, tech-enabled fleet
                  control with pan-India reach to deliver safely, transparently, and
                  on time.
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CENTERED IMAGE WITH ANIMATION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
        >
          <img
            className="w-full h-[300px] md:h-[450px] lg:h-[596px] object-cover transform group-hover:scale-110 transition-transform duration-700"
            alt="Why choose us card"
            src="/why-choose-us-card.svg"
          />
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Optional decorative border on hover */}
          <div className="absolute inset-0 border-4 border-[#1e427e] opacity-0 group-hover:opacity-20 rounded-2xl md:rounded-3xl transition-opacity duration-300" />
        </motion.div>

        {/* LEADERSHIP CARDS WITH STAGGERED ANIMATION */}
        <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-6 lg:gap-8 w-full">
          {leadershipCards.map((card, index) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="flex flex-col gap-4 md:gap-5 lg:gap-6 flex-1 group"
            >
              {/* IMAGE CONTAINER */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`relative w-full ${card.imageHeight} bg-[#00000033] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                {card.images.map((image, imgIndex) => (
                  <img
                    key={`${card.id}-image-${imgIndex}`}
                    className={`absolute w-[171.65%] h-full top-0 left-0 transform group-hover:scale-110 transition-transform duration-700 ${
                      imgIndex === 0 ? "rounded-2xl object-cover" : ""
                    }`}
                    alt={image.alt}
                    src={image.src}
                  />
                ))}
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Decorative corner accent */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-[#1e427e] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-2xl" />
              </motion.div>

              {/* CONTENT CONTAINER */}
              <div className="flex flex-col gap-2 md:gap-3 w-full">
                <h2 className={`font-clash font-bold text-[30px] leading-[1.15] md:text-[34px] md:font-semibold lg:text-[40px] lg:leading-[1.15] group-hover:text-[#1e427e] transition-colors duration-300 ${
                  card.id === "founder" ? "text-center" : ""
                }`}>
                  {card.title}
                </h2>

                {card.badge && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="flex justify-center"
                  >
                    <Badge className="inline-flex items-center gap-2.5 px-3 py-2 md:px-4 md:py-2.5 bg-white rounded-full border-2 border-[#e4e4e4] w-fit hover:border-[#1e427e] hover:bg-[#f8f9fb] transition-all duration-200 cursor-pointer">
                      <div className="w-2 h-2 bg-[#1e427e] rounded-full animate-pulse" />
                      <span className="font-clash font-semibold text-black text-base md:text-lg lg:text-xl">
                        {card.badge.text}
                      </span>
                    </Badge>
                  </motion.div>
                )}

                <p className={`font-clash font-normal text-black text-[15px] md:text-lg lg:text-2xl leading-relaxed ${
                  card.id === "founder" ? "text-center" : ""
                }`}>
                  {card.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};