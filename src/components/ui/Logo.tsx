import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "default" | "light";
  className?: string;
  compact?: boolean;
};

export function Logo({ variant = "default", className, compact = false }: LogoProps) {
  const src = variant === "light" ? siteConfig.logo.light : siteConfig.logo.default;
  return (
    <Link href="/" className={cn("brand-lockup", variant === "light" && "brand-lockup--light", className)} aria-label={`${siteConfig.name} home`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="Casa Renders logo" width={54} height={54} decoding="async" />
      {!compact ? (
        <span>
          <strong>Casa Renders</strong>
          <small>Interiors · Structures</small>
        </span>
      ) : null}
    </Link>
  );
}
