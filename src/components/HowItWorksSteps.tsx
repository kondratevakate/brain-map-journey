import { Brain } from "lucide-react";

// Add keyframes for slide-in animation
const styles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const steps = [
  {
    number: 1,
    title: "Reserve for $99",
    description: "Refundable within 7 days — no questions asked.",
    detail: "Secure your spot with our risk-free deposit. Change your mind? Full refund guaranteed.",
    icon: "grid",
  },
  {
    number: 2,
    title: "Get scanned",
    description: "20-minute MRI using clinical-grade equipment in off-peak hours.",
    detail: "Comfortable, quiet, and conducted at certified imaging centers near you.",
    icon: "scanner",
  },
  {
    number: 3,
    title: "Receive your 3D brain",
    description: "Delivered within 72 hours with insights and optional NFT.",
    detail: "Interactive visualization with personalized brain-age estimation and longevity metrics.",
    icon: "brain",
  },
];

const HowItWorksSteps = () => {
  return (
    <>
      <style>{styles}</style>
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
                How It Works
              </h2>
            </div>

            <div className="space-y-20">
              {steps.map((step, index) => (
                <div 
                  key={step.number}
                  className="grid md:grid-cols-2 gap-12 items-center"
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    opacity: 0,
                    animation: `fadeInUp 0.6s ease-out ${index * 0.2}s forwards`
                  }}
                >
                  {/* Left - Icon */}
                  <div className="flex justify-center md:justify-end">
                    {step.icon === "grid" && (
                      <div className="grid grid-cols-2 gap-4">
                        {[...Array(4)].map((_, i) => (
                          <div 
                            key={i} 
                            className="w-16 h-16 rounded-full border-2 border-foreground/30"
                          />
                        ))}
                      </div>
                    )}
                    
                    {step.icon === "scanner" && (
                      <div className="relative">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i}
                            className="w-32 h-20 rounded-full border-2 border-foreground/30 absolute"
                            style={{
                              top: `${i * 8}px`,
                              left: 0,
                              opacity: 1 - (i * 0.15)
                            }}
                          />
                        ))}
                        <div className="w-32 h-20" />
                      </div>
                    )}
                    
                    {step.icon === "brain" && (
                      <div className="relative w-32 h-32">
                        <div className="w-32 h-32 rounded-full border-2 border-foreground/30" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-24 border-l-2 border-dashed border-foreground/30" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right - Content */}
                  <div className="relative">
                    <div className="absolute -left-8 top-2">
                      <div className="w-12 h-12 rounded-full bg-purple-400 flex items-center justify-center">
                        <span className="text-xl font-bold text-white">{step.number}</span>
                      </div>
                    </div>
                    
                    <div className="pl-8">
                      <h3 className="text-2xl font-bold mb-2 text-foreground">{step.title}</h3>
                      <p className="text-lg text-foreground mb-2">{step.description}</p>
                      <p className="text-sm text-muted-foreground">{step.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorksSteps;
