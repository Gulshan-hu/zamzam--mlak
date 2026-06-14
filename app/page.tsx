import { Search, Sparkles, BarChart3, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-surface to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold text-text-primary">
            Azərbaycanda Ən Yaxşı Əmlakı Tapın
          </h1>
          <p className="mb-8 text-xl text-text-muted">
            AI texnologiyası ilə dəstəklənən müasir daşınmaz əmlak platforması
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="lg">
              <Search className="mr-2 h-5 w-5" />
              Elan Axtar
            </Button>
            <Button variant="secondary" size="lg">
              <Sparkles className="mr-2 h-5 w-5" />
              AI Axtarış
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-text-primary">
            Xüsusiyyətlər
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card hover>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-text-primary">
                AI Axtarış
              </h3>
              <p className="text-text-muted">
                Şəkil və ya təsvir ilə arzunuzdakı əmlakı tapın
              </p>
            </Card>

            <Card hover>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-text-primary">
                AI Analiz
              </h3>
              <p className="text-text-muted">
                Əmlakın investisiya potensialını qiymətləndirin
              </p>
            </Card>

            <Card hover>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-text-primary">
                Xəritə Görünüşü
              </h3>
              <p className="text-text-muted">
                Bütün elanları xəritədə görüntüləyin
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-surface py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-text-primary">
            Əmlakınızı Satmaq İstəyirsiniz?
          </h2>
          <p className="mb-8 text-lg text-text-muted">
            Platformamızda pulsuz elan yerləşdirin
          </p>
          <Button variant="primary" size="lg">
            Elan Əlavə Et
          </Button>
        </div>
      </section>
    </div>
  );
}
