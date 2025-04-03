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
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.artic.edu',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;