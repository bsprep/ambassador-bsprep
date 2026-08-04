"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight, X, Globe } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/lib/translations";

const NAV_LINKS = [
  { label: "Timeline", href: "/#timeline" },
  { label: "Perks", href: "/#elite-perks" },
  { label: "Leaderboard", href: "/#benefits" },
  { label: "Responsibilities", href: "/#features" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();

  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsTop(latest < 50);
  });

  // Hide entirely on dashboard and admin routes
  if (pathname?.startsWith("/dashboard") || pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      <motion.nav
        initial={{ backgroundColor: "rgba(255, 255, 255, 0)", backdropFilter: "blur(0px)" }}
        animate={{ 
          backgroundColor: isTop ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.8)",
          backdropFilter: isTop ? "blur(0px)" : "blur(12px)",
          borderBottomColor: isTop ? "rgba(0,0,0,0)" : "rgba(0, 0, 0, 0.05)"
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 sm:px-8 md:px-12 py-5 font-semibold uppercase text-black border-b"
      >
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="relative w-8 sm:w-10 h-8 sm:h-10 shrink-0">
              <Image src="/bsprep.png" alt="BSPrep Logo" fill className="object-contain" />
            </div>
            <span className="text-xl sm:text-2xl tracking-tighter font-bold">BSPREP</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[14px] tracking-widest hover:text-[#273E57] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <div 
            className="relative py-2 cursor-pointer"
            onMouseEnter={() => setIsLangMenuOpen(true)}
            onMouseLeave={() => setIsLangMenuOpen(false)}
            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
          >
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-black/60 hover:text-[#273E57] transition-colors">
              <Globe size={16} />
              <span>{language.toUpperCase()}</span>
            </div>
            
            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-1 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl border border-black/5 flex flex-col min-w-[120px] overflow-hidden py-1 z-50 origin-top-right"
                >
                  <button onClick={() => { setLanguage("en"); setIsLangMenuOpen(false); }} className={`px-4 py-3 text-left text-xs tracking-widest hover:bg-slate-50 transition-colors ${language === "en" ? "text-[#273E57] font-bold" : "text-black/60 font-medium"}`}>ENGLISH</button>
                  <button onClick={() => { setLanguage("hi"); setIsLangMenuOpen(false); }} className={`px-4 py-3 text-left text-xs tracking-widest hover:bg-slate-50 transition-colors ${language === "hi" ? "text-[#273E57] font-bold" : "text-black/60 font-medium"}`}>HINDI</button>
                  <button onClick={() => { setLanguage("ta"); setIsLangMenuOpen(false); }} className={`px-4 py-3 text-left text-xs tracking-widest hover:bg-slate-50 transition-colors ${language === "ta" ? "text-[#273E57] font-bold" : "text-black/60 font-medium"}`}>TAMIL</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="w-9 h-9 rounded-full bg-black flex flex-col items-center justify-center gap-1 shrink-0 group hover:bg-[#273E57] transition-colors"
          >
            <span className="w-4 h-[2px] bg-white group-hover:scale-x-90 transition-transform origin-center" />
            <span className="w-4 h-[2px] bg-white group-hover:scale-x-110 transition-transform origin-center" />
            <span className="w-4 h-[2px] bg-white group-hover:scale-x-90 transition-transform origin-center" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col p-5 sm:p-8 font-semibold uppercase tracking-widest"
          >
            {/* Top Row */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative w-8 sm:w-10 h-8 sm:h-10 shrink-0">
                  <Image src="/bsprep.png" alt="BSPrep Logo" fill className="object-contain" />
                </div>
                <span className="text-xl sm:text-2xl tracking-tighter font-bold text-black">BSPREP</span>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white hover:bg-[#273E57] transition-colors"
              >
                <X size={18} strokeWidth={2.5} />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col gap-8 mt-16">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl text-black hover:text-[#273E57] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-auto flex flex-col gap-2">
              <Link
                href="https://unstop.com/p/student-ambassador-program-bsprep-1720364?lb=usePftiW&utm_medium=Share&utm_source=competitions&utm_campaign=Sozyuihw88836"
                target="_blank"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 text-lg text-white bg-[#273E57] py-4 rounded-full hover:bg-[#1A2D42] transition-colors"
              >
                Apply Now
                <ArrowUpRight className="w-[18px] h-[18px]" />
              </Link>
              <div className="text-center text-[10px] opacity-50 pb-2">
                Applications Open Now
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
