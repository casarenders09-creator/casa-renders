"use client";

import { useEffect, useState } from "react";

async function assetExists(path: string): Promise<boolean> {
  try {
    const response = await fetch(path, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
}

interface HeroMediaPaths {
  videoMp4: string;
  videoWebm: string;
  posterPath: string;
  fallbackPosterPath: string;
}

export function useHeroMedia(paths: HeroMediaPaths) {
  const [state, setState] = useState({
    resolved: false,
    videoMp4: false,
    videoWebm: false,
    poster: false,
    fallbackPoster: false,
  });

  useEffect(() => {
    let cancelled = false;

    Promise.all([
      assetExists(paths.videoMp4),
      assetExists(paths.videoWebm),
      assetExists(paths.posterPath),
      assetExists(paths.fallbackPosterPath),
    ]).then(([videoMp4, videoWebm, poster, fallbackPoster]) => {
      if (cancelled) return;

      setState({
        resolved: true,
        videoMp4,
        videoWebm,
        poster,
        fallbackPoster,
      });
    });

    return () => {
      cancelled = true;
    };
  }, [paths.videoMp4, paths.videoWebm, paths.posterPath, paths.fallbackPosterPath]);

  const videoAvailable = state.videoMp4 || state.videoWebm;
  const posterSrc = !state.resolved
    ? paths.fallbackPosterPath
    : state.poster
      ? paths.posterPath
      : paths.fallbackPosterPath;

  return {
    resolved: state.resolved,
    videoAvailable,
    videoMp4: state.videoMp4,
    videoWebm: state.videoWebm,
    posterSrc,
  };
}
