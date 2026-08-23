import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for contacting Casa Renders.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main id="main-content" className="bg-surface pt-28 pb-20">
      <Container className="max-w-3xl text-center">
        <p className="text-eyebrow">Enquiry Received</p>
        <h1 className="mt-3 font-serif text-4xl text-primary">Thank you for reaching out</h1>
        <p className="mt-6 text-base leading-relaxed text-secondary">
          Your project details have been prepared for {siteConfig.name}. Our team will review your
          enquiry and connect with you to discuss scope, timelines and the most suitable service
          package.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/">Back to Home</Button>
          <Button href="/#contact" variant="outline">
            Contact Details
          </Button>
        </div>
      </Container>
    </main>
  );
}
