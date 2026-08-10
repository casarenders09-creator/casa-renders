"use client";

import { useCallback, useEffect, useRef } from "react";

export function useScrollVideo(videoRef: React.RefObject<HTMLVideoElement | null>) {
  const durationRef = useRef(0);
  const readyRef = useRef(false);
  const targetTimeRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);
  const videoElementRef = useRef<HTMLVideoElement | null>(null);

  const stopRaf = useCallback(() => {
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
  }, []);

  const tick = useCallback(() => {
    const video = videoElementRef.current;
    if (!video || !readyRef.current) {
      stopRaf();
      return;
    }

    const target = targetTimeRef.current;
    const current = video.currentTime;
    const delta = target - current;

    if (Math.abs(delta) < 0.025) {
      video.currentTime = target;
      stopRaf();
      return;
    }

    video.currentTime = current + delta * 0.18;
    rafIdRef.current = requestAnimationFrame(tick);
  }, [stopRaf]);

  const setProgress = useCallback(
    (progress: number) => {
      if (!readyRef.current || durationRef.current <= 0) return;

      const clamped = Math.min(1, Math.max(0, progress));
      targetTimeRef.current = clamped * durationRef.current;

      if (rafIdRef.current === null) {
        rafIdRef.current = requestAnimationFrame(tick);
      }
    },
    [tick],
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    videoElementRef.current = video;

    const handleLoadedMetadata = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) return;
      durationRef.current = video.duration;
      readyRef.current = true;
      video.pause();
      video.currentTime = 0;
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    if (video.readyState >= 1) {
      handleLoadedMetadata();
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      stopRaf();
      readyRef.current = false;
      videoElementRef.current = null;
    };
  }, [videoRef, stopRaf]);

  return { setProgress };
}
