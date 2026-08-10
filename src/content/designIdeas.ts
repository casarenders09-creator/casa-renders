export type DesignIdeaCategory = {
  id: string;
  title: string;
  image: string;
  alt: string;
  note: string;
};

export const designIdeaCategories: DesignIdeaCategory[] = [
  {
    id: "living-room",
    title: "Living Room",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=88",
    alt: "Contemporary living room design inspiration",
    note: "Light, seating and material balance",
  },
  {
    id: "modular-kitchen",
    title: "Kitchen (Modular)",
    image:
      "https://images.unsplash.com/photo-1772567732996-bc693c4a016c?auto=format&fit=crop&fm=jpg&q=78&w=1800",
    alt: "Modern modular kitchen design inspiration",
    note: "Storage, workflow and finish planning",
  },
  {
    id: "bathroom",
    title: "Bathroom / Powder Room",
    image: "/images/references/bathroom.webp",
    alt: "Bathroom and powder room design inspiration",
    note: "Stone, lighting and wet-area detailing",
  },
  {
    id: "wardrobe",
    title: "Wardrobe & Storage",
    image: "/images/references/wardrobe.webp",
    alt: "Wardrobe and storage design inspiration",
    note: "Integrated storage without visual clutter",
  },
  {
    id: "office",
    title: "Office",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=88",
    alt: "Contemporary office interior design inspiration",
    note: "Focus, collaboration and brand expression",
  },
  {
    id: "cafes-restaurants",
    title: "Cafés / Restaurants",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1800&q=88",
    alt: "Cafe and restaurant interior inspiration",
    note: "Atmosphere, seating and service flow",
  },
  {
    id: "full-home",
    title: "Full Home Interiors",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1900&q=88",
    alt: "Full home interior design inspiration",
    note: "One coherent language across the home",
  },
];

export const designIdeasDisclaimer =
  "The imagery in this library is presented as design inspiration and visual direction, not as a claim of completed Casa Renders projects. It will be replaced with approved project photography as the portfolio grows.";
