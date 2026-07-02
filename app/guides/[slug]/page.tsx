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
    <article className="mx-auto max-w-3xl px-4 py-12">
      <nav className="text-xs text-gray-400">
        <Link href="/">Home</Link> / <Link href="/guides">Guides</Link> / {guide.title}
      </nav>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-700">{guide.title}</h1>
      <p className="mt-3 text-gray-600">{guide.description}</p>

      {/* Article body placeholder — replace with real content once drafted */}
      <div className="mt-8 rounded-md border border-dashed border-gray-300 p-6 text-sm text-gray-500">
        Content not yet written — status: {guide.status}
      </div>
    </article>
  );
}
