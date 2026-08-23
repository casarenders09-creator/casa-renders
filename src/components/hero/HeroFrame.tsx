import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function HeroOverlays() {
  return (
    <>
      <div className="hero-overlay hero-overlay--tone" />
      <div className="hero-overlay hero-overlay--left" />
      <div className="hero-overlay hero-overlay--bottom" />
      <div className="hero-vignette" />
      <div className="hero-blueprint" aria-hidden="true">
        <span className="hero-blueprint__vertical hero-blueprint__vertical--one" />
        <span className="hero-blueprint__vertical hero-blueprint__vertical--two" />
        <span className="hero-blueprint__horizontal hero-blueprint__horizontal--one" />
        <span className="hero-blueprint__horizontal hero-blueprint__horizontal--two" />
        <span className="hero-blueprint__circle" />
        <span className="hero-blueprint__label">STRUCTURAL GRID · CASA RENDERS</span>
      </div>
      <div className="hero-grain" />
    </>
  );
}

interface HeroMediaFrameProps {
  children: ReactNode;
  className?: string;
}

export function HeroMediaFrame({ children, className }: HeroMediaFrameProps) {
  return <div className={cn("hero-media-frame", className)}>{children}</div>;
}
