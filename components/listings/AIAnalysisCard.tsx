import { TrendingUp, Clock, Droplets, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";

type AIAnalysisCardProps = {
  analysis: {
    rentalYield: number | null;
    paybackYears: number | null;
    liquidityScore: number | null;
    marketComparison: string | null;
    recommendation: string;
    summary: string;
  };
};

export function AIAnalysisCard({ analysis }: AIAnalysisCardProps) {
  const getLiquidityColor = (score: number): string => {
    if (score >= 7) return "bg-success";
    if (score >= 4) return "bg-warning";
    return "bg-error";
  };

  const getLiquidityTextColor = (score: number): string => {
    if (score >= 7) return "text-success";
    if (score >= 4) return "text-warning";
    return "text-error";
  };

  return (
    <Card className="border-l-4 border-l-primary bg-gradient-to-br from-primary/5 to-transparent">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="mb-2 text-xl font-semibold text-text-primary">
            AI Analiz Nəticəsi
          </h2>
          <p className="text-sm text-text-muted">{analysis.summary}</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid gap-4 sm:grid-cols-3">
          {/* Rental Yield */}
          {analysis.rentalYield !== null && (
            <div className="rounded-lg bg-surface-muted p-4">
              <div className="mb-2 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-text-muted">
                  Kirayə Gəliri
                </span>
              </div>
              <div className="text-2xl font-bold text-text-primary">
                {analysis.rentalYield.toFixed(1)}%
              </div>
            </div>
          )}

          {/* Payback Period */}
          {analysis.paybackYears !== null && (
            <div className="rounded-lg bg-surface-muted p-4">
              <div className="mb-2 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-text-muted">
                  Geri Ödəmə
                </span>
              </div>
              <div className="text-2xl font-bold text-text-primary">
                {analysis.paybackYears.toFixed(1)} il
              </div>
            </div>
          )}

          {/* Liquidity Score */}
          {analysis.liquidityScore !== null && (
            <div className="rounded-lg bg-surface-muted p-4">
              <div className="mb-2 flex items-center gap-2">
                <Droplets className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-text-muted">
                  Likvidlik
                </span>
              </div>
              <div
                className={`text-2xl font-bold ${getLiquidityTextColor(analysis.liquidityScore)}`}
              >
                {analysis.liquidityScore.toFixed(1)}/10
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-surface">
                <div
                  className={`h-full transition-all ${getLiquidityColor(analysis.liquidityScore)}`}
                  style={{ width: `${(analysis.liquidityScore / 10) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* Market Comparison */}
        {analysis.marketComparison && (
          <div className="rounded-lg bg-surface-muted p-4">
            <h3 className="mb-2 text-sm font-semibold text-text-primary">
              Bazar Müqayisəsi
            </h3>
            <p className="text-sm text-text-muted">
              {analysis.marketComparison}
            </p>
          </div>
        )}

        {/* Recommendation */}
        <div className="rounded-lg bg-primary/10 p-4">
          <h3 className="mb-2 text-sm font-semibold text-text-primary">
            Tövsiyə
          </h3>
          <p className="text-sm font-medium text-primary">
            {analysis.recommendation}
          </p>
        </div>

        {/* Disclaimer */}
        <div className="flex items-start gap-2 rounded-lg bg-surface-muted p-3">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-text-muted" />
          <p className="text-xs text-text-muted">
            Bu analiz maliyyə məsləhəti deyil. Analiz mövcud bazar məlumatları
            əsasında hazırlanmışdır və investisiya qərarları üçün yalnız
            məlumat məqsədlidir.
          </p>
        </div>
      </div>
    </Card>
  );
}
