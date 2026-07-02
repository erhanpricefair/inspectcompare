import Link from 'next/link';
import { guides } from '@/data/guides';

export default function GuidesIndexPage() {
  return (
    <div>
      <section className="bg-ink-700 text-white">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <h1 className="font-display text-3xl font-bold">
            Building &amp; Pest Inspection Guides
          </h1>
          <p className="mt-3 max-w-xl text-ink-100">
            Everything a buyer needs to know before booking — cost, red flags, and what reports
            actually mean.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12">
        <ul className="space-y-5">
          {guides.map((guide) => (
            <li key={guide.slug} className="border-b border-ink-100 pb-5">
              <Link
                href={`/guides/${guide.slug}`}
                className="font-display text-lg font-semibold text-ink-800 hover:text-rust-500"
              >
                {guide.title}
              </Link>
              <p className="mt-1 text-sm text-ink-400">{guide.description}</p>
              {guide.status !== 'published' && (
                <span className="mt-1 inline-block rounded bg-sand px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink-600">
                  {guide.status}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
