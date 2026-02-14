import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/OpenClawSite',
  assetPrefix: '/OpenClawSite',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
