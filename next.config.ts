import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.artic.edu',
        pathname: '/api/v1/artworks/**',
      },
    ],
  },
};

export default nextConfig;