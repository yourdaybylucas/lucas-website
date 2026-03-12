// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/vi/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/post/megan-mike-winter-elora-mill-wedding',
        destination: '/journal/megan-mike-elora-mill',
        permanent: true, // This tells Google it's a 301 redirect
      },
      {
        source: '/blog',
        destination: '/journal',
        permanent: true,
      },
      {
        source: '/packages',
        destination: '/collections',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
