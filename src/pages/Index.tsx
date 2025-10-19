import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
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
      <Hero />
      <HowItWorks />
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
