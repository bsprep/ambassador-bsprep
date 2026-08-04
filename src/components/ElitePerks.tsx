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
      sponsor: "Sticker Fever",
      title: t("perks.item5.title"),
      image: "/sponsors/stickerfever.png",
      description: t("perks.item5.desc"),
      pill: t("perks.item5.pill")
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
              {/* Card Container */}
              <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 h-[80vh] min-h-[500px] flex shadow-[0_-10px_40px_rgb(0,0,0,0.05)] rounded-t-[2.5rem] overflow-hidden bg-white">
                
                {/* Left Half */}
                <div className={`w-full lg:w-1/2 flex flex-col justify-center p-10 sm:p-16 lg:p-24 relative ${isEven ? "bg-slate-50 order-2 lg:order-1" : "bg-white order-1"}`}>
                  {!isEven ? (
                    // Text Content
                    <div className="flex flex-col gap-6 relative z-10">
                      <div className="flex items-center gap-4 text-[#273E57] uppercase tracking-widest text-[10px] sm:text-xs font-bold">
                        <span className="w-6 h-[1px] bg-[#273E57]" />
                        {perk.num}, {t("perks.sponsored")} {perk.sponsor}
                      </div>
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 normal-case leading-[1.1]">
                        {perk.title}
                      </h3>
                      <p className="text-sm sm:text-base opacity-70 font-medium leading-relaxed text-slate-800 normal-case mt-2 max-w-md">
                        {perk.description}
                      </p>
                    </div>
                  ) : (
                    // Visual Content
                    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
                      <div className="relative w-40 h-40 sm:w-56 sm:h-56 mb-8 z-10">
                         <Image src={perk.image} alt={perk.sponsor} fill className="object-contain drop-shadow-xl" />
                      </div>
                      <div className="inline-flex items-center justify-center bg-white border border-[#273E57]/20 text-[#273E57] px-6 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-sm z-10">
                        {perk.pill}
                      </div>
                      {/* Big Background Number */}
                      <div className="absolute -bottom-8 -right-4 sm:-bottom-12 sm:-right-8 text-[14rem] sm:text-[20rem] font-black text-black/[0.03] leading-none pointer-events-none select-none">
                        {perk.num}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Half */}
                <div className={`hidden lg:flex lg:w-1/2 flex-col justify-center p-16 lg:p-24 relative ${isEven ? "bg-white order-1 lg:order-2" : "bg-slate-50 order-2"}`}>
                  {isEven ? (
                    // Text Content
                    <div className="flex flex-col gap-6 relative z-10">
                      <div className="flex items-center gap-4 text-[#273E57] uppercase tracking-widest text-[10px] sm:text-xs font-bold">
                        <span className="w-6 h-[1px] bg-[#273E57]" />
                        {perk.num}, {t("perks.sponsored")} {perk.sponsor}
                      </div>
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 normal-case leading-[1.1]">
                        {perk.title}
                      </h3>
                      <p className="text-sm sm:text-base opacity-70 font-medium leading-relaxed text-slate-800 normal-case mt-2 max-w-md">
                        {perk.description}
                      </p>
                    </div>
                  ) : (
                    // Visual Content
                    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
                      <div className="relative w-40 h-40 sm:w-56 sm:h-56 mb-8 z-10">
                         <Image src={perk.image} alt={perk.sponsor} fill className="object-contain drop-shadow-xl" />
                      </div>
                      <div className="inline-flex items-center justify-center bg-white border border-[#273E57]/20 text-[#273E57] px-6 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-sm z-10">
                        {perk.pill}
                      </div>
                      {/* Big Background Number */}
                      <div className="absolute -bottom-8 -right-4 sm:-bottom-12 sm:-right-8 text-[14rem] sm:text-[20rem] font-black text-black/[0.03] leading-none pointer-events-none select-none">
                        {perk.num}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
