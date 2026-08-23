import { publicAsset } from "@/lib/publicAsset";

export const siteConfig = {
  name: "Casa Renders",
  tagline: "Design for Better Living",
  description:
    "Casa Renders is an interior design consultancy offering integrated design, visualization, project coordination and structural-engineering support for residential, commercial and hospitality projects.",
  url: "https://www.casarenders.com",

  contact: {
    primaryPhone: "9319678122",
    secondaryPhone: "9319476122",
    whatsapp: "9319678122",
    // TODO: Client must confirm the exact email address before production launch. Earlier documents contained inconsistent spellings.
    email: "casarenders09@gmail.com",
    businessHours: "10:00 AM to 7:00 PM",
    address: {
      line1: "136 GF, Vinoba Puri, Lajpat Nagar 2",
      city: "New Delhi",
      state: "Delhi",
      country: "India",
      postalCode: "110024",
      // TODO: Confirm whether the office is GF or LGF before production launch.
      formatted:
        "136 GF, Vinoba Puri, Lajpat Nagar 2, New Delhi, Delhi, India - 110024",
    },
  },

  social: {
    youtube: "https://www.youtube.com/@casarenders",
    instagram: "https://www.instagram.com/casarenders",
    facebook: "https://www.facebook.com/casarenders",
    website: "https://www.casarenders.com",
  },

  /** Google Maps embed URL for the contact section map */
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7218.136177469905!2d77.2440753880623!3d28.565955117840915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b0f4a0db4f%3A0x928c5a0e05e9a815!2sVinobapuri!5e1!3m2!1sen!2sin!4v1784718371784!5m2!1sen!2sin",

  /** Add YouTube video IDs when client provides them — e.g. ["abc123", "def456"] */
  youtubeVideoIds: [] as string[],

  /** Legacy flag — work experience logos are always shown in ProfessionalExperienceSection */
  showProfessionalExperienceNames: true,

  /** Set to true only after project count is independently verified */
  showProjectCount: false,
  projectCount: 100,

  /** Set to true when public/downloads/casa-renders-company-profile.pdf is added */
  companyProfileAvailable: false,
  companyProfilePath: publicAsset("/downloads/casa-renders-company-profile.pdf"),

  hero: {
    videoMp4: publicAsset("/videos/interior-hero.mp4"),
    videoWebm: publicAsset("/videos/interior-hero.webm"),
    posterPath: publicAsset("/images/interior-hero-poster.webp"),
    fallbackPosterPath: publicAsset("/images/hero/hero-placeholder.svg"),
    scrollHeightVh: 165,
  },

  logo: {
    default: publicAsset("/images/logo/casa-renders-logo.png"),
    light: publicAsset("/images/logo/casa-renders-logo.png"),
    width: 96,
    height: 96,
    // TODO: Replace with a transparent-background PNG/SVG for cleaner use on dark footer and hero.
  },

  form: {
    /** Primary: whatsapp | mailto | provider (Formspree/Web3Forms/custom API) */
    submissionMode: "whatsapp" as "whatsapp" | "mailto" | "provider",
    providerEndpoint: "",
    consentText:
      "I agree to be contacted by Casa Renders regarding my enquiry. I understand my information will be used only to respond to this request.",
  },

  seo: {
    title: "Casa Renders | Interior Design and Structural Engineering Consultancy",
    description:
      "Casa Renders provides interior design consultancy, 3D visualization, space planning, project coordination and structural-engineering support for residential, commercial and hospitality projects.",
  },
} as const;

export type SiteConfig = typeof siteConfig;

export function getPhoneHref(phone: string): string {
  return `tel:+91${phone}`;
}

export function getWhatsAppHref(phone: string, message?: string): string {
  const base = `https://wa.me/91${phone}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}

export function getEmailHref(email: string, subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return query ? `mailto:${email}?${query}` : `mailto:${email}`;
}

export function getMapsSearchUrl(address: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export function formatPhoneDisplay(phone: string): string {
  return `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`;
}
