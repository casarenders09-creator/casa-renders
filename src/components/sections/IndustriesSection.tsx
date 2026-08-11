import { industries } from "@/content/industries";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function IndustriesSection() {
  return (
    <AnimatedSection className="industry-ticker">
      <div className="industry-ticker__intro">
        <span>Spaces we support</span>
        <p>Residential · Workplaces · Hospitality · Retail · Learning environments</p>
      </div>
      <div className="industry-mobile-list" aria-label="Industries and space types">
        {industries.map((industry, index) => (
          <article key={industry.id}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{industry.label}</strong>
          </article>
        ))}
      </div>
      <div className="industry-ticker__track industry-ticker__track--desktop" aria-label="Industries and space types">
        {[...industries, ...industries].map((industry, index) => (
          <span key={`${industry.id}-${index}`} aria-hidden={index >= industries.length}>
            {industry.label}<i>✦</i>
          </span>
        ))}
      </div>
    </AnimatedSection>
  );
}
