import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";

const MRIMap = () => {
  return (
    <section id="map" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Find an MRI near you
            </h2>
            <p className="text-xl text-muted-foreground">
              See live availability and book instantly
            </p>
          </div>

          <div className="animate-fade-in">
            {/* Map Placeholder */}
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-border bg-slate-800">
              {/* Search bar */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 w-full max-w-md px-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter your address..."
                    className="pl-12 bg-white/90 backdrop-blur-md border-white/20 h-12 rounded-full shadow-lg"
                  />
                </div>
              </div>

              {/* Map placeholder with subtle grid */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900">
                {/* Grid pattern */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                  }}
                />
                
                {/* Map regions placeholder */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 800 600">
                  {/* Ireland */}
                  <path
                    d="M 200 250 L 220 240 L 230 260 L 225 280 L 210 285 L 195 270 Z"
                    fill="#4b5563"
                    stroke="#6b7280"
                    strokeWidth="2"
                  />
                  
                  {/* United Kingdom */}
                  <path
                    d="M 240 200 L 280 190 L 300 220 L 295 270 L 270 300 L 250 290 L 235 260 Z"
                    fill="#4b5563"
                    stroke="#6b7280"
                    strokeWidth="2"
                  />
                  
                  {/* Additional landmass shapes */}
                  <path
                    d="M 350 280 L 400 270 L 450 290 L 480 330 L 460 370 L 420 380 L 380 360 L 340 320 Z"
                    fill="#4b5563"
                    stroke="#6b7280"
                    strokeWidth="2"
                  />
                </svg>

                {/* Location markers */}
                <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <MapPin className="w-8 h-8 text-primary animate-bounce" style={{ animationDuration: '2s' }} />
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap shadow-lg">
                      Ireland
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/3 left-1/2">
                  <div className="relative">
                    <MapPin className="w-8 h-8 text-primary animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.3s' }} />
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap shadow-lg">
                      United Kingdom · 12
                    </div>
                  </div>
                </div>

                <div className="absolute top-2/3 left-2/3">
                  <MapPin className="w-8 h-8 text-primary animate-bounce" style={{ animationDuration: '2.2s', animationDelay: '0.6s' }} />
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="hero" size="xl">
                <MapPin className="mr-2 w-5 h-5" />
                Find My MRI
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MRIMap;
