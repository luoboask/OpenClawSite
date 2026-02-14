import type { NextConfig } from "next";

// 根据环境自动判断是否需要 basePath
// 本地开发: 不需要
// GitHub Pages 部署: 需要 /OpenClawSite
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  // GitHub Pages 项目站点需要 basePath
  ...(isGitHubPages && {
    basePath: '/OpenClawSite',
    assetPrefix: '/OpenClawSite',
  }),
  images: {
    unoptimized: true
  }
};

export default nextConfig;
