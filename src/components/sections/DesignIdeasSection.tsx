import { designIdeaCategories, designIdeasDisclaimer } from "@/content/designIdeas";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SafeImage } from "@/components/ui/SafeImage";

export function DesignIdeasSection() {
  return (
    <AnimatedSection id="library" className="ideas-gallery section-ink">
      <Container>
        <div className="ideas-gallery__header">
          <div>
            <p className="section-eyebrow">Our library</p>
            <h2 className="display-heading">
              A growing archive of
              <br />
              spaces with <em>character.</em>
            </h2>
          </div>
          <p>
            This library is ready for Casa Renders&apos; actual project photography. Until those assets
            are available, clearly labelled reference imagery communicates design direction without
            misrepresenting completed work.
          </p>
        </div>

        <div className="ideas-gallery__grid">
          {designIdeaCategories.map((item, index) => (
            <figure key={item.id} className={`idea-card idea-card--${index + 1}`}>
              <div className="idea-card__media">
                <SafeImage src={item.image} alt={item.alt} loading="lazy" />
                <span>0{index + 1}</span>
                <small>Library reference</small>
              </div>
              <figcaption>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.note}</p>
                </div>
                <b aria-hidden="true">↗</b>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="ideas-gallery__disclaimer">{designIdeasDisclaimer}</p>
      </Container>
    </AnimatedSection>
  );
}
