import Link from 'next/link';
import { cities } from '@/data/cities';
import { guides } from '@/data/guides';
import { providers } from '@/data/providers';

export default function HomePage() {
  const totalProviders = providers.length;

  return (
    <div>
      <section className="bg-ink-800 text-white">
        <div className="mx-auto max-w-5xl px-4 py-20">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-rust-500">
            Building &amp; Pest Inspections · Australia
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            Know what's really in the report before you sign.
          </h1>
          <p className="mt-5 max-w-xl text-ink-100">
            Real pricing, what inspectors actually check, and vetted providers by city — built
            for buyers who don't want surprises after settlement.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
            <div>
              <span className="font-display text-2xl font-bold text-white">{totalProviders}</span>
              <span className="ml-2 text-ink-100">inspectors listed</span>
            </div>
            <div className="h-8 w-px bg-ink-600" />
            <div>
              <span className="font-display text-2xl font-bold text-white">{cities.length}</span>
              <span className="ml-2 text-ink-100">cities covered</span>
            </div>
            <div className="h-8 w-px bg-ink-600" />
            <div>
              <span className="font-display text-2xl font-bold text-white">4.8★</span>
              <span className="ml-2 text-ink-100">minimum rating shown</span>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="font-display text-xl font-bold text-ink-800">Find inspectors by city</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/building-pest-inspections/${city.slug}`}
              className="rounded-lg border border-ink-100 bg-white px-4 py-3 text-sm font-medium text-ink-700 shadow-sm transition hover:border-rust-500 hover:text-rust-500"
            >
              {city.name}
              <span className="block text-xs font-normal text-ink-400">{city.state}</span>
            </Link>
          ))}
        </div>

        <h2 className="mt-14 font-display text-xl font-bold text-ink-800">Guides</h2>
        <ul className="mt-4 space-y-3">
          {guides.slice(0, 6).map((guide) => (
            <li key={guide.slug} className="border-b border-ink-100 pb-3">
              <Link
                href={`/guides/${guide.slug}`}
                className="font-medium text-ink-700 hover:text-rust-500"
              >
                {guide.title}
              </Link>
              <p className="text-sm text-ink-400">{guide.description}</p>
            </li>
          ))}
        </ul>
        <Link
          href="/guides"
          className="mt-4 inline-block text-sm font-medium text-rust-500 hover:underline"
        >
          View all guides →
        </Link>
      </div>
    </div>
  );
}
