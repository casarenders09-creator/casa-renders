import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "hero";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary: "button button--primary",
  secondary: "button button--secondary",
  outline: "button button--outline",
  ghost: "button button--ghost",
  hero: "button button--hero",
};

const sizeClasses: Record<Size, string> = {
  sm: "button--sm",
  md: "button--md",
  lg: "button--lg",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  showArrow?: boolean;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type LinkProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  showArrow = false,
  ...props
}: ButtonProps | LinkProps) {
  const classes = cn(variantClasses[variant], sizeClasses[size], className);
  const content = (
    <>
      <span>{children}</span>
      {showArrow ? <b aria-hidden="true">→</b> : null}
    </>
  );

  if (href) {
    const anchorProps = props as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children" | "className">;
    if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http")) {
      return (
        <a href={href} className={classes} {...anchorProps}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonProps)}>
      {content}
    </button>
  );
}
