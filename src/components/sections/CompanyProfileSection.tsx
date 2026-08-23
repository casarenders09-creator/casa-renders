import { siteConfig } from "@/config/site";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CompanyProfileSection() {
  if (!siteConfig.companyProfileAvailable) {
    return null;
  }

  return (
    <AnimatedSection className="bg-white">
      <Container>
        <div className="rounded-[24px] border border-subtle bg-surface p-8 text-center shadow-soft sm:p-12">
          <h2 className="font-serif text-3xl text-primary">Company Profile</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-secondary">
            Download our company profile to learn more about Casa Renders services, approach and
            project support capabilities.
          </p>
          <Button href={siteConfig.companyProfilePath} className="mt-6" target="_blank">
            Download Company Profile
          </Button>
        </div>
      </Container>
    </AnimatedSection>
  );
}
