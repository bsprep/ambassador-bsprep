"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Benefits() {
  const { t } = useLanguage();

  const PERKS = [
    {
      num: "01",
      title: t("perks.item3.title"),
      description: t("perks.item3.desc"),
    },
    {
      num: "02",
      title: t("perks.item5.title"),
      description: t("perks.item5.desc"),
    },
    {
      num: "03",
      title: t("perks.item4.title"),
      description: t("perks.item4.desc"),
    },
    {
      num: "04",
      title: t("perks.item1.title"),
      description: t("perks.item1.desc"),
    }
  ];

  return (
    <section id="benefits" className="bg-white text-black py-20 sm:py-32 px-5 sm:px-8 md:px-12 relative border-t border-black/5">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
        
        {/* Left Side (Sticky header) */}
        <div className="lg:w-2/5 relative">
          <div className="lg:sticky lg:top-32 flex flex-col gap-6">
            <div className="flex items-center gap-4 text-[#273E57] uppercase tracking-widest text-[10px] sm:text-xs font-bold">
              <span className="w-6 h-[1px] bg-[#273E57]" />
              {t("benefits.label")}
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] whitespace-pre-line">
              {t("benefits.title")}
            </h2>
            <p className="text-sm sm:text-base opacity-70 font-medium leading-relaxed max-w-sm text-slate-800">
              {t("benefits.desc")}
            </p>
          </div>
        </div>

        {/* Right Side (List of Perks) */}
        <div className="lg:w-3/5 flex flex-col gap-12 sm:gap-16 pt-4">
          {PERKS.map((perk, i) => (
            <motion.div 
              key={perk.num} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 sm:gap-10 group border-b border-black/5 pb-12 sm:pb-16 last:border-0 last:pb-0"
            >
              <div className="text-[#273E57] font-mono text-xl sm:text-2xl font-bold shrink-0 pt-1">
                {perk.num}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {perk.title}
                </h3>
                <p className="text-sm sm:text-base opacity-70 leading-relaxed font-medium max-w-xl text-slate-800">
                  {perk.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
