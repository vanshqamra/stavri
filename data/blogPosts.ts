export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  author: string;
  heroImage: string;
  heroAlt: string;
  tags: string[];
  sections: BlogSection[];
  keyTakeaways: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'statuario-vs-calacatta-vs-carrara',
    title: 'Statuario vs Calacatta vs Carrara: Understand the Differences',
    excerpt:
      'Compare Italy’s three iconic whites by veining, availability, finishes, and best-fit spaces before you book your next bundle.',
    date: '2024-07-05',
    readingTime: '7 min read',
    author: 'Design Desk',
    heroImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80',
    heroAlt: 'Italian marble slabs with distinctive grey veining inside a warehouse',
    tags: ['Italian Marble', 'Specification'],
    sections: [
      {
        heading: 'Veining intensity & tone',
        paragraphs: [
          'Statuario is instantly recognizable for its thunderbolt grey veins that slice through a crisp white base, making it perfect for feature walls and lobby backdrops.',
          'Calacatta presents a warmer tone with fluid ribbons that shift from grey to subtle gold. Designers leverage the warmth to soften contemporary interiors.',
          'Carrara offers the softest, feathered movement, making it ideal for large floor plates and bathrooms where visual calm is essential.'
        ]
      },
      {
        heading: 'Availability & pricing reality',
        paragraphs: [
          'Carrara has the broadest production window, so replenishing containers for phased projects is straightforward.',
          'Statuario and Calacatta quarries release fewer blocks each season. Rab Noor reserves bundles in Carrara and ships via Genoa to Europe or consolidates with Indian cargo for Middle East deliveries.'
        ],
        bullets: [
          'Carrara CD: USD 60–85/m² landed in India',
          'Calacatta premium selections: USD 110–160/m² FOB Italy',
          'Statuario top selection: USD 155–220/m² CIF Europe'
        ]
      },
      {
        heading: 'Finish and detailing guidance',
        paragraphs: [
          'Pair polished Statuario slabs with dramatic lighting to emphasize depth.',
          'Use honed Calacatta on hospitality floors for better slip resistance while keeping luxury intact.',
          'Consider leathered Carrara on furniture cladding for tactile variation.'
        ]
      },
      {
        heading: 'When to mix the three',
        paragraphs: [
          'Luxury projects frequently mix these stones: Carrara for public areas, Calacatta for suites, and Statuario for hero zones. Rab Noor coordinates shade-matching, book-matching, and sequential numbering during loading to keep multi-stone packages organized.'
        ]
      }
    ],
    keyTakeaways: [
      'Reserve Statuario and Calacatta early—production slots fill fast.',
      'Match finish type to traffic intensity to keep whites pristine.',
      'Consolidating Italian slabs with Indian stones reduces freight cost per m².'
    ]
  },
  {
    slug: 'best-marble-for-luxury-homes',
    title: 'Best Marble for Luxury Homes: A Practical Guide',
    excerpt:
      'From villa foyers to rooftop spas, learn how to select marble that mirrors the homeowner’s lifestyle and maintenance expectations.',
    date: '2024-08-12',
    readingTime: '6 min read',
    author: 'Rab Noor Editorial',
    heroImage: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1600&q=80',
    heroAlt: 'Luxury villa interior with white marble floors and panoramic glazing',
    tags: ['Luxury Homes', 'Design'],
    sections: [
      {
        heading: 'Start with the lifestyle brief',
        paragraphs: [
          'Understand how formal the home will be, how often it hosts events, and whether the owner embraces natural patina. Pure whites like Makrana or Thassos radiate light, while darker Portoro or Nero Marquina define club rooms.'
        ]
      },
      {
        heading: 'Zone-by-zone recommendations',
        paragraphs: [
          'Grand foyers benefit from hard-wearing Crema Marfil or Pietra Grey with inlay borders.',
          'Spa bathrooms respond well to honed Carrara or Volakas thanks to their low porosity.',
          'Outdoor verandas need textured finishes—leathered Rainforest Green or brushed granite look-a-likes maintain grip.'
        ]
      },
      {
        heading: 'Plan the supply chain',
        paragraphs: [
          'Luxury homes rarely accept delays. Rab Noor blocks quarry lots, fabricates cut-to-size packages, and dispatches via Mundra or Thessaloniki with real-time tracking to the job site.'
        ],
        bullets: [
          '2–3 weeks fabrication for custom staircase sets',
          'ISPM 15-treated crates with moisture barriers',
          'Dedicated concierge to sync with site managers'
        ]
      }
    ],
    keyTakeaways: [
      'Align marble selection with day-to-day usage, not just visuals.',
      'Mix finishes (polished, honed, leathered) across the residence for both performance and contrast.',
      'Secure production slots early to avoid delaying bespoke joinery and FF&E installation.'
    ]
  },
  {
    slug: 'marble-vs-granite-vs-quartz',
    title: 'Marble vs Granite vs Quartz for High-End Kitchens',
    excerpt:
      'Evaluate durability, maintenance, and brand perception across marble, granite, and engineered quartz before finalizing kitchen surfaces.',
    date: '2024-06-21',
    readingTime: '5 min read',
    author: 'Materials Lab',
    heroImage: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80',
    heroAlt: 'Close-up of stone countertop fabrication with subtle veining',
    tags: ['Countertops', 'Materials'],
    sections: [
      {
        heading: 'Marble: unmatched prestige',
        paragraphs: [
          'Marble wins for visual drama. Slabs like Statuario or Emerald Black elevate chef’s kitchens and entertaining islands. Specify sealants and educate homeowners about gentle cleaners to manage patina.'
        ]
      },
      {
        heading: 'Granite: rugged resilience',
        paragraphs: [
          'Black Galaxy behaves like granite with copper flecks that hide wear and resist heat, making it ideal for outdoor bars and high-use counters.'
        ]
      },
      {
        heading: 'Quartz: engineered consistency',
        paragraphs: [
          'Quartz surfaces deliver uniformity and stain resistance, yet lack the authenticity and resale appeal of natural stone. Many clients now combine quartz in back-of-house kitchens with marble in display zones.'
        ],
        bullets: ['Pair quartz backsplashes with marble islands for layered luxury.', 'Specify quartz for pantry counters where maintenance crews need low upkeep.']
      }
    ],
    keyTakeaways: [
      'Let traffic intensity decide where marble or quartz is best suited.',
      'Black Galaxy bridges the gap between marble aesthetics and granite durability.',
      'Maintenance conversations should happen during design development—not after installation.'
    ]
  },
  {
    slug: 'import-marble-into-europe',
    title: 'How to Import Marble into Europe from India',
    excerpt:
      'Step-by-step playbook covering EORI registration, duties, and freight timelines for Indian marble bound for EU clients.',
    date: '2024-05-30',
    readingTime: '8 min read',
    author: 'Logistics Desk',
    heroImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
    heroAlt: 'Container vessel at an international port during sunset',
    tags: ['Logistics', 'Europe'],
    sections: [
      {
        heading: 'Regulatory basics',
        paragraphs: [
          'Every EU importer needs an active EORI number linked to their VAT entity. Rab Noor verifies EORI status before booking cargo to avoid customs delays.',
          'Marble slabs typically attract 0–4% customs duty depending on HS classification and any preferential trade agreements.'
        ]
      },
      {
        heading: 'Documentation checklist',
        bullets: [
          'Commercial invoice + packing list with slab numbers',
          'Certificate of origin (Indian Chamber of Commerce)',
          'ISPM 15 / fumigation certificate for wooden crates',
          'Bill of lading + insurance certificate'
        ],
        paragraphs: ['Digital copies are shared before the vessel sails so your customs broker can pre-lodge entries.']
      },
      {
        heading: 'Freight timelines & routing',
        paragraphs: [
          'Sailing to Greece (Piraeus) takes 12–15 days from Mundra. Northern Europe (Rotterdam, Antwerp, Hamburg) requires 25–30 days. Rab Noor also offers EU warehouse staging for phased deliveries.'
        ]
      }
    ],
    keyTakeaways: [
      'Secure an EORI number before issuing purchase orders.',
      'Keep a digital dossier of documents for compliance audits.',
      'Use bonded warehousing to stage deliveries across multiple EU countries.'
    ]
  },
  {
    slug: 'maintain-white-marble-floors',
    title: 'Guide to Maintaining White Marble Floors',
    excerpt:
      'Protect Makrana, Thassos, and Carrara floors in hotels or villas with a proactive maintenance program.',
    date: '2024-05-02',
    readingTime: '4 min read',
    author: 'Aftercare Team',
    heroImage: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80',
    heroAlt: 'White marble corridor being cleaned with professional equipment',
    tags: ['Maintenance', 'Operations'],
    sections: [
      {
        heading: 'Daily care',
        paragraphs: [
          'Use pH-neutral cleaners and microfiber mops. Avoid acidic solutions that etch polished finishes and never drag metal furniture without felt pads.'
        ]
      },
      {
        heading: 'Weekly & monthly routines',
        bullets: [
          'Buff high-traffic lobbies with non-abrasive pads.',
          'Inspect grout lines and joints for moisture ingress.',
          'Schedule sealing every 12–18 months depending on load.'
        ],
        paragraphs: ['Rab Noor partners with EU maintenance teams who can train in-house staff or execute annual refreshes.']
      },
      {
        heading: 'Emergency response',
        paragraphs: [
          'For stains, blot immediately and use a poultice made for marble. For scratches, isolate the area and call a specialist—DIY sanding will create waves in reflective floors.'
        ]
      }
    ],
    keyTakeaways: [
      'Document a cleaning protocol for housekeeping teams.',
      'Reseal on a defined schedule to avoid sudden dullness.',
      'Partner with specialists for resurfacing or stain removal.'
    ]
  },
  {
    slug: 'marble-for-hotels-and-commercial-spaces',
    title: 'Choosing Marble for Hotels and Commercial Spaces',
    excerpt:
      'Match stone types to lobby drama, guestroom durability, and back-of-house practicality across hospitality assets.',
    date: '2024-04-18',
    readingTime: '7 min read',
    author: 'Hospitality Studio',
    heroImage: 'https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=1600&q=80',
    heroAlt: 'Hotel lobby finished with marble floors and statement lighting',
    tags: ['Hospitality', 'Design'],
    sections: [
      {
        heading: 'Segment the property',
        bullets: [
          'Lobbies: Statuario, Volakas, or Rosso Levanto for statement arrivals.',
          'Guestrooms: Carrara, Crema Marfil, or Athens Grey for balanced elegance.',
          'Back-of-house: dense stones like Pietra Grey or granite hybrids for longevity.'
        ],
        paragraphs: ['Each zone demands a unique combination of finish, thickness, and anti-slip treatment.']
      },
      {
        heading: 'Coordinate logistics early',
        paragraphs: [
          'Hospitality projects rely on phased openings. Rab Noor aligns fabrication slots, books Mundra/Nhava Sheva sailings, and pre-positions stock in Piraeus or Rotterdam for rapid fit-out.'
        ]
      },
      {
        heading: 'Sustainability expectations',
        paragraphs: [
          'Hotel brands audit supply chains. Share quarry traceability, optimize loading plans to cut emissions, and recycle offcuts into vanity sets or wall cladding.'
        ]
      }
    ],
    keyTakeaways: [
      'Use a tiered material palette tailored to each zone of the property.',
      'Plan shipping and warehousing six months before opening milestones.',
      'Document quarry provenance to support ESG reporting.'
    ]
  }
];

export const getBlogPostBySlug = (slug: string) => blogPosts.find((post) => post.slug === slug);
