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
        source: '/blog',
        destination: '/journal',
        permanent: true,
      },
      {
        source: '/faq',
        destination: '/private-collections#notes', // Sending them to your logistics section
        permanent: true,
      },
      // Catch-all for old blog posts to send them to the main journal
      {
        source: '/post/:slug*',
        destination: '/journal', 
        permanent: true,
      },
      // Clean up old duplicated pages
      {
        source: '/copy-of-home',
        destination: '/',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
