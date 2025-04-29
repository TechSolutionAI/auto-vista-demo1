/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing Next.js config
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['imagescdn.dealercarsearch.com'],
    unoptimized: true,
  },
};

export default nextConfig;
