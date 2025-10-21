import Header from "@/components/Header";
import HeroNew from "@/components/HeroNew";
import HowItWorks from "@/components/HowItWorks";
import PersonalizedPathways from "@/components/PersonalizedPathways";
import IntegratedHealth from "@/components/IntegratedHealth";
import HowItWorksSteps from "@/components/HowItWorksSteps";
import BrainHealthSection from "@/components/BrainHealthSection";
import WhatYouReceive from "@/components/WhatYouReceive";
import WhyItMatters from "@/components/WhyItMatters";
import MRIMap from "@/components/MRIMap";
import Pricing from "@/components/Pricing";
import DataPrivacy from "@/components/DataPrivacy";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroNew />
      <HowItWorks />
      <PersonalizedPathways />
      <IntegratedHealth />
      <HowItWorksSteps />
      <BrainHealthSection />
      <WhatYouReceive />
      <WhyItMatters />
      <MRIMap />
      <Pricing />
      <DataPrivacy />
      <Testimonials />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
