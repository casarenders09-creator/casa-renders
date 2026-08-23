export type ProcessStep = {
  step: number;
  title: string;
  description: string;
  detail: string;
  image: string;
};

const image = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=86`;

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Meet your designer",
    description: "Share the space, goals, timeline and budget expectations.",
    detail: "The first conversation identifies priorities, project constraints and the right level of support.",
    image: image("photo-1497366811353-6870744d04b2"),
  },
  {
    step: 2,
    title: "Site and requirement study",
    description: "We review measurements, drawings, site conditions and practical needs.",
    detail: "A clear starting point reduces late-stage changes and creates a reliable design brief.",
    image: image("photo-1600585154340-be6161a56a0c"),
  },
  {
    step: 3,
    title: "Space planning",
    description: "Layouts, circulation, storage and furniture relationships are resolved.",
    detail: "Every decision is tested against how the space will actually be used day to day.",
    image: image("photo-1600210492486-724fe5c67fb0"),
  },
  {
    step: 4,
    title: "Design and visualisation",
    description: "Materials, lighting, colours and key 3D views bring the direction to life.",
    detail: "Visual clarity helps approve the space before execution begins.",
    image: image("photo-1616486338812-3dadae4b4ace"),
  },
  {
    step: 5,
    title: "Technical coordination",
    description: "Drawings, structural inputs and execution details are aligned.",
    detail: "Interior ambition and technical reality are coordinated within one project conversation.",
    image: image("photo-1600607687939-ce8a6c25118c"),
  },
  {
    step: 6,
    title: "Material and budget freeze",
    description: "The selected scope, finishes, quotation and project plan are confirmed.",
    detail: "A transparent freeze point protects the budget and reduces hidden surprises.",
    image: image("photo-1615529182904-14819c35db37"),
  },
  {
    step: 7,
    title: "Execution and quality review",
    description: "Site work, vendors and design compliance are coordinated as per package.",
    detail: "Progress is reviewed against the approved design and agreed deliverables.",
    image: image("photo-1600566753190-17f0baa2a6c3"),
  },
  {
    step: 8,
    title: "Move-in and handover",
    description: "Final reviews, styling guidance and project closure bring the space together.",
    detail: "The journey ends with a functional, finished environment ready to be lived in.",
    image: image("photo-1618221195710-dd6b41faaea6"),
  },
];
