import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left nav */}
          <nav className="flex items-center gap-6">
            <button 
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              How it work
            </button>
            <button 
              onClick={() => scrollToSection("privacy")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Privacy
            </button>
          </nav>

          {/* Center logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            <Brain className="w-6 h-6 text-foreground" />
            <span className="text-xl font-bold text-foreground">HelloMRI</span>
          </div>

          {/* Right nav */}
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Login
            </button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection("pricing")}
              className="rounded-full border-2 border-foreground hover:bg-foreground hover:text-background"
            >
              Get My Brain Map
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
