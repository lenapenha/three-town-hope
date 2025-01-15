import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'facebook.com' }
    ], 
  },
};

export default nextConfig;
