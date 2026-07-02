import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { guides, getGuide } from '@/data/guides';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const guide = getGuide(params.slug);
  if (!guide) return {};
  return { title: guide.title, description: guide.description };
}

export default function GuidePage({ params }: Props) {
  const guide = getGuide(params.slug);
  if (!guide) return notFound();

  return (
    <article>
      <section className="bg-ink-700 text-white">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <nav className="text-xs text-ink-100">
            <Link href="/" className="hover:text-white">Home</Link> /{' '}
            <Link href="/guides" className="hover:text-white">Guides</Link> / {guide.title}
          </nav>
          <h1 className="mt-3 font-display text-3xl font-bold">{guide.title}</h1>
          <p className="mt-3 text-ink-100">{guide.description}</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="rounded-md border border-dashed border-ink-100 bg-white p-6 text-sm text-ink-400">
          Content not yet written — status: {guide.status}
        </div>
      </div>
    </article>
  );
}
