import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface HeroScrollAnimationOptions {
  section: HTMLElement;
  useVideo?: boolean;
  onProgress?: (progress: number) => void;
}

export function initHeroScrollAnimation({
  section,
  useVideo = false,
  onProgress,
}: HeroScrollAnimationOptions): () => void {
  const context = gsap.context(() => {
    const stages = gsap.utils.toArray<HTMLElement>("[data-hero-stage]");
    const scenes = gsap.utils.toArray<HTMLElement>("[data-hero-scene]");
    const progressFill = section.querySelector<HTMLElement>(".hero-progress-fill");
    const blueprint = section.querySelector<HTMLElement>(".hero-blueprint");
    const video = section.querySelector<HTMLVideoElement>(".hero-video");
    const topLine = section.querySelector<HTMLElement>(".hero-topline");
    const storyNote = section.querySelector<HTMLElement>(".hero-story-note");

    gsap.set(stages, { autoAlpha: 0, y: 24, filter: "blur(6px)" });
    gsap.set(stages[0], { autoAlpha: 1, y: 0, filter: "blur(0px)" });
    gsap.set(scenes, { autoAlpha: 0, scale: 1.075, xPercent: 0 });
    gsap.set(scenes[0], { autoAlpha: useVideo ? 0 : 1, scale: 1.025 });
    gsap.set("[data-hero-stage='3'] [data-hero-cta]", { autoAlpha: 0, y: 10 });

    if (video) gsap.set(video, { scale: 1.01, autoAlpha: 1 });

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.2,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        if (progressFill) gsap.set(progressFill, { scaleY: self.progress });
        onProgress?.(self.progress);
      },
    });

    const timeline = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
    });

    const switchStage = (from: number, to: number, at: number) => {
      timeline
        .to(stages[from], { autoAlpha: 0, y: -14, filter: "blur(5px)", duration: 0.09 }, at)
        .fromTo(
          stages[to],
          { autoAlpha: 0, y: 20, filter: "blur(6px)" },
          { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.13 },
          at + 0.015,
        );
    };

    switchStage(0, 1, 0.16);
    switchStage(1, 2, 0.38);
    switchStage(2, 3, 0.60);

    if (useVideo && video) {
      timeline.to(video, { scale: 1.055, duration: 0.98 }, 0);
    } else {
      timeline
        .to(scenes[0], { autoAlpha: 0, scale: 1.09, xPercent: -1.2, duration: 0.14 }, 0.17)
        .fromTo(
          scenes[1],
          { autoAlpha: 0, scale: 1.075, xPercent: 1.2 },
          { autoAlpha: 1, scale: 1.025, xPercent: 0, duration: 0.16 },
          0.14,
        )
        .to(scenes[1], { autoAlpha: 0, scale: 1.085, xPercent: -1, duration: 0.14 }, 0.39)
        .fromTo(
          scenes[2],
          { autoAlpha: 0, scale: 1.07, xPercent: 1 },
          { autoAlpha: 1, scale: 1.02, xPercent: 0, duration: 0.17 },
          0.36,
        )
        .to(scenes[2], { scale: 1.055, xPercent: -0.7, duration: 0.58 }, 0.55);
    }

    timeline.to(
      "[data-hero-stage='3'] [data-hero-cta]",
      { autoAlpha: 1, y: 0, duration: 0.08 },
      0.69,
    );

    if (blueprint) {
      timeline
        .to(blueprint, { opacity: 0.52, duration: 0.14 }, 0.42)
        .to(blueprint, { opacity: 0.14, duration: 0.16 }, 0.82);
    }

    // Keep the final message alive until the sticky frame is almost released.
    // The very short fade avoids clipping without creating an empty hero interval.
    timeline
      .to(stages[3], { autoAlpha: 0, y: -8, filter: "blur(3px)", duration: 0.018 }, 0.982)
      .to([topLine, storyNote].filter(Boolean), { autoAlpha: 0, duration: 0.012 }, 0.986);
  }, section);

  return () => context.revert();
}
