# OpenClaw 中文教程

OpenClaw 中文教程网站，提供完整的中文文档和使用指南。

## 网站地址

- 本地开发: `http://localhost:3000`

## 技术栈

- **框架**: Next.js 15
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **图标**: Lucide React

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建静态站点
npm run build
```

## 项目结构

```
openclaw-docs/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 首页
│   ├── layout.tsx         # 根布局
│   ├── docs/              # 文档页面
│   │   ├── page.tsx       # 文档中心
│   │   ├── quickstart/    # 快速开始
│   │   ├── install/       # 安装指南
│   │   ├── config/        # 配置详解
│   │   ├── channels/      # 频道接入
│   │   ├── security/      # 安全指南
│   │   └── tools/         # 工具开发
│   ├── about/             # 关于页面
│   └── changelog/         # 更新日志
├── components/            # 共享组件
├── public/               # 静态资源
└── content/              # 内容文件
```

## 内容覆盖

- [x] 快速开始指南
- [x] 安装指南（macOS、Linux、Windows）
- [x] 配置文件详解
- [x] WhatsApp 接入
- [x] Telegram 接入
- [x] Discord 接入
- [ ] iMessage 接入（待完善）
- [ ] Signal 接入（待完善）
- [ ] Slack 接入（待完善）
- [x] 安全指南
- [x] 工具开发
- [ ] 故障排查（待编写）

## 贡献指南

欢迎提交 Issue 和 Pull Request 来改进文档。

## 许可证

MIT License
