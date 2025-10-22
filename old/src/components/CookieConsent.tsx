import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
      <div className="container mx-auto max-w-6xl">
        <div className="backdrop-blur-md bg-white/90 border border-white/20 rounded-2xl shadow-xl p-6">
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Cookie Policy
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                We use cookies to enhance your browsing experience, analyze site traffic, 
                and personalize content. By clicking "Accept", you consent to our use of cookies. 
                You can manage your preferences at any time.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button 
                  onClick={acceptCookies}
                  size="sm"
                  className="rounded-full"
                >
                  Accept All Cookies
                </Button>
                <Button 
                  onClick={declineCookies}
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                >
                  Decline
                </Button>
                <Button 
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground"
                  asChild
                >
                  <a href="#privacy">Learn More</a>
                </Button>
              </div>
            </div>
            <button 
              onClick={declineCookies}
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="Close cookie banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
