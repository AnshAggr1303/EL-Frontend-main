"use client";
import { JSX } from "react";
import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
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

      {/* ================= STATS GRID ================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full max-w-[90vw] grid grid-cols-2 md:grid-cols-4 mt-[-5vw] border border-neutral-300 relative z-10 bg-white"
      >
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          >
            <Card className="rounded-none border-0 border-l border-neutral-300 first:border-l-0 bg-white">
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
          </motion.div>
        ))}
      </motion.div>

      {/* ================= IMAGE - TRIGGERS WHEN VISIBLE ================= */}
      <div className="w-full flex justify-center bg-white -mt-px">
        {/* Image swings from top like a pendulum */}
        <motion.img
          src="/images/container/container-2-1.png"
          alt="Container"
          className="w-[90vw] max-w-[80vw] h-auto object-cover rounded-[2vw]"
          style={{ 
            transformOrigin: "top center"
          }}
          initial={{ 
            y: -400,
            rotate: -6,
            opacity: 0,
          }}
          whileInView={{
            y: [
              -400,  // Start high
              -200,  // Mid fall
              0,     // Land
              0,     // Stay
              0,     // Stay
              0,     // Stay
              0,     // Stay
              0      // Stay
            ],
            rotate: [
              -6,    // Tilted during fall
              -3,    // Straightening
              0,     // Straight on landing
              5,     // Swing right
              -4,    // Swing left
              2.5,   // Swing right
              -1.5,  // Swing left
              0.5,   // Swing right
              0      // Straight
            ],
            opacity: [0, 0.5, 1, 1, 1, 1, 1, 1],
          }}
          viewport={{ 
            once: true, 
            amount: 0.3,  // Trigger when 30% of image is visible
            margin: "0px 0px -200px 0px"  // Trigger 200px before image enters viewport
          }}
          transition={{
            duration: 2.5,
            delay: 0.2,  // Reduced delay since it triggers later
            times: [0, 0.15, 0.3, 0.45, 0.6, 0.72, 0.83, 1],
            ease: [0.34, 1.3, 0.64, 1],
          }}
        />
      </div>
    </section>
  );
};