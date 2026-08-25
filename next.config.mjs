/**
 * Next.js Configuration
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: false, // Prevents duplicate double-mounting of GSAP / LocomotiveScroll in dev mode which causes Fast Refresh crashes
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
