export type EditorialVisual = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  objectPosition?: string;
};

export const heroScenes: EditorialVisual[] = [
  {
    id: "interior",
    title: "Spaces with soul.",
    subtitle: "Interiors shaped around how people live, gather and feel.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=88",
    alt: "Warm contemporary living room with refined natural materials",
    objectPosition: "center",
  },
  {
    id: "detail",
    title: "Ideas made visible.",
    subtitle: "Materials, light and spatial decisions resolved before execution.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2400&q=88",
    alt: "Contemporary interior detail with calm neutral finishes",
    objectPosition: "center",
  },
  {
    id: "structure",
    title: "Beauty backed by engineering.",
    subtitle: "Structural understanding protects the design from first sketch to site.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=88",
    alt: "Modern architectural residence with strong structural geometry",
    objectPosition: "center",
  },
];

export const selectedVisualStudies: EditorialVisual[] = [
  {
    id: "calm-residence",
    title: "The Calm Residence",
    subtitle: "Full-home interior direction",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=88",
    alt: "Warm full-home interior concept",
  },
  {
    id: "sculpted-living",
    title: "Sculpted Living",
    subtitle: "Living room visual study",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=88",
    alt: "Sculptural contemporary living room concept",
  },
  {
    id: "quiet-kitchen",
    title: "Quiet Luxury Kitchen",
    subtitle: "Modular kitchen direction",
    image:
      "https://images.unsplash.com/photo-1772567732996-bc693c4a016c?auto=format&fit=crop&fm=jpg&q=78&w=2200",
    alt: "Modern kitchen with marble island and dark timber cabinetry",
  },
  {
    id: "cafe-story",
    title: "The Neighbourhood Table",
    subtitle: "Café and restaurant concept",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1800&q=88",
    alt: "Warm contemporary cafe interior concept",
  },
  {
    id: "architectural-home",
    title: "Courtyard House",
    subtitle: "Architecture and structure study",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=88",
    alt: "Modern house exterior architecture concept",
  },
];

export const endToEndSolutions = [
  {
    id: "full-home",
    number: "01",
    title: "Full-home interiors",
    description: "A coordinated design language across living, dining, bedrooms and circulation.",
  },
  {
    id: "kitchen",
    number: "02",
    title: "Modular kitchens",
    description: "Efficient planning, storage logic, material selection and lighting direction.",
  },
  {
    id: "bathroom-storage",
    number: "03",
    title: "Bathrooms & storage",
    description: "Practical, refined wet areas, wardrobes and integrated storage systems.",
  },
  {
    id: "commercial",
    number: "04",
    title: "Commercial interiors",
    description: "Offices, cafés, restaurants and customer-facing spaces shaped around operations.",
  },
  {
    id: "terrace",
    number: "05",
    title: "Terrace design",
    description: "Outdoor living, shade, lighting, planting and material planning for usable terraces.",
  },
  {
    id: "balcony",
    number: "06",
    title: "Balcony design",
    description: "Compact outdoor spaces designed for comfort, greenery and everyday use.",
  },
  {
    id: "elevation",
    number: "07",
    title: "Apartment elevation",
    description: "Facade composition, material direction and architectural visualisation.",
  },
  {
    id: "flooring",
    number: "08",
    title: "Flooring design",
    description: "Patterns, transitions, materials and technical coordination across the space.",
  },
] as const;

export const estimateTracks = [
  {
    id: "home",
    eyebrow: "For homes",
    title: "Home interior estimate",
    description:
      "Share the property type, built-up area, rooms and expected level of finish. We will help define a realistic design scope.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=88",
  },
  {
    id: "cafe",
    eyebrow: "For cafés & restaurants",
    title: "Hospitality space estimate",
    description:
      "Tell us the seating capacity, format, location and operational needs so the design direction supports both experience and service flow.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=88",
  },
] as const;
