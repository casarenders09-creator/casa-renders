import { SiteShell } from "@/components/layout/SiteShell";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { CinematicPolish } from "@/components/layout/CinematicPolish";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { EndToEndSection } from "@/components/sections/EndToEndSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProfessionalExperienceSection } from "@/components/sections/ProfessionalExperienceSection";
import { ServicePillars } from "@/components/sections/ServicePillars";
import { PromotionalPricingSection } from "@/components/sections/PromotionalPricingSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { DesignIdeasSection } from "@/components/sections/DesignIdeasSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { CasaRendersTVSection } from "@/components/sections/CasaRendersTVSection";
import { QuoteFormSection } from "@/components/sections/QuoteFormSection";

export default function HomePage() {
  return (
    <SiteShell>
      <CinematicPolish />
      <Header />
      <main id="main-content">
        <HeroSection />
        <TrustStrip />
        <EndToEndSection />
        <AboutSection />
        <ProfessionalExperienceSection />
        <ServicePillars />
        <PromotionalPricingSection />
        <IndustriesSection />
        <DesignIdeasSection />
        <HowItWorksSection />
        <PackagesSection />
        <CasaRendersTVSection />
        <QuoteFormSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </SiteShell>
  );
}
