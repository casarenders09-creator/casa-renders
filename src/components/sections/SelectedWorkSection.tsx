import { selectedVisualStudies } from "@/content/visuals";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SafeImage } from "@/components/ui/SafeImage";

export function SelectedWorkSection() {
  return (
    <AnimatedSection id="work" className="work-showcase section-paper">
      <Container>
        <div className="section-heading-grid">
          <div>
            <p className="section-eyebrow">Selected visual studies</p>
            <h2 className="display-heading">
              Spaces imagined with
              <br />
              <em>clarity and character.</em>
            </h2>
          </div>
          <div className="section-heading-aside">
            <p>
              A curated concept gallery demonstrating the visual language Casa Renders can develop
              across homes, kitchens, hospitality and architecture-led spaces.
            </p>
            <span>Concept imagery · not presented as completed client work</span>
          </div>
        </div>

        <div className="work-grid">
          {selectedVisualStudies.map((item, index) => (
            <article
              key={item.id}
              className={`work-card work-card--${index + 1}`}
            >
              <SafeImage src={item.image} alt={item.alt} loading={index < 2 ? "eager" : "lazy"} />
              <div className="work-card__shade" />
              <span className="work-card__number">{String(index + 1).padStart(2, "0")}</span>
              <div className="work-card__caption">
                <div className="work-card__meta">
                  <span>Concept visualisation</span>
                  <p>{item.subtitle}</p>
                </div>
                <h3>{item.title}</h3>
              </div>
              <span className="work-card__arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
