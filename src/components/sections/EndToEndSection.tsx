"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { endToEndCategories } from "@/content/endToEndGallery";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SafeImage } from "@/components/ui/SafeImage";

export function EndToEndSection() {
  const railRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const activeCategory = endToEndCategories.find((category) => category.id === activeId) ?? null;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!activeCategory) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [activeCategory]);

  useEffect(() => {
    if (!activeCategory) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveId(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeCategory]);

  const scrollRail = (direction: -1 | 1) => {
    railRef.current?.scrollBy({ left: direction * Math.min(window.innerWidth * 0.75, 760), behavior: "smooth" });
  };

  const scrollGallery = (direction: -1 | 1) => {
    galleryRef.current?.scrollBy({ left: direction * Math.min(window.innerWidth * 0.78, 920), behavior: "smooth" });
  };

  return (
    <>
    <AnimatedSection id="solutions" className="solutions-gallery section-paper">
      <Container>
        <div className="solutions-gallery__header">
          <div>
            <p className="section-eyebrow">End-to-end solutions</p>
            <h2 className="display-heading">
              Explore every space,
              <br />
              one room at a <em>time.</em>
            </h2>
          </div>
          <div className="solutions-gallery__intro">
            <p>
              Browse reference directions across eight high-demand categories. Open any category to
              view a curated ten-image inspiration gallery.
            </p>
          </div>
        </div>

        <div className="solutions-gallery__controls" aria-label="Gallery navigation">
          <button type="button" onClick={() => scrollRail(-1)} aria-label="Previous categories">←</button>
          <button type="button" onClick={() => scrollRail(1)} aria-label="Next categories">→</button>
        </div>

        <div className="solutions-gallery__rail" ref={railRef}>
          {endToEndCategories.map((category, index) => (
            <button
              type="button"
              className="solution-category-card"
              key={category.id}
              onClick={() => setActiveId(category.id)}
              aria-label={`Open ${category.title} reference gallery`}
            >
              <SafeImage src={category.cover} alt={`${category.title} interior reference`} loading={index < 3 ? "eager" : "lazy"} />
              <span className="solution-category-card__shade" />
              <span className="solution-category-card__number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <small>10 reference images</small>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
              <b aria-hidden="true">View gallery ↗</b>
            </button>
          ))}
        </div>
      </Container>

    </AnimatedSection>

      {mounted && activeCategory ? createPortal(
        <div className="solution-modal" role="dialog" aria-modal="true" aria-label={`${activeCategory.title} reference gallery`}>
          <button className="solution-modal__backdrop" type="button" onClick={() => setActiveId(null)} aria-label="Close gallery" />
          <div className="solution-modal__panel">
            <header>
              <div>
                <p>Casa Renders reference library</p>
                <h2>{activeCategory.title}</h2>
              </div>
              <button type="button" onClick={() => setActiveId(null)} aria-label="Close gallery">×</button>
            </header>

            <div className="solution-modal__toolbar">
              <span>{activeCategory.images.length} curated directions</span>
              <div>
                <button type="button" onClick={() => scrollGallery(-1)} aria-label="Previous images">←</button>
                <button type="button" onClick={() => scrollGallery(1)} aria-label="Next images">→</button>
              </div>
            </div>

            <div className="solution-modal__gallery" ref={galleryRef}>
              {activeCategory.images.map((src, index) => (
                <figure key={`${activeCategory.id}-${index}`}>
                  <SafeImage
                    src={src}
                    fallbackSrc={activeCategory.cover}
                    alt={`${activeCategory.title} inspiration ${index + 1}`}
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  <figcaption>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{activeCategory.shortTitle} reference direction</p>
                  </figcaption>
                </figure>
              ))}
            </div>

            <footer>
              <p>Reference imagery is used for visual direction and is not presented as completed Casa Renders work.</p>
              <button type="button" onClick={() => setActiveId(null)}>Close gallery</button>
            </footer>
          </div>
        </div>,
        document.body,
      ) : null}
    </>
  );
}
