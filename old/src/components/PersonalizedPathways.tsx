import { Activity } from "lucide-react";

const PersonalizedPathways = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-purple-100 rounded-full text-sm text-muted-foreground uppercase tracking-wider">
                Personalized Performance Pathways
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Recommendations shaped by your brain and your interests
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Insights are personalized using your MRI data and the activities you care about — whether 
                  it's focus for work, creativity, or athletic performance.
                </p>
                <p>
                  The system translates your brain metrics into clear, science-based actions that help you 
                  train attention, balance stress, and build mental endurance for the goals that matter most.
                </p>
              </div>
            </div>

            {/* Right - Visual Elements */}
            <div className="relative">
              {/* Top purple card */}
              <div className="absolute top-0 right-0 w-48 h-64 bg-gradient-to-br from-purple-400 to-purple-500 rounded-3xl shadow-2xl transform rotate-6 opacity-80"></div>
              
              {/* Bottom blue card */}
              <div className="absolute top-12 right-24 w-48 h-64 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl shadow-2xl transform -rotate-3 opacity-90"></div>
              
              {/* Center dark card with icon */}
              <div className="relative mt-32 ml-12 bg-slate-900 rounded-3xl p-12 shadow-2xl z-10 w-80 h-64 flex items-center justify-center">
                <div className="relative">
                  {/* Tennis racket representation */}
                  <div className="w-32 h-32 rounded-full border-8 border-green-400/60 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    {/* Grid pattern */}
                    <div className="absolute inset-2 grid grid-cols-4 gap-0.5">
                      {[...Array(16)].map((_, i) => (
                        <div key={i} className="border border-green-400/20"></div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute -bottom-8 -right-6 w-20 h-2 bg-cyan-400 rounded-full transform rotate-45"></div>
                </div>
              </div>
              
              {/* Floating metric badge */}
              <div className="absolute top-20 left-0 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg">
                <Activity className="w-6 h-6 text-purple-500 mb-2" />
                <div className="text-xs text-muted-foreground">Performance</div>
                <div className="text-xl font-bold text-foreground">+12%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedPathways;
