"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Marquee() {
  const { t } = useLanguage();
  
  const bsprepWords = t("marquee.words") as string[];

  return (
    <div className="w-full overflow-hidden bg-white py-5 border-b border-black/5 font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase text-[#273E57]">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex items-center gap-12 sm:gap-16"
        >
          {/* Double the array for seamless looping */}
          {[...bsprepWords, ...bsprepWords, ...bsprepWords, ...bsprepWords].map((word, i) => (
            <div key={i} className="flex items-center gap-12 sm:gap-16 shrink-0">
              <span>{word}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#273E57]/40" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
