import { Container } from "@/components/ui/Container";

const trustPoints = [
  { code: "W", value: "Warranty support", note: "Coverage as per confirmed scope" },
  { code: "45", value: "45-day delivery*", note: "For eligible interior packages" },
  { code: "₹", value: "No hidden costs", note: "Scope-led transparent quotations" },
  { code: "100+", value: "Projects handled*", note: "Client-supplied business claim" },
  { code: "Q", value: "Quality-first", note: "Materials and details considered" },
  { code: "C", value: "Customised interiors", note: "Designed around your space" },
];

export function TrustStrip() {
  return (
    <section className="why-marquee" aria-label="Why choose Casa Renders">
      <Container>
        <div className="why-marquee__label">
          <span>Why choose us</span>
          <p>Practical confidence from brief to handover</p>
        </div>
      </Container>
      <div className="why-marquee__viewport">
        <div className="why-marquee__track">
          {[...trustPoints, ...trustPoints].map((item, index) => (
            <article key={`${item.value}-${index}`} aria-hidden={index >= trustPoints.length}>
              <b>{item.code}</b>
              <div>
                <strong>{item.value}</strong>
                <span>{item.note}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Container>
        <p className="why-marquee__note">
          *Delivery timelines and project-count claims are subject to final client confirmation,
          eligible scope, approvals, material availability and site readiness.
        </p>
      </Container>
    </section>
  );
}
