import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for using the Casa Renders website.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <main id="main-content" className="bg-surface pt-28 pb-20">
      <Container className="max-w-4xl">
        <p className="text-eyebrow">Legal</p>
        <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-primary">
          Terms and Conditions
        </h1>
        <p className="mt-4 text-sm text-secondary">Last updated: July 2026</p>

        <div className="prose-custom mt-10 space-y-6 text-sm text-secondary">
          <p>
            These Terms and Conditions govern your use of the {siteConfig.name} website at{" "}
            {siteConfig.url}. By accessing this website, you agree to these terms.
          </p>

          <section>
            <h2 className="font-serif text-2xl text-deep-brown">Website information</h2>
            <p className="mt-3">
              Content on this website is provided for general information about our interior design,
              visualization and structural engineering consultancy services. It does not constitute
              a binding offer or professional advice without a separate agreed engagement.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-deep-brown">Enquiries and quotations</h2>
            <p className="mt-3">
              Submitting an enquiry or quote request does not automatically create a client
              relationship or project acceptance. Quotations, scope and timelines are subject to
              consultation, site assessment and written agreement.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-deep-brown">Project scope</h2>
            <p className="mt-3">
              All professional services are governed by a separate proposal, quotation or agreement
              defining deliverables, fees, responsibilities and applicable terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-deep-brown">Intellectual property</h2>
            <p className="mt-3">
              Website content, branding, layouts, text and visuals are owned by or licensed to{" "}
              {siteConfig.name} unless otherwise stated. Unauthorised copying or reuse is
              prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-deep-brown">Design inspiration disclaimer</h2>
            <p className="mt-3">
              Design idea visuals on this website are presented as inspiration unless expressly
              identified as completed Casa Renders work. They should not be interpreted as a
              guarantee of identical outcomes for your project.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-deep-brown">External links</h2>
            <p className="mt-3">
              This website may link to third-party platforms such as social media, maps or video
              services. We are not responsible for the content or policies of external websites.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-deep-brown">Limitation of liability</h2>
            <p className="mt-3">
              To the fullest extent permitted by law, {siteConfig.name} shall not be liable for
              any loss arising from reliance on website content, temporary unavailability of the
              site or use of external links.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-deep-brown">Changes</h2>
            <p className="mt-3">
              We may update website content and these terms from time to time. Continued use of the
              website after changes are posted constitutes acceptance of the revised terms.
            </p>
          </section>
        </div>

        <Button href="/" variant="outline" className="mt-10">
          Back to Home
        </Button>
        <p className="mt-6 text-xs text-charcoal/60">
          This template should be reviewed by qualified legal counsel before public launch.
        </p>
      </Container>
    </main>
  );
}
