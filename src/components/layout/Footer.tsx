import Link from "next/link";
import { footerQuickLinks, footerServiceLinks } from "@/content/navigation";
import { siteConfig, formatPhoneDisplay, getPhoneHref } from "@/config/site";
import { leadership } from "@/content/leadership";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-manifesto">
          <p className="section-eyebrow">Casa Renders · New Delhi</p>
          <h2>
            Beautifully considered.
            <br />
            Technically <em>resolved.</em>
          </h2>
          <a href="#quote" className="footer-project-link">
            Begin your project <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="footer-divider" />

        <div className="footer-grid">
          <div className="footer-brand">
            <Logo variant="light" />
            <p>{siteConfig.description}</p>
          </div>

          <div>
            <h3>Explore</h3>
            <ul>
              {footerQuickLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Services</h3>
            <ul>
              {footerServiceLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Leadership</h3>
            <ul className="footer-leadership">
              {leadership.map((person) => (
                <li key={person.id}>
                  <strong>{person.name}</strong>
                  <span>{person.designation}</span>
                  <a href={getPhoneHref(person.phone)}>{formatPhoneDisplay(person.phone)}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Studio</h3>
            <address>{siteConfig.contact.address.formatted}</address>
            <a href={getPhoneHref(siteConfig.contact.primaryPhone)}>{formatPhoneDisplay(siteConfig.contact.primaryPhone)}</a>
            <a href={getPhoneHref(siteConfig.contact.secondaryPhone)}>{formatPhoneDisplay(siteConfig.contact.secondaryPhone)}</a>
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
            <span>{siteConfig.contact.businessHours}</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <div>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-and-conditions">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
