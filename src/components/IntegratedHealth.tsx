import { Watch } from "lucide-react";

const IntegratedHealth = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-purple-100 rounded-full text-sm text-muted-foreground uppercase tracking-wider">
                Integrated Health Context
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Connect your brain data with your daily signals
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                HelloMRI integrates with Apple Watch, WHOOP, and other wearables to combine your brain 
                metrics with sleep, recovery, and stress data. Together, they form a continuous picture of 
                how your mind and body interact — giving you a deeper context for focus, resilience, and 
                long-term performance.
              </p>
            </div>

            {/* Right - Apple Watch Visual */}
            <div className="relative">
              <div className="bg-slate-900 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-pink-900/50 to-slate-900"></div>
                
                {/* Watch illustration placeholder */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className="relative">
                    {/* Watch face */}
                    <div className="w-48 h-56 bg-slate-800 rounded-[3rem] border-8 border-slate-700 shadow-2xl flex items-center justify-center">
                      <div className="text-center">
                        <Watch className="w-16 h-16 text-purple-400 mx-auto mb-2" />
                        <div className="text-sm text-white/60">10:48</div>
                      </div>
                    </div>
                    
                    {/* Watch band */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-24 bg-gradient-to-b from-blue-600 to-blue-800 rounded-b-3xl -z-10"></div>
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

export default IntegratedHealth;
