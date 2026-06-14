import Link from "next/link";
import { Search, BarChart2, Camera, ShieldCheck, ArrowRight, Building2, Home, LandPlot, Store } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { ListingCard } from "@/components/listings/ListingCard";
import type { Listing, Agency, ListingImage } from "@/lib/types";

// Mock data for demo - will be replaced with real data from database
const MOCK_LISTINGS: Array<Listing & { agency?: Agency | null; images: ListingImage[] }> = [
  {
    id: "1",
    slug: "luxury-apartment-baku-center",
    title: "Lüks Mənzil Bakının Mərkəzində",
    description: "Full təmirli, mebelli 3 otaqlı mənzil",
    price: 180000,
    area: 120,
    rooms: 3,
    floor: 5,
    totalFloors: 9,
    address: "Neftçilər prospekti 25, Nəsimi rayonu",
    district: "Nəsimi",
    city: "Bakı",
    lat: 40.3777,
    lng: 49.8920,
    phone: "+994501234567",
    email: null,
    type: "SALE",
    category: "APARTMENT",
    status: "ACTIVE",
    publishedAt: new Date("2026-06-10"),
    rejectionReason: null,
    isFeatured: true,
    views: 245,
    userId: "user1",
    agencyId: "agency1",
    createdAt: new Date("2026-06-10"),
    updatedAt: new Date("2026-06-10"),
    agency: {
      id: "agency1",
      name: "Premium Əmlak",
      logo: "/agencies/premium.png",
      description: null,
      address: null,
      phone: null,
      email: null,
      isVerified: true,
      createdAt: new Date("2026-01-01"),
    },
    images: [
      { id: "img1", listingId: "1", url: "/listings/apt1.jpg", order: 0 },
    ],
  },
  {
    id: "2",
    slug: "modern-house-gusar",
    title: "Müasir Bağ Evi Qusarda",
    description: "Təbiət qoynunda rahat yaşayış",
    price: 95000,
    area: 200,
    rooms: 4,
    floor: null,
    totalFloors: null,
    address: "Heydər Əliyev küçəsi 45",
    district: null,
    city: "Qusar",
    lat: 41.4267,
    lng: 48.4297,
    phone: "+994551234567",
    email: null,
    type: "SALE",
    category: "HOUSE",
    status: "ACTIVE",
    publishedAt: new Date("2026-06-12"),
    rejectionReason: null,
    isFeatured: false,
    views: 128,
    userId: "user2",
    agencyId: null,
    createdAt: new Date("2026-06-12"),
    updatedAt: new Date("2026-06-12"),
    agency: null,
    images: [
      { id: "img2", listingId: "2", url: "/listings/house1.jpg", order: 0 },
    ],
  },
  {
    id: "3",
    slug: "commercial-office-baku",
    title: "Ofis Sahəsi Nizami metrosuna yaxın",
    description: "Kirayə üçün ofis sahəsi",
    price: 2500,
    area: 85,
    rooms: null,
    floor: 3,
    totalFloors: 7,
    address: "Nizami küçəsi 12",
    district: "Nəsimi",
    city: "Bakı",
    lat: 40.3800,
    lng: 49.8500,
    phone: "+994501112233",
    email: null,
    type: "RENT",
    category: "COMMERCIAL",
    status: "ACTIVE",
    publishedAt: new Date("2026-06-13"),
    rejectionReason: null,
    isFeatured: false,
    views: 89,
    userId: "user3",
    agencyId: "agency1",
    createdAt: new Date("2026-06-13"),
    updatedAt: new Date("2026-06-13"),
    agency: {
      id: "agency1",
      name: "Premium Əmlak",
      logo: "/agencies/premium.png",
      description: null,
      address: null,
      phone: null,
      email: null,
      isVerified: true,
      createdAt: new Date("2026-01-01"),
    },
    images: [
      { id: "img3", listingId: "3", url: "/listings/office1.jpg", order: 0 },
    ],
  },
  {
    id: "4",
    slug: "land-plot-baku-suburbs",
    title: "Torpaq Sahəsi Bakı ətrafı",
    description: "Tikinti üçün torpaq",
    price: 45000,
    area: 600,
    rooms: null,
    floor: null,
    totalFloors: null,
    address: "Mərdəkan qəsəbəsi",
    district: "Xəzər",
    city: "Bakı",
    lat: 40.4667,
    lng: 50.0833,
    phone: "+994552223344",
    email: null,
    type: "SALE",
    category: "LAND",
    status: "ACTIVE",
    publishedAt: new Date("2026-06-11"),
    rejectionReason: null,
    isFeatured: false,
    views: 67,
    userId: "user4",
    agencyId: null,
    createdAt: new Date("2026-06-11"),
    updatedAt: new Date("2026-06-11"),
    agency: null,
    images: [
      { id: "img4", listingId: "4", url: "/listings/land1.jpg", order: 0 },
    ],
  },
  {
    id: "5",
    slug: "studio-apartment-rent",
    title: "1 Otaqlı Mənzil Kirayə",
    description: "Yeni tikili, tam təmirli",
    price: 800,
    area: 45,
    rooms: 1,
    floor: 12,
    totalFloors: 16,
    address: "28 May küçəsi 89",
    district: "Nəsimi",
    city: "Bakı",
    lat: 40.3850,
    lng: 49.8600,
    phone: "+994503334455",
    email: null,
    type: "RENT",
    category: "APARTMENT",
    status: "ACTIVE",
    publishedAt: new Date("2026-06-14"),
    rejectionReason: null,
    isFeatured: false,
    views: 34,
    userId: "user5",
    agencyId: null,
    createdAt: new Date("2026-06-14"),
    updatedAt: new Date("2026-06-14"),
    agency: null,
    images: [
      { id: "img5", listingId: "5", url: "/listings/studio1.jpg", order: 0 },
    ],
  },
  {
    id: "6",
    slug: "villa-seaside-baku",
    title: "Villa Dəniz kənarında",
    description: "Hovuzlu villa",
    price: 450000,
    area: 350,
    rooms: 6,
    floor: null,
    totalFloors: null,
    address: "Şıxov dairəsi",
    district: "Qaradağ",
    city: "Bakı",
    lat: 40.3500,
    lng: 50.0000,
    phone: "+994554445566",
    email: null,
    type: "SALE",
    category: "HOUSE",
    status: "ACTIVE",
    publishedAt: new Date("2026-06-09"),
    rejectionReason: null,
    isFeatured: true,
    views: 412,
    userId: "user6",
    agencyId: "agency1",
    createdAt: new Date("2026-06-09"),
    updatedAt: new Date("2026-06-09"),
    agency: {
      id: "agency1",
      name: "Premium Əmlak",
      logo: "/agencies/premium.png",
      description: null,
      address: null,
      phone: null,
      email: null,
      isVerified: true,
      createdAt: new Date("2026-01-01"),
    },
    images: [
      { id: "img6", listingId: "6", url: "/listings/villa1.jpg", order: 0 },
    ],
  },
];

