"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();

  const STEPS = [
    { num: "01", title: t("process.step1"), active: true },
    { num: "02", title: t("process.step2"), active: false },
    { num: "03", title: t("process.step3"), active: false },
    { num: "04", title: t("process.step4"), active: false },
    { num: "05", title: t("process.step5"), active: false },
  ];

  return (
    <section id="process" className="bg-[#F8FAFC] py-20 sm:py-32 px-5 sm:px-8 md:px-12 font-semibold uppercase relative overflow-hidden border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex items-center gap-4 text-[#273E57] tracking-widest text-[10px] sm:text-xs font-bold mb-6">
            <span className="w-8 h-[2px] bg-[#273E57]" />
            {t("process.label")}
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight mb-20 font-extrabold normal-case text-slate-900">
            {t("process.title")}
          </h2>
        </motion.div>

        {/* Steps Container */}
        <div className="relative w-full overflow-x-auto pb-8 hide-scrollbar">
          <div className="min-w-[800px] flex items-start justify-between relative px-2">
            
            {/* Continuous Background Line (Animated) */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute top-[32px] sm:top-[36px] left-0 right-0 h-[2px] bg-slate-200 z-0 origin-left" 
            />
            
            {STEPS.map((step, i) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center sm:items-start gap-6 group cursor-default"
              >
                {/* The Number - using the background color to create a cut-out effect over the line */}
                <div className={`text-6xl sm:text-7xl font-black tracking-tighter bg-[#F8FAFC] px-4 -ml-4 transition-colors duration-300 ${step.active ? "text-[#273E57]" : "text-slate-300 group-hover:text-[#273E57]"}`}>
                  {step.num}
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-800 normal-case max-w-[150px] sm:ml-2 text-center sm:text-left transition-colors duration-300 group-hover:text-[#273E57]">
                  {step.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
