"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function ElitePerks() {
  const { t } = useLanguage();

  const PERKS = [
    {
      num: "01",
      sponsor: "InterviewBuddy",
      title: t("perks.item1.title"),
      image: "/sponsors/interview_buddy.svg",
      description: t("perks.item1.desc"),
      pill: t("perks.item1.pill")
    },
    {
      num: "02",
      sponsor: "TruScholar",
      title: t("perks.item2.title"),
      image: "/sponsors/truscholar.png",
      description: t("perks.item2.desc"),
      pill: t("perks.item2.pill")
    },
    {
      num: "03",
      sponsor: ".xyz Domains",
      title: t("perks.item3.title"),
      image: "/sponsors/xyz.png",
      description: t("perks.item3.desc"),
      pill: t("perks.item3.pill")
    },
    {
      num: "04",
      sponsor: "Unstop",
      title: t("perks.item4.title"),
      image: "/sponsors/unstop.png",
      description: t("perks.item4.desc"),
      pill: t("perks.item4.pill")
    },
    {
      num: "05",
      sponsor: "OSEN",
      title: t("perks.item5.title"),
      image: "/sponsors/OSEN.png",
      description: t("perks.item5.desc"),
      pill: t("perks.item5.pill"),
      imageClass: "scale-150 sm:scale-150",
    }
  ];

  return (
    <section id="elite-perks" className="text-black font-semibold uppercase tracking-widest relative">
      <div className="pt-20 sm:pt-32 pb-4 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 text-center flex flex-col items-center"
        >
          <div className="flex items-center gap-4 text-[#273E57] uppercase tracking-widest text-[10px] sm:text-xs font-bold mb-6">
            {t("perks.label")}
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight mb-4 leading-tight">
            {(() => {
              const text = t("perks.title") as string;
              const words = text.split(" ");
              const mid = Math.ceil(words.length / 2);
              return (
                <>
                  <span className="text-black">{words.slice(0, mid).join(" ")}</span>
                  {words.length > 1 && <br />}
                  <span className="text-[#273E57]">{words.slice(mid).join(" ")}</span>
                </>
              );
            })()}
          </h2>
          <p className="text-sm sm:text-base opacity-60 font-medium normal-case max-w-2xl mt-4">
            {t("perks.desc")}
          </p>
        </motion.div>
      </div>

      <div className="relative pb-32">
        {PERKS.map((perk, index) => {
          const isEven = index % 2 !== 0;

          return (
            <div 
              key={perk.num} 
              className="sticky top-0 w-full min-h-screen flex items-center justify-center overflow-hidden"
              style={{
                top: "0px",
                paddingTop: "60px", 
              }}
            >
              <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 h-auto lg:h-[80vh] min-h-[600px] lg:min-h-[500px] flex flex-col lg:flex-row shadow-[0_-10px_40px_rgb(0,0,0,0.05)] rounded-t-[2.5rem] overflow-hidden bg-white">
                
                {/* Text Content (Always second on mobile, alternates on desktop) */}
                <div className={`w-full lg:w-1/2 flex flex-col justify-center p-8 sm:p-12 lg:p-24 relative order-2 ${isEven ? "lg:order-2 bg-slate-50" : "lg:order-1 bg-white"}`}>
                  <div className="flex flex-col gap-4 lg:gap-6 relative z-10">
                    <div className="flex items-center gap-3 lg:gap-4 text-[#273E57] uppercase tracking-widest text-[10px] sm:text-xs font-bold">
                      <span className="w-4 lg:w-6 h-[1px] bg-[#273E57]" />
                      {perk.num}, {t("perks.sponsored")} {perk.sponsor}
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 normal-case leading-[1.1]">
                      {perk.title}
                    </h3>
                    <p className="text-sm sm:text-base opacity-70 font-medium leading-relaxed text-slate-800 normal-case mt-1 lg:mt-2 max-w-md">
                      {perk.description}
                    </p>
                  </div>
                </div>

                {/* Visual Content (Always first on mobile, alternates on desktop) */}
                <div className={`w-full lg:w-1/2 flex flex-col items-center justify-center p-12 lg:p-24 relative overflow-hidden order-1 ${isEven ? "lg:order-1 bg-white" : "lg:order-2 bg-slate-50"}`}>
                  <div className="relative w-32 h-32 sm:w-48 sm:h-48 lg:w-56 lg:h-56 mb-6 lg:mb-8 z-10">
                     <Image src={perk.image} alt={perk.sponsor} fill className={`object-contain drop-shadow-xl ${perk.imageClass || ""}`} />
                  </div>
                  <div className="inline-flex items-center justify-center bg-white border border-[#273E57]/20 text-[#273E57] px-4 py-1.5 lg:px-6 lg:py-2 rounded-full text-[9px] sm:text-[10px] lg:text-xs font-bold uppercase tracking-widest shadow-sm z-10">
                    {perk.pill}
                  </div>
                  {/* Big Background Number */}
                  <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 lg:-bottom-12 lg:-right-8 text-[12rem] sm:text-[16rem] lg:text-[20rem] font-black text-black/[0.03] leading-none pointer-events-none select-none">
                    {perk.num}
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
