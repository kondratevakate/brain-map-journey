import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="backdrop-blur-xl bg-white/95 rounded-full px-8 py-4 shadow-lg border border-white/20">
        <div className="flex items-center justify-between">
          {/* Left nav items */}
          <div className="flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              How it work
            </button>
            <button 
              onClick={() => scrollToSection("data-privacy")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Privacy
            </button>
          </div>

          {/* Center logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            <Brain className="w-6 h-6 text-foreground" />
            <span className="text-lg font-semibold text-foreground">BrainMRI</span>
          </div>

          {/* Right nav items */}
          <div className="flex items-center gap-6">
            <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Login
            </button>
            <Button 
              onClick={() => scrollToSection("pricing")}
              className="rounded-full"
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
