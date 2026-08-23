import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  tone?: "default" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  tone = "default",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn("text-eyebrow mb-4", tone === "light" && "text-white/70")}>{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "font-serif text-[clamp(2rem,4.2vw,3.35rem)] font-medium leading-[1.08] tracking-[-0.03em]",
          tone === "light" ? "text-white" : "text-primary",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-5 max-w-xl text-lead", tone === "light" && "text-white/78")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
