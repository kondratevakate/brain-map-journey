import { useState } from "react";
import { Button } from "@/components/ui/button";
import SampleReportModal from "@/components/SampleReportModal";

const HeroNew = () => {
  const [showReport, setShowReport] = useState(false);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen pt-16 bg-gradient-to-br from-purple-100 via-blue-50 to-purple-50 relative overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
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
            
            <SampleReportModal open={showReport} onOpenChange={setShowReport} />
          </div>

          {/* Right content - Metrics cards */}
          <div className="relative">
            {/* Placeholder for person image */}
            <div className="relative">
              {/* Metric cards */}
              <div className="absolute top-12 right-0 space-y-4 w-64">
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
                  <div className="text-4xl font-bold text-cyan-600 mb-2">9.2/10</div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-cyan-600 w-[92%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
