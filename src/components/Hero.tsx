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
      delay: i * 0.1,
      duration: 0.8,
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
    <div className="relative z-0 min-h-[100dvh] w-full flex flex-col font-semibold uppercase text-black selection:bg-[#273E57] selection:text-white overflow-x-hidden">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-[-1] pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover blur-[12px] scale-110 opacity-60"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4"
        />
        {/* Subtle overlay to ensure text remains readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/90" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center px-5 sm:px-8 md:px-12 pt-16 sm:pt-20 pb-6 sm:pb-8 w-full max-w-7xl mx-auto">
        
        {/* Top Pill */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-[#273E57]/20 bg-white/70 backdrop-blur-md shadow-[0_8px_30px_rgba(39,62,87,0.08)] text-[10px] sm:text-xs tracking-widest whitespace-nowrap text-[#273E57] mb-5 sm:mb-6 font-bold"
        >
          {t("hero.textA")}
        </motion.div>

        {/* Main Heading */}
        <div className="flex flex-col items-center gap-1 sm:gap-2 mb-6 sm:mb-8 w-full relative">
          {HEADING_WORDS.map((word, i) => (
            <div key={word} className="overflow-hidden w-full px-2">
              <motion.div
                custom={i + 2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="text-[11vw] sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] leading-[0.85] tracking-tight text-center text-slate-900"
              >
                {word}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 md:gap-20 mb-8 sm:mb-10 w-full">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i + 5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col items-center"
            >
              <div className="flex items-start text-4xl sm:text-5xl md:text-6xl leading-none font-bold text-black">
                <span>{stat.value}</span>
                <span className="text-[#273E57] text-[0.5em] mt-[0.2em]">+</span>
              </div>
              <div className="text-[10px] sm:text-xs tracking-widest whitespace-pre-line leading-tight text-center mt-3 text-slate-600 font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button & Bottom Pill */}
        <motion.div
          custom={8}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto"
        >
          <div className="flex flex-col items-center gap-3 w-full">
            <a
              href="https://unstop.com/p/student-ambassador-program-bsprep-1720364?lb=usePftiW&utm_medium=Share&utm_source=competitions&utm_campaign=Sozyuihw88836" target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 text-sm sm:text-base text-white bg-[#273E57] w-full px-8 py-4 sm:py-5 rounded-full group hover:bg-[#1A2D42] transition-all duration-300 shadow-[0_10px_40px_rgba(39,62,87,0.3)] hover:shadow-[0_15px_50px_rgba(39,62,87,0.4)] hover:-translate-y-1"
            >
              <span className="tracking-widest font-bold">{t("hero.applyNow")}</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <div className="text-[10px] tracking-widest opacity-50 uppercase font-bold">
              {t("hero.applicationsOpen")}
            </div>
          </div>

          <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-black/5 bg-slate-100 text-[9px] sm:text-[10px] tracking-widest text-slate-500 text-center leading-relaxed">
            {t("hero.textB")}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
