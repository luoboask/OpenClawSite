import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/OpenClawSite/ai-consulting',
  assetPrefix: '/OpenClawSite/ai-consulting',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
