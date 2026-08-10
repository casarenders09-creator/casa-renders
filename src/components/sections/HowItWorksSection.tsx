"use client";

import { useState } from "react";
import { processSteps } from "@/content/process";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SafeImage } from "@/components/ui/SafeImage";

export function HowItWorksSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = processSteps[activeIndex];

  const move = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + processSteps.length) % processSteps.length);
  };

  return (
    <AnimatedSection id="how-it-works" className="move-in-process section-paper">
      <Container>
        <div className="move-in-process__header">
          <div>
            <p className="section-eyebrow">Our process</p>
            <h2 className="display-heading">
              From design
              <br />
              to <em>move-in.</em>
            </h2>
          </div>
          <p>
            Eight transparent stages keep creativity, budget, technical inputs and execution moving
            toward one resolved outcome.
          </p>
        </div>

        <div className="move-in-process__stepper" aria-label="Project process steps">
          {processSteps.map((step, index) => (
            <button
              type="button"
              key={step.step}
              className={index === activeIndex ? "is-active" : index < activeIndex ? "is-complete" : undefined}
              onClick={() => setActiveIndex(index)}
              aria-current={index === activeIndex ? "step" : undefined}
            >
              <span>{step.step}</span>
              <small>{step.title}</small>
            </button>
          ))}
        </div>

        <div className="move-in-process__stage">
          <div className="move-in-process__copy">
            <span>Step {String(active.step).padStart(2, "0")} of {String(processSteps.length).padStart(2, "0")}</span>
            <h3>{active.title}</h3>
            <strong>{active.description}</strong>
            <p>{active.detail}</p>
            <div>
              <button type="button" onClick={() => move(-1)} aria-label="Previous process step">←</button>
              <button type="button" onClick={() => move(1)} aria-label="Next process step">Next step →</button>
            </div>
          </div>
          <div className="move-in-process__media">
            <SafeImage src={active.image} alt={`${active.title} reference`} loading="lazy" />
            <span aria-hidden="true">0{active.step}</span>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
