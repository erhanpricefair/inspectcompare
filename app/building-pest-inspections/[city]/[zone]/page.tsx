import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCity } from '@/data/cities';
import { zones, getZone, getZonesForCity } from '@/data/zones';
import { getProvidersForZone } from '@/data/providers';

type Props = { params: { city: string; zone: string } };

// Pre-render every city/zone combination at build time
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
    <div className="mx-auto max-w-5xl px-4 py-12">
      <nav className="text-xs text-gray-400">
        <Link href="/">Home</Link> /{' '}
        <Link href={`/building-pest-inspections/${city.slug}`}>{city.name}</Link> / {zone.name}
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-700">
        Building &amp; Pest Inspections in {zone.name}, {city.name}
      </h1>

      <p className="mt-4 text-sm text-gray-500">
        Covering {zone.suburbs.join(', ')} and surrounding areas.
      </p>

      <p className="mt-4 max-w-3xl text-gray-700">
        Typical combined inspection cost across {city.name}: ${city.priceLow}–${city.priceHigh}.
        See the full{' '}
        <Link href={`/building-pest-inspections/${city.slug}`} className="text-brand-600 underline">
          {city.name} city guide
        </Link>{' '}
        for wider pricing context.
      </p>

      <h2 className="mt-10 text-xl font-semibold">Inspectors serving {zone.name}</h2>

      {zoneProviders.length === 0 ? (
        <p className="mt-4 rounded-md border border-dashed border-gray-300 p-6 text-sm text-gray-500">
          We're still vetting inspectors specifically for {zone.name}. See the full list for{' '}
          <Link href={`/building-pest-inspections/${city.slug}`} className="text-brand-600 underline">
            {city.name}
          </Link>{' '}
          in the meantime.
        </p>
      ) : (
        <div className="mt-4 space-y-4">
          {zoneProviders.map((p) => (
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
              </p>
            </div>
          ))}
        </div>
      )}

      {otherZones.length > 0 && (
        <>
          <h2 className="mt-12 text-lg font-semibold">Other areas of {city.name}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {otherZones.map((z) => (
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
        <h2 className="text-lg font-semibold">Are you an inspector serving {zone.name}?</h2>
        <p className="mt-2 text-sm text-gray-600">
          Get listed on this page. [Provider submission form / contact link goes here]
        </p>
      </div>
    </div>
  );
}
