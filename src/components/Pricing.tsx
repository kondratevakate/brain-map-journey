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
    <section id="pricing" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pricing & Guarantee
          </h2>
          <p className="text-xl text-muted-foreground">
            Risk-free brain mapping for everyone
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="backdrop-blur-md bg-white/70 rounded-3xl p-12 border border-white/20 shadow-xl animate-scale-in">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-6">
                Limited Time Offer
              </div>
              
              <div className="mb-4">
                <span className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  $99
                </span>
              </div>
              
              <p className="text-xl text-muted-foreground mb-2">
                Fully refundable within 7 days
              </p>
              <p className="text-sm text-muted-foreground">
                No questions asked. Change your mind? Get 100% back.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              variant="hero" 
              size="xl" 
              className="w-full mb-6"
              onClick={scrollToMap}
            >
              Start for $99 — Risk-Free
            </Button>

            <p className="text-xs text-muted-foreground text-center leading-relaxed">
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
