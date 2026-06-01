/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceType, BookingPackage, GalleryItem, Testimonial, FAQItem } from './types';

export const SERVICES_DATA = [
  {
    type: ServiceType.MOVING,
    title: 'Moving Services',
    shortDesc: 'Comprehensive residential and commercial moves with careful packing and safe transport.',
    fullDesc: 'Whether you are moving across town or relocating your business offices, our skilled team ensures a stress-free transition. We handle everything from protective wrapping and packing of robust items to safe carriage and meticulous placement at your new destination.',
    features: [
      'Full-service packing and unpacking',
      'Shrink wrap and blanket padding for all furniture',
      'Strap security systems and professional loaders',
      'Local and long-distance moving solutions',
      'Express apartment and estate relocations'
    ],
    icon: 'Truck',
    image: '/images/KQ truck image.png'
  },
  {
    type: ServiceType.ASSEMBLY,
    title: 'Furniture Assembly',
    shortDesc: 'Expert assembly and disassembly of desks, beds, tables, and complex furniture systems.',
    fullDesc: 'Disassembling complex multi-piece furniture before a move can be baffling. Let K&Q do the heavy lifting! We bring professional tools to rapidly assemble or disassemble modular shelving, Ikea beds, fitness equipment, or executive desks, saving you time and headaches.',
    features: [
      'IKEA and other major brand assembly experts',
      'Bed frame, dresser, and wardrobe construction',
      'Office cubicle and commercial desk systems setup',
      'Gym equipment and gaming chair assembly',
      'Careful hardware mapping and zero damage'
    ],
    icon: 'Wrench',
    image: '/images/funiture-assembly.png'
  },
  {
    type: ServiceType.HEAVY_ITEM,
    title: 'Large & Heavy Item Removal',
    shortDesc: 'Safe, specialized transport for bulky objects like pianos, safes, hot tubs, or appliances.',
    fullDesc: 'Some things are just too massive for normal transport. Our trained specialists use heavy-duty dollies, sliders, ramping rigs, and lifting harnesses to relocate bulky items such as safes, piano uprights, high-end refrigeration, and hot tubs without scratch or structural risk.',
    features: [
      'Piano moving specialists',
      'Safe, vault, and appliance extraction',
      'Stairwell navigation harnesses and protection padding',
      'Specialized hydraulic lift gate equipment',
      'Rigging and multi-worker safety procedures'
    ],
    icon: 'ShieldAlert',
    image: '/images/IMG-20260527-WA0045.jpg'
  },
  {
    type: ServiceType.JUNK_REMOVAL,
    title: 'Junk Removal & Hauling',
    shortDesc: 'Fast decluttering and hauling for post-renovations, yard waste, and general estate cleanup.',
    fullDesc: "Get rid of unwanted junk with K&Q's rapid hauling service! We clear out basements, strip yard debris, dispose of old appliances, and haul commercial garbage. We prioritize eco-friendly recycling and sorting, making disposal simple and responsible.",
    features: [
      'Garage, basement, and attic cleanouts',
      'Yard waste and post-renovation debris clearing',
      'Eco-friendly sorting, donating, and recycling',
      'Old appliance and mattress disposal',
      'Same-day clean up and sweep'
    ],
    icon: 'Trash2',
    image: '/images/trash-removal.png'
  },
  {
    type: ServiceType.LABOUR,
    title: 'Labour & Helpers Only',
    shortDesc: 'Need a hand? Hire our heavy-lifting helpers to load your own truck, container, or move items around.',
    fullDesc: 'Have your own rental truck or container, but need strong backs and reliable helpers? Hire our professional, energetic team to help you load, unload, stack, or simply rearrange heavy objects inside your home or storage unit safely and quickly.',
    features: [
      'Loading and unloading of trailers, U-Hauls, and PODS',
      'In-home furniture rearrangement services',
      'Event setup, heavy stacking, and storage optimization',
      'Professional loaders focused on space efficiency',
      'Flexible hourly rates and friendly attitude'
    ],
    icon: 'Users',
    image: '/images/IMG-20260527-WA0047.jpg'
  }
];

