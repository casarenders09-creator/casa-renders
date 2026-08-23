"use client";

import { useRef } from "react";
import { promotions, promotionDisclaimer } from "@/content/promotions";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SafeImage } from "@/components/ui/SafeImage";
import { scrollToSection } from "@/lib/utils";

export function PromotionalPricingSection() {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollRail = (direction: -1 | 1) => {
    railRef.current?.scrollBy({ left: direction * Math.min(window.innerWidth * 0.78, 880), behavior: "smooth" });
  };

  const enquire = (title: string, requiredService: string) => {
    window.dispatchEvent(
      new CustomEvent("casa:quote-prefill", {
        detail: {
          requiredService,
          message: `I would like to know more about the ${title} starting-price offer.`,
        },
      }),
    );
    scrollToSection("#quote");
  };

  return (
    <AnimatedSection id="offers" className="promotion-section section-paper">
      <Container>
        <div className="promotion-section__header">
          <div>
            <p className="section-eyebrow">Promotional starting prices</p>
            <h2 className="display-heading">
              Beautiful spaces,
              <br />
              planned for real <em>budgets.</em>
            </h2>
          </div>
          <div>
            <p>
              Begin with a clear starting point, then shape the final scope around area, finish,
              functionality and execution requirements.
            </p>
            <div className="promotion-section__arrows">
              <button type="button" onClick={() => scrollRail(-1)} aria-label="Previous offers">←</button>
              <button type="button" onClick={() => scrollRail(1)} aria-label="Next offers">→</button>
            </div>
          </div>
        </div>

        <div className="promotion-section__rail" ref={railRef}>
          {promotions.map((promotion, index) => (
            <article className="promotion-card" key={promotion.id}>
              <div className="promotion-card__media">
                <SafeImage src={promotion.image} alt={`${promotion.title} reference`} loading={index < 3 ? "eager" : "lazy"} />
                <span>Limited launch offer</span>
              </div>
              <div className="promotion-card__body">
                <p>{promotion.qualifier}</p>
                <strong>{promotion.price}</strong>
                <h3>{promotion.title}</h3>
                <button type="button" onClick={() => enquire(promotion.title, promotion.requiredService)}>
                  Get estimate <span aria-hidden="true">↗</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="promotion-section__disclaimer">{promotionDisclaimer}</p>
      </Container>
    </AnimatedSection>
  );
}
