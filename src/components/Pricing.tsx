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
          <div className="bg-card rounded-3xl p-12 md:p-16 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              {/* Left Column - Price Card */}
              <div className="relative">
                <div className="bg-gradient-to-br from-sky-200 via-sky-100 to-orange-50 rounded-3xl p-10 relative overflow-hidden">
                  <div className="absolute top-6 left-6">
                    <div className="inline-block px-4 py-2 rounded-xl bg-white/80 text-foreground text-sm font-medium">
                      Limited Time Offer
                    </div>
                  </div>
                  
                  <div className="mt-20 mb-6">
                    <span className="text-7xl md:text-8xl font-bold text-foreground">
                      $99
                    </span>
                  </div>
                  
                  <p className="text-base text-foreground leading-relaxed">
                    Fully refundable within 7 days<br />
                    No questions asked. Change<br />
                    your mind? Get 100% back.
                  </p>
                </div>
              </div>

              {/* Right Column - Features */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
                  Pricing & Guarantee
                </h2>
                <p className="text-lg text-muted-foreground mb-8 border-b border-border pb-2">
                  Risk-free brain mapping for everyone
                </p>

                <div className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded flex items-center justify-center bg-sky-100">
                        <Check className="w-4 h-4 text-sky-600" />
                      </div>
                      <span className="text-foreground text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full px-8 border-2 border-foreground hover:bg-foreground hover:text-background"
                  onClick={scrollToMap}
                >
                  Start for $99 — Risk-Free
                </Button>
              </div>
            </div>

            {/* Disclaimer at bottom */}
            <p className="text-xs text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
              <strong>Disclaimer:</strong> HelloMRI provides informational imaging and longevity insights. 
              It is not a substitute for medical diagnosis. Abnormalities are reviewed by board-certified radiologists.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
