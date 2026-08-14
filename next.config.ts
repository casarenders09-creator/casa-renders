import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  // GitHub Pages supplies "/casa-renders" for the repository URL.
  // With a custom domain, GitHub Pages can supply the appropriate root path.
  basePath: process.env.PAGES_BASE_PATH ?? "",

  transpilePackages: ["gsap"],

  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },

  outputFileTracingRoot: projectRoot,

  webpack: (config) => {
    config.resolve.symlinks = false;
    config.resolve.modules = [
      path.join(projectRoot, "node_modules"),
      "node_modules",
    ];

    return config;
  },
};

export default nextConfig;
