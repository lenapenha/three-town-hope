import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['youtube.com', 'vimeo.com', 'facebook.com'], // Add allowed domains for your videos
  },
};

export default nextConfig;
