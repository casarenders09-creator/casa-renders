"use client";

import { useEffect, useRef, useState } from "react";
import { heroScenes } from "@/content/visuals";
import { heroCopy } from "@/content/hero";
import { siteConfig } from "@/config/site";
import { HeroContentStage } from "@/components/hero/HeroContentStage";
import { HeroMediaFrame, HeroOverlays } from "@/components/hero/HeroFrame";
import { ScrollIndicator } from "@/components/hero/ScrollIndicator";
import { SafeImage } from "@/components/ui/SafeImage";
import { Button } from "@/components/ui/Button";
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

// MOBILE HERO V9 — deterministic scene sync.
function MobileHeroStory({ reducedMotion }: { reducedMotion: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const stages = Array.from(
      section.querySelectorAll<HTMLElement>("[data-mobile-hero-stage]"),
    );

    if (!stages.length) return;

    const sceneForStage = (stageIndex: number) =>
      Math.min(stageIndex, heroScenes.length - 1);

    let frame = 0;
    let currentStage = -1;

    const updateScene = () => {
      frame = 0;

      /*
       * Use one deterministic focus line and inspect every chapter position.
       * This prevents competing observer callbacks when two tall chapters
       * overlap the viewport during a fast or momentum scroll.
       */
      const focusLine = window.innerHeight * 0.52;
      let nextStage = 0;

      stages.forEach((stage, index) => {
        if (stage.getBoundingClientRect().top <= focusLine) {
          nextStage = index;
        }
      });

      if (nextStage !== currentStage) {
        currentStage = nextStage;
        setActiveScene(sceneForStage(nextStage));
      }
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateScene);
    };

    updateScene();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`mobile-hero-v6${reducedMotion ? " mobile-hero-v6--reduced" : ""}`}
      aria-label="Casa Renders introduction"
    >
      <div className="mobile-hero-v6__media" aria-hidden="true">
        <div className="mobile-hero-v6__scenes">
          {heroScenes.map((scene, index) => (
            <div
              className={`mobile-hero-v6__scene${
                index === activeScene ? " is-active" : ""
              }`}
              key={scene.id}
            >
              <SafeImage
                src={scene.image}
                alt=""
                loading="eager"
                fetchPriority={index === 0 ? "high" : "auto"}
                decoding="async"
                style={{ objectPosition: scene.objectPosition ?? "center" }}
              />
            </div>
          ))}
        </div>

        <div className="mobile-hero-v6__tone" />
        <div className="mobile-hero-v6__vignette" />
        <div className="mobile-hero-v6__topline">
          <span>Casa Renders</span>
          <span>Interiors · Structures</span>
        </div>
      </div>

      <div className="mobile-hero-v6__stages">
        {heroCopy.stages.map((stage, index) => {
          const Heading = index === 0 ? "h1" : "h2";

          return (
            <article
              key={stage.id}
              data-mobile-hero-stage={index}
              className={`mobile-hero-v6__stage mobile-hero-v6__stage--${stage.id}`}
            >
              <div className="mobile-hero-v6__stage-inner">
                <div className="mobile-hero-v6__label">
                  <span>{stage.index}</span>
                  <i />
                  <span>{stage.label}</span>
                </div>

                <Heading>
                  {stage.lines.map((line, lineIndex) => (
                    <span key={line}>
                      {line}
                      {lineIndex < stage.lines.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </Heading>

                <p>{stage.description}</p>

                {index === 0 ? (
                  <div className="mobile-hero-v6__credentials">
                    {heroCopy.credentials.map((item) => (
                      <div key={item.label}>
                        <strong>{item.value}</strong>
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                ) : null}

                {stage.id === "final" ? (
                  <div className="mobile-hero-v6__actions">
                    <Button href={heroCopy.ctas.start.href} variant="hero" size="lg" showArrow>
                      {heroCopy.ctas.start.label}
                    </Button>
                    <a href={heroCopy.ctas.explore.href}>
                      {heroCopy.ctas.explore.label}
                      <span aria-hidden="true">↘</span>
                    </a>
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function InteriorScrollHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobileViewport(768);
  const media = useHeroMedia(siteConfig.hero);
  const { setProgress } = useScrollVideo(videoRef);
  const useVideo = !isMobile && !reducedMotion && media.resolved && media.videoAvailable;

  useEffect(() => {
    if (reducedMotion || isMobile || !sectionRef.current) return;
    return initHeroScrollAnimation({
      section: sectionRef.current,
      useVideo,
      onProgress: useVideo ? setProgress : undefined,
    });
  }, [isMobile, reducedMotion, setProgress, useVideo]);

  return (
    <div id="home" className="hero-root">
      <section
        ref={sectionRef}
        className={`hero-cinema hero-desktop-story${reducedMotion ? " hero-cinema--static" : ""}`}
      >
        {reducedMotion ? (
          <HeroMediaFrame>
            <HeroScenes />
            <HeroOverlays />
            <HeroContentStage mode="static" />
          </HeroMediaFrame>
        ) : (
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
                  {media.videoWebm ? (
                    <source src={siteConfig.hero.videoWebm} type="video/webm" />
                  ) : null}
                  {media.videoMp4 ? (
                    <source src={siteConfig.hero.videoMp4} type="video/mp4" />
                  ) : null}
                </video>
              ) : null}
              <HeroOverlays />
              <HeroContentStage mode="cinematic" />
              <ScrollIndicator />
            </HeroMediaFrame>
          </div>
        )}
      </section>

      <MobileHeroStory reducedMotion={reducedMotion} />
    </div>
  );
}
