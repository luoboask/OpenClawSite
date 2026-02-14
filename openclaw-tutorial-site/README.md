# OpenClaw 教程与咨询网站

这是一个包含两个网站的项目：

1. **OpenClaw 中文教程** (`openclaw-docs/`) - 开源的中文文档网站
2. **AI咨询中心** (`ai-consulting/`) - 商业咨询服务网站

## 项目结构

```
openclaw-tutorial-site/
├── openclaw-docs/        # OpenClaw 中文教程网站
├── ai-consulting/        # AI 咨询网站
└── README.md            # 本文件
```

## 快速开始

### 安装依赖

```bash
# OpenClaw 教程网站
cd openclaw-docs
npm install

# AI 咨询网站
cd ../ai-consulting
npm install
```

### 本地开发

```bash
# 启动 OpenClaw 教程（端口 3000）
cd openclaw-docs
npm run dev

# 启动 AI 咨询网站（端口 3001）
cd ai-consulting
npm run dev
```

### 构建

```bash
# 构建 OpenClaw 教程
cd openclaw-docs
npm run build
# 输出到 dist/ 目录

# 构建 AI 咨询网站
cd ai-consulting
npm run build
# 输出到 dist/ 目录
```

## 部署

两个网站都配置为静态导出（static export），可以部署到任何静态托管服务：

- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages
- 自有服务器

## 维护计划

本项目需要定期维护，包括：

1. **内容更新**
   - 跟进 OpenClaw 新版本特性
   - 更新文档内容
   - 添加新的教程和案例

2. **功能改进**
   - 优化用户体验
   - 添加搜索功能
   - 改进导航结构

3. **技术更新**
   - 更新依赖包
   - 修复安全漏洞
   - 性能优化

## Git 提交规范

提交信息格式：
- `docs: ` - 文档更新
- `feat: ` - 新功能
- `fix: ` - 修复问题
- `style: ` - 样式调整
- `refactor: ` - 代码重构

## 许可证

- OpenClaw 中文教程: MIT License
- AI咨询中心: 私有项目
