import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.artic.edu',
        pathname: '/api/v1/artworks/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**', // allow any image path from placehold.co
      },
    ],
  },
};

export default nextConfig;