export const PACKAGES_DATA: BookingPackage[] = [
  {
    id: 'pkg-1',
    title: 'A truck, 2 guys, 3hrs Minimum',
    details: [
      '1hr',
      '$149 | 2 guys'
    ],
    durationText: 'Rate per hour (min 3 hrs)',
    priceDisplay: '$149 / hr',
    basePrice: 149,
    crewSize: 2,
    hasTruck: true,
    minHours: 3,
    image: '/images/kg_hero_truck_1779963213511.png'
  },
  {
    id: 'pkg-2',
    title: 'A truck, 3 guys, 3hrs Min',
    details: [
      '1hr',
      '$199/hr | 3 guys'
    ],
    durationText: 'Rate per hour (min 3 hrs)',
    priceDisplay: '$199 / hr',
    basePrice: 199,
    crewSize: 3,
    hasTruck: true,
    minHours: 3,
    image: '/images/Moving Items.png'
  },
  {
    id: 'pkg-3',
    title: 'A truck, 4 guys, 3hrs Min',
    details: [
      '1hr',
      '$299 | 4 guys'
    ],
    durationText: 'Rate per hour (min 3 hrs)',
    priceDisplay: '$299 / hr',
    basePrice: 299,
    crewSize: 4,
    hasTruck: true,
    minHours: 3,
    image: '/images/Moving Items 2.png'
  },
  {
    id: 'pkg-4',
    title: 'Labour / helpers',
    details: [
      '1hr',
      '$105 | 2 helpers'
    ],
    durationText: 'Rate per hour',
    priceDisplay: '$105 / hr',
    basePrice: 105,
    crewSize: 2,
    hasTruck: false,
    minHours: 2,
    image: '/images/Moving items 3.png'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Marcus Henderson',
    location: 'Downtown Residence',
    rating: 5,
    text: 'K&Q Moving made our transition from a third-floor apartment entirely smooth. They wrapped all of our dark oak dresser corners securely and completed the entire move under estimated hours. Highly recommended!',
    service: 'Moving Services (Package 2)',
    date: '2-week ago'
  },
  {
    id: 't2',
    name: 'Sarah Lindqvist',
    location: 'Suburban Villa',
    rating: 5,
    text: 'Extremely polite, careful, and fast. I hired them for junk hauling and the 2 helpers did not stop until my entire garage was swept clean and empty. The price was transparent with absolutely no hidden fees!',
    service: 'Junk Removal & Disposal',
    date: '1-month ago'
  },
  {
    id: 't3',
    name: 'Robert Carter',
    location: 'Westside Business District',
    rating: 5,
    text: 'Our company relocated our technical test lab. K&Q provided 4 guys and the heavy truck (Package 3). They assembled the standing desk arrays seamlessly in half a day. Absolute lifesavers!',
    service: 'Office Relocation & Assembly',
    date: '3-weeks ago'
  },
  {
    id: 't4',
    name: 'Delilah Vance',
    location: 'East Side Loft',
    rating: 5,
    text: 'Outstanding service! Standard 2-Man Pack took care of our heavy upright piano down twelve stairs without a single scratch. They are incredibly strong and know exact leverage technique.',
    service: 'Heavy Item Removal (Package 1)',
    date: 'Yesterday'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g1',
    imageUrl: '/images/kg_hero_truck_1779963213511.png',
    category: 'moving',
    title: 'K&Q Moving Truck',
    description: 'Our fully equipped 26-foot moving truck ready for action with ramps, pads, and hand trucks.'
  },
  {
    id: 'g2',
    imageUrl: '/images/funiture-assembly.png',
    category: 'assembly',
    title: 'Furniture Setup',
    description: 'Detailed assembly of custom modular storage drawers and master bed frames in a residential space.'
  },
  {
    id: 'g3',
    imageUrl: '/images/junk removal.jpg',
    category: 'hauling',
    title: 'Eco Junk Removal',
    description: 'Responsible sorting and clearance of bulky items and attic storage elements.'
  },
  {
    id: 'g4',
    imageUrl: '/images/IMG-20260527-WA0045.jpg',
    category: 'moving',
    title: 'Heavy Item Relocation',
    description: 'Specialized handling of large, heavy items using professional rigging and lifting equipment.'
  },
  {
    id: 'g5',
    imageUrl: '/images/IMG-20260527-WA0047.jpg',
    category: 'moving',
    title: 'Professional Labour Crew',
    description: 'Our experienced helpers ready to load, unload, or rearrange on your schedule.'
  },
  {
    id: 'g6',
    imageUrl: '/images/IMG-20260527-WA0052.jpg',
    category: 'moving',
    title: 'Residential Move',
    description: 'Full residential relocation handled with care. Wrapping, loading, and placement at the new home.'
  },
  {
    id: 'g7',
    imageUrl: '/images/IMG-20260527-WA0060.jpg',
    category: 'packing',
    title: 'Packing & Wrapping',
    description: 'Items secured with shrink-wrap and moving blankets before transit to prevent any damage.'
  },
  {
    id: 'g8',
    imageUrl: '/images/IMG-20260527-WA00601.jpg',
    category: 'hauling',
    title: 'Haul & Cleanout',
    description: 'Full property cleanout. Garage, basement, and yard debris efficiently cleared and hauled away.'
  },
  {
    id: 'g9',
    imageUrl: '/images/IMG-20260527-WA0061.jpg',
    category: 'moving',
    title: 'Truck Loading',
    description: 'Expert space optimization and secure strapping inside our truck for damage-free transit.'
  },
  {
    id: 'g10',
    imageUrl: '/images/Moving items 4.png',
    category: 'assembly',
    title: 'On-Site Assembly',
    description: 'Skilled assembly of furniture systems, bed frames, and office equipment at the destination.'
  },
  {
    id: 'g11',
    imageUrl: '/images/IMG-20260527-WA0065.jpg',
    category: 'hauling',
    title: 'Junk & Debris Removal',
    description: 'Fast, eco-conscious disposal of unwanted items including old appliances, furniture, and renovation waste.'
  },
  {
    id: 'g12',
    imageUrl: '/images/IMG-20260527-WA0067.jpg',
    category: 'moving',
    title: 'Move Complete',
    description: 'Job done right. Items placed exactly as requested, home left clean and ready to settle into.'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'Is there a minimum booking hours requirement?',
    answer: 'Yes, Packages 1, 2, and 3 have a 3-hour minimum booking limit to ensure truck and staff operations remain viable and cover transport costs. Our Labour-only package (Package 4) has a 2-hour minimum.'
  },
  {
    question: 'Are there any hidden fees or travel surcharges?',
    answer: 'Absolutely not. K&Q Moving & Hauling prides itself on complete price transparency. Your hourly rate covers standard local fuel, cargo coverage, assembly tools, packing tape, and blankets. Any unique toll roads or long-distance travel fees are calculated and discussed upfront.'
  },
  {
    question: 'How do you handle fragile or highly valuable items?',
    answer: 'We treat your precious assets with the utmost respect. We use professional shrink-wrap, double-layered bubble wrap, and extra heavy-duty moving blankets. In our truck, items are tightly strapped down and secured with industrial tension belts.'
  },
  {
    question: 'What if bad weather occurs on my moving day?',
    answer: 'We move rain or shine! Our trucks are fully enclosed, weather-proof, and clean. We use floor runners, protective entrance plastics, and high-strength plastic wrapping for outdoor crossings to guarantee your home and belongings remain safe and dry.'
  },
  {
    question: 'Can I cancel or reschedule my booking?',
    answer: 'Yes, of course. You can cancel or change your booked date free of charge up to 48 hours prior to your scheduled move. Later adjustments might prompt a small rescheduling fee.'
  }
];
