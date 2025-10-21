import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';

interface MRICenter {
  name: string;
  position: { lat: number; lng: number };
  price: string;
  address: string;
}

const mriCenters: MRICenter[] = [
  { 
    name: "Almaty Medical Center", 
    position: { lat: 43.2220, lng: 76.8512 },
    price: "$95",
    address: "Abay Ave 150, Almaty"
  },
  { 
    name: "Advanced Diagnostic Center", 
    position: { lat: 43.2380, lng: 76.8890 },
    price: "$99",
    address: "Dostyk Ave 132, Almaty"
  },
  { 
    name: "Almaty Brain Imaging", 
    position: { lat: 43.2567, lng: 76.9286 },
    price: "$89",
    address: "Al-Farabi Ave 77, Almaty"
  },
  { 
    name: "Premium MRI Clinic", 
    position: { lat: 43.2630, lng: 76.9456 },
    price: "$92",
    address: "Timiryazev St 42, Almaty"
  },
  { 
    name: "Neuro Imaging Almaty", 
    position: { lat: 43.2156, lng: 76.8295 },
    price: "$99",
    address: "Satpayev St 90, Almaty"
  },
];

const MRIMap = () => {
  const [apiKey, setApiKey] = useState("");
  const [showMap, setShowMap] = useState(false);
  const [selectedCenter, setSelectedCenter] = useState<MRICenter | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      setShowMap(true);
    }
  };

  return (
    <section id="map" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Find an MRI near you
            </h2>
            <p className="text-xl text-muted-foreground">
              See live availability in Almaty and book instantly
            </p>
          </div>

          {!showMap ? (
            <div className="max-w-md mx-auto backdrop-blur-md bg-white/70 rounded-2xl p-8 border border-white/20 shadow-xl animate-scale-in">
              <div className="text-center mb-6">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Enter Google Maps API Key</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Get your free API key at{" "}
                  <a 
                    href="https://console.cloud.google.com/google/maps-apis" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:underline"
                  >
                    Google Cloud Console
                  </a>
                </p>
                <p className="text-xs text-muted-foreground">
                  Enable Maps JavaScript API for your project
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="AIzaSy..."
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="bg-white/50"
                />
                <Button type="submit" className="w-full" size="lg">
                  <Search className="mr-2 w-4 h-4" />
                  Load Map
                </Button>
              </form>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="h-[600px] rounded-2xl overflow-hidden shadow-xl border border-white/20">
                <APIProvider apiKey={apiKey}>
                  <Map
                    defaultCenter={{ lat: 43.2380, lng: 76.8890 }}
                    defaultZoom={12}
                    mapId="almaty-mri-map"
                    gestureHandling="greedy"
                    disableDefaultUI={false}
                  >
                    {mriCenters.map((center, index) => (
                      <AdvancedMarker
                        key={index}
                        position={center.position}
                        onClick={() => setSelectedCenter(center)}
                      >
                        <Pin
                          background={"hsl(217 91% 60%)"}
                          borderColor={"#fff"}
                          glyphColor={"#fff"}
                        />
                      </AdvancedMarker>
                    ))}

                    {selectedCenter && (
                      <InfoWindow
                        position={selectedCenter.position}
                        onCloseClick={() => setSelectedCenter(null)}
                      >
                        <div className="p-3 min-w-[200px]">
                          <h3 className="font-bold text-sm mb-1 text-foreground">
                            {selectedCenter.name}
                          </h3>
                          <p className="text-xs text-muted-foreground mb-1">
                            {selectedCenter.address}
                          </p>
                          <p className="text-xs text-muted-foreground mb-2">
                            Clinical-grade 3T MRI
                          </p>
                          <p className="text-primary font-bold mb-3">
                            {selectedCenter.price}
                          </p>
                          <button className="w-full px-3 py-1.5 bg-primary text-white text-xs rounded-md hover:bg-primary/90 transition-colors">
                            Book with HelloMRI
                          </button>
                        </div>
                      </InfoWindow>
                    )}
                  </Map>
                </APIProvider>
              </div>
              
              <div className="mt-8 text-center">
                <Button variant="hero" size="xl">
                  <MapPin className="mr-2 w-5 h-5" />
                  Find My MRI in Almaty
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MRIMap;
