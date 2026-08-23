export type QuoteFormData = {
  fullName: string;
  phone: string;
  email: string;
  company: string;
  projectCategory: string;
  packagePreference: string;
  projectLocation: string;
  builtUpArea: string;
  requiredService: string;
  message: string;
  consent: boolean;
};

export type FormFieldError = {
  field: keyof QuoteFormData;
  message: string;
};

export const projectCategories = [
  "Bedroom",
  "Kitchen",
  "Wardrobe",
  "Full Home Interior",
  "Café or Restaurant",
  "Office",
  "Retail Store",
  "Showroom",
  "Clinic",
  "Salon",
  "Structural Engineering",
  "3D Rendering",
  "Renovation",
  "Other",
] as const;

export const packagePreferences = [
  "Design Consultation",
  "Complete Design Package",
  "Design and Site Coordination",
  "Design and Vendor Partnership",
  "Structural Engineering Consultancy",
  "Vastu Consultation",
  "Not sure yet",
] as const;

export const requiredServices = [
  "Interior Design",
  "Structural Engineering",
  "3D Rendering",
  "Space Planning",
  "Site Coordination",
  "Vendor Coordination",
  "Turnkey Support",
  "Consultation Only",
  "Vastu Consultancy",
  "Other",
] as const;
