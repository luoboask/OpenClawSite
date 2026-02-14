# OpenClaw 网站内容生产系统

## 架构总览

```
┌─────────────────────────────────────────────────────────────┐
│                      claw-admin (主 Agent)                    │
│                    OpenClaw 网站管理员                        │
│                      角色：任务调度 + 质量检查                  │
└──────────────────┬──────────────────────────────────────────┘
                   │ 启动子 Agent 任务
         ┌─────────┼─────────┐
         ▼         ▼         ▼
┌────────────┐ ┌────────────┐ ┌────────────┐
│ claw-collect│ │claw-article│ │ claw-code  │
│ (信息采集)  │ │ (内容编辑)  │ │ (技术运维)  │
│ qwen3:8b   │ │ kimi k2.5  │ │ kimi k2.5  │
└─────┬──────┘ └─────┬──────┘ └─────┬──────┘
      │              │              │
      ▼              ▼              ▼
memory/*.md   workspace/*.mdx   网站部署
```

## Agent 职责

| Agent | 职责 | 模型 | 输出 |
|-------|------|------|------|
| **claw-admin** | 任务调度、质量检查、异常处理 | kimi k2.5 | 决策、协调 |
| **claw-collect** | 爬取 GitHub/HN/Reddit 趋势 | qwen3:8b | `memory/YYYY-MM-DD-raw.md` |
| **claw-article** | 撰写技术文章 | kimi k2.5 | `workspace/articles/*.mdx` |
| **claw-code** | 发布到网站并部署 | kimi k2.5 | 网站更新 |

## 数据流转

```
Day N
  │
  ├─ 08:00 cron ──▶ claw-collect
  │                    ↓
  │                 memory/2025-02-15-raw.md
  │
  ├─ 09:00 cron ──▶ claw-article
  │                    ↓
  │                 workspace/articles/2025-02-15-xxx.mdx
  │
  └─ 10:00 cron ──▶ claw-code
                       ↓
                    1. 复制到 app/blog/
                    2. 更新索引
                    3. 构建部署
```

## 目录结构

```
agents/
├── README.md                      # 本文档
├── claw-admin/
│   └── SKILL.md                   # 管理员职责
├── claw-collect/
│   ├── SKILL.md                   # 信息采集规范
│   └── memory/
│       └── YYYY-MM-DD-raw.md      # 原始素材
├── claw-article/
│   ├── SKILL.md                   # 文章撰写规范
│   └── workspace/
│       └── articles/
│           └── YYYY-MM-DD-*.mdx   # 文章成品
└── claw-code/
    ├── SKILL.md                   # 部署规范
    └── logs/
        └── deploy-*.log           # 部署记录

openclaw-docs/                     # 网站源码
├── app/blog/
│   ├── page.tsx                   # 博客索引
│   └── *.mdx                      # 文章
└── dist/                          # 构建输出
```

## 手动触发示例

```bash
# 1. 启动信息采集
openclaw sessions_spawn \
  --agent-id claw-collect \
  --task "收集2025年AI工具趋势" \
  --label "collect-20250215"

# 2. 等待完成，启动文章撰写
openclaw sessions_spawn \
  --agent-id claw-article \
  --task "基于 agents/claw-collect/memory/2025-02-15-raw.md 撰写文章" \
  --label "article-20250215"

# 3. 等待完成，启动部署
openclaw sessions_spawn \
  --agent-id claw-code \
  --task "发布文章 agents/claw-article/workspace/articles/2025-02-15-*.mdx" \
  --label "code-20250215"
```

## Cron 配置

```bash
# 查看定时任务
openclaw cron list

# 08:00 信息采集
openclaw cron add \
  --name "daily-collect" \
  --schedule "0 8 * * *" \
  --agent-id claw-collect \
  --task "爬取今日技术趋势"

# 09:00 文章撰写
openclaw cron add \
  --name "daily-article" \
  --schedule "0 9 * * *" \
  --agent-id claw-article \
  --task "撰写今日文章"

# 10:00 发布部署
openclaw cron add \
  --name "daily-deploy" \
  --schedule "0 10 * * *" \
  --agent-id claw-code \
  --task "发布网站"
```

## 设计原则

1. **单一职责**：每个 Agent 只做一件事
2. **文件契约**：Agent 间通过文件传递数据
3. **主从架构**：claw-admin 是唯一交互入口
4. **失败隔离**：子 Agent 失败不影响其他任务
5. **可观测**：每个步骤都有日志和输出

---

*这是一个自动化的内容生产流水线。设定好规则，让它自己运转。*
