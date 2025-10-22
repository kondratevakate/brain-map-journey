import { Button } from "@/components/ui/button";
import { Box, TrendingUp, Lightbulb, Sparkles } from "lucide-react";

const features = [
  {
    icon: Box,
    title: "Interactive 3D Brain Map",
    description: "Rotate, zoom, and explore your brain in stunning detail. View every fold and structure.",
  },
  {
    icon: TrendingUp,
    title: "Brain-Age Estimation",
    description: "Discover your cognitive age compared to chronological age. Track brain health over time.",
  },
  {
    icon: Lightbulb,
    title: "Personalized Insights",
    description: "Mental-health and longevity recommendations based on your unique brain structure.",
  },
  {
    icon: Sparkles,
    title: "NFT of Your Brain Twin",
    description: "Optional: Mint your brain as a unique digital collectible. Own your neural architecture.",
  },
];

const WhatYouReceive = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What You Receive
          </h2>
          <p className="text-xl text-muted-foreground">
            A complete picture of your most important organ
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="backdrop-blur-md bg-gradient-to-br from-white/80 to-white/60 rounded-2xl p-8 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="glass" size="lg">
              View Sample Report
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouReceive;
