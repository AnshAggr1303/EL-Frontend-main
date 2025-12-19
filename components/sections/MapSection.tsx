"use client";
import React, { JSX } from "react";
import { motion } from "framer-motion";
import { Badge } from "../../components/ui/badge";

export const MapSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-screen bg-white flex items-center justify-center py-8 md:py-10 lg:py-12 px-4 md:px-6 lg:px-4">
      <div className="flex w-full max-w-[1360px] items-start justify-center">
        <div className="flex flex-col items-start gap-8 md:gap-10 lg:gap-12 flex-1">
          {/* HEADER SECTION */}
          <div className="flex flex-col items-center justify-center gap-4 md:gap-5 lg:gap-[21px] w-full">
            {/* BADGE WITH ANIMATION */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                variant="outline"
                className="inline-flex items-center justify-center gap-2.5 px-3 py-2 md:px-4 md:py-2.5 bg-white rounded-full border-2 border-[#e4e4e4] hover:border-[#fe0000] hover:bg-[#fff5f5] hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
              >
                <div className="w-2 h-2 bg-[#fe0000] rounded-full animate-pulse" />
                <span className="font-clash font-semibold text-black text-base md:text-lg lg:text-xl tracking-[0] leading-[normal]">
                  Our Coverage
                </span>
              </Badge>
            </motion.div>

            {/* HEADING WITH ANIMATION */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full font-clash font-bold text-[36px] leading-[1.2] md:text-[52px] md:leading-[1.15] lg:text-[68px] lg:leading-[normal] text-center"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="text-[#fe0000] tracking-[0] inline-block transition-transform duration-300"
              >
                PAN-INDIA
              </motion.span>
              <span className="text-[#131313] tracking-[0]"> 🇮🇳 </span>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-[#131313] tracking-[0]"
              >
                PRESENCE
              </motion.span>
            </motion.h1>

            {/* DESCRIPTION WITH ANIMATION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full max-w-[892px] font-clash font-normal text-black text-base leading-relaxed md:text-xl md:leading-relaxed lg:text-2xl lg:leading-[normal] text-center tracking-[0] px-2 md:px-4"
            >
              Strategic network spanning major industrial corridors and
              commercial centers across India with satellite offices for local
              support.
            </motion.p>
          </div>

          {/* MAP IMAGE SECTION WITH ANIMATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center w-full p-3 md:p-4 lg:p-6"
          >
            <div className="relative w-full h-[400px] md:h-[550px] lg:h-[692px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
              {/* Map Image */}
              <img
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                alt="India map showing pan-India presence"
                src="/image-21.png"
              />
              
              {/* Gradient Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#fe0000]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Decorative corner accents */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0 }}
                whileHover={{ opacity: 0.6 }}
                className="absolute top-0 left-0 w-16 h-16 md:w-20 md:h-20 border-t-4 border-l-4 border-[#fe0000] transition-all duration-500 rounded-tl-2xl"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0 }}
                whileHover={{ opacity: 0.6 }}
                className="absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20 border-b-4 border-r-4 border-[#fe0000] transition-all duration-500 rounded-br-2xl"
              />

              {/* Animated pulse dots (optional - shows coverage points) */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#fe0000] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#fe0000] opacity-75 animate-ping"></span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};