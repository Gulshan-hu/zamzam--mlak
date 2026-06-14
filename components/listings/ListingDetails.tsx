import { BedDouble, Square, Layers, MapPin, Calendar, Tag } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { Listing } from "@/lib/types";

type ListingDetailsProps = {
  listing: Listing;
};

const CATEGORY_LABELS: Record<string, string> = {
  APARTMENT: "Mənzil",
  HOUSE: "Ev/Villa",
  LAND: "Torpaq",
  COMMERCIAL: "Kommersiya",
};

export function ListingDetails({ listing }: ListingDetailsProps) {
  const details = [
    ...(listing.rooms
      ? [
          {
            icon: BedDouble,
            label: "Otaq sayı",
            value: listing.rooms.toString(),
          },
        ]
      : []),
    {
      icon: Square,
      label: "Sahə",
      value: `${listing.area} m²`,
    },
    ...(listing.floor
      ? [
          {
            icon: Layers,
            label: "Mərtəbə",
            value: listing.totalFloors
              ? `${listing.floor}/${listing.totalFloors}`
              : listing.floor.toString(),
          },
        ]
      : []),
    {
      icon: Tag,
      label: "Kateqoriya",
      value: CATEGORY_LABELS[listing.category] || listing.category,
    },
    {
      icon: MapPin,
      label: "Ünvan",
      value: listing.district
        ? `${listing.city}, ${listing.district}`
        : listing.city,
    },
    {
      icon: Calendar,
      label: "Dərc tarixi",
      value: listing.publishedAt
        ? new Date(listing.publishedAt).toLocaleDateString("az-AZ")
        : "Gözləmədə",
    },
  ];

  return (
    <Card>
      <div className="grid gap-4 sm:grid-cols-2">
        {details.map((detail, index) => {
          const Icon = detail.icon;
          return (
            <div key={index} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-text-muted">{detail.label}</p>
                <p className="font-medium text-text-primary">{detail.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
