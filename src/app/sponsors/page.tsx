import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";

const SPONSORS_DATA = [
  {
    name: "InterviewBuddy",
    src: "/sponsors/interview_buddy.svg",
    website: "https://interviewbuddy.net",
    description: "A comprehensive platform that provides students with AI mock interview credits. They empower our community by providing high-value vouchers for winners, discount coupons for participants, and a simulated environment to level up their interview game.",
  },

  {
    name: "TruScholar",
    src: "/sponsors/truscholar.png",
    website: "https://www.truscholar.io",
    description: "A blockchain-powered platform for the issuance and verification of academic credentials. They empower the BSPrep community by issuing immutable, digital certificates and badges that can be securely showcased to employers worldwide.",
  },
  {
    name: "Unstop",
    src: "/sponsors/unstop.png",
    website: "https://unstop.com",
    description: "The leading early talent platform for students and professionals to learn, practice, and participate in global competitions and hackathons. They support our fellows by providing premium access to top-tier learning resources.",
  },
  {
    name: ".XYZ Domain",
    src: "/sponsors/xyz.png",
    website: "https://gen.xyz",
    description: "The universally recognized .xyz domain provider. They sponsor our top performers with free 1-year custom domains to help students build their personal portfolios and kickstart their professional digital presence on the web.",
  },
  {
    name: "OSEN",
    src: "/sponsors/OSEN.png",
    website: "https://osen.live",
    description: "OSEN is partnering with BSPrep to host an exclusive online event session. They are sponsoring exclusive OSEN swags, including T-Shirts and books, for the top performers of our community engagement activities.",
    imageClass: "scale-150 sm:scale-150 origin-left md:origin-center",
  },
];

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-white text-black pt-32 pb-20 px-5 sm:px-8 md:px-12 font-semibold uppercase relative z-0">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-xs tracking-widest text-[#273E57] border border-[#273E57]/20 hover:bg-[#273E57] hover:text-white px-5 py-2.5 rounded-full transition-all mb-12">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tight mb-4">
          <span className="text-black">OUR</span> <span className="text-[#273E57]">SPONSORS</span>
        </h1>
        <p className="text-xs sm:text-sm opacity-50 tracking-widest mb-16 max-w-lg">
          The industry leaders and visionary platforms that make the BSPrep Growth Fellows program possible.
        </p>

        <div className="flex flex-col gap-10 mb-24">
          {SPONSORS_DATA.map((sponsor) => (
            <div key={sponsor.name} className="bg-white border border-[#273E57]/20 rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl p-8 sm:p-12 flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center group shadow-[0_8px_30px_rgba(39,62,87,0.06)] hover:shadow-[0_15px_40px_rgba(39,62,87,0.12)] hover:border-[#273E57]/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              {/* Decorative Theme Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#273E57]/5 rounded-bl-[4rem] -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
              
              <div className="relative w-48 h-24 shrink-0 grayscale group-hover:grayscale-0 transition-all duration-300 relative z-10">
                <Image src={sponsor.src} alt={sponsor.name} fill className={`object-contain object-left md:object-center ${sponsor.imageClass || ""}`} />
              </div>
              <div className="flex-1 flex flex-col gap-4 relative z-10">
                <h2 className="text-2xl tracking-widest text-[#273E57]">{sponsor.name}</h2>
                <p className="normal-case opacity-70 text-sm leading-relaxed max-w-xl text-slate-700">
                  {sponsor.description}
                </p>
                <a 
                  href={sponsor.website} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-1.5 text-xs tracking-widest text-[#273E57] hover:text-black transition-colors mt-2 font-bold"
                >
                  Visit Website <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#273E57] text-white p-12 sm:p-20 text-center flex flex-col items-center shadow-[0_20px_50px_rgba(39,62,87,0.3)] rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-2xl rounded-bl-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl tracking-tight mb-6">WANNA SPONSOR US?</h2>
            <p className="normal-case text-white/80 max-w-lg mb-10 text-sm sm:text-base leading-relaxed">
              Partner with us to empower the next generation of tech leaders. Get your brand in front of thousands of highly motivated students across campuses.
            </p>
            <a 
              href="mailto:sponsorship@bsprep.in" 
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-sm hover:bg-black hover:text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Mail size={18} />
              sponsorship@bsprep.in
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
