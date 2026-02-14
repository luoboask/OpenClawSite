# OpenClawSite

OpenClaw 中文教程网站 + AI 咨询服务网站

## 🌐 在线访问

- **OpenClaw 教程**: https://luoboask.github.io/OpenClawSite
- **AI 咨询服务**: https://luoboask.github.io/OpenClawSite/ai-consulting

## 📁 项目结构

```
openclaw-tutorial-site/
├── openclaw-docs/          # OpenClaw 中文教程网站
│   ├── app/               # 18 个页面
│   ├── components/        # 主题切换、搜索、移动端导航等
│   └── package.json       # Next.js 15 + Tailwind CSS
│
├── ai-consulting/          # AI 咨询服务网站
│   ├── app/               # 7 个页面
│   ├── components/        # 联系表单等
│   └── package.json       # Next.js 15 + Tailwind CSS
│
├── .github/workflows/      # GitHub Actions 自动部署
├── robots.txt             # SEO
├── sitemap.xml            # 网站地图
└── README.md
```

## 🚀 功能特性

### OpenClaw 教程网站
- ✅ 18 个完整教程页面
- ✅ 深色/浅色主题切换
- ✅ 文档搜索功能（⌘K）
- ✅ 移动端响应式导航
- ✅ 页面加载动画
- ✅ 滚动进度条
- ✅ SEO 优化（sitemap、robots.txt）
- ✅ Google Analytics 支持

### AI 咨询网站
- ✅ 7 个页面（首页、服务、案例、关于、博客、联系）
- ✅ 响应式设计
- ✅ 联系表单（带提交状态）

## 🛠️ 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **部署**: GitHub Pages + GitHub Actions

## 📦 本地开发

```bash
# OpenClaw 教程
cd openclaw-docs
npm install
npm run dev

# AI 咨询
cd ai-consulting
npm install
npm run dev
```

## 🔄 自动部署

每次推送到 `main` 分支会自动触发构建和部署：

1. GitHub Actions 运行构建
2. 生成静态文件到 `dist/`
3. 部署到 GitHub Pages

## 📝 内容更新

文档内容位于 `openclaw-docs/app/docs/` 目录下，直接编辑对应的 `page.tsx` 文件即可。

## 📄 许可证

MIT
