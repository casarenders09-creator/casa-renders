import { heroScenes } from "@/content/visuals";
import { HeroContentStage } from "@/components/hero/HeroContentStage";
import { HeroMediaFrame, HeroOverlays } from "@/components/hero/HeroFrame";
import { SafeImage } from "@/components/ui/SafeImage";

export function HeroStaticShell() {
  return (
    <section id="home" className="hero-cinema hero-cinema--static">
      <HeroMediaFrame>
        <div className="hero-scenes" aria-hidden="true">
          <div className="hero-scene is-active">
            <SafeImage src={heroScenes[0].image} alt="" fetchPriority="high" />
          </div>
        </div>
        <HeroOverlays />
        <HeroContentStage mode="static" />
      </HeroMediaFrame>
    </section>
  );
}
