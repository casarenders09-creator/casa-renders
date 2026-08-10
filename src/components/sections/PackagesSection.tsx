"use client";

import { useState } from "react";
import { packages } from "@/content/packages";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { scrollToSection } from "@/lib/utils";

export function PackagesSection() {
  const discussPackage = (packageName: string) => {
    window.dispatchEvent(
      new CustomEvent("casa:quote-prefill", {
        detail: { packagePreference: packageName },
      }),
    );
    scrollToSection("#quote");
  };

  const [openId, setOpenId] = useState<string | null>(packages[1]?.id ?? packages[0]?.id ?? null);

  return (
    <AnimatedSection id="packages" className="packages-section section-paper">
      <Container>
        <div className="section-heading-grid">
          <div>
            <p className="section-eyebrow">Packages we offer</p>
            <h2 className="display-heading">
              Packages designed for
              <br />
              every project <em>stage.</em>
            </h2>
          </div>
          <div className="section-heading-aside">
            <p>
              Packages establish a clear engagement. Final deliverables and fees are confirmed after understanding the project, site and expected outcome.
            </p>
          </div>
        </div>

        <div className="packages-accordion">
          {packages.map((pkg, index) => {
            const open = openId === pkg.id;
            return (
              <article key={pkg.id} className={open ? "is-open" : undefined}>
                <button type="button" onClick={() => setOpenId(open ? null : pkg.id)} aria-expanded={open}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <small>{index === 1 ? "Most comprehensive design package" : "Casa Renders engagement"}</small>
                    <h3>{pkg.name}</h3>
                  </div>
                  <b aria-hidden="true">{open ? "−" : "+"}</b>
                </button>

                <div className="packages-accordion__details">
                  <p>{pkg.description}</p>
                  <div className="packages-accordion__columns">
                    <div>
                      <h4>Main inclusions</h4>
                      <ul>{pkg.inclusions.map((item) => <li key={item}>{item}</li>)}</ul>
                    </div>
                    {pkg.deliverables ? (
                      <div><h4>Deliverables</h4><ul>{pkg.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div>
                    ) : null}
                    {pkg.bestFor ? (
                      <div><h4>Best for</h4><ul>{pkg.bestFor.map((item) => <li key={item}>{item}</li>)}</ul></div>
                    ) : null}
                  </div>
                  {pkg.disclaimer ? <small className="packages-accordion__note">{pkg.disclaimer}</small> : null}
                  <button type="button" className="package-discuss-action" onClick={() => discussPackage(pkg.name)}>Discuss this package <span aria-hidden="true">↗</span></button>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </AnimatedSection>
  );
}
