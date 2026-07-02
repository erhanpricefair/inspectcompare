import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cities, getCity } from '@/data/cities';
import { getProvidersForCity } from '@/data/providers';
import { getZonesForCity } from '@/data/zones';
import { ProviderCard } from '@/components/ProviderCard';

type Props = { params: { city: string } };

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
    <div>
      <section className="bg-ink-700 text-white">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <nav className="text-xs text-ink-100">
            <Link href="/" className="hover:text-white">Home</Link> / Building &amp; Pest
            Inspections / {city.name}
          </nav>

          <h1 className="mt-3 font-display text-3xl font-bold">
            Building &amp; Pest Inspections in {city.name}, {city.state}
          </h1>

          <p className="mt-4 max-w-2xl text-ink-100">{city.blurb}</p>

          <div className="mt-6 inline-flex items-baseline gap-2 rounded-md bg-rust-500 px-4 py-2">
            <span className="font-display text-lg font-bold">
              ${city.priceLow}–${city.priceHigh}
            </span>
            <span className="text-sm text-white/90">typical combined inspection cost</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="font-display text-xl font-bold text-ink-800">Inspectors in {city.name}</h2>

        {cityProviders.length === 0 ? (
          <p className="mt-4 rounded-md border border-dashed border-ink-100 bg-white p-6 text-sm text-ink-400">
            We're still vetting inspectors in {city.name}. Check back soon, or see our{' '}
            <Link
              href="/guides/building-and-pest-inspection-cost-guide"
              className="text-rust-500 underline"
            >
              national cost guide
            </Link>{' '}
            in the meantime.
          </p>
        ) : (
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {cityProviders.map((p) => (
              <ProviderCard key={p.id} provider={p} />
            ))}
          </div>
        )}

        {cityZones.length > 0 && (
          <>
            <h2 className="mt-14 font-display text-xl font-bold text-ink-800">
              Browse {city.name} by area
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {cityZones.map((z) => (
                <Link
                  key={z.slug}
                  href={`/building-pest-inspections/${city.slug}/${z.slug}`}
                  className="rounded-full border border-ink-100 bg-white px-3 py-1 text-xs font-medium text-ink-600 transition hover:border-rust-500 hover:text-rust-500"
                >
                  {z.name}
                </Link>
              ))}
            </div>
          </>
        )}

        <div className="mt-14 rounded-lg border border-ink-100 bg-sand p-6">
          <h2 className="font-display text-lg font-bold text-ink-800">
            Are you an inspector in {city.name}?
          </h2>
          <p className="mt-2 text-sm text-ink-600">
            Get listed on this page. [Provider submission form / contact link goes here]
          </p>
        </div>
      </div>
    </div>
  );
}
