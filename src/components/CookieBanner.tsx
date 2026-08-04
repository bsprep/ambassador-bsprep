"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted the banner
    const consent = localStorage.getItem("bsprep_cookie_consent");
    if (!consent) {
      // Add a slight delay before showing the banner so it's not jarring on load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("bsprep_cookie_consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[380px] bg-white border border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] sm:rounded-2xl z-50 p-6 flex flex-col gap-4 font-semibold uppercase"
        >
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-black tracking-widest text-lg">Cookies 🍪</h3>
            <button 
              onClick={handleAccept}
              className="text-black/40 hover:text-black transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <p className="text-xs sm:text-sm normal-case font-medium opacity-70 leading-relaxed text-slate-800">
            We use essential cookies to keep you logged in and ensure the ambassador portal runs smoothly. Zero ads, zero tracking. 
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
            <button 
              onClick={handleAccept}
              className="w-full bg-[#273E57] text-white px-4 py-3 rounded-full text-xs tracking-widest hover:bg-[#1A2D42] transition-colors shadow-md"
            >
              ACCEPT
            </button>
            <Link 
              href="/cookies" 
              onClick={() => setIsVisible(false)}
              className="w-full text-center bg-black/5 text-black px-4 py-3 rounded-full text-xs tracking-widest hover:bg-black/10 transition-colors"
            >
              POLICY
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
