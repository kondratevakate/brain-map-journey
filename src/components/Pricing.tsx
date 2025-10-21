import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const features = [
  "Interactive 3D brain visualization",
  "Brain-age estimation report",
  "Personalized longevity insights",
  "Board-certified radiologist review",
  "Secure HIPAA-compliant storage",
  "Optional brain NFT minting",
];

const Pricing = () => {
  const scrollToMap = () => {
    document.getElementById("map")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Compact Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Price Card */}
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-xl bg-blue-50 text-foreground text-sm font-medium">
                Limited Time Offer
              </div>
              
              <div>
                <span className="text-7xl font-bold text-foreground">
                  $99
                </span>
              </div>
              
              <p className="text-base text-muted-foreground leading-relaxed">
                Refundable within 7 days — no questions asked. Change your mind? Get 100% back.
              </p>
            </div>

            {/* Right Column - Features */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Includes
              </h3>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <Check className="w-5 h-5 text-foreground flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant="outline" 
                size="lg" 
                className="w-full rounded-full px-8 py-6 border-2 border-foreground hover:bg-foreground hover:text-background"
                onClick={scrollToMap}
              >
                Start for $99 — Risk-Free
              </Button>
            </div>
          </div>

          {/* Disclaimer at bottom */}
          <p className="text-xs text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto mt-12">
            <strong>Disclaimer:</strong> HelloMRI provides informational imaging and longevity insights. 
            It is not a substitute for medical diagnosis. Abnormalities are reviewed by board-certified radiologists.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
