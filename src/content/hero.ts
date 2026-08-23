export const heroCopy = {
  eyebrow: "Interior design · Structural engineering",
  heading: "Spaces with soul.\nStructures with certainty.",
  description:
    "Casa Renders unites refined interior design, photorealistic visualisation and structural expertise in one coordinated practice.",
  stages: [
    {
      id: "intro",
      index: "01",
      label: "Casa Renders",
      lines: ["Spaces with soul.", "Structures with certainty."],
      description:
        "Interior design, visualisation and structural expertise developed together from the first conversation.",
    },
    {
      id: "live",
      index: "02",
      label: "Interior design",
      lines: ["Designed around", "how you live."],
      description:
        "Layouts, light, materials and details shaped around how the space should feel and function every day.",
    },
    {
      id: "engineering",
      index: "03",
      label: "Structural intelligence",
      lines: ["Beauty backed", "by engineering."],
      description:
        "Technical understanding is considered early, reducing uncertainty and protecting design intent during execution.",
    },
    {
      id: "final",
      index: "04",
      label: "One coordinated journey",
      lines: ["From first sketch", "to final space."],
      description:
        "A clear path from concept and visualisation to technical coordination and project support.",
    },
  ],
  ctas: {
    explore: { label: "Explore design ideas", href: "#design-ideas" },
    start: { label: "Start your project", href: "#quote" },
  },
  credentials: [
    { value: "1988", label: "Family engineering legacy" },
    { value: "2018", label: "Active structural practice" },
    { value: "India", label: "Project support" },
  ],
} as const;
