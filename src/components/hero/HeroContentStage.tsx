"use client";

import { heroCopy } from "@/content/hero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface HeroContentStageProps {
  mode: "cinematic" | "static";
  className?: string;
}

function HeroTitle({ lines, as = "h2" }: { lines: readonly string[]; as?: "h1" | "h2" }) {
  const Tag = as;
  return (
    <Tag className="hero-title">
      {lines.map((line) => (
        <span key={line} className="hero-title__line">
          <span>{line}</span>
        </span>
      ))}
    </Tag>
  );
}

function HeroActions() {
  return (
    <div className="hero-actions" data-hero-cta>
      <Button href={heroCopy.ctas.start.href} variant="hero" size="lg" showArrow>
        {heroCopy.ctas.start.label}
      </Button>
      <a href={heroCopy.ctas.explore.href} className="hero-text-link">
        {heroCopy.ctas.explore.label}
        <span aria-hidden="true">↘</span>
      </a>
    </div>
  );
}

function Credentials() {
  return (
    <div className="hero-credentials">
      {heroCopy.credentials.map((item) => (
        <div key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function Stage({ index }: { index: number }) {
  const stage = heroCopy.stages[index];
  return (
    <div className="hero-stage__body">
      <div className="hero-stage__label">
        <span>{stage.index}</span>
        <i />
        <p>{stage.label}</p>
      </div>
      <HeroTitle lines={stage.lines} as={index === 0 ? "h1" : "h2"} />
      <p className="hero-description">{stage.description}</p>
      {index === 0 ? <Credentials /> : null}
      {stage.id === "final" ? <HeroActions /> : null}
    </div>
  );
}

function ProgressRail() {
  return (
    <div className="hero-progress" aria-hidden="true">
      <span>01</span>
      <div>
        <i className="hero-progress-fill" />
      </div>
      <span>04</span>
    </div>
  );
}

export function HeroContentStage({ mode, className }: HeroContentStageProps) {
  if (mode === "static") {
    return (
      <Container className={cn("hero-content hero-content--static", className)}>
        <Stage index={0} />
        <HeroActions />
      </Container>
    );
  }

  return (
    <>
      <div className="hero-topline">
        <span>Casa Renders · New Delhi</span>
        <span>Interiors · Structures · Visualisation</span>
      </div>

      <Container className={cn("hero-content", className)}>
        <div className="hero-stage-stack">
          {heroCopy.stages.map((stage, index) => (
            <div
              key={stage.id}
              className={`hero-stage hero-stage--${stage.id}`}
              data-hero-stage={String(index)}
              aria-hidden={index !== 0}
            >
              <Stage index={index} />
            </div>
          ))}
        </div>
      </Container>

      <ProgressRail />
      <div className="hero-story-note" aria-hidden="true">
        <i />
        <span>Scroll to move through the story</span>
      </div>
    </>
  );
}
