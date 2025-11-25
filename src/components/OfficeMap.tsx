import { useEffect, useRef, useState } from "react";
import { loadGoogleMapsApi, whenInViewport } from "@/lib/googleMaps";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

type Office = {
  id: string;
  label: string;
  address: string;
  coords: { lat: number; lng: number };
  mapsLink: string;
};

const OFFICES: Office[] = [
  {
    id: "delhi",
    label: "Headquarters – Delhi",
    address: "Delhi NCR, India",
    coords: { lat: 28.6139, lng: 77.209 },
    mapsLink: "https://maps.app.goo.gl/jV81SQ8jM9uvUYX89",
  },
  {
    id: "moradabad",
    label: "Moradabad Office",
    address: "Moradabad, Uttar Pradesh, India",
    coords: { lat: 28.8389, lng: 78.7768 },
    mapsLink: "https://maps.app.goo.gl/6uSMPrn5QdufywsV7",
  },
  {
    id: "jaipur",
    label: "Jaipur Office",
    address: "Jaipur, Rajasthan, India",
    coords: { lat: 26.9124, lng: 75.7873 },
    mapsLink: "https://maps.app.goo.gl/2YVZXnfdRTT2zoS27",
  },
  {
    id: "surat",
    label: "Surat Office",
    address: "Surat, Gujarat, India",
    coords: { lat: 21.1702, lng: 72.8311 },
    mapsLink: "https://maps.app.goo.gl/dnwZdLeLeXkiUVDv8",
  },
];

export default function OfficeMap() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(null);
  const infoRef = useRef<google.maps.InfoWindow | null>(null);
  const [activeTab, setActiveTab] = useState<string>("delhi");
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasInitialized, setHasInitialized] = useState(false);

  // Initialize when visible
  useEffect(() => {
    if (!containerRef.current || hasInitialized) return;
    whenInViewport(containerRef.current, async () => {
      try {
        setIsLoading(true);
        const google = await loadGoogleMapsApi();
        const office = OFFICES.find((o) => o.id === activeTab)!;

        const map = new google.maps.Map(containerRef.current!, {
          center: office.coords,
          zoom: 16,
          mapId: "DEMO_MAP_ID",
          disableDefaultUI: false,
        });
        mapRef.current = map;

        // Use AdvancedMarker when available, fallback to Marker
        const pinSvg = {
          path: "M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z",
          fillColor: "#EF7F1A",
          fillOpacity: 1,
          strokeColor: "#315796",
          scale: 1.2,
        } as unknown as google.maps.Symbol;

        const marker = new google.maps.marker.AdvancedMarkerElement({
          map,
          position: office.coords,
          title: office.label,
        });
        markerRef.current = marker;

        const info = new google.maps.InfoWindow({
          content: `<div style="font-family: system-ui, -apple-system, Segoe UI;">
            <strong>${office.label}</strong><br/>
            <span>${office.address}</span>
          </div>`,
        });
        info.open({ map, anchor: marker });
        infoRef.current = info;
        setHasInitialized(true);
      } catch (err) {
        // Fail gracefully: show fallback state
        console.error(err);
        setError(err instanceof Error ? err.message : 'Failed to initialize Google Maps');
      } finally {
        setIsLoading(false);
      }
    });
  }, [activeTab, hasInitialized]);

  // Handle tab change transitions
  useEffect(() => {
    if (!mapRef.current || !markerRef.current) return;
    const office = OFFICES.find((o) => o.id === activeTab)!;

    setIsTransitioning(true);
    const map = mapRef.current;

    // Smooth pan and zoom with 300ms effect
    map.panTo(office.coords);
    map.setZoom(16);

    // Move marker and update info window
    markerRef.current.position = office.coords;
    if (infoRef.current) {
      infoRef.current.setContent(
        `<div style="font-family: system-ui, -apple-system, Segoe UI;">
          <strong>${office.label}</strong><br/>
          <span>${office.address}</span>
        </div>`
      );
      infoRef.current.open({ map, anchor: markerRef.current });
    }

    const timer = setTimeout(() => setIsTransitioning(false), 300);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div aria-label="Office locations map" className="space-y-6">
      <div className="flex items-center gap-3">
        <MapPin className="h-6 w-6 text-accent" aria-hidden="true" />
        <h2 className="text-2xl font-bold text-primary">Find Our Offices</h2>
      </div>

      <Tabs defaultValue="delhi" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList aria-label="Office location tabs" className="flex flex-wrap gap-2">
          {OFFICES.map((o) => (
            <TabsTrigger key={o.id} value={o.id} className="aria-selected:bg-accent aria-selected:text-accent-foreground">
              {o.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="relative">
          {/* Skeleton / Loading state */}
          {isLoading && !error && (
            <div className="min-h-[400px] rounded-lg bg-muted animate-pulse flex items-center justify-center" role="status" aria-live="polite">
              <span className="sr-only">Loading map…</span>
              <div className="text-muted-foreground">Initializing Google Maps…</div>
            </div>
          )}

          {/* Error state */}
          {error && (
            <div className="min-h-[400px] rounded-lg border border-red-300 bg-red-50 flex items-center justify-center text-center p-6" role="alert" aria-live="assertive">
              <div>
                <p className="text-red-700 font-semibold">Map failed to load</p>
                <p className="text-sm text-red-600 mt-1">{error}</p>
                <p className="text-sm text-muted-foreground mt-3">You can still open the location in Google Maps:</p>
                <a href={OFFICES.find((o) => o.id === activeTab)?.mapsLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-accent hover:text-accent/80">Open in Google Maps</a>
              </div>
            </div>
          )}

          {/* Map container */}
          {!error && (
          <div
            ref={containerRef}
            className={`min-h-[400px] rounded-lg border border-muted-foreground/20 bg-background will-change-transform transition-opacity duration-300 ${
              isTransitioning ? "opacity-60" : "opacity-100"
            }`}
            role="region"
            aria-label="Google Map"
          />
          )}
        </div>

        {/* Helpful actions */}
        <div className="flex items-center justify-between mt-3">
          <p className="text-sm text-muted-foreground">Zoom 16 centered on selected office · 300ms transitions</p>
          <Button
            asChild
            variant="outline"
            aria-label="Open current office in Google Maps"
          >
            <a href={OFFICES.find((o) => o.id === activeTab)?.mapsLink} target="_blank" rel="noopener noreferrer">
              Open in Google Maps
            </a>
          </Button>
        </div>
      </Tabs>
    </div>
  );
}