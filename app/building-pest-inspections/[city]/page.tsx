import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cities, getCity } from '@/data/cities';
import { getProvidersForCity } from '@/data/providers';
import { getZonesForCity } from '@/data/zones';

type Props = { params: { city: string } };

// Pre-render every launch city at build time
export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const city = getCity(params.city);
  if (!city) return {};
  return {
    title: `Building & Pest Inspections in ${city.name} — Compare Cost & Inspectors`,
    description: `Compare building and pest inspectors in ${city.name}, ${city.state}. Typical combined inspection cost: $${city.priceLow}–$${city.priceHigh}.`,
  };
}

export default function CityPage({ params }: Props) {
  const city = getCity(params.city);
  if (!city) return notFound();

  const cityProviders = getProvidersForCity(city.slug);
  const cityZones = getZonesForCity(city.slug);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <nav className="text-xs text-gray-400">
        <Link href="/">Home</Link> / Building &amp; Pest Inspections / {city.name}
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-700">
        Building &amp; Pest Inspections in {city.name}, {city.state}
      </h1>

      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        <div className="rounded-md bg-brand-50 px-4 py-2 font-medium text-brand-700">
          Typical cost: ${city.priceLow}–${city.priceHigh}
        </div>
      </div>

      <p className="mt-6 max-w-3xl text-gray-700">{city.blurb}</p>

      <h2 className="mt-10 text-xl font-semibold">Inspectors in {city.name}</h2>

      {cityProviders.length === 0 ? (
        <p className="mt-4 rounded-md border border-dashed border-gray-300 p-6 text-sm text-gray-500">
          We're still vetting inspectors in {city.name}. Check back soon, or see our{' '}
          <Link href="/guides/building-and-pest-inspection-cost-guide" className="text-brand-600 underline">
            national cost guide
          </Link>{' '}
          in the meantime.
        </p>
      ) : (
        <div className="mt-4 space-y-4">
          {cityProviders.map((p) => (
            <div key={p.id} className="rounded-lg border border-gray-200 p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{p.name}</h3>
                {p.featured && (
                  <span className="rounded bg-brand-100 px-2 py-0.5 text-xs font-medium text-brand-700">
                    Featured
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-gray-500">
                {p.servicesOffered.join(', ')}
                {p.priceFrom ? ` · From $${p.priceFrom}` : ''}
                {p.rating ? ` · ${p.rating}★` : ''}
                {p.reviewsCount ? ` (${p.reviewsCount} reviews)` : ''}
              </p>
              {p.verified && (
                <p className="mt-1 text-xs text-green-600">✓ Verified by InspectCompare</p>
              )}
            </div>
          ))}
        </div>
      )}

      {cityZones.length > 0 && (
        <>
          <h2 className="mt-12 text-xl font-semibold">Browse {city.name} by area</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {cityZones.map((z) => (
              <Link
                key={z.slug}
                href={`/building-pest-inspections/${city.slug}/${z.slug}`}
                className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600 hover:border-brand-500 hover:text-brand-600"
              >
                {z.name}
              </Link>
            ))}
          </div>
        </>
      )}

      <div className="mt-12 rounded-lg border border-gray-100 bg-gray-50 p-6">
        <h2 className="text-lg font-semibold">Are you an inspector in {city.name}?</h2>
        <p className="mt-2 text-sm text-gray-600">
          Get listed on this page. [Provider submission form / contact link goes here]
        </p>
      </div>
    </div>
  );
}
