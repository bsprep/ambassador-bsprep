"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutUs() {
  const { t } = useLanguage();

  return (
    <section className="py-24 sm:py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Content */}
          <div className="flex-1 flex flex-col items-start text-left">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-100 text-slate-800 text-[10px] font-bold tracking-widest uppercase">
              {t("about.pill")}
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight mb-8 leading-tight uppercase font-semibold">
              <span className="text-black">{t("about.title1")}</span><br />
              <span className="text-[#273E57]">{t("about.title2")}</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-10 normal-case font-medium">
              {t("about.desc")}
            </p>

            <a
              href="https://bsprep.in"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 bg-[#273E57] text-white px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-black transition-all shadow-[0_8px_30px_rgba(39,62,87,0.2)] hover:shadow-[0_15px_40px_rgba(39,62,87,0.3)] hover:-translate-y-1"
            >
              {t("about.btn")}
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Right Image/Illustration */}
          <div className="flex-1 w-full relative flex items-center justify-center">
            <div className="relative w-full aspect-[4/3]">
              <Image 
                src="/team.svg" 
                alt="About BSPrep" 
                fill 
                className="object-contain" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
