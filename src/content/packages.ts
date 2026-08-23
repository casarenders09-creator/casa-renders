export type PackageItem = {
  id: string;
  name: string;
  description: string;
  inclusions: string[];
  deliverables?: string[];
  bestFor?: string[];
  disclaimer?: string;
};

export const packages: PackageItem[] = [
  {
    id: "design-consultation",
    name: "Design Consultation",
    description:
      "For homeowners and businesses looking for expert guidance before beginning a project.",
    inclusions: [
      "Online or in-person initial consultation",
      "Space-planning advice",
      "Design-concept discussion",
      "Colour-palette recommendations",
      "Material and finish suggestions",
      "Furniture-layout guidance",
      "Lighting recommendations",
      "Preliminary budget planning",
      "Design-feasibility review",
      "Vastu consultancy guidance",
    ],
    bestFor: [
      "Homeowners planning renovation",
      "First-time home buyers",
      "Clients seeking professional design direction",
    ],
  },
  {
    id: "complete-design",
    name: "Complete Design Package",
    description:
      "A comprehensive design package from concept through photorealistic visualization.",
    inclusions: [
      "Everything in Design Consultation",
      "Concept development",
      "Mood boards",
      "Space planning",
      "2D furniture layout",
      "Electrical layout",
      "Lighting layout",
      "Ceiling design",
      "Flooring design",
      "Colour and material selection",
      "Photorealistic 3D renders",
      "Furniture recommendations",
      "Agreed revision rounds",
    ],
    deliverables: [
      "Design presentation",
      "2D drawings",
      "3D renders",
      "Material palette",
      "Furniture and décor suggestions",
    ],
  },
  {
    id: "design-site-coordination",
    name: "Design and Site Coordination",
    description:
      "Complete design with on-site coordination and execution support.",
    inclusions: [
      "Everything in Complete Design Package",
      "Planned site visits",
      "Contractor coordination",
      "Carpenter, electrician and plumber coordination",
      "Vendor design clarification",
      "Material-approval support",
      "Progress monitoring",
      "Quality checks",
      "Design-compliance reviews",
      "Issue-resolution support",
      "Final styling guidance",
    ],
  },
  {
    id: "design-vendor-partnership",
    name: "Design and Vendor Partnership",
    description:
      "Full design and coordination with access to trusted vendor partners.",
    inclusions: [
      "Everything in Design and Site Coordination",
      "Access to trusted vendor partners",
      "Material and finish sourcing support",
      "Furniture-supplier recommendations",
      "Lighting-supplier recommendations",
      "Modular-kitchen and wardrobe referrals",
      "Décor and furnishing recommendations",
      "Selected vendor coordination",
      "Budget-optimisation guidance",
      "Cost-saving recommendations",
      "End-to-end design support",
    ],
  },
  {
    id: "structural-engineering",
    name: "Structural Engineering Consultancy",
    description:
      "Project-specific structural engineering support coordinated with design and execution teams.",
    inclusions: [
      "Initial structural consultation",
      "Review of architectural requirements",
      "RCC or steel-structure consultation",
      "Structural planning and analysis",
      "Foundation-design support",
      "Structural drawings and detailing",
      "Coordination with architects and contractors",
      "Site inspection when included in the project quotation",
      "Structural clarifications during execution",
      "Project-specific engineering recommendations",
    ],
    disclaimer:
      "Structural scope and deliverables are finalised according to project requirements, site conditions and the agreed professional engagement.",
  },
];
