"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function BottomBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show banner after scrolling down a bit (e.g. 500px)
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    // Initial check in case they reload scrolled down
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 50, x: "-50%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 z-50 w-[90%] sm:w-auto max-w-2xl"
        >
          <div className="bg-white text-black border border-black/10 rounded-full p-2 pr-3 sm:pr-4 flex items-center gap-3 sm:gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-xs sm:text-sm font-medium tracking-wide w-full justify-between sm:justify-start">
            
            <div className="bg-[#273E57] text-white px-3 py-1.5 sm:py-2 rounded-full flex items-center gap-2 whitespace-nowrap uppercase tracking-widest text-[9px] sm:text-[10px] font-bold shrink-0">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white animate-pulse" />
              NOW OPEN
            </div>
            
            <div className="hidden sm:block opacity-90 truncate font-semibold">
              Build your digital identity &mdash; Apply on Unstop.
            </div>
            <div className="sm:hidden opacity-90 truncate text-[11px] font-semibold">
              Apply via Unstop
            </div>

            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              <a 
                href="https://unstop.com/p/student-ambassador-program-bsprep-1720364?lb=usePftiW&utm_medium=Share&utm_source=competitions&utm_campaign=Sozyuihw88836" 
                target="_blank" 
                rel="noreferrer"
                className="bg-black text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold whitespace-nowrap hover:bg-[#273E57] transition-colors flex items-center gap-1 text-[11px] sm:text-xs tracking-widest uppercase"
              >
                Apply <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              
              <button 
                onClick={() => setDismissed(true)}
                className="p-1 sm:p-1.5 hover:bg-black/5 rounded-full transition-colors opacity-50 hover:opacity-100 shrink-0 text-black"
                aria-label="Dismiss banner"
              >
                <X className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
