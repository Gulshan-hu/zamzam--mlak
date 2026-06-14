import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getListingBySlugAction } from "@/lib/actions/listing.actions";
import { ImageGallery } from "@/components/listings/ImageGallery";
import { ListingDetails } from "@/components/listings/ListingDetails";
import { ContactCard } from "@/components/listings/ContactCard";
import { SellerCard } from "@/components/listings/SellerCard";
import { MapView } from "@/components/listings/MapView";
import { AIAnalysisSection } from "@/components/listings/AIAnalysisSection";
import { SaveListingButton } from "@/components/listings/SaveListingButton";
import { Badge } from "@/components/ui/Badge";
import type { Listing, ListingImage, User, Agency } from "@/lib/types";

type ListingWithRelations = Listing & {
  images: ListingImage[];
  user: User;
  agency: Agency | null;
};

type ListingDetailPageProps = {
  params: {
    slug: string;
  };
};

async function ListingContent({ slug }: { slug: string }) {
  // TODO: Replace with actual database query when DATABASE_URL is configured
  // const result = await getListingBySlugAction(slug);
  // if (!result.success) {
  //   notFound();
  // }
  // const listing = result.data as ListingWithRelations;

  // Mock: Show message since we don't have database yet
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold text-text-primary">
          Elan səhifəsi hazırlanır
        </h1>
        <p className="mt-4 text-text-muted">
          Database konfiqurasiyası tamamlandıqdan sonra elanların detalları
          göstəriləcək.
        </p>
      </div>
    </div>
  );

  // The code below will be used when database is configured
  // return (
  //   <div className="min-h-screen bg-background">
  //     <div className="container mx-auto px-4 py-8">
  //       <ImageGallery images={listing.images} title={listing.title} />
  //       ...
  //     </div>
  //   </div>
  // );
}

export default async function ListingDetailPage({
  params,
}: ListingDetailPageProps) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      }
    >
      <ListingContent slug={params.slug} />
    </Suspense>
  );
}
