import { servicePillars } from "@/content/services";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SafeImage } from "@/components/ui/SafeImage";

const pillarImages = [
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=88",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=88",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=88",
];

export function ServicePillars() {
  return (
    <AnimatedSection id="services" className="pillars-section section-mist">
      <Container>
        <div className="section-heading-grid">
          <div>
            <p className="section-eyebrow">Core expertise</p>
            <h2 className="display-heading">
              Three disciplines.
              <br />
              One <em>coherent outcome.</em>
            </h2>
          </div>
          <div className="section-heading-aside">
            <p>
              Creative interiors, technical structure and visual clarity are considered together—so fewer decisions are lost between concept and execution.
            </p>
          </div>
        </div>

        <div className="pillar-stories">
          {servicePillars.map((pillar, index) => (
            <article key={pillar.id} className="pillar-story">
              <div className="pillar-story__media">
                <SafeImage src={pillarImages[index]} alt="" loading="lazy" />
                <span>0{index + 1}</span>
              </div>
              <div className="pillar-story__copy">
                <p>Casa Renders discipline</p>
                <h3>{pillar.title}</h3>
                <strong>{pillar.description}</strong>
                <ul>
                  {pillar.highlights.slice(0, 6).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
