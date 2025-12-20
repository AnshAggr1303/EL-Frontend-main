"use client";
import { JSX, useMemo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/ui/card";

const statsData = [
  { title: "14+\nYEARS", description: "INDUSTRY EXPERIENCE" },
  { title: "400+\nEMPLOYEES", description: "DEDICATED\nTEAM" },
  { title: "345+\nVEHICLES", description: "OWN FLEET STRENGTH" },
  { title: "₹800M\nREVENUE", description: "ANNUAL TURNOVER FY23-24" },
];

export const StatsSection = (): JSX.Element => {
  const containerImage = useMemo(() => "/images/container/container-2-1.png", []);

  return (
    <section id="stats" className="w-full bg-white overflow-hidden flex flex-col items-center">
      {/* DISPLAY FONTS */}
      <div className="w-screen flex flex-col items-center overflow-hidden select-none">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
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
        </motion.div>
      </div>

      {/* STATS GRID */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="w-full max-w-[90vw] grid grid-cols-2 md:grid-cols-4 mt-[-5vw] border border-neutral-300 relative z-10 bg-white"
      >
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
          >
            <Card className="rounded-none border-0 border-l border-neutral-300 first:border-l-0 bg-white">
              <CardContent className="flex flex-col gap-[2vh] px-4 py-4 sm:py-6 md:py-12">
                <h3 className="font-clash font-bold text-[#F30000] leading-[1.1] sm:leading-[1.2] md:leading-[1.2] text-[4vw] sm:text-[2.5vw] uppercase whitespace-pre-line">
                  {stat.title}
                </h3>
                <p className="font-clash font-normal text-black text-[3vw] sm:text-[1.8vw] md:text-[1.5vw] leading-[1.3] sm:leading-[1.4] md:leading-[1.5] whitespace-pre-line">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* IMAGE */}
      <div className="w-full flex justify-center bg-white -mt-px">
        <motion.img
          src={containerImage}
          alt="Container"
          loading="lazy"
          className="w-[90vw] max-w-[80vw] h-auto object-cover rounded-[2vw]"
          initial={{ y: -400, rotate: 0, opacity: 0 }}
          whileInView={{ 
            y: [
              -400, -200, 0, 0, 0, 0, 0, 0
            ],
            rotate: [
              -6, -3, 0, 5, -4, 2.5, -1.5, 0
            ],
            opacity: [0, 0.5, 1, 1, 1, 1, 1, 1],
          }}
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -200px 0px" }}
          transition={{
            duration: 1.8,
            delay: 0.1,
            times: [0, 0.15, 0.3, 0.45, 0.6, 0.72, 0.83, 1],
            ease: [0.34, 1.3, 0.64, 1],
          }}
          style={{ transformOrigin: "top center" }}
        />
      </div>
    </section>
  );
};