"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const FAQS = [
    {
      question: t("faq.q1"),
      answer: (
        <>
          {t("faq.q1").includes("Where") ? "You can apply directly through our official Unstop listing. " : ""}
          <a href="https://unstop.com/p/student-ambassador-program-bsprep-1720364?lb=usePftiW&utm_medium=Share&utm_source=competitions&utm_campaign=Sozyuihw88836" target="_blank" rel="noreferrer" className="text-[#273E57] font-bold hover:underline">Click here to apply on Unstop</a>.
        </>
      ),
    },
    {
      question: t("faq.q2"),
      answer: t("faq.a2"),
    },
    {
      question: t("faq.q3"),
      answer: t("faq.a3"),
    },
    {
      question: t("faq.q4"),
      answer: t("faq.a4"),
    },
    {
      question: t("faq.q5"),
      answer: t("faq.a5"),
    },
  ];

  return (
    <section id="faq" className="text-black py-20 sm:py-32 px-5 sm:px-8 md:px-12 font-semibold uppercase tracking-widest">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl tracking-tight mb-4">
            <span className="text-black">{t("faq.title1")}</span> <span className="text-[#273E57]">{t("faq.title2")}</span>
          </h2>
          <p className="text-xs sm:text-sm opacity-50">{t("faq.subtitle")}</p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="border border-black/10 overflow-hidden bg-white"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-black/5 transition-colors"
                >
                  <span className="text-sm sm:text-base leading-snug pr-4">{faq.question}</span>
                  <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#273E57] text-white' : 'bg-black/5 text-black'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 text-xs sm:text-sm normal-case font-medium opacity-70 leading-relaxed border-t border-black/5 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
