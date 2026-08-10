import { siteConfig } from "@/config/site";

export function getLocalBusinessJsonLd() {
  const { contact, social, url, name, description } = siteConfig;

  return {
    "@type": ["LocalBusiness", "ProfessionalService", "InteriorDesigner"],
    name,
    description,
    url,
    telephone: [`+91${contact.primaryPhone}`, `+91${contact.secondaryPhone}`],
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.line1,
      addressLocality: contact.address.city,
      addressRegion: contact.address.state,
      postalCode: contact.address.postalCode,
      addressCountry: contact.address.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    sameAs: [social.youtube, social.instagram, social.facebook, social.website],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    priceRange: "$$",
  };
}

export function getWebsiteJsonLd() {
  return {
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.seo.description,
  };
}

export function getStructuredDataGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [getWebsiteJsonLd(), getLocalBusinessJsonLd()],
  };
}
