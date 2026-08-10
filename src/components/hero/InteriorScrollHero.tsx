"use client";

import { useEffect, useRef } from "react";
import { heroScenes } from "@/content/visuals";
import { siteConfig } from "@/config/site";
import { HeroContentStage } from "@/components/hero/HeroContentStage";
import { HeroMediaFrame, HeroOverlays } from "@/components/hero/HeroFrame";
import { ScrollIndicator } from "@/components/hero/ScrollIndicator";
import { SafeImage } from "@/components/ui/SafeImage";
import { useIsMobileViewport } from "@/lib/hooks/useIsMobileViewport";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { useHeroMedia } from "@/lib/hooks/useHeroMedia";
import { useScrollVideo } from "@/lib/hooks/useScrollVideo";
import { initHeroScrollAnimation } from "@/lib/hero/initHeroScrollAnimation";

function HeroScenes() {
  return (
    <div className="hero-scenes" aria-hidden="true">
      {heroScenes.map((scene, index) => (
        <div className="hero-scene" data-hero-scene={String(index)} key={scene.id}>
          <SafeImage
            src={scene.image}
            alt=""
            fetchPriority={index === 0 ? "high" : "auto"}
            style={{ objectPosition: scene.objectPosition ?? "center" }}
          />
        </div>
      ))}
    </div>
  );
}

export function InteriorScrollHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobileViewport(768);
  const staticMode = reducedMotion || isMobile;
  const media = useHeroMedia(siteConfig.hero);
  const { setProgress } = useScrollVideo(videoRef);
  const useVideo = !staticMode && media.resolved && media.videoAvailable;

  useEffect(() => {
    if (staticMode || !sectionRef.current) return;
    return initHeroScrollAnimation({
      section: sectionRef.current,
      useVideo,
      onProgress: useVideo ? setProgress : undefined,
    });
  }, [setProgress, staticMode, useVideo]);

  if (staticMode) {
    return (
      <section id="home" className="hero-cinema hero-cinema--static">
        <HeroMediaFrame>
          <HeroScenes />
          <HeroOverlays />
          <HeroContentStage mode="static" />
        </HeroMediaFrame>
      </section>
    );
  }

  return (
    <section id="home" ref={sectionRef} className="hero-cinema">
      <div className="hero-cinema__sticky">
        <HeroMediaFrame>
          <HeroScenes />
          {useVideo ? (
            <video
              ref={videoRef}
              className="hero-video"
              muted
              playsInline
              preload="auto"
              poster={media.posterSrc}
              aria-hidden="true"
            >
              {media.videoWebm ? <source src={siteConfig.hero.videoWebm} type="video/webm" /> : null}
              {media.videoMp4 ? <source src={siteConfig.hero.videoMp4} type="video/mp4" /> : null}
            </video>
          ) : null}
          <HeroOverlays />
          <HeroContentStage mode="cinematic" />
          <ScrollIndicator />
        </HeroMediaFrame>
      </div>
    </section>
  );
}
