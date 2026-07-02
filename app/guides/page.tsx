import Link from 'next/link';
import { guides } from '@/data/guides';

export default function GuidesIndexPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-brand-700">
        Building &amp; Pest Inspection Guides
      </h1>
      <p className="mt-3 text-gray-600">
        Everything a buyer needs to know before booking — cost, red flags, and what reports
        actually mean.
      </p>
      <ul className="mt-8 space-y-5">
        {guides.map((guide) => (
          <li key={guide.slug} className="border-b border-gray-100 pb-5">
            <Link
              href={`/guides/${guide.slug}`}
              className="text-lg font-medium text-gray-800 hover:text-brand-600"
            >
              {guide.title}
            </Link>
            <p className="mt-1 text-sm text-gray-500">{guide.description}</p>
            {guide.status !== 'published' && (
              <span className="mt-1 inline-block text-xs uppercase tracking-wide text-amber-600">
                {guide.status}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
