"use client";

import dynamic from "next/dynamic";
import { HeroStaticShell } from "@/components/hero/HeroStaticShell";

const InteriorScrollHero = dynamic(
  () =>
    import("@/components/hero/InteriorScrollHero").then((mod) => mod.InteriorScrollHero),
  {
    ssr: false,
    loading: () => <HeroStaticShell />,
  },
);

export function HeroSection() {
  return <InteriorScrollHero />;
}
