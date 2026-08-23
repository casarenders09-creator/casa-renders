import { estimateTracks } from "@/content/visuals";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SafeImage } from "@/components/ui/SafeImage";

export function EstimateSection() {
  return (
    <AnimatedSection id="estimate" className="estimate-section section-paper">
      <Container>
        <div className="section-heading-grid section-heading-grid--compact">
          <div>
            <p className="section-eyebrow">Cost planning</p>
            <h2 className="display-heading">
              Get an estimate for
              <br />
              your <em>home &amp; café.</em>
            </h2>
          </div>
          <div className="section-heading-aside">
            <p>
              A useful estimate begins with scope, area, location, finishes and the level of support
              required—not a generic per-square-foot promise.
            </p>
          </div>
        </div>

        <div className="estimate-grid">
          {estimateTracks.map((track) => (
            <article key={track.id} className="estimate-card">
              <div className="estimate-card__media">
                <SafeImage src={track.image} alt="" loading="lazy" />
              </div>
              <div className="estimate-card__copy">
                <p>{track.eyebrow}</p>
                <h3>{track.title}</h3>
                <span>{track.description}</span>
                <a href="#quote">
                  Build my estimate <b aria-hidden="true">↗</b>
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
