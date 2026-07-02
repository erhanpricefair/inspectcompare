export type Provider = {
  id: string;
  name: string;
  citySlug: string;
  zoneSlug?: string; // optional - links a provider to a directional zone within the city
  servicesOffered: ('building' | 'pest' | 'combined' | 'strata' | 'new-build')[];
  phone?: string;
  website?: string;
  licenceNumber?: string;
  yearsExperience?: number;
  turnaroundHours?: number;
  priceFrom?: number;
  featured: boolean; // paid placement flag - drives future monetisation
  verified: boolean; // manually vetted vs self-submitted
  blurb?: string;
};

// Seed list — replace with real vetted inspectors per city before launch.
// "featured" providers render above the fold; this is the paid-listing hook for later.
export const providers: Provider[] = [
  {
    id: 'seed-sydney-1',
    name: '[Sydney inspector — placeholder]',
    citySlug: 'sydney',
    servicesOffered: ['combined', 'building', 'pest'],
    featured: false,
    verified: false,
    priceFrom: 500,
  },
  {
    id: 'seed-melbourne-1',
    name: '[Melbourne inspector — placeholder]',
    citySlug: 'melbourne',
    servicesOffered: ['combined', 'building', 'pest'],
    featured: false,
    verified: false,
    priceFrom: 450,
  },
];

export function getProvidersForCity(citySlug: string): Provider[] {
  return providers
    .filter((p) => p.citySlug === citySlug)
    .sort((a, b) => Number(b.featured) - Number(a.featured));
}

export function getProvidersForZone(citySlug: string, zoneSlug: string): Provider[] {
  return providers
    .filter((p) => p.citySlug === citySlug && p.zoneSlug === zoneSlug)
    .sort((a, b) => Number(b.featured) - Number(a.featured));
}
