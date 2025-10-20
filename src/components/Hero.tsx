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
          <div className="space-y-8 animate-fade-in relative">
            {/* Connecting gradient ray */}
            <div className="absolute top-1/2 -right-12 w-24 h-px bg-gradient-to-r from-primary/30 to-transparent hidden lg:block" />
            
            <div className="inline-block">
              <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20 uppercase tracking-wider">
                Precision brain imaging for longevity
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
              Reserve your scan for $99 — fully refundable within 7 days.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="relative">
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={() => scrollToSection("pricing")}
                  className="group w-full sm:w-auto"
                >
                  Get My Brain Map 
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-xs text-muted-foreground mt-2 text-center sm:text-left">
                  Average scan availability: 48 hrs in your area
                </p>
              </div>
              <Button 
                variant="glass" 
                size="xl"
                onClick={() => scrollToSection("how-it-works")}
                className="w-full sm:w-auto"
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
              {/* Ambient particle motion */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl animate-pulse" style={{ animationDuration: "8s" }} />
              
              {/* Holographic grid lines */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,transparent_48%,hsl(217_91%_60%/0.1)_50%,transparent_52%)] bg-[length:40px_40px] pointer-events-none" />
              
              <div className="relative backdrop-blur-sm bg-white/50 rounded-3xl p-8 border border-white/20 shadow-[0_20px_60px_-15px_hsl(217_91%_60%/0.25)] group">
                <img 
                  src={brainHero} 
                  alt="3D Brain Visualization showing neural pathways and brain structure" 
                  className="w-full h-auto rounded-2xl animate-breathe drop-shadow-2xl"
                />
                
                {/* Specular shine overlay */}
                <div className="absolute inset-8 rounded-2xl bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>

              {/* Floating stats with sequential fade and connecting line */}
              <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30" style={{ zIndex: 1 }}>
                <line 
                  x1="15%" 
                  y1="15%" 
                  x2="85%" 
                  y2="85%" 
                  stroke="hsl(217 91% 60%)" 
                  strokeWidth="1" 
                  strokeDasharray="4 4"
                  className="animate-fade-in-delayed-1"
                />
              </svg>
              
              <div className="absolute -top-6 -left-6 backdrop-blur-md bg-white/70 rounded-2xl p-4 shadow-lg border border-white/20 animate-fade-in-delayed-1" style={{ zIndex: 2 }}>
                <div className="text-sm text-muted-foreground">Scan Time</div>
                <div className="text-2xl font-bold text-primary">20 min</div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 backdrop-blur-md bg-white/70 rounded-2xl p-4 shadow-lg border border-white/20 animate-fade-in-delayed-2" style={{ zIndex: 2 }}>
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
