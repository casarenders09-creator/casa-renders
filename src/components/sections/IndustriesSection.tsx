import { industries } from "@/content/industries";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function IndustriesSection() {
  return (
    <AnimatedSection className="industry-ticker">
      <div className="industry-ticker__intro">
        <span>Spaces we support</span>
        <p>Residential · Workplaces · Hospitality · Retail · Learning environments</p>
      </div>
      <div className="industry-ticker__track" aria-label="Industries and space types">
        {[...industries, ...industries].map((industry, index) => (
          <span key={`${industry.id}-${index}`} aria-hidden={index >= industries.length}>
            {industry.label}<i>✦</i>
          </span>
        ))}
      </div>
    </AnimatedSection>
  );
}
