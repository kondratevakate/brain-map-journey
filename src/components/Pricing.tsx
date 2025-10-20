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
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Centered Title and Subtitle */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Pricing & Guarantee
            </h2>
            <p className="text-xl text-muted-foreground">
              Risk-free brain mapping for everyone
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            {/* Left Column - Price Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-sky-200 via-blue-200 to-purple-100 rounded-3xl p-12 relative overflow-hidden">
                <div className="mb-8">
                  <div className="inline-block px-4 py-2 rounded-xl bg-white/60 text-foreground text-base font-medium">
                    Limited Time Offer
                  </div>
                </div>
                
                <div className="mb-6">
                  <span className="text-8xl md:text-9xl font-bold text-foreground">
                    $99
                  </span>
                </div>
                
                <p className="text-lg text-foreground leading-relaxed">
                  Fully refundable within 7 days<br />
                  No questions asked. Change<br />
                  your mind? Get 100% back.
                </p>
              </div>
            </div>

            {/* Right Column - Features */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-foreground border-b border-border pb-4">
                Includes
              </h3>

              <div className="space-y-6 mb-10">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <Check className="w-6 h-6 text-foreground flex-shrink-0" />
                    <span className="text-foreground text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant="outline" 
                size="lg" 
                className="w-full rounded-full px-8 py-6 text-lg border-2 border-foreground hover:bg-foreground hover:text-background"
                onClick={scrollToMap}
              >
                Start for $99 — Risk-Free
              </Button>
            </div>
          </div>

          {/* Disclaimer at bottom */}
          <p className="text-sm text-muted-foreground text-center leading-relaxed max-w-4xl mx-auto">
            <strong>Disclaimer:</strong> HelloMRI provides informational imaging and longevity insights. 
            It is not a substitute for medical diagnosis. Abnormalities are reviewed by board-certified radiologists.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
