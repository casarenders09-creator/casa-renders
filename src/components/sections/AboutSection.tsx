import { aboutContent } from "@/content/whyChoose";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";

export function AboutSection() {
  const [lead, ...supportingCopy] = aboutContent.paragraphs;

  return (
    <AnimatedSection id="about" className="about-editorial section-paper">
      <Container>
        <div className="section-index">
          <span>01</span>
          <p>{aboutContent.eyebrow}</p>
        </div>

        <div className="about-editorial__grid">
          <div className="about-editorial__title">
            <h2 className="display-heading">
              Creative instinct,
              <br />
              grounded in <em>engineering.</em>
            </h2>
          </div>

          <div className="about-editorial__copy">
            <p className="lead">{lead}</p>
            <div className="about-editorial__body">
              {supportingCopy.map((paragraph) => (
                <p key={paragraph.slice(0, 36)}>{paragraph}</p>
              ))}
            </div>
            <blockquote>
              Design ambition and technical clarity should never be separate conversations.
            </blockquote>
          </div>

          <aside className="about-definitions" aria-label="The meaning behind Casa Renders">
            {aboutContent.highlights.map((item, index) => (
              <article key={item.label}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{item.label}</h3>
                  <p>{item.meaning}</p>
                </div>
              </article>
            ))}
          </aside>
        </div>
      </Container>
    </AnimatedSection>
  );
}
