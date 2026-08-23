import { whyChooseItems, timelineDisclaimer } from "@/content/whyChoose";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";

export function WhyChooseSection() {
  return (
    <AnimatedSection className="why-section section-mist">
      <Container>
        <div className="why-section__layout">
          <div className="why-section__intro">
            <p className="section-eyebrow">Why Casa Renders</p>
            <h2 className="display-heading">
              Creative ambition,
              <br />
              with <em>technical clarity.</em>
            </h2>
            <p>
              One coordinated consultancy reduces the gaps between what is imagined, what is documented and what is finally built.
            </p>
          </div>

          <div className="why-section__reasons">
            {whyChooseItems.map((item, index) => (
              <article key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
        <p className="why-section__note">{timelineDisclaimer}</p>
      </Container>
    </AnimatedSection>
  );
}
