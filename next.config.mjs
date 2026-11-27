import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // The Dockerfile sets NEXT_OUTPUT=standalone; local builds (esp. Windows) skip it.
  output: process.env.NEXT_OUTPUT || undefined,
  // Lets a second build/server run beside `next dev` without sharing its .next folder (e.g. NEXT_DIST_DIR=.next-check).
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // Image optimization is ON (resized, modern formats). Local SVGs are served as-is automatically.
  images: { formats: ["image/avif", "image/webp"] },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
    };
    if (config.cache && typeof config.cache === "object") {
      config.cache.version = `${config.cache.version ?? ""}-tw1`;
    }
    return config;
  },
};

export default nextConfig;
