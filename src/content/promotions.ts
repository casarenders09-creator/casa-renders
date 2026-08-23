import { publicAsset } from "@/lib/publicAsset";

export type Promotion = {
  id: string;
  title: string;
  price: string;
  qualifier: string;
  image: string;
  requiredService: string;
};

const image = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=86`;

export const promotions: Promotion[] = [
  { id: "2bhk", title: "2 BHK Interiors", price: "₹3.25 L", qualifier: "Starting at", image: image("photo-1600210492486-724fe5c67fb0"), requiredService: "Interior Design" },
  { id: "3bhk", title: "3 BHK Interiors", price: "₹4.25 L", qualifier: "Starting at", image: image("photo-1616486338812-3dadae4b4ace"), requiredService: "Interior Design" },
  { id: "4bhk", title: "4 BHK Interiors", price: "₹4.80 L", qualifier: "Starting at", image: image("photo-1618221195710-dd6b41faaea6"), requiredService: "Interior Design" },
  { id: "kitchen", title: "Modular Kitchen", price: "₹1.25 L", qualifier: "Starting at", image: image("photo-1556912167-f556f1f39fdf"), requiredService: "Interior Design" },
  { id: "bedroom", title: "Bedroom", price: "₹1.30 L", qualifier: "Starting at", image: publicAsset("/images/references/bedroom.webp"), requiredService: "Interior Design" },
  { id: "living", title: "Living Room", price: "₹1.20 L", qualifier: "Starting at", image: image("photo-1600607687920-4e2a09cf159d"), requiredService: "Interior Design" },
  { id: "wardrobe", title: "Wardrobe", price: "₹25 K", qualifier: "Starting at", image: publicAsset("/images/references/wardrobe.webp"), requiredService: "Interior Design" },
  { id: "cafe", title: "Café / Restaurant", price: "₹3 L", qualifier: "Starting at", image: image("photo-1552566626-52f8b828add9"), requiredService: "Interior Design" },
  { id: "mandir", title: "Puja / Mandir", price: "₹15 K", qualifier: "Starting at", image: publicAsset("/images/references/mandir.webp"), requiredService: "Interior Design" },
  { id: "structural", title: "Structural Design Consultancy", price: "₹50 K", qualifier: "Starting at", image: image("photo-1600585154340-be6161a56a0c"), requiredService: "Structural Engineering" },
];

export const promotionDisclaimer =
  "Indicative starting prices only. Final pricing and delivery timelines depend on area, design scope, materials, site conditions, approvals and selected execution package.";
