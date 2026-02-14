import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/ai-consulting',
  assetPrefix: '/ai-consulting',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
