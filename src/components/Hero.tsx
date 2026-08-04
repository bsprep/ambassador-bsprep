"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const customEase = [0.22, 1, 0.36, 1] as const;

const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: customEase,
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: customEase,
    },
  }),
};

const slideUp = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: 0,
    transition: {
      delay: 0.4 + i * 0.14,
      duration: 0.7,
      ease: customEase,
    },
  }),
};

export default function Hero() {
  const { t } = useLanguage();

  const STATS = [
    { value: "1200", label: t("hero.stats.impacted") },
    { value: "15", label: t("hero.stats.mentors") },
    { value: "20", label: t("hero.stats.rewards") },
  ];

  const HEADING_WORDS = t("hero.headingWords") as string[];

  return (
    <div className="relative z-0 min-h-screen flex flex-col font-semibold uppercase text-black selection:bg-[#273E57] selection:text-white overflow-hidden">
      
      {/* Spacer to replace the static nav height so stats aren't pushed up */}
      <div className="h-[80px] w-full shrink-0" />

      {/* Background Video */}
      <div className="absolute inset-0 z-[-1] pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4"
        />
      </div>
      {/* Stats Row */}
      <div className="flex-1 flex items-center justify-end px-5 sm:px-8 md:px-12 py-8 md:py-0 relative z-10">
        <div className="flex items-center gap-5 sm:gap-8 md:gap-10">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i + 2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-right flex flex-col items-end"
            >
              <div
                className="flex items-start"
                style={{ fontSize: "clamp(1.2rem, 4.5vw, 3rem)", lineHeight: 1 }}
              >
                <span>{stat.value}</span>
                <span className="text-[#273E57] text-[0.5em] mt-[0.2em]">+</span>
              </div>
              <div className="text-[9px] sm:text-[10px] md:text-xs tracking-widest whitespace-pre-line leading-tight text-right mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-5 sm:px-8 md:px-12 pb-8 md:pb-12 flex flex-col gap-6 md:gap-12 relative z-10">
        {/* Row A */}
        <div className="flex flex-row items-center justify-between gap-4">
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-black/10 bg-white/60 backdrop-blur-md shadow-sm text-[8px] sm:text-[10px] md:text-xs tracking-widest whitespace-nowrap text-slate-800"
          >
            {t("hero.textA")}
          </motion.div>

          <div className="flex flex-col items-end gap-1.5 sm:gap-2">
            <motion.a
              href="https://unstop.com/p/student-ambassador-program-bsprep-1720364?lb=usePftiW&utm_medium=Share&utm_source=competitions&utm_campaign=Sozyuihw88836" target="_blank" rel="noreferrer"
              custom={6}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center gap-2 text-xs sm:text-sm md:text-base text-white bg-[#273E57] px-4 py-2 sm:px-6 sm:py-3 rounded-full whitespace-nowrap group hover:bg-[#1A2D42] transition-colors"
            >
              {t("hero.applyNow")}
              <ArrowUpRight className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
            <motion.div
              custom={6.2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-[8px] sm:text-[9px] md:text-[10px] tracking-widest opacity-50 uppercase mr-2"
            >
              {t("hero.applicationsOpen")}
            </motion.div>
          </div>
        </div>

        {/* Row B */}
        <div className="flex flex-row items-end justify-between gap-3 sm:gap-4">
          <motion.div
            custom={7}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-black/10 bg-white/60 backdrop-blur-md shadow-sm text-[8px] sm:text-[10px] md:text-xs tracking-widest whitespace-nowrap text-slate-800 mb-2 sm:mb-6"
          >
            {t("hero.textB")}
          </motion.div>

          <div className="flex flex-col items-end">
            {HEADING_WORDS.map((word, i) => (
              <div key={word} className="overflow-hidden">
                <motion.div
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={slideUp}
                  className="text-right"
                  style={{
                    fontSize: "clamp(1.8rem, 8vw, 7.8rem)",
                    lineHeight: 0.88,
                  }}
                >
                  {word}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
