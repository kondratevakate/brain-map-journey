import { Calendar, ScanLine, Brain } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Reserve for $99",
    description: "Refundable within 7 days — no questions asked.",
    detail: "Secure your spot with our risk-free deposit. Change your mind? Full refund guaranteed.",
  },
  {
    number: 2,
    title: "Get scanned",
    description: "20-minute MRI using clinical-grade equipment in off-peak hours.",
    detail: "Comfortable, quiet, and conducted at certified imaging centers near you.",
  },
  {
    number: 3,
    title: "Receive your 3D brain",
    description: "Delivered within 72 hours with insights and optional NFT.",
    detail: "Interactive visualization with personalized brain-age estimation and longevity metrics.",
  },
];

const HowItWorksSteps = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              How It Works
            </h2>
          </div>

          <div className="space-y-12">
            {steps.map((step) => (
              <div 
                key={step.number}
                className="flex gap-8 items-start"
              >
                {/* Step number circle */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full border-2 border-foreground/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground mb-2">{step.description}</p>
                  <p className="text-sm text-muted-foreground/70">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSteps;
