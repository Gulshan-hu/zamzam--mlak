"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { Filter, X } from "lucide-react";
import { useState } from "react";

const CITIES = [
  { value: "", label: "Bütün şəhərlər" },
  { value: "Bakı", label: "Bakı" },
  { value: "Gəncə", label: "Gəncə" },
  { value: "Sumqayıt", label: "Sumqayıt" },
  { value: "Mingəçevir", label: "Mingəçevir" },
  { value: "Qusar", label: "Qusar" },
  { value: "Şəki", label: "Şəki" },
  { value: "Lənkəran", label: "Lənkəran" },
  { value: "Quba", label: "Quba" },
  { value: "Şamaxı", label: "Şamaxı" },
  { value: "Qəbələ", label: "Qəbələ" },
  { value: "Xaçmaz", label: "Xaçmaz" },
  { value: "Naxçıvan", label: "Naxçıvan" },
];

const TYPES = [
  { value: "", label: "Hamısı" },
  { value: "SALE", label: "Satış" },
  { value: "RENT", label: "Kirayə" },
];

const CATEGORIES = [
  { value: "", label: "Hamısı" },
  { value: "APARTMENT", label: "Mənzil" },
  { value: "HOUSE", label: "Ev/Villa" },
  { value: "LAND", label: "Torpaq" },
  { value: "COMMERCIAL", label: "Kommersiya" },
];

const ROOMS = [
  { value: "", label: "Hamısı" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5+" },
];

export function ListingsFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const [filters, setFilters] = useState({
    type: searchParams.get("type") || "",
    category: searchParams.get("category") || "",
    city: searchParams.get("city") || "",
    district: searchParams.get("district") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    minArea: searchParams.get("minArea") || "",
    maxArea: searchParams.get("maxArea") || "",
    rooms: searchParams.get("rooms") || "",
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      }
    });

    // Keep existing sort params
    const sortBy = searchParams.get("sortBy");
    const sortOrder = searchParams.get("sortOrder");
    if (sortBy) params.set("sortBy", sortBy);
    if (sortOrder) params.set("sortOrder", sortOrder);

    router.push(`/listings?${params.toString()}`);
    setIsOpen(false);
  };

  const clearFilters = () => {
    setFilters({
      type: "",
      category: "",
      city: "",
      district: "",
      minPrice: "",
      maxPrice: "",
      minArea: "",
      maxArea: "",
      rooms: "",
    });
    router.push("/listings");
  };

  const hasActiveFilters = Object.values(filters).some((v) => v !== "");

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="mb-4 lg:hidden">
        <Button
          variant="secondary"
          className="w-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Filter className="mr-2 h-5 w-5" />
          Filtrlər
          {hasActiveFilters && (
            <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
              {Object.values(filters).filter((v) => v !== "").length}
            </span>
          )}
        </Button>
      </div>

      {/* Filters Panel */}
      <Card
        className={`space-y-4 p-6 ${isOpen ? "block" : "hidden lg:block"}`}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-text-primary">Filtrlər</h2>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 text-sm text-error transition-colors hover:text-error/80"
            >
              <X className="h-4 w-4" />
              Təmizlə
            </button>
          )}
        </div>

        {/* Type */}
        <Select
          label="Növ"
          options={TYPES}
          value={filters.type}
          onChange={(e) => handleFilterChange("type", e.target.value)}
        />

        {/* Category */}
        <Select
          label="Kateqoriya"
          options={CATEGORIES}
          value={filters.category}
          onChange={(e) => handleFilterChange("category", e.target.value)}
        />

        {/* City */}
        <Select
          label="Şəhər"
          options={CITIES}
          value={filters.city}
          onChange={(e) => handleFilterChange("city", e.target.value)}
        />

        {/* District */}
        <Input
          label="Rayon/Ərazi"
          placeholder="məs: Nəsimi, Yasamal"
          value={filters.district}
          onChange={(e) => handleFilterChange("district", e.target.value)}
        />

        {/* Rooms */}
        <Select
          label="Otaq sayı"
          options={ROOMS}
          value={filters.rooms}
          onChange={(e) => handleFilterChange("rooms", e.target.value)}
        />

        {/* Price Range */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-text-primary">
            Qiymət (₼)
          </label>
          <div className="grid grid-cols-2 gap-2">
            <Input
              type="number"
              placeholder="Min"
              value={filters.minPrice}
              onChange={(e) => handleFilterChange("minPrice", e.target.value)}
            />
            <Input
              type="number"
              placeholder="Max"
              value={filters.maxPrice}
              onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
            />
          </div>
        </div>

        {/* Area Range */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-text-primary">
            Sahə (m²)
          </label>
          <div className="grid grid-cols-2 gap-2">
            <Input
              type="number"
              placeholder="Min"
              value={filters.minArea}
              onChange={(e) => handleFilterChange("minArea", e.target.value)}
            />
            <Input
              type="number"
              placeholder="Max"
              value={filters.maxArea}
              onChange={(e) => handleFilterChange("maxArea", e.target.value)}
            />
          </div>
        </div>

        {/* Apply Button */}
        <Button variant="primary" className="w-full" onClick={applyFilters}>
          Filtrlə
        </Button>
      </Card>
    </>
  );
}
