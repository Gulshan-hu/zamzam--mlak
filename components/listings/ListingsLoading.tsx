export function ListingsLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="h-8 w-48 animate-pulse rounded bg-surface-muted"></div>
        <div className="mt-2 h-4 w-32 animate-pulse rounded bg-surface-muted"></div>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Filters Sidebar Skeleton */}
        <aside className="w-full lg:w-80">
          <div className="space-y-4 rounded-2xl border border-border bg-surface p-6">
            <div className="h-6 w-24 animate-pulse rounded bg-surface-muted"></div>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 w-20 animate-pulse rounded bg-surface-muted"></div>
                <div className="h-11 w-full animate-pulse rounded-xl bg-surface-muted"></div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content Skeleton */}
        <div className="flex-1">
          <div className="mb-6 flex items-center justify-between">
            <div className="h-8 w-32 animate-pulse rounded bg-surface-muted"></div>
            <div className="h-11 w-64 animate-pulse rounded-xl bg-surface-muted"></div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-border bg-surface"
              >
                <div className="aspect-video w-full animate-pulse bg-surface-muted"></div>
                <div className="space-y-3 p-4">
                  <div className="h-6 w-3/4 animate-pulse rounded bg-surface-muted"></div>
                  <div className="h-4 w-full animate-pulse rounded bg-surface-muted"></div>
                  <div className="flex gap-4">
                    <div className="h-4 w-16 animate-pulse rounded bg-surface-muted"></div>
                    <div className="h-4 w-16 animate-pulse rounded bg-surface-muted"></div>
                    <div className="h-4 w-16 animate-pulse rounded bg-surface-muted"></div>
                  </div>
                  <div className="h-4 w-full animate-pulse rounded bg-surface-muted"></div>
                  <div className="flex gap-2">
                    <div className="h-11 flex-1 animate-pulse rounded-xl bg-surface-muted"></div>
                    <div className="h-11 flex-1 animate-pulse rounded-xl bg-surface-muted"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
