import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award, CheckCircle2 } from "lucide-react";
import brainHero from "@/assets/brain-hero.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                FDA-grade MRI Technology
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Your brain,
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                beautifully mapped.
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              Pay $99 to get your interactive 3D brain map — risk-free for 7 days.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection("pricing")}
                className="group"
              >
                Get My Brain Map 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="glass" 
                size="xl"
                onClick={() => scrollToSection("how-it-works")}
              >
                How It Works
              </Button>
            </div>

            {/* Trust bar */}
            <div className="pt-8 space-y-4">
              <p className="text-sm text-muted-foreground font-medium">Trusted by thousands</p>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2 text-foreground">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Award className="w-5 h-5 text-primary" />
                  <span>FDA-grade MRI</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Board-certified review</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Money-back guarantee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Brain visual */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Glass card effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              
              <div className="relative backdrop-blur-sm bg-white/50 rounded-3xl p-8 border border-white/20 shadow-[0_20px_60px_-15px_hsl(217_91%_60%/0.25)]">
                <img 
                  src={brainHero} 
                  alt="3D Brain Visualization" 
                  className="w-full h-auto rounded-2xl animate-spin-slow"
                />
              </div>

              {/* Floating stats */}
              <div className="absolute -top-6 -left-6 backdrop-blur-md bg-white/70 rounded-2xl p-4 shadow-lg border border-white/20 animate-float">
                <div className="text-sm text-muted-foreground">Scan Time</div>
                <div className="text-2xl font-bold text-primary">20 min</div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 backdrop-blur-md bg-white/70 rounded-2xl p-4 shadow-lg border border-white/20 animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-sm text-muted-foreground">Delivery</div>
                <div className="text-2xl font-bold text-primary">72 hrs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
