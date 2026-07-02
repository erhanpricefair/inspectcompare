import type { Provider } from '@/data/providers';

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <span className="text-rust-500 tracking-tight" aria-label={`${rating} out of 5 stars`}>
      {'★'.repeat(full)}
      <span className="text-ink-100">{'★'.repeat(5 - full)}</span>
    </span>
  );
}

const serviceLabels: Record<string, string> = {
  combined: 'Building & Pest',
  building: 'Building',
  pest: 'Pest',
  strata: 'Strata',
  'new-build': 'New Build (PCI)',
};

export function ProviderCard({ provider }: { provider: Provider }) {
  const p = provider;
  return (
    <div className="relative rounded-lg border border-ink-100 bg-white p-5 shadow-sm">
      {p.featured && (
        <span className="absolute -top-2 right-4 rounded-full bg-rust-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
          Featured
        </span>
      )}

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-base font-semibold text-ink-800">{p.name}</h3>

          <div className="mt-2 flex flex-wrap gap-1.5">
            {p.servicesOffered.map((s) => (
              <span
                key={s}
                className="rounded bg-sand px-2 py-0.5 text-[11px] font-medium text-ink-600"
              >
                {serviceLabels[s] ?? s}
              </span>
            ))}
          </div>

          {p.priceFrom && (
            <p className="mt-2 text-sm text-ink-400">From ${p.priceFrom}</p>
          )}
        </div>

        {p.rating && (
          <div className="flex shrink-0 flex-col items-center justify-center rounded-full border-2 border-sage-500 px-3 py-2 text-center">
            <span className="font-display text-lg font-bold leading-none text-sage-600">
              {p.rating}
            </span>
            <Stars rating={p.rating} />
            {p.reviewsCount && (
              <span className="mt-0.5 text-[10px] text-ink-400">{p.reviewsCount} reviews</span>
            )}
          </div>
        )}
      </div>

      {p.verified && (
        <p className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-sage-600">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-sage-500 text-[10px] text-white">
            ✓
          </span>
          Verified by InspectCompare
        </p>
      )}
    </div>
  );
}
