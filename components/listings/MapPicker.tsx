"use client";

import { useState, useCallback } from "react";
import { MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

type MapPickerProps = {
  address: string;
  city: string;
  lat: number | null;
  lng: number | null;
  onLocationChange: (lat: number, lng: number) => void;
};

export function MapPicker({
  address,
  city,
  lat,
  lng,
  onLocationChange,
}: MapPickerProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // TODO: Implement actual Google Maps integration when API key is configured
  const handleSearch = useCallback(() => {
    // Mock geocoding - in production, use Google Maps Geocoding API
    const mockLat = 40.4093 + Math.random() * 0.1;
    const mockLng = 49.8671 + Math.random() * 0.1;
    onLocationChange(mockLat, mockLng);
  }, [onLocationChange]);

  const handleMapClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // Mock map click - in production, use Google Maps onClick event
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Convert pixel coordinates to lat/lng (mock calculation)
      const mockLat = 40.4093 + (y / rect.height - 0.5) * 0.2;
      const mockLng = 49.8671 + (x / rect.width - 0.5) * 0.2;

      onLocationChange(mockLat, mockLng);
    },
    [onLocationChange]
  );

  const hasCoordinates = lat !== null && lng !== null;

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="flex gap-2">
        <Input
          placeholder="Ünvanı axtarın..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <Button type="button" variant="secondary" onClick={handleSearch}>
          <Search className="h-5 w-5" />
        </Button>
      </div>

      {/* Map Container */}
      <div
        onClick={handleMapClick}
        className="relative h-96 cursor-crosshair overflow-hidden rounded-xl border border-border bg-surface-muted"
      >
        {/* TODO: Replace with actual Google Maps component when API key is configured */}
        <div className="flex h-full items-center justify-center">
          <div className="text-center">
            <MapPin className="mx-auto mb-3 h-12 w-12 text-primary" />
            <p className="text-sm font-medium text-text-primary">
              Xəritədə klikləyin və ya ünvan axtarın
            </p>
            <p className="mt-1 text-xs text-text-muted">
              Google Maps API konfiqurasiyasından sonra interaktiv xəritə
              göstəriləcək
            </p>
          </div>
        </div>

        {/* Selected Location Marker (Mock) */}
        {hasCoordinates && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
            <MapPin className="h-10 w-10 text-error drop-shadow-lg" />
          </div>
        )}
      </div>

      {/* Coordinates Display */}
      {hasCoordinates && (
        <div className="rounded-lg bg-surface-muted p-4">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium text-text-primary">
                Seçilmiş məkan
              </p>
              <p className="text-xs text-text-muted">
                {address}, {city}
              </p>
              <p className="text-xs text-text-muted">
                Koordinatlar: {lat.toFixed(6)}, {lng.toFixed(6)}
              </p>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => onLocationChange(0, 0)}
            >
              Təmizlə
            </Button>
          </div>
        </div>
      )}

      {/* Help Text */}
      <p className="text-xs text-text-muted">
        Xəritədə elanın dəqiq yerini seçin. Bu, alıcıların əmlakı daha asan
        tapmasına kömək edəcək.
      </p>
    </div>
  );
}
