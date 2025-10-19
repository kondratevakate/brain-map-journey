import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MRIMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState("");
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = token;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [-98.5795, 39.8283], // Center of USA
      zoom: 4,
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: false,
      }),
      "top-right"
    );

    // Sample MRI center locations
    const mriCenters = [
      { name: "Stanford Imaging Center", coords: [-122.1697, 37.4275], price: "$95" },
      { name: "NYC Advanced MRI", coords: [-74.0060, 40.7128], price: "$99" },
      { name: "Chicago Brain Imaging", coords: [-87.6298, 41.8781], price: "$89" },
      { name: "Austin Medical Scan", coords: [-97.7431, 30.2672], price: "$92" },
      { name: "Miami Neuro Imaging", coords: [-80.1918, 25.7617], price: "$99" },
    ];

    // Add markers
    mriCenters.forEach((center) => {
      const el = document.createElement("div");
      el.className = "w-10 h-10 rounded-full bg-primary/90 border-2 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform";
      el.innerHTML = '<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" /></svg>';

      const popup = new mapboxgl.Popup({ offset: 25, closeButton: false }).setHTML(`
        <div class="p-3">
          <h3 class="font-bold text-sm mb-1">${center.name}</h3>
          <p class="text-xs text-gray-600 mb-2">Clinical-grade 3T MRI</p>
          <p class="text-primary font-bold mb-2">${center.price}</p>
          <button class="w-full px-3 py-1.5 bg-primary text-white text-xs rounded-md hover:bg-primary/90 transition-colors">
            Book with HelloMRI
          </button>
        </div>
      `);

      new mapboxgl.Marker(el)
        .setLngLat(center.coords as [number, number])
        .setPopup(popup)
        .addTo(map.current!);
    });

    setShowTokenInput(false);
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken);
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
              See live availability and book instantly
            </p>
          </div>

          {showTokenInput ? (
            <div className="max-w-md mx-auto backdrop-blur-md bg-white/70 rounded-2xl p-8 border border-white/20 shadow-xl animate-scale-in">
              <div className="text-center mb-6">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Enter Mapbox Token</h3>
                <p className="text-sm text-muted-foreground">
                  Get your free token at{" "}
                  <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    mapbox.com
                  </a>
                </p>
              </div>
              
              <form onSubmit={handleTokenSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="pk.eyJ1Ij..."
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
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
              <div 
                ref={mapContainer} 
                className="h-[600px] rounded-2xl overflow-hidden shadow-xl border border-white/20"
              />
              
              <div className="mt-8 text-center">
                <Button variant="hero" size="xl">
                  <MapPin className="mr-2 w-5 h-5" />
                  Find My MRI
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
