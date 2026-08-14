import { publicAsset } from "@/lib/publicAsset";

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
    publicAsset(`/images/gallery/${id}/${String(index + 1).padStart(2, "0")}.webp`),
  );

export const endToEndCategories: EndToEndCategory[] = [
  { id: "living-room", title: "Living Room", shortTitle: "Living", description: "Seating, lighting, storage and material ideas for everyday gathering spaces.", cover: publicAsset("/images/gallery/living-room/01.webp"), images: gallery("living-room") },
  { id: "modular-kitchen", title: "Modular Kitchen", shortTitle: "Kitchen", description: "Efficient work triangles, storage systems, finishes and island configurations.", cover: publicAsset("/images/gallery/modular-kitchen/01.webp"), images: gallery("modular-kitchen") },
  { id: "bathroom", title: "Bathroom", shortTitle: "Bathroom", description: "Wet-area planning, vanity design, stone, lighting and spa-inspired detailing.", cover: publicAsset("/images/gallery/bathroom/01.webp"), images: gallery("bathroom") },
  { id: "bedroom", title: "Bedroom", shortTitle: "Bedroom", description: "Calm colour palettes, layered lighting, headboards, storage and soft furnishings.", cover: publicAsset("/images/gallery/bedroom/01.webp"), images: gallery("bedroom") },
  { id: "wardrobe-storage", title: "Wardrobe & Storage", shortTitle: "Storage", description: "Integrated wardrobes, display units and practical storage without visual clutter.", cover: publicAsset("/images/gallery/wardrobe-storage/01.webp"), images: gallery("wardrobe-storage") },
  { id: "cafe-restaurant", title: "Café & Restaurant", shortTitle: "Hospitality", description: "Atmosphere, seating mix, guest flow and service-ready hospitality environments.", cover: publicAsset("/images/gallery/cafe-restaurant/01.webp"), images: gallery("cafe-restaurant") },
  { id: "terrace", title: "Terrace", shortTitle: "Terrace", description: "Outdoor seating, shade, planting, lighting and all-weather material direction.", cover: publicAsset("/images/gallery/terrace/01.webp"), images: gallery("terrace") },
  { id: "puja-mandir", title: "Puja / Mandir", shortTitle: "Mandir", description: "Compact and full-height mandir concepts balancing devotion, storage and craft.", cover: publicAsset("/images/gallery/puja-mandir/01.webp"), images: gallery("puja-mandir") },
];
