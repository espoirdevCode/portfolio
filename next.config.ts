import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export',
  // images: { unoptimized: true }
};

export default nextConfig;

const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/api\.example\.com\//,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'api-cache',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 24 * 60 * 60, // 1 jour
        },
      },
    },
  ],
});