"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProductPromotion() {
  return (
    <section className="py-24 sm:py-32 px-5 sm:px-8 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        
        {/* Left Side: Copy & CTA */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <div className="flex items-center gap-4 text-[#273E57] tracking-widest text-[10px] sm:text-xs font-bold mb-6">
            POWERED BY BSPREP
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6 leading-tight uppercase font-semibold">
            <span className="text-black">THE PLATFORM</span><br />
            <span className="text-[#273E57]">YOU'LL REPRESENT.</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 mb-10 max-w-xl font-medium leading-relaxed">
            BSPrep is the leading community-driven learning platform for IITM BS students. With over <span className="font-bold text-slate-800">1,200+ active students</span> and <span className="font-bold text-slate-800">15+ expert mentors</span>, you'll be promoting a product that genuinely transforms academic journeys.
          </p>
          
          <a 
            href="https://bsprep.in" 
            target="_blank" 
            rel="noreferrer"
            className="group flex items-center justify-center gap-3 bg-[#273E57] hover:bg-[#1a2a3a] text-white px-8 py-4 rounded-full font-bold transition-all shadow-md hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
          >
            Explore the Platform
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>

        {/* Right Side: Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          {/* macOS Window Wrapper */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-slate-200 bg-white">
            {/* Window Header */}
            <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              
              {/* Fake Address Bar */}
              <div className="mx-auto bg-white rounded-md px-4 py-1 text-[10px] text-slate-400 font-medium flex items-center gap-2 border border-slate-200 shadow-sm">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                bsprep.in
              </div>
            </div>
            
            {/* Screenshot */}
            <div className="relative w-full bg-slate-50">
              <Image 
                src="/bsprep-platform.png" 
                alt="BSPrep Platform Screenshot" 
                width={1200}
                height={800}
                className="w-full h-auto object-contain object-top"
                priority
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
