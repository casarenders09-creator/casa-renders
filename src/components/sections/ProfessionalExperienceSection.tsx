import { experiencePartners } from "@/content/experience";
import { trustIndicators } from "@/content/trustIndicators";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";

function LogoTrack({
  items,
  reverse = false,
}: {
  items: typeof experiencePartners;
  reverse?: boolean;
}) {
  const repeated = [...items, ...items];

  return (
    <div className={`logo-marquee${reverse ? " logo-marquee--reverse" : ""}`}>
      <div className="logo-marquee__track">
        {repeated.map((partner, index) => {
          const isDuplicate = index >= items.length;
          const fit = partner.fit ?? "standard";

          return (
            <article
              className={`experience-logo-card experience-logo-card--${fit}`}
              key={`${partner.id}-${index}`}
              aria-hidden={isDuplicate}
            >
              <div className="experience-logo-card__plaque">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={partner.logo}
                  alt={isDuplicate ? "" : `${partner.name} logo`}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="experience-logo-card__meta">
                <span>{partner.name}</span>
                {partner.assetKind === "initials" ? <small>Initials mark</small> : null}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export function ProfessionalExperienceSection() {
  const splitIndex = Math.ceil(experiencePartners.length / 2);
  const firstRow = experiencePartners.slice(0, splitIndex);
  const secondRow = experiencePartners.slice(splitIndex);

  return (
    <AnimatedSection id="experience" className="experience-marquee-section">
      <Container>
        <div className="experience-marquee-section__header">
          <div>
            <p className="section-eyebrow">Experience & professional exposure</p>
            <h2>
              Built through legacy,
              <br />
              strengthened by practice.
            </h2>
          </div>
          <div className="experience-marquee-section__aside">
            <p>
              Casa Renders combines a family engineering foundation with active structural,
              design and project-coordination experience across India.
            </p>
            {trustIndicators.map((item) => (
              <div key={item.id}>
                <span>{item.value}</span>
                <small>{item.label}</small>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div
        className="experience-logo-wall"
        role="region"
        aria-label="Professional exposure organisations"
      >
        <LogoTrack items={firstRow} />
        {secondRow.length > 0 ? <LogoTrack items={secondRow} reverse /> : null}
      </div>

      <Container>
        <p className="experience-disclaimer">
          Organisation identities indicate professional exposure and project environments. They do
          not imply endorsement or a current commercial relationship. Apex Builders and Kautilya
          Infratech use neutral initials marks until approved brand files are supplied.
        </p>
      </Container>
    </AnimatedSection>
  );
}
