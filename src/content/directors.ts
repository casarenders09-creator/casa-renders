export type Director = {
  id: string;
  name: string;
  role: string;
  experience?: string;
  phone: string;
  bioPlaceholder: string;
};

export const directors: Director[] = [
  {
    id: "jai-sirsiya",
    name: "Jai Sirsiya",
    role: "Structural Engineer",
    experience: "Working in structural engineering since 2018",
    phone: "9319678122",
    bioPlaceholder:
      "Jai leads structural consultation and technical coordination, helping design intent remain practical, safe and aligned with site realities.",
  },
  {
    id: "vandana-bhojak",
    name: "Vandana Bhojak",
    role: "Interior Designer",
    phone: "9319476122",
    bioPlaceholder:
      "Vandana leads the interior-design direction across residential and commercial spaces, with attention to planning, materials, atmosphere and everyday use.",
  },
];
