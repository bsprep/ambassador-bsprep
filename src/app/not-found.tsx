import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex-1 flex flex-col items-center justify-center min-h-[100dvh] w-full text-center px-6 font-semibold uppercase tracking-widest text-[#1c364a] bg-white overflow-hidden z-0">
      
      <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-[#1c364a]/20 bg-[#faf8f5] shadow-[0_8px_30px_rgba(28,54,74,0.08)] text-[10px] sm:text-xs tracking-widest whitespace-nowrap text-[#1c364a] mb-5 sm:mb-6 font-bold">
        ERROR 404
      </div>

      <div className="text-[15vw] sm:text-8xl md:text-9xl leading-[0.85] tracking-tight text-center text-[#1c364a] mb-6">
        404
      </div>
      
      <h1 className="text-2xl sm:text-4xl mb-4 tracking-tight font-bold text-[#1c364a]">
        LOST IN THE VOID
      </h1>
      
      <p className="text-[10px] sm:text-xs normal-case font-bold text-[#1c364a]/70 max-w-md mx-auto mb-10 leading-relaxed">
        The page you are looking for has been moved, deleted, or never existed in the first place. Let's get you back on track.
      </p>
      
      <Link 
        href="/"
        className="flex items-center justify-center gap-2 text-sm sm:text-base text-white bg-[#1c364a] px-8 py-4 sm:py-5 rounded-full group hover:bg-[#152938] transition-all duration-300 shadow-[0_10px_40px_rgba(28,54,74,0.3)] hover:shadow-[0_15px_50px_rgba(28,54,74,0.4)] hover:-translate-y-1"
      >
        <span className="tracking-widest font-bold">RETURN HOME</span>
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
      </Link>
    </main>
  );
}
