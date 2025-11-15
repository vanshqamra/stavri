export interface RegionLanding {
  slug: string;
  title: string;
  intro: string;
  demand: string;
  corridorSupport: string;
  shippingRoutes: string;
  popularMarbles: string[];
  advantages: string[];
  cta: string;
}

export const regionLandings: RegionLanding[] = [
  {
    slug: 'indian-marble-export-to-greece',
    title: 'Indian Marble Export to Greece',
    intro:
      'Rab Noor Pvt Ltd connects Rajasthan quarries to Greek distributors that serve hotels, villas, and island resorts.',
    demand:
      'Greek demand centers around rapid replenishment for hospitality renovations each shoulder season. Indian Makrana and Rainforest stones complement Greek whites.',
    corridorSupport:
      'We consolidate blocks in Kishangarh, process slabs, and ship via Mundra to Piraeus or Thessaloniki with customs pre-clearance.',
    shippingRoutes: 'Weekly sailings ex Mundra and Nhava Sheva to Piraeus, plus short-haul feeder service into Thessaloniki for island projects.',
    popularMarbles: ['Makrana White', 'Rainforest Green', 'Black Galaxy'],
    advantages: [
      'Greek-speaking logistics coordinators stationed in Athens.',
      'Ability to mix Indian containers with Greek white replenishment for balanced shade lots.',
      'Local stockists for emergency replacements within 48 hours.'
    ],
    cta: 'Discuss your next container to Greece'
  },
  {
    slug: 'indian-marble-export-to-germany',
    title: 'Indian Marble Export to Germany',
    intro:
      'Premium Indian marbles add warmth to Germany’s contemporary projects, from Hamburg to Munich.',
    demand:
      'Architects seek reliable beige and colored stones with full CE documentation and density reports.',
    corridorSupport:
      'Rab Noor stages bonded inventory in Greece and arranges onward trucking into Germany with dual-language documents.',
    shippingRoutes: 'Direct ocean freight to Hamburg plus rail/road distribution from Piraeus and Rotterdam hubs for phased deliveries.',
    popularMarbles: ['Crema Marfil', 'Makrana White', 'Pietra Grey'],
    advantages: [
      'DIN-compliant testing reports issued before loading.',
      'German-speaking project managers guiding customs and inland trucking.',
      'Option to store stock in bonded EU warehouses to defer VAT.'
    ],
    cta: 'Plan German deliveries with our EU team'
  },
  {
    slug: 'indian-marble-export-to-netherlands',
    title: 'Indian Marble Export to Netherlands',
    intro:
      'Serve Amsterdam, Rotterdam, and Eindhoven projects with curated marble bundles.',
    demand:
      'Dutch studios value sustainability and traceability, favoring stones with responsible quarrying proof.',
    corridorSupport:
      'Containers sail into Rotterdam with ISPM 15 certificates, while our EU tax team guides VAT reverse charge workflows.',
    shippingRoutes: 'Primary route Mundra → Rotterdam (25 days) with alternative Antwerp discharge when inland barge slots are constrained.',
    popularMarbles: ['Volakas', 'Carrara', 'Rainforest Green'],
    advantages: [
      'Full EPD documentation for LEED/BREEAM submissions.',
      'On-demand cutting and repackaging from Rotterdam free zone.',
      'Support with Dutch-language marketing packs for local clients.'
    ],
    cta: 'Book a Rotterdam-bound shipment'
  },
  {
    slug: 'indian-marble-export-to-belgium',
    title: 'Indian Marble Export to Belgium',
    intro:
      'Support Brussels developers and Antwerp distributors with reliable marble replenishment.',
    demand:
      'Belgian clients mix Italian whites with Indian colored stones for boutique projects.',
    corridorSupport:
      'Rab Noor consolidates multi-origin cargo, manages customs at Antwerp, and offers final-mile delivery to showrooms.',
    shippingRoutes: 'Sailing via Nhava Sheva or Mundra to Antwerp with the option of feeder barges up the Scheldt for Ghent and Brussels projects.',
    popularMarbles: ['Statuario', 'Makrana White', 'Rosso Levanto'],
    advantages: [
      'Customs brokerage partners in Antwerp for same-day release.',
      'Consolidation of Indian, Italian, and Greek lots on one bill of lading.',
      'Belgian warehouse for sampling and slab selection days.'
    ],
    cta: 'Arrange Antwerp customs and delivery'
  },
  {
    slug: 'indian-marble-export-to-italy',
    title: 'Indian Marble Export to Italy',
    intro:
      'Even Italian fabricators import specialty Indian stones for contrast collections.',
    demand:
      'Demand focuses on Rainforest, Black Galaxy, and high-contrast colored marbles.',
    corridorSupport:
      'We coordinate direct sailings to Genoa and Venice with bilingual documentation for local processors.',
    shippingRoutes: 'Direct sailings to Genoa/La Spezia with trucking links to Carrara and Verona stone districts.',
    popularMarbles: ['Rainforest Green', 'Black Galaxy', 'Emerald Black'],
    advantages: [
      'Italian-speaking sourcing agents embedded in Carrara.',
      'Ability to deliver unfinished blocks or calibrated slabs.',
      'Shared showrooms where Italian buyers can inspect Indian stones already in the EU.'
    ],
    cta: 'Ship Indian blocks to Italian workshops'
  },
  {
    slug: 'italian-marble-in-india',
    title: 'Italian Marble in India',
    intro:
      'Rab Noor Pvt Ltd imports Italian classics into India for luxury residences and hospitality.',
    demand:
      'Designers in Delhi, Mumbai, and Bengaluru request quick access to Carrara, Statuario, and Botticino.',
    corridorSupport:
      'We stock bonded inventory near Nhava Sheva and provide door-delivery to fabrication units across India.',
    shippingRoutes: 'Regular departures from Genoa and Livorno with final discharge at Nhava Sheva, Chennai, and Mundra depending on project location.',
    popularMarbles: ['Carrara', 'Statuario', 'Botticino'],
    advantages: [
      'INR billing with duty-paid or bonded options.',
      'Shade-matched slabs reserved in Italy and replenished monthly.',
      'Technical advisors to coordinate with Indian fabricators on cutting patterns.'
    ],
    cta: 'Reserve Italian bundles in India'
  },
  {
    slug: 'spanish-marble-in-india',
    title: 'Spanish Marble in India',
    intro:
      'Spanish marbles like Crema Marfil continue to headline large residential towers in India.',
    demand:
      'Builders look for color consistency, matched staircase sets, and fast dispatch from Indian ports.',
    corridorSupport:
      'Rab Noor imports from Valencia, clears at Nhava Sheva, and distributes nationwide via our logistics partners.',
    shippingRoutes: 'Valencia → Nhava Sheva sailings every 10 days with inland trucking to NCR, Mumbai, and Hyderabad.',
    popularMarbles: ['Crema Marfil', 'Nero Marquina'],
    advantages: [
      'Shade-sorted Crema Marfil inventory in India for same-week delivery.',
      'Ability to mix Spanish slabs with Indian Rainforest crates for design variety.',
      'Dedicated customs brokers for hassle-free duty processing.'
    ],
    cta: 'Get Spanish marble quotes in INR'
  },
  {
    slug: 'greek-marble-in-india',
    title: 'Greek Marble in India',
    intro:
      'Greek whites such as Thassos and Volakas are in high demand for premium villas and mandirs in India.',
    demand:
      'Clients seek ultra-white finishes with quick replenishment for phased projects.',
    corridorSupport:
      'Rab Noor handles Thessaloniki loading, temperature-controlled stuffing, and customs clearance in India.',
    shippingRoutes: 'Thessaloniki → Nhava Sheva sailings with refrigerated stuffing options to maintain white purity.',
    popularMarbles: ['Thassos', 'Volakas'],
    advantages: [
      'Shade-control reports issued before the container leaves Greece.',
      'In-house finishing line in Rajasthan for edge profiling and book-matching.',
      'Financing support for Indian developers importing high-value whites.'
    ],
    cta: 'Order Greek marble for Indian luxury projects'
  },
  {
    slug: 'turkish-marble-in-india',
    title: 'Turkish Marble in India',
    intro:
      'Turkish beige and grey marbles balance quality and price for Indian developers.',
    demand:
      'Bursa Beige and Picasso Grey remain favorites for malls and commercial towers.',
    corridorSupport:
      'We co-load Turkish slabs with Indian cargo, optimizing freight costs and shortening delivery timelines.',
    shippingRoutes: 'Izmir and Gemlik load ports connect to Nhava Sheva and Mundra with transit times under 20 days.',
    popularMarbles: ['Bursa Beige', 'Picasso Grey'],
    advantages: [
      'Volume pricing through long-term quarry allocations.',
      'Quality inspection teams stationed in Bursa every week.',
      'Option to warehouse Turkish slabs in India for resale.'
    ],
    cta: 'Optimize Turkish marble imports'
  }
];
