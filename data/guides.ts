export type Guide = {
  slug: string;
  title: string;
  description: string;
  status: 'planned' | 'drafted' | 'published';
};

// The 15 launch guides. Fill in `content` (added once written) and flip status to 'published'.
export const guides: Guide[] = [
  {
    slug: 'building-and-pest-inspection-cost-guide',
    title: 'Building and Pest Inspection Cost Guide (Australia)',
    description: 'What a combined inspection actually costs by property type, age and location.',
    status: 'planned',
  },
  {
    slug: 'whats-included-in-an-inspection',
    title: "What's Included in a Building and Pest Inspection",
    description: 'A full breakdown of what inspectors check, room by room.',
    status: 'planned',
  },
  {
    slug: 'building-vs-pest-vs-combined',
    title: 'Building vs Pest vs Combined Inspections — Which Do You Need?',
    description: 'The differences explained, and when to book which.',
    status: 'planned',
  },
  {
    slug: 'red-flags-that-should-kill-a-deal',
    title: 'Inspection Red Flags That Should Kill a Deal',
    description: 'The defects that are genuine walk-away signs, not just negotiation leverage.',
    status: 'planned',
  },
  {
    slug: 'negotiate-price-after-bad-report',
    title: 'Can You Negotiate Price After a Bad Inspection Report?',
    description: 'How buyers use inspection findings to renegotiate before exchange.',
    status: 'planned',
  },
  {
    slug: 'termite-inspection-guide',
    title: 'Termite Inspection Guide — Signs, Cost, What Happens Next',
    description: 'Everything on termite-specific inspections and treatment pathways.',
    status: 'planned',
  },
  {
    slug: 'should-you-attend-your-inspection',
    title: 'Should You Attend Your Building Inspection in Person?',
    description: 'The case for and against being on-site.',
    status: 'planned',
  },
  {
    slug: 'strata-apartment-inspections',
    title: 'Strata and Apartment Inspections — What’s Different',
    description: 'Why unit inspections are scoped differently to houses.',
    status: 'planned',
  },
  {
    slug: 'new-build-handover-pci-inspections',
    title: 'New Build Handover (PCI) Inspections Explained',
    description: 'What a practical completion inspection covers for new homes.',
    status: 'planned',
  },
  {
    slug: 'how-long-does-an-inspection-take',
    title: 'How Long Does a Building Inspection Take?',
    description: 'Typical durations by property size and complexity.',
    status: 'planned',
  },
  {
    slug: 'inspector-licensing-by-state',
    title: 'Building Inspector Licensing Requirements by State',
    description: 'What licensing actually means in each state and territory.',
    status: 'planned',
  },
  {
    slug: 'pre-auction-inspection-timing',
    title: 'Pre-Auction Inspection Timing — When to Book',
    description: 'Why auction buyers need to move faster on inspections.',
    status: 'planned',
  },
  {
    slug: 'seller-wont-allow-access',
    title: "What Happens If the Seller Won't Allow Inspection Access",
    description: 'Buyer rights and options when access is refused or restricted.',
    status: 'planned',
  },
  {
    slug: 'why-cheap-inspections-are-risky',
    title: 'Cheap Inspections — Why the Lowest Quote Is Often the Worst Choice',
    description: 'What corners get cut at the bottom of the market.',
    status: 'planned',
  },
  {
    slug: 'defects-glossary',
    title: 'Building Defects Glossary — Rising Damp, Footing Movement and More',
    description: 'A visual, scannable glossary of common report terms.',
    status: 'planned',
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
