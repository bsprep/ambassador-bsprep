"use client";

import { motion } from "framer-motion";
import { Link2, CheckSquare, Award, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Features() {
  const { t } = useLanguage();

  const FEATURES = [
    {
      icon: <Link2 className="w-8 h-8 sm:w-12 sm:h-12 text-[#273E57]" />,
      title: t("features.item1.title"),
      description: t("features.item1.desc"),
    },
    {
      icon: <CheckSquare className="w-8 h-8 sm:w-12 sm:h-12 text-[#273E57]" />,
      title: t("features.item2.title"),
      description: t("features.item2.desc"),
    },
    {
      icon: <Award className="w-8 h-8 sm:w-12 sm:h-12 text-[#273E57]" />,
      title: t("features.item3.title"),
      description: t("features.item3.desc"),
    },
  ];

  return (
    <section id="features" className="text-black py-20 sm:py-32 px-5 sm:px-8 md:px-12 font-semibold uppercase relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">

        {/* Top 2-Column: Info & Poster */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* Left: Text & CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="flex-1 w-full"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6 leading-tight">
              <span className="text-black">{t("features.title1")}</span><br />
              <span className="text-[#273E57]">{t("features.title2")}</span>
            </h2>
            <div className="max-w-xl mb-10">
              <p className="text-sm sm:text-base font-medium opacity-70 normal-case leading-relaxed text-slate-800">
                {t("features.desc")}
              </p>
            </div>

            <a
              href="/docs/bsprep_overview.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base text-white bg-[#273E57] px-6 py-3 sm:px-8 sm:py-4 rounded-full whitespace-nowrap group hover:bg-[#1A2D42] transition-all shadow-[0_8px_30px_rgb(39,62,87,0.2)] hover:shadow-[0_8px_30px_rgb(39,62,87,0.3)] w-fit tracking-widest font-bold"
            >
              {t("features.cta")}
              <ArrowUpRight className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right: Static Poster Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full max-w-sm lg:max-w-md relative group"
          >
            <div className="relative w-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden border border-black/5 bg-white p-2 sm:p-3">
              <Image 
                src="/poster.jpeg" 
                alt="BSPrep Official Poster" 
                width={800}
                height={800}
                className="w-full h-auto rounded-xl object-contain" 
              />
            </div>

          </motion.div>

        </div>

        {/* Bottom: 3 Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pt-12 border-t border-black/5"
        >
          {FEATURES.map((feature, i) => (
            <motion.div key={i} variants={itemVariants} className="flex flex-col gap-6 group">
              <div className="p-4 bg-black/5 w-fit group-hover:bg-[#273E57]/10 transition-colors rounded-xl">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl mb-4 tracking-wider">{feature.title}</h3>
                <p className="text-xs sm:text-sm tracking-widest opacity-70 leading-relaxed normal-case font-medium">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
