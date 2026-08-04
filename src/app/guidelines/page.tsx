import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function GuidelinesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-black pt-32 pb-20 px-5 sm:px-8 md:px-12 font-semibold">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5">
        <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-black/60 hover:text-[#273E57] transition-colors mb-12">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight mb-8 leading-tight">
          <span className="text-black">Ambassador</span> <span className="text-[#273E57]">Guidelines</span>
        </h1>

        <div className="space-y-10 normal-case font-medium opacity-80 leading-relaxed text-sm sm:text-base text-slate-800">
          
          <section>
            <h2 className="text-xl uppercase tracking-widest font-bold text-slate-900 mb-4">1. Ambassador Mission</h2>
            <p className="mb-4">
              BSPrep Ambassadors are the catalyst for our growth. You extend the program's reach by spreading awareness, hosting campus workshops, and guiding tech students at your institutions. As an authorised representative of the BSPrep Student Community, your communications carry the weight of our brand. Accuracy, professionalism, and integrity are completely non-negotiable.
            </p>
            <p>
              Ambassadors are exclusively selected for their community standing, reach, and genuine drive to build. Your role is to bring ambitious tech leaders into the BSPrep ecosystem, not to artificially inflate numbers with low-quality referrals.
            </p>
          </section>

          <section>
            <h2 className="text-xl uppercase tracking-widest font-bold text-slate-900 mb-4">2. The Referral Engine</h2>
            <p className="mb-4">
              Each accepted ambassador receives access to a personalized dashboard with a unique referral link. Peers who apply using your link are automatically tied to your profile. Your referral count and completed bounty tasks are the core metrics that determine your position on the Leaderboard.
            </p>
            <h3 className="font-bold text-slate-900 mb-2">How to Share</h3>
            <p className="mb-4">
              Share your custom invite link across your networks. Applicants who use this link are instantly tagged to you. You can also organize offline campus events and have attendees scan your unique dashboard QR code.
            </p>
            <h3 className="font-bold text-slate-900 mb-2">Tracking & Integrity</h3>
            <p>
              Your admin dashboard displays your real-time stats. Only share your referral code with genuine applicants. <strong>Do not</strong> create fake applications, spam public forums, or pressure students to apply. Fraudulent referrals or gaming the system will result in immediate disqualification and forfeiture of all accumulated rewards.
            </p>
          </section>

          <section>
            <h2 className="text-xl uppercase tracking-widest font-bold text-slate-900 mb-4">3. Core Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-4">
              <li>
                <strong>Spread Awareness Accurately:</strong> Post on LinkedIn, speak in classrooms, organize campus tech sessions, and reach communities that may not otherwise hear about BSPrep. All communications must accurately represent the program—do not exaggerate benefits or misrepresent our sponsors.
              </li>
              <li>
                <strong>Support Applicants:</strong> Help your peers understand the value of the platform. Assist with clarifications, but do not complete applications on their behalf.
              </li>
              <li>
                <strong>Document Your Work:</strong> Share photos, event attendance figures, and reach metrics on your dashboard through the Bounty system. Ambassadors who do not submit verifiable proof for bounties will not receive points.
              </li>
            </ul>
          </section>

          <section className="bg-red-50 p-6 rounded-xl border border-red-100">
            <h2 className="text-xl uppercase tracking-widest font-bold text-red-900 mb-4">4. What Ambassadors Must NOT Do</h2>
            <ul className="list-disc pl-5 space-y-2 text-red-800">
              <li>Claim authority you do not have, including guaranteeing job placements, promising arbitrary prizes, or claiming a formal partnership with our sponsors (InterviewBuddy, Unstop, TruScholar, etc).</li>
              <li>Charge any fee to applicants for guidance, referrals, or access to the BSPrep platform. The platform and program are 100% free.</li>
              <li>Use the BSPrep brand to endorse personal projects, paid services, or third-party platforms without explicit permission.</li>
              <li>Spam email lists, WhatsApp groups, or social media with unsolicited referral links.</li>
              <li>Create or facilitate the creation of fake applicant accounts to manipulate the leaderboard.</li>
            </ul>
          </section>

          <div className="pt-8 border-t border-black/10 text-xs opacity-60">
            Last Updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </main>
  );
}
