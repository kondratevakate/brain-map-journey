import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import mriScanner from "@/assets/mri-scanner-hero.jpg";
import Navigation from "./Navigation";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[hsl(220_85%_12%)]">
      <Navigation />
      
      {/* MRI Scanner Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220_85%_12%)] via-[hsl(220_85%_12%)]/80 to-transparent z-10" />
        <img 
          src={mriScanner} 
          alt="Modern MRI Scanner" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="container mx-auto px-8 py-32 relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-tight">
            Your brain,
            <br />
            beautifully
            <br />
            mapped.
          </h1>
          
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Reserve your scan for $99 — fully refundable within 7 days.
          </p>
          
          <Button 
            variant="outline" 
            size="xl"
            onClick={() => scrollToSection("pricing")}
            className="rounded-full border-2 border-white text-white hover:bg-white hover:text-[hsl(220_85%_12%)] bg-transparent"
          >
            Get My Brain Map 
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