const CITIES = [
  { value: "", label: "Bütün şəhərlər" },
  { value: "Bakı", label: "Bakı" },
  { value: "Gəncə", label: "Gəncə" },
  { value: "Sumqayıt", label: "Sumqayıt" },
  { value: "Qusar", label: "Qusar" },
];

const CATEGORIES = [
  { value: "", label: "Bütün kateqoriyalar" },
  { value: "APARTMENT", label: "Mənzil" },
  { value: "HOUSE", label: "Ev/Villa" },
  { value: "LAND", label: "Torpaq" },
  { value: "COMMERCIAL", label: "Kommersiya" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border bg-surface py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 text-4xl font-bold leading-tight text-text-primary md:text-5xl lg:text-6xl">
              Azerbaijan&apos;s Smartest Real Estate Platform
            </h1>
            <p className="mb-10 text-lg text-text-muted md:text-xl">
              Buy, sell, rent — with AI-powered market insights
            </p>

            {/* Search Bar Card */}
            <Card className="mx-auto max-w-5xl shadow-md">
              <div className="grid gap-3 p-4 md:grid-cols-5 md:gap-4">
                <div className="md:col-span-1">
                  <Select
                    options={CITIES}
                    defaultValue=""
                    className="h-12"
                    aria-label="Select city"
                  />
                </div>
                <div className="md:col-span-1">
                  <Select
                    options={CATEGORIES}
                    defaultValue=""
                    className="h-12"
                    aria-label="Select category"
                  />
                </div>
                <div className="md:col-span-1">
                  <Input
                    type="number"
                    placeholder="Min qiymət"
                    className="h-12"
                    aria-label="Minimum price"
                  />
                </div>
                <div className="md:col-span-1">
                  <Input
                    type="number"
                    placeholder="Max qiymət"
                    className="h-12"
                    aria-label="Maximum price"
                  />
                </div>
                <div className="md:col-span-1">
                  <Button variant="primary" className="h-12 w-full">
                    <Search className="mr-2 h-5 w-5" />
                    Axtar
                  </Button>
                </div>
              </div>
            </Card>

            {/* Quick Filter Pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button variant="secondary" size="sm">
                <Building2 className="mr-2 h-4 w-4" />
                Mənzillər
              </Button>
              <Button variant="secondary" size="sm">
                <Home className="mr-2 h-4 w-4" />
                Evlər
              </Button>
              <Button variant="secondary" size="sm">
                <LandPlot className="mr-2 h-4 w-4" />
                Torpaq
              </Button>
              <Button variant="secondary" size="sm">
                <Store className="mr-2 h-4 w-4" />
                Kommersiya
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-border bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1,200+</div>
              <div className="mt-1 text-sm text-text-muted">Elanlar</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">850+</div>
              <div className="mt-1 text-sm text-text-muted">İstifadəçilər</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">12</div>
              <div className="mt-1 text-sm text-text-muted">Şəhərlər</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">AI</div>
              <div className="mt-1 text-sm text-text-muted">Dəstəklənir</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Listings */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-text-primary">Son Elanlar</h2>
            <Link
              href="/listings"
              className="flex items-center gap-2 text-primary transition-colors hover:text-primary-hover"
            >
              <span className="font-medium">Hamısına bax</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MOCK_LISTINGS.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="border-y border-border bg-surface py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-text-primary">
            AI İmkanları
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-surface-muted">
              <div className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <BarChart2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-text-primary">
                  Bazar Analizi
                </h3>
                <p className="text-text-muted">
                  İstənilən əmlak üçün kirayə gəliri, geri ödəmə müddəti və likvidlik
                  balını öyrənin
                </p>
              </div>
            </Card>

            <Card className="bg-surface-muted">
              <div className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-text-primary">
                  Şəkil ilə Axtarış
                </h3>
                <p className="text-text-muted">
                  Binanın şəklini çəkin və oxşar elanları tapın
                </p>
              </div>
            </Card>

            <Card className="bg-surface-muted">
              <div className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-text-primary">
                  Elan Yoxlanışı
                </h3>
                <p className="text-text-muted">
                  Hər elan dərc edilməzdən əvvəl AI tərəfindən avtomatik yoxlanılır
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-l-4 border-l-primary">
              <div className="p-8">
                <h3 className="mb-3 text-2xl font-bold text-text-primary">Bakı</h3>
                <p className="mb-4 text-text-muted">
                  Azərbaycanın paytaxtı və ən böyük əmlak bazarı
                </p>
                <div className="mb-6 text-sm text-text-muted">
                  <span className="font-semibold text-text-primary">1,050+</span> aktiv elan
                </div>
                <Link href="/listings?city=Bakı">
                  <Button variant="primary">Kəşf et</Button>
                </Link>
              </div>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <div className="p-8">
                <h3 className="mb-3 text-2xl font-bold text-text-primary">Qusar</h3>
                <p className="mb-4 text-text-muted">
                  Təbiət qoynunda istirahət və investisiya imkanları
                </p>
                <div className="mb-6 text-sm text-text-muted">
                  <span className="font-semibold text-text-primary">85+</span> aktiv elan
                </div>
                <Link href="/listings?city=Qusar">
                  <Button variant="primary">Kəşf et</Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
