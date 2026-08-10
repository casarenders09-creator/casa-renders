import { siteConfig, formatPhoneDisplay, getPhoneHref, getWhatsAppHref } from "@/config/site";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="contact-section section-blue">
      <Container>
        <div className="contact-section__header">
          <p className="section-eyebrow">Contact</p>
          <h2>
            Let&apos;s create a space
            <br />
            worth <em>remembering.</em>
          </h2>
        </div>

        <div className="contact-section__grid">
          <div className="contact-links">
            <a href={getWhatsAppHref(siteConfig.contact.whatsapp)} target="_blank" rel="noopener noreferrer">
              <span>WhatsApp</span><strong>{formatPhoneDisplay(siteConfig.contact.whatsapp)}</strong><b>↗</b>
            </a>
            <a href={getPhoneHref(siteConfig.contact.primaryPhone)}>
              <span>Call</span><strong>{formatPhoneDisplay(siteConfig.contact.primaryPhone)}</strong><b>↗</b>
            </a>
            <a href={`mailto:${siteConfig.contact.email}`}>
              <span>Email</span><strong>{siteConfig.contact.email}</strong><b>↗</b>
            </a>
            <div>
              <span>Studio</span>
              <strong>{siteConfig.contact.address.formatted}</strong>
              <small>{siteConfig.contact.businessHours}</small>
            </div>
          </div>

          <div className="contact-map">
            <iframe src={siteConfig.googleMapsEmbedUrl} title="Casa Renders office location" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            <div><span>New Delhi</span><p>Lajpat Nagar II</p></div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
