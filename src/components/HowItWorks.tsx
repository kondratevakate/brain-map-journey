import { Brain } from "lucide-react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            What we offer
          </h2>
          <p className="text-xl text-muted-foreground">
            See how your brain performs
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm text-muted-foreground uppercase tracking-wider">
                Clinical MRI + AI Insights
              </div>
              
              <h3 className="text-4xl font-bold text-foreground leading-tight">
                Beyond a standard MRI<br />
                — a deeper view of your brain
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                You receive a full medical MRI scan with a certified radiologist's report. On top of that, our AI visualizes your brain in 3D and extracts personalized insights like Cognitive Age, Neuroplasticity Score, and Memory Index — giving you the context behind the diagnosis and showing how your brain evolves over time.
              </p>
            </div>

            {/* Right - Brain Images and Metrics */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6 mb-6">
                {/* Clinical MRI */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-6 flex items-center justify-center aspect-square">
                  <Brain className="w-32 h-32 text-gray-400" />
                </div>

                {/* 3D Colorful Brain */}
                <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-green-100 rounded-3xl p-6 flex items-center justify-center aspect-square">
                  <Brain className="w-32 h-32 text-purple-500" />
                </div>
              </div>

              {/* Biometric Summary Card */}
              <div className="bg-slate-900 rounded-3xl p-8 text-white">
                <div className="text-sm text-slate-400 mb-6">Biometric summary</div>
                
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 relative">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="40"
                          cy="40"
                          r="36"
                          stroke="rgba(255,255,255,0.1)"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="40"
                          cy="40"
                          r="36"
                          stroke="#10b981"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray="226"
                          strokeDashoffset="45"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold">87</span>
                      </div>
                    </div>
                    <div className="text-xs text-slate-400">In range</div>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 relative">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="40"
                          cy="40"
                          r="36"
                          stroke="rgba(255,255,255,0.1)"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="40"
                          cy="40"
                          r="36"
                          stroke="#8b5cf6"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray="226"
                          strokeDashoffset="36"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold">8.4</span>
                      </div>
                    </div>
                    <div className="text-xs text-slate-400">In range</div>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 relative">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="40"
                          cy="40"
                          r="36"
                          stroke="rgba(255,255,255,0.1)"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="40"
                          cy="40"
                          r="36"
                          stroke="#06b6d4"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray="226"
                          strokeDashoffset="113"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold">20</span>
                      </div>
                    </div>
                    <div className="text-xs text-slate-400">In range</div>
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

export default HowItWorks;
