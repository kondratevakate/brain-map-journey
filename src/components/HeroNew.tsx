import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import SampleReportModal from "@/components/SampleReportModal";
import { Brain, Sparkles } from "lucide-react";

const HeroNew = () => {
  const [showReport, setShowReport] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Line - Centered */}
      <div className="fixed left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border/20 z-40 hidden lg:block">
        <div 
          className="bg-border/40 transition-all duration-300 ease-out w-full"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      <section className="min-h-screen pt-16 bg-gradient-to-br from-purple-100 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mb-24">
            {/* Left content */}
            <div className="space-y-8">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight text-foreground">
                Longevity<br />
                starts in<br />
                your brain.
              </h1>
              
              <p className="text-lg text-foreground/80 max-w-md">
                Measure, understand, and elevate your mental performance with Neuro-Span™
              </p>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => setShowReport(true)}
                className="rounded-full border-2 border-foreground hover:bg-foreground hover:text-background px-8"
              >
                Get My Brain Map →
              </Button>
            </div>

            {/* Right content - Metrics cards */}
            <div className="relative">
              {/* Placeholder for person image */}
              <div className="relative">
                {/* Metric cards */}
                <div className="absolute top-12 right-0 space-y-4 w-64 z-10">
                  <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-lg">
                    <div className="text-sm text-foreground/60 mb-2">Cognitive Age</div>
                    <div className="text-5xl font-bold text-foreground mb-1">-3</div>
                    <div className="text-xs text-foreground/60">YEARS</div>
                  </div>

                  <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-lg">
                    <div className="text-sm text-foreground/60 mb-2">Neuroplasticity Score</div>
                    <div className="text-4xl font-bold text-green-600 mb-2">8.4/10</div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-400 to-green-600 w-[84%]"></div>
                    </div>
                  </div>

                  <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-lg">
                    <div className="text-sm text-foreground/60 mb-2">Memory Index</div>
                    <div className="text-4xl font-bold text-orange-600 mb-2">87/100</div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600 w-[87%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Three Feature Cards */}
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 pb-12">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/70 backdrop-blur-md border border-white/40 flex items-center justify-center">
                <Brain className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Insights you can act on
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                See how habits, rest and learning affect your brain. Use this knowledge to perform better at work, in sport and in creative life.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/70 backdrop-blur-md border border-white/40 flex items-center justify-center">
                <Brain className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                AI meets neuroscience
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Our technology analyzes your scans with models trained on thousands of medical datasets. It helps detect changes before they're connected to focus, balance and stress resilience.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/70 backdrop-blur-md border border-white/40 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Clarity that compounds
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Each scan adds to your personal Neuro-Span™, your timeline of mental energy, resilience and growth.
              </p>
            </div>
          </div>
        </div>
        
        <SampleReportModal open={showReport} onOpenChange={setShowReport} />
      </section>
    </>
  );
};

export default HeroNew;
