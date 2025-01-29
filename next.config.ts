import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized : true,
    remotePatterns: [
      { protocol: 'https', hostname: 'facebook.com' }
    ], 
  },
};

export default nextConfig;
