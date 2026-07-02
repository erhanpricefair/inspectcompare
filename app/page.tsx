import Link from 'next/link';
import { cities } from '@/data/cities';
import { guides } from '@/data/guides';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-brand-700 sm:text-4xl">
        Compare Building &amp; Pest Inspectors Across Australia
      </h1>
      <p className="mt-4 max-w-2xl text-gray-600">
        Real pricing, what to actually look for in a report, and vetted inspectors by city —
        built for buyers who don't want to get burned before settlement.
      </p>

      <h2 className="mt-12 text-xl font-semibold">Find inspectors by city</h2>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {cities.map((city) => (
          <Link
            key={city.slug}
            href={`/building-pest-inspections/${city.slug}`}
            className="rounded-lg border border-gray-200 px-4 py-3 text-sm font-medium text-gray-800 hover:border-brand-500 hover:text-brand-600"
          >
            {city.name}
            <span className="block text-xs font-normal text-gray-400">{city.state}</span>
          </Link>
        ))}
      </div>

      <h2 className="mt-12 text-xl font-semibold">Guides</h2>
      <ul className="mt-4 space-y-3">
        {guides.slice(0, 6).map((guide) => (
          <li key={guide.slug}>
            <Link
              href={`/guides/${guide.slug}`}
              className="font-medium text-gray-800 hover:text-brand-600"
            >
              {guide.title}
            </Link>
            <p className="text-sm text-gray-500">{guide.description}</p>
          </li>
        ))}
      </ul>
      <Link href="/guides" className="mt-4 inline-block text-sm text-brand-600 hover:underline">
        View all guides →
      </Link>
    </div>
  );
}
