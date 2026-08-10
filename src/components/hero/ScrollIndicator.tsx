import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
  visible?: boolean;
  className?: string;
}

export function ScrollIndicator({ visible = true, className }: ScrollIndicatorProps) {
  if (!visible) return null;

  return (
    <div
      className={cn(
        "pointer-events-none absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/70 md:flex",
        className,
      )}
      aria-hidden
    >
      <span className="text-[0.65rem] font-medium uppercase tracking-[0.28em]">Scroll</span>
      <div className="relative h-12 w-px overflow-hidden bg-white/20">
        <div className="hero-scroll-line absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-white/85 to-transparent" />
      </div>
    </div>
  );
}
