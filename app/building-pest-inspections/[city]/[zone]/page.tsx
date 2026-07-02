import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCity } from '@/data/cities';
import { zones, getZone, getZonesForCity } from '@/data/zones';
import { getProvidersForZone } from '@/data/providers';
import { ProviderCard } from '@/components/ProviderCard';

type Props = { params: { city: string; zone: string } };

export function generateStaticParams() {
  return zones.map((z) => ({ city: z.citySlug, zone: z.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const city = getCity(params.city);
  const zone = getZone(params.city, params.zone);
  if (!city || !zone) return {};
  return {
    title: `Building & Pest Inspections in ${zone.name}, ${city.name}`,
    description: `Compare building and pest inspectors serving ${zone.name} (${zone.suburbs.join(', ')}) in ${city.name}, ${city.state}.`,
  };
}

export default function ZonePage({ params }: Props) {
  const city = getCity(params.city);
  const zone = getZone(params.city, params.zone);
  if (!city || !zone) return notFound();

  const zoneProviders = getProvidersForZone(city.slug, zone.slug);
  const otherZones = getZonesForCity(city.slug).filter((z) => z.slug !== zone.slug);

  return (
    <div>
      <section className="bg-ink-700 text-white">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <nav className="text-xs text-ink-100">
            <Link href="/" className="hover:text-white">Home</Link> /{' '}
            <Link href={`/building-pest-inspections/${city.slug}`} className="hover:text-white">
              {city.name}
            </Link>{' '}
            / {zone.name}
          </nav>

          <h1 className="mt-3 font-display text-3xl font-bold">
            Building &amp; Pest Inspections in {zone.name}, {city.name}
          </h1>

          <p className="mt-3 text-ink-100">
            Covering {zone.suburbs.join(', ')} and surrounding areas.
          </p>

          <div className="mt-6 inline-flex items-baseline gap-2 rounded-md bg-rust-500 px-4 py-2">
            <span className="font-display text-lg font-bold">
              ${city.priceLow}–${city.priceHigh}
            </span>
            <span className="text-sm text-white/90">typical cost across {city.name}</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="font-display text-xl font-bold text-ink-800">
          Inspectors serving {zone.name}
        </h2>

        {zoneProviders.length === 0 ? (
          <p className="mt-4 rounded-md border border-dashed border-ink-100 bg-white p-6 text-sm text-ink-400">
            We're still vetting inspectors specifically for {zone.name}. See the full list for{' '}
            <Link
              href={`/building-pest-inspections/${city.slug}`}
              className="text-rust-500 underline"
            >
              {city.name}
            </Link>{' '}
            in the meantime.
          </p>
        ) : (
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {zoneProviders.map((p) => (
              <ProviderCard key={p.id} provider={p} />
            ))}
          </div>
        )}

        {otherZones.length > 0 && (
          <>
            <h2 className="mt-14 font-display text-lg font-bold text-ink-800">
              Other areas of {city.name}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {otherZones.map((z) => (
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
            Are you an inspector serving {zone.name}?
          </h2>
          <p className="mt-2 text-sm text-ink-600">
            Get listed on this page. [Provider submission form / contact link goes here]
          </p>
        </div>
      </div>
    </div>
  );
}
