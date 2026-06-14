"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ArrowUpDown } from "lucide-react";
import { Select } from "@/components/ui/Select";

type ListingsSortProps = {
  sortBy: string;
  sortOrder: string;
};

const SORT_OPTIONS = [
  { value: "createdAt-desc", label: "Ən yeni" },
  { value: "createdAt-asc", label: "Ən köhnə" },
  { value: "price-asc", label: "Qiymət: Aşağıdan yuxarı" },
  { value: "price-desc", label: "Qiymət: Yuxarıdan aşağı" },
  { value: "area-desc", label: "Sahə: Böyükdən kiçiyə" },
  { value: "area-asc", label: "Sahə: Kiçikdən böyüyə" },
  { value: "views-desc", label: "Ən çox baxılan" },
];

export function ListingsSort({ sortBy, sortOrder }: ListingsSortProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = `${sortBy}-${sortOrder}`;

  const handleSortChange = (value: string) => {
    const [newSortBy, newSortOrder] = value.split("-");
    const params = new URLSearchParams(searchParams.toString());

    params.set("sortBy", newSortBy);
    params.set("sortOrder", newSortOrder);
    params.delete("page"); // Reset to page 1 when sorting changes

    router.push(`/listings?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2">
      <ArrowUpDown className="h-5 w-5 text-text-muted" />
      <Select
        options={SORT_OPTIONS}
        value={currentSort}
        onChange={(e) => handleSortChange(e.target.value)}
        className="w-full sm:w-64"
      />
    </div>
  );
}
