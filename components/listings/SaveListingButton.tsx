"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

type SaveListingButtonProps = {
  listingId: string;
};

export function SaveListingButton({ listingId }: SaveListingButtonProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // TODO: Implement actual save/unsave functionality with authentication
  const handleToggleSave = async () => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    setIsSaved(!isSaved);
    setIsLoading(false);
  };

  return (
    <button
      onClick={handleToggleSave}
      disabled={isLoading}
      className={`flex h-12 w-12 items-center justify-center rounded-full backdrop-blur-sm transition-all ${
        isSaved
          ? "bg-primary text-white hover:bg-primary-hover"
          : "bg-white/90 text-text-primary hover:bg-white"
      } ${isLoading ? "cursor-not-allowed opacity-50" : ""}`}
      aria-label={isSaved ? "Remove from saved" : "Save listing"}
    >
      <Heart
        className={`h-6 w-6 transition-all ${
          isSaved ? "fill-current" : ""
        }`}
      />
    </button>
  );
}
