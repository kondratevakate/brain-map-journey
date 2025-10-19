import { Calendar, ScanLine, Brain } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Reserve for $99",
    description: "Refundable within 7 days — no questions asked.",
    detail: "Secure your spot with our risk-free deposit. Change your mind? Full refund guaranteed.",
  },
  {
    icon: ScanLine,
    title: "Get scanned",
    description: "20-minute MRI using clinical-grade equipment in off-peak hours.",
    detail: "Comfortable, quiet, and conducted at certified imaging centers near you.",
  },
  {
    icon: Brain,
    title: "Receive your 3D brain",
    description: "Delivered within 72 hours with insights and optional NFT.",
    detail: "Interactive visualization with personalized brain-age estimation and longevity metrics.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Three simple steps to understand your brain
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Connecting line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/40 to-primary/20 -translate-x-1/2 z-0" />
                )}

                <div className="relative backdrop-blur-md bg-white/70 rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 inline-block p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  <p className="text-sm text-foreground/70">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
