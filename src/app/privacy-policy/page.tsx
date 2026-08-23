import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the Casa Renders website.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content" className="bg-surface pt-28 pb-20">
      <Container className="max-w-4xl">
        <p className="text-eyebrow">Legal</p>
        <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-primary">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-secondary">Last updated: July 2026</p>

        <div className="prose-custom mt-10 space-y-6 text-sm text-secondary">
          <p>
            This policy explains how {siteConfig.name} may receive and use information shared
            through this website, email, telephone or WhatsApp.
          </p>

          <section>
            <h2 className="font-serif text-2xl text-deep-brown">Information we receive</h2>
            <p className="mt-3">
              We may receive your name, phone number, email address, company name, project
              location, approximate area, service preferences and any project details you choose
              to provide.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-deep-brown">How information is used</h2>
            <p className="mt-3">
              Information is used to respond to enquiries, understand project scope, prepare
              relevant recommendations or quotations and communicate about Casa Renders services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-deep-brown">Sharing and retention</h2>
            <p className="mt-3">
              We do not sell enquiry information. Details may be shared with service providers
              only where reasonably necessary to operate the website or respond to your request.
              Information should be retained only for as long as it remains relevant to the
              enquiry, engagement or applicable legal requirements.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-deep-brown">External services</h2>
            <p className="mt-3">
              The website may use third-party services such as WhatsApp, email, Google Maps,
              YouTube or social platforms. Their own privacy policies apply when you use those
              services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-deep-brown">Your choices</h2>
            <p className="mt-3">
              You may ask us to correct or remove information you previously submitted, subject to
              legitimate business and legal record-keeping requirements.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-deep-brown">Contact</h2>
            <p className="mt-3">
              For privacy questions, contact {siteConfig.contact.email} or call +91 {siteConfig.contact.primaryPhone}.
            </p>
          </section>
        </div>

        <Button href="/" variant="outline" className="mt-10">
          Back to Home
        </Button>
        <p className="mt-6 text-xs text-charcoal/60">
          This policy template should be reviewed by qualified legal counsel before public launch.
        </p>
      </Container>
    </main>
  );
}
