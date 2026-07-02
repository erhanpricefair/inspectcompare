export type Zone = {
  slug: string;
  citySlug: string;
  name: string; // e.g. "North Brisbane"
  suburbs: string[]; // key suburbs for content/SEO, not exhaustive
};

// Directional zones per launch city. This is the second layer of the programmatic
// page structure: /building-pest-inspections/[city]/[zone]
// Add more zones or suburbs as coverage deepens — no page-building required.
export const zones: Zone[] = [
  // Sydney
  { slug: 'north-shore', citySlug: 'sydney', name: 'North Shore', suburbs: ['Chatswood', 'St Leonards', 'Hornsby'] },
  { slug: 'eastern-suburbs', citySlug: 'sydney', name: 'Eastern Suburbs', suburbs: ['Bondi', 'Randwick', 'Coogee'] },
  { slug: 'inner-west', citySlug: 'sydney', name: 'Inner West', suburbs: ['Newtown', 'Leichhardt', 'Marrickville'] },
  { slug: 'south-sydney', citySlug: 'sydney', name: 'South Sydney', suburbs: ['Hurstville', 'Kogarah', 'Rockdale'] },
  { slug: 'western-sydney', citySlug: 'sydney', name: 'Western Sydney', suburbs: ['Parramatta', 'Blacktown', 'Penrith'] },
  { slug: 'northern-beaches', citySlug: 'sydney', name: 'Northern Beaches', suburbs: ['Manly', 'Dee Why', 'Mona Vale'] },
  { slug: 'sutherland-shire', citySlug: 'sydney', name: 'Sutherland Shire', suburbs: ['Cronulla', 'Sutherland', 'Miranda'] },
  { slug: 'south-west-sydney', citySlug: 'sydney', name: 'South West Sydney', suburbs: ['Liverpool', 'Campbelltown', 'Camden'] },

  // Melbourne
  { slug: 'inner-melbourne', citySlug: 'melbourne', name: 'Inner Melbourne', suburbs: ['Carlton', 'Fitzroy', 'South Yarra'] },
  { slug: 'eastern-suburbs-melb', citySlug: 'melbourne', name: 'Eastern Suburbs', suburbs: ['Box Hill', 'Camberwell', 'Ringwood'] },
  { slug: 'north-melbourne', citySlug: 'melbourne', name: 'Northern Suburbs', suburbs: ['Preston', 'Coburg', 'Epping'] },
  { slug: 'western-suburbs-melb', citySlug: 'melbourne', name: 'Western Suburbs', suburbs: ['Footscray', 'Werribee', 'Sunshine'] },
  { slug: 'south-east-melbourne', citySlug: 'melbourne', name: 'South East Melbourne', suburbs: ['Dandenong', 'Berwick', 'Frankston'] },
  { slug: 'bayside', citySlug: 'melbourne', name: 'Bayside', suburbs: ['Brighton', 'Sandringham', 'Hampton'] },
  { slug: 'mornington-peninsula', citySlug: 'melbourne', name: 'Mornington Peninsula', suburbs: ['Mornington', 'Mount Eliza', 'Rosebud'] },

  // Brisbane
  { slug: 'north-brisbane', citySlug: 'brisbane', name: 'North Brisbane', suburbs: ['Chermside', 'Aspley', 'Sandgate'] },
  { slug: 'south-brisbane', citySlug: 'brisbane', name: 'South Brisbane', suburbs: ['Sunnybank', 'Mount Gravatt', 'Springwood'] },
  { slug: 'bayside-brisbane', citySlug: 'brisbane', name: 'Bayside Brisbane', suburbs: ['Wynnum', 'Manly', 'Redland Bay'] },
  { slug: 'western-suburbs-bne', citySlug: 'brisbane', name: 'Western Suburbs', suburbs: ['Indooroopilly', 'Kenmore', 'Ipswich'] },
  { slug: 'inner-city-bne', citySlug: 'brisbane', name: 'Inner City', suburbs: ['New Farm', 'West End', 'Paddington'] },
  { slug: 'north-lakes-area', citySlug: 'brisbane', name: 'North Lakes & Moreton Bay', suburbs: ['North Lakes', 'Redcliffe', 'Caboolture'] },

  // Perth
  { slug: 'northern-suburbs-perth', citySlug: 'perth', name: 'Northern Suburbs', suburbs: ['Joondalup', 'Wanneroo', 'Scarborough'] },
  { slug: 'southern-suburbs-perth', citySlug: 'perth', name: 'Southern Suburbs', suburbs: ['Rockingham', 'Kwinana', 'Fremantle'] },
  { slug: 'eastern-suburbs-perth', citySlug: 'perth', name: 'Eastern Suburbs', suburbs: ['Midland', 'Kalamunda', 'Forrestfield'] },
  { slug: 'western-suburbs-perth', citySlug: 'perth', name: 'Western Suburbs', suburbs: ['Subiaco', 'Cottesloe', 'Nedlands'] },
  { slug: 'perth-hills', citySlug: 'perth', name: 'Perth Hills', suburbs: ['Mundaring', 'Kalamunda', 'Darlington'] },

  // Adelaide
  { slug: 'northern-suburbs-adl', citySlug: 'adelaide', name: 'Northern Suburbs', suburbs: ['Elizabeth', 'Salisbury', 'Gawler'] },
  { slug: 'southern-suburbs-adl', citySlug: 'adelaide', name: 'Southern Suburbs', suburbs: ['Marion', 'Noarlunga', 'Aldinga'] },
  { slug: 'eastern-suburbs-adl', citySlug: 'adelaide', name: 'Eastern Suburbs', suburbs: ['Norwood', 'Burnside', 'Campbelltown'] },
  { slug: 'western-suburbs-adl', citySlug: 'adelaide', name: 'Western Suburbs', suburbs: ['Henley Beach', 'Grange', 'Woodville'] },
  { slug: 'adelaide-hills', citySlug: 'adelaide', name: 'Adelaide Hills', suburbs: ['Stirling', 'Mount Barker', 'Hahndorf'] },

  // Gold Coast
  { slug: 'northern-gold-coast', citySlug: 'gold-coast', name: 'Northern Gold Coast', suburbs: ['Coomera', 'Helensvale', 'Southport'] },
  { slug: 'central-gold-coast', citySlug: 'gold-coast', name: 'Central Gold Coast', suburbs: ['Surfers Paradise', 'Broadbeach', 'Robina'] },
  { slug: 'southern-gold-coast', citySlug: 'gold-coast', name: 'Southern Gold Coast', suburbs: ['Burleigh Heads', 'Palm Beach', 'Coolangatta'] },
  { slug: 'gold-coast-hinterland', citySlug: 'gold-coast', name: 'Hinterland', suburbs: ['Tamborine Mountain', 'Nerang', 'Springbrook'] },

  // Newcastle
  { slug: 'newcastle-city', citySlug: 'newcastle', name: 'Newcastle City', suburbs: ['Newcastle', 'Hamilton', 'The Junction'] },
  { slug: 'lake-macquarie', citySlug: 'newcastle', name: 'Lake Macquarie', suburbs: ['Charlestown', 'Belmont', 'Toronto'] },
  { slug: 'port-stephens', citySlug: 'newcastle', name: 'Port Stephens', suburbs: ['Nelson Bay', 'Raymond Terrace', 'Medowie'] },
  { slug: 'maitland', citySlug: 'newcastle', name: 'Maitland', suburbs: ['Maitland', 'Rutherford', 'Thornton'] },

  // Canberra
  { slug: 'north-canberra', citySlug: 'canberra', name: 'North Canberra', suburbs: ['Braddon', 'Dickson', 'Gungahlin'] },
  { slug: 'south-canberra', citySlug: 'canberra', name: 'South Canberra', suburbs: ['Kingston', 'Manuka', 'Woden'] },
  { slug: 'belconnen', citySlug: 'canberra', name: 'Belconnen', suburbs: ['Belconnen', 'Kaleen', 'Charnwood'] },
  { slug: 'tuggeranong', citySlug: 'canberra', name: 'Tuggeranong', suburbs: ['Tuggeranong', 'Conder', 'Gordon'] },
];

export function getZonesForCity(citySlug: string): Zone[] {
  return zones.filter((z) => z.citySlug === citySlug);
}

export function getZone(citySlug: string, zoneSlug: string): Zone | undefined {
  return zones.find((z) => z.citySlug === citySlug && z.slug === zoneSlug);
}
