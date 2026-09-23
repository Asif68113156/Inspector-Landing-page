import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBanner from "@/components/TrustBanner";
import WhatIsSection from "@/components/WhatIsSection";
import InteractiveChecklist from "@/components/InteractiveChecklist";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import FaqSection from "@/components/FaqSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="grow">
        <Hero />
        <TrustBanner />
        <WhatIsSection />
        <InteractiveChecklist />
        <BenefitsSection />
        <HowItWorks />
        <UseCases />
        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
