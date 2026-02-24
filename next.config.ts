import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Rex-website',
  images: {
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;
