/** @type {import('next').NextConfig} */
const nextConfig = {
  // The Dockerfile sets NEXT_OUTPUT=standalone; local builds (esp. Windows) skip it.
  output: process.env.NEXT_OUTPUT || undefined,
  // Lets a second build/server run beside `next dev` without sharing its .next folder (e.g. NEXT_DIST_DIR=.next-check).
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // Image optimization is ON (resized, modern formats). Local SVGs are served as-is automatically.
  images: { formats: ["image/avif", "image/webp"] },
};

export default nextConfig;
