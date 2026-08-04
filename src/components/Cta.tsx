"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Cta() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 md:py-32 px-5 sm:px-8 md:px-12 text-black overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#273E57] rounded-full blur-[120px]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8"
      >
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">
          {t("cta.title1")} <span className="text-[#273E57]">{t("cta.title2")}</span>
        </h2>
        <p className="text-sm md:text-base opacity-70 max-w-2xl font-medium tracking-wide uppercase">
          {t("cta.desc")}
        </p>
        
        <div className="flex flex-col items-center gap-3 mt-4">
          <a
            href="https://unstop.com/p/student-ambassador-program-bsprep-1720364?lb=usePftiW&utm_medium=Share&utm_source=competitions&utm_campaign=Sozyuihw88836" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 text-sm md:text-base font-semibold text-white bg-black px-8 py-4 rounded-full whitespace-nowrap group hover:bg-[#273E57] transition-all hover:scale-105 shadow-[0_8px_30px_rgba(39,62,87,0.2)] hover:shadow-[0_12px_40px_rgba(39,62,87,0.3)]"
          >
            {t("cta.btn")}
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <span className="text-[10px] tracking-widest opacity-50 uppercase">
            {t("cta.sub")}
          </span>
        </div>
      </motion.div>
    </section>
  );
}
