export type ProductCategory = 'all' | 'white' | 'beige' | 'grey' | 'black' | 'colored';

export interface SimpleProduct {
  slug: string;
  name: string;
  origin: string;
  category: ProductCategory;
}

export const productCatalogue: SimpleProduct[] = [
  { slug: 'makrana-white', name: 'Makrana White', origin: 'Rajasthan, India', category: 'white' },
  { slug: 'thassos-bright', name: 'Thassos Bright', origin: 'Thassos, Greece', category: 'white' },
  { slug: 'statuario-classico', name: 'Statuario Classico', origin: 'Carrara, Italy', category: 'grey' },
  { slug: 'rosso-verona', name: 'Rosso Verona', origin: 'Verona, Italy', category: 'colored' },
  { slug: 'nero-marquina', name: 'Nero Marquina', origin: 'Markina, Spain', category: 'black' },
  { slug: 'travertine-beige', name: 'Travertine Beige', origin: 'Anatolia, Türkiye', category: 'beige' }
];

export interface ProductDetail extends SimpleProduct {
  highlights: string[];
}

const detailMap: Record<string, ProductDetail> = productCatalogue.reduce((acc, product) => {
  acc[product.slug] = {
    ...product,
    highlights: [
      'Gallery preview coming soon',
      'Technical data sheet placeholder',
      'Applications list placeholder'
    ]
  };
  return acc;
}, {} as Record<string, ProductDetail>);

export const getProductBySlug = (slug: string): ProductDetail | undefined => detailMap[slug];

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'bridging-india-europe-marble',
    title: 'Bridging India & Europe in Marble Trade',
    description: 'How Rab Noor Pvt Ltd coordinates sourcing in India with warehousing in the EU.',
    date: 'Jan 2025'
  },
  {
    slug: 'choosing-marble-for-luxury-hospitality',
    title: 'Choosing Marble for Luxury Hospitality',
    description: 'Key considerations on durability, finishes, and consistent shade selection.',
    date: 'Feb 2025'
  },
  {
    slug: 'logistics-checklist-for-bulk-stone',
    title: 'Logistics Checklist for Bulk Stone Shipments',
    description: 'Documentation, insurance, and packaging steps before dispatch.',
    date: 'Mar 2025'
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((post) => post.slug === slug);

export interface ProjectCard {
  title: string;
  location: string;
  marbles: string;
}

export const projectShowcase: ProjectCard[] = [
  {
    title: 'Athens Riviera Hotel Lobby',
    location: 'Athens, Greece',
    marbles: 'Thassos Bright · Nero Marquina accents'
  },
  {
    title: 'Udaipur Heritage Residence',
    location: 'Udaipur, India',
    marbles: 'Makrana White · Rosso Verona feature wall'
  },
  {
    title: 'Rotterdam Corporate HQ',
    location: 'Rotterdam, Netherlands',
    marbles: 'Statuario Classico · Travertine Beige'
  },
  {
    title: 'Lisbon Boutique Retail',
    location: 'Lisbon, Portugal',
    marbles: 'Nero Marquina · Travertine Beige'
  }
];
