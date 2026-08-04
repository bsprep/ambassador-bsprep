import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Sponsors from "@/components/Sponsors";
import Timeline from "@/components/Timeline";
import ElitePerks from "@/components/ElitePerks";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import BottomBanner from "@/components/BottomBanner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Marquee />
      <Sponsors />
      <HowItWorks />
      <Timeline />
      <Features />
      <ElitePerks />
      <Benefits />
      <Faq />
      <Cta />
      <Footer />
      <BottomBanner />
    </main>
  );
}
