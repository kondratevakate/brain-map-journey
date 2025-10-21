import Header from "@/components/Header";
import HeroNew from "@/components/HeroNew";
import HowItWorks from "@/components/HowItWorks";
import PersonalizedPathways from "@/components/PersonalizedPathways";
import WhatYouReceive from "@/components/WhatYouReceive";
import WhyItMatters from "@/components/WhyItMatters";
import MRIMap from "@/components/MRIMap";
import Pricing from "@/components/Pricing";
import DataPrivacy from "@/components/DataPrivacy";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroNew />
      <HowItWorks />
      <PersonalizedPathways />
      <WhatYouReceive />
      <WhyItMatters />
      <MRIMap />
      <Pricing />
      <DataPrivacy />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
