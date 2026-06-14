import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/Card";

type MapViewProps = {
  lat: number;
  lng: number;
  address: string;
};

export function MapView({ lat, lng, address }: MapViewProps) {
  // TODO: Replace with actual Google Maps API key from environment
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${lat},${lng}&zoom=15`;

  return (
    <Card>
      <div className="mb-4 flex items-center gap-2">
        <MapPin className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold text-text-primary">Yerləşmə</h2>
      </div>

      <p className="mb-4 text-sm text-text-muted">{address}</p>

      {/* TODO: Replace with actual Google Maps embed when API key is configured */}
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-surface-muted">
        <div className="flex h-full items-center justify-center text-center">
          <div>
            <MapPin className="mx-auto mb-2 h-8 w-8 text-text-muted" />
            <p className="text-sm text-text-muted">
              Xəritə görünüşü tezliklə əlavə ediləcək
            </p>
            <p className="mt-1 text-xs text-text-muted">
              Koordinatlar: {lat.toFixed(6)}, {lng.toFixed(6)}
            </p>
          </div>
        </div>
      </div>

      {/* Uncomment when Google Maps API key is available:
      <iframe
        src={mapUrl}
        className="aspect-video w-full rounded-xl"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      */}
    </Card>
  );
}
