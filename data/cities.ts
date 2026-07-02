export type City = {
  slug: string;
  name: string;
  state: string;
  region: 'metro' | 'regional';
  priceLow: number;
  priceHigh: number;
  blurb: string;
};

// Launch cities. Add more here as you expand — every entry auto-generates
// a full city page at /building-pest-inspections/[slug]
export const cities: City[] = [
  {
    slug: 'sydney',
    name: 'Sydney',
    state: 'NSW',
    region: 'metro',
    priceLow: 500,
    priceHigh: 1000,
    blurb:
      'Sydney has some of the highest inspection prices in the country, driven by older housing stock and high demand.',
  },
  {
    slug: 'melbourne',
    name: 'Melbourne',
    state: 'VIC',
    region: 'metro',
    priceLow: 450,
    priceHigh: 900,
    blurb:
      'Melbourne combined inspections cover a wide mix of period homes and newer builds, with pricing to match property age.',
  },
  {
    slug: 'brisbane',
    name: 'Brisbane',
    state: 'QLD',
    region: 'metro',
    priceLow: 400,
    priceHigh: 800,
    blurb:
      "Queensland's subtropical climate makes pest inspections especially important — termite activity is common.",
  },
  {
    slug: 'perth',
    name: 'Perth',
    state: 'WA',
    region: 'metro',
    priceLow: 400,
    priceHigh: 800,
    blurb:
      'Perth inspections often flag reactive soil and sub-floor ventilation issues typical of the local building stock.',
  },
  {
    slug: 'adelaide',
    name: 'Adelaide',
    state: 'SA',
    region: 'metro',
    priceLow: 380,
    priceHigh: 750,
    blurb:
      'Adelaide has a high proportion of older stone and brick homes, where structural inspection detail matters most.',
  },
  {
    slug: 'gold-coast',
    name: 'Gold Coast',
    state: 'QLD',
    region: 'metro',
    priceLow: 400,
    priceHigh: 800,
    blurb:
      'High-density coastal builds and a big termite risk zone make combined inspections the standard here.',
  },
  {
    slug: 'newcastle',
    name: 'Newcastle',
    state: 'NSW',
    region: 'regional',
    priceLow: 380,
    priceHigh: 700,
    blurb:
      'Regional pricing tends to run below Sydney rates, though older heritage housing can push costs up.',
  },
  {
    slug: 'canberra',
    name: 'Canberra',
    state: 'ACT',
    region: 'metro',
    priceLow: 420,
    priceHigh: 800,
    blurb:
      'Canberra inspections often focus on slab movement and insulation issues tied to the local climate.',
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
