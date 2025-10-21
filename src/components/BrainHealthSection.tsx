const BrainHealthSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Better brain health
              </h2>
              
              <p className="text-xl text-muted-foreground">
                unlocks focus, energy, and long-term performance
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Peak health means unlocking your brain's full potential. Regular MRI insights show how lifestyle, mindfulness, 
                and sleep shape your brain — and help you improve focus, memory, and resilience today.
              </p>

              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-pink-400">•</span>
                  <span>The yellow/red line shows the gradual loss of energy and focus that comes with stress and age</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>The green dotted line represents a higher, more stable trajectory of clarity and cognitive performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">•</span>
                  <span>The area between these curves is the growth zone: where HelloMRI helps you think clearer, perform better, and feel more alive</span>
                </li>
              </ul>
            </div>

            {/* Right - Graph */}
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 border-2 border-green-400 border-dashed">
                {/* Graph content */}
                <div className="relative h-80 bg-white/50 rounded-2xl p-6">
                  {/* Title box */}
                  <div className="absolute top-6 right-6 bg-white border-2 border-foreground p-4 rounded-lg max-w-xs">
                    <p className="text-sm font-medium text-foreground">
                      The goal is to preserve your brain and expand what it can do.
                    </p>
                  </div>

                  {/* SVG Graph */}
                  <svg className="w-full h-full" viewBox="0 0 400 300">
                    {/* Grid lines */}
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="400" height="300" fill="url(#grid)" />

                    {/* Current decline curve (pink/red) */}
                    <path
                      d="M 20 100 Q 150 120 250 200 T 380 250"
                      fill="none"
                      stroke="#ec4899"
                      strokeWidth="3"
                    />

                    {/* Optimized curve (green dotted) */}
                    <path
                      d="M 20 80 Q 150 85 250 95 T 380 110"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="3"
                      strokeDasharray="8 8"
                    />

                    {/* Fill area between curves */}
                    <path
                      d="M 20 100 Q 150 120 250 200 T 380 250 L 380 110 Q 250 95 150 85 T 20 80 Z"
                      fill="#fef3c7"
                      opacity="0.3"
                    />

                    {/* Axes */}
                    <line x1="20" y1="280" x2="380" y2="280" stroke="#9ca3af" strokeWidth="2" />
                    <line x1="20" y1="20" x2="20" y2="280" stroke="#9ca3af" strokeWidth="2" />
                  </svg>

                  {/* Stars/sparkles decoration */}
                  <div className="absolute bottom-12 right-12">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div className="absolute top-32 left-12">
                    <span className="text-xl">⭐</span>
                  </div>
                </div>

                {/* Legend */}
                <div className="mt-6 space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-0.5 bg-pink-500"></div>
                    <span className="text-foreground"><strong>Current:</strong> Gradual decline in brain performance and focus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-0.5 bg-green-500 border-t-2 border-dashed"></div>
                    <span className="text-foreground"><strong>Optimized:</strong> Sustained clarity and cognitive resilience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-4 bg-yellow-200"></div>
                    <span className="text-foreground"><strong>Neuro-Span™:</strong> The sum of all years lived with enhanced mental performance</span>
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

export default BrainHealthSection;
