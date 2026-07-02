import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'InspectCompare — Find Building & Pest Inspectors in Australia',
    template: '%s | InspectCompare',
  },
  description:
    'Compare building and pest inspectors by city, understand real costs, and avoid the mistakes that cost buyers thousands.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <header className="border-b border-gray-100">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
            <Link href="/" className="text-lg font-semibold text-brand-700">
              InspectCompare
            </Link>
            <div className="flex gap-6 text-sm text-gray-600">
              <Link href="/building-pest-inspections/sydney" className="hover:text-brand-600">
                Find an Inspector
              </Link>
              <Link href="/guides" className="hover:text-brand-600">
                Guides
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="mt-24 border-t border-gray-100 py-10 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} InspectCompare. Independent comparison site — not a booking
          agent.
        </footer>
      </body>
    </html>
  );
}
