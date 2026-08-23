"use client";

import { detailedServices } from "@/content/services";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { scrollToSection } from "@/lib/utils";

const primaryServiceIds = new Set([
  "residential",
  "commercial",
  "3d-rendering",
  "restaurant",
  "modular-kitchen",
  "structural",
]);

function formServiceFor(title: string) {
  if (/structural/i.test(title)) return "Structural Engineering";
  if (/3d|visual/i.test(title)) return "3D Rendering";
  if (/space planning/i.test(title)) return "Space Planning";
  if (/turnkey/i.test(title)) return "Turnkey Support";
  return "Interior Design";
}

export function ServicesGrid() {
  const primaryServices = detailedServices.filter((service) => primaryServiceIds.has(service.id));
  const supportingServices = detailedServices.filter((service) => !primaryServiceIds.has(service.id));

  const enquire = (title: string) => {
    window.dispatchEvent(
      new CustomEvent("casa:quote-prefill", {
        detail: { requiredService: formServiceFor(title), message: `I am interested in ${title}.` },
      }),
    );
    scrollToSection("#quote");
  };

  const renderService = (service: (typeof detailedServices)[number], index: number) => (
    <article key={service.id}>
      <span>{String(index + 1).padStart(2, "0")}</span>
      <div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
      {service.featured ? <small>Core service</small> : null}
      <button type="button" onClick={() => enquire(service.title)} aria-label={`Enquire about ${service.title}`}>
        ↗
      </button>
    </article>
  );

  return (
    <AnimatedSection id="services" className="services-index section-paper">
      <Container>
        <div className="services-index__header">
          <div>
            <p className="section-eyebrow">Detailed services</p>
            <h2 className="display-heading">
              The essential layers,
              <br />
              <em>clearly coordinated.</em>
            </h2>
          </div>
          <p>
            Begin with a focused requirement or combine interiors, visualisation,
            coordination and engineering into one considered scope.
          </p>
        </div>

        <div className="services-index__list services-index__list--primary">
          {primaryServices.map((service, index) => renderService(service, index))}
        </div>

        <details className="services-index__more">
          <summary>
            <span>Explore all supporting services</span>
            <small>{supportingServices.length} additional capabilities</small>
            <b aria-hidden="true">+</b>
          </summary>
          <div className="services-index__list services-index__list--supporting">
            {supportingServices.map((service, index) => renderService(service, primaryServices.length + index))}
          </div>
        </details>
      </Container>
    </AnimatedSection>
  );
}
