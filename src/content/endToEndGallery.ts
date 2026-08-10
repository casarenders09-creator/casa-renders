export type EndToEndCategory = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  cover: string;
  images: string[];
};

const gallery = (id: string) =>
  Array.from({ length: 10 }, (_, index) =>
    `/images/gallery/${id}/${String(index + 1).padStart(2, "0")}.webp`,
  );

export const endToEndCategories: EndToEndCategory[] = [
  { id: "living-room", title: "Living Room", shortTitle: "Living", description: "Seating, lighting, storage and material ideas for everyday gathering spaces.", cover: "/images/gallery/living-room/01.webp", images: gallery("living-room") },
  { id: "modular-kitchen", title: "Modular Kitchen", shortTitle: "Kitchen", description: "Efficient work triangles, storage systems, finishes and island configurations.", cover: "/images/gallery/modular-kitchen/01.webp", images: gallery("modular-kitchen") },
  { id: "bathroom", title: "Bathroom", shortTitle: "Bathroom", description: "Wet-area planning, vanity design, stone, lighting and spa-inspired detailing.", cover: "/images/gallery/bathroom/01.webp", images: gallery("bathroom") },
  { id: "bedroom", title: "Bedroom", shortTitle: "Bedroom", description: "Calm colour palettes, layered lighting, headboards, storage and soft furnishings.", cover: "/images/gallery/bedroom/01.webp", images: gallery("bedroom") },
  { id: "wardrobe-storage", title: "Wardrobe & Storage", shortTitle: "Storage", description: "Integrated wardrobes, display units and practical storage without visual clutter.", cover: "/images/gallery/wardrobe-storage/01.webp", images: gallery("wardrobe-storage") },
  { id: "cafe-restaurant", title: "Café & Restaurant", shortTitle: "Hospitality", description: "Atmosphere, seating mix, guest flow and service-ready hospitality environments.", cover: "/images/gallery/cafe-restaurant/01.webp", images: gallery("cafe-restaurant") },
  { id: "terrace", title: "Terrace", shortTitle: "Terrace", description: "Outdoor seating, shade, planting, lighting and all-weather material direction.", cover: "/images/gallery/terrace/01.webp", images: gallery("terrace") },
  { id: "puja-mandir", title: "Puja / Mandir", shortTitle: "Mandir", description: "Compact and full-height mandir concepts balancing devotion, storage and craft.", cover: "/images/gallery/puja-mandir/01.webp", images: gallery("puja-mandir") },
];
