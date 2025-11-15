export interface Project {
  slug: string;
  name: string;
  location: string;
  marblesUsed: string[];
  description: string;
  area: string;
  images: { url: string; alt: string }[];
}

export const projects: Project[] = [
  {
    slug: 'villa-in-athens',
    name: 'Villa in Athens',
    location: 'Athens, Greece',
    marblesUsed: ['Thassos', 'Volakas'],
    area: '1,850 m² interiors & terraces',
    description:
      'A hillside villa overlooking the Aegean where book-matched Thassos floors and Volakas feature walls create a light-filled sanctuary.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1400&q=80',
        alt: 'Modern Greek villa interior finished in bright white marble'
      }
    ]
  },
  {
    slug: 'dubai-hotel',
    name: 'Dubai Hotel Flagship',
    location: 'Dubai, UAE',
    marblesUsed: ['Crema Marfil', 'Nero Marquina'],
    area: '28,000 m² public areas',
    description:
      'A five-star tower featuring Crema Marfil lobby floors with Nero Marquina reception desks and lift portals for sharp contrast.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=1400&q=80',
        alt: 'Grand hotel lobby with beige marble flooring and dramatic lighting'
      }
    ]
  },
  {
    slug: 'santorini-resort',
    name: 'Santorini Resort & Spa',
    location: 'Santorini, Greece',
    marblesUsed: ['Statuario'],
    area: '120 guestrooms + spa',
    description:
      'Cycladic minimalist suites wrapped in Statuario, including infinity pool decks, spa corridors, and signature restaurants.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80',
        alt: 'Santorini resort terrace with white marble and sea views'
      }
    ]
  },
  {
    slug: 'ludhiana-villa',
    name: 'Ludhiana Private Villa',
    location: 'Ludhiana, India',
    marblesUsed: ['Makrana White'],
    area: '2,400 m² courtyard mansion',
    description:
      'Hand-carved jalis, domes, and mirror-polished floors carved in Makrana White for a contemporary take on Punjabi palatial living.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80',
        alt: 'Indian luxury residence with carved marble arches'
      }
    ]
  },
  {
    slug: 'commercial-tower-hamburg',
    name: 'Commercial Tower Lobby',
    location: 'Hamburg, Germany',
    marblesUsed: ['Pietra Grey', 'Carrara'],
    area: '7,600 m² corporate interiors',
    description:
      'Pietra Grey flooring with Carrara-clad cores deliver a monochrome corporate identity while keeping acoustics soft.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1400&q=80',
        alt: 'Corporate lobby featuring grey marble and glass'
      }
    ]
  },
  {
    slug: 'athens-riviera-spa',
    name: 'Athens Riviera Wellness',
    location: 'Athens, Greece',
    marblesUsed: ['Volakas', 'Rainforest Green'],
    area: '4,500 m² wellness center',
    description:
      'Volakas welcome lounges transition into Rainforest Green hammams inspired by Aegean forests, all fabricated in our Thessaloniki workshop.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1400&q=80',
        alt: 'Spa reception with statement marble and natural light'
      }
    ]
  },
  {
    slug: 'athens-villa-annex',
    name: 'Villa Annex in Athens',
    location: 'Athens, Greece',
    marblesUsed: ['Thassos', 'Arna White'],
    area: '950 m² guest wing',
    description:
      'A guest pavilion with backlit Thassos staircases and Arna White bathrooms, staged from our EU warehouse for rapid installation.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=80',
        alt: 'Minimalist residence with white marble staircase'
      }
    ]
  }
];
