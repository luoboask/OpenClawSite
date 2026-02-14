"use client";

import Link from 'next/link'
import { 
  ArrowLeft, Calendar, Clock, User, Share2, Bookmark, 
  ChevronRight, Terminal, Copy, Check
} from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { MobileNav } from '@/components/mobile-nav'
import { useState } from 'react'

// 代码复制组件
function CodeBlock({ code, language = 'bash' }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);
  
  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6">
      <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition">
        <button 
          onClick={copyCode}
          className="p-2 bg-gray-700 hover:bg-gray-600 rounded text-gray-300 hover:text-white transition"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}

// 目录组件
function TableOfContents() {
  const sections = [
    { id: "intro", title: "OpenClaw 简介" },
    { id: "channels", title: "支持的聊天渠道" },
    { id: "whatsapp", title: "WhatsApp 配置详解" },
    { id: "telegram", title: "Telegram 配置详解" },
    { id: "tools", title: "工具系统详解" },
    { id: "providers", title: "模型提供商" },
    { id: "advanced", title: "高级配置技巧" },
    { id: "troubleshooting", title: "故障排除" },
  ];

  return (
    <nav className="sticky top-24 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="font-semibold text-gray-900 dark:text-white mb-4">目录</h3>
      <ul className="space-y-2 text-sm">
        {sections.map((section) => (
          <li key={section.id}>
            <a 
              href={`#${section.id}`}
              className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function CompleteGuidePage() {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white transition-colors duration-200">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">O</span>
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">OpenClaw</span>
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-orange-600">博客</Link>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <header className="py-12 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-orange-600 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回博客
          </Link>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-sm rounded-full">
              完整指南
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            OpenClaw 完全指南
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            自托管 AI 网关的最新玩法与配置技巧
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              OpenClaw 中文社区
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              2026-02-14
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              15 分钟阅读
            </span>
          </div>
          
          <div className="flex items-center gap-3 mt-6">
            <button 
              onClick={() => setBookmarked(!bookmarked)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition ${
                bookmarked 
                  ? 'bg-orange-50 border-orange-200 text-orange-600' 
                  : 'border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
              {bookmarked ? '已收藏' : '收藏'}
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
              <Share2 className="w-4 h-4" />
              分享
            </button>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              
              { /* 简介 */ }
              <section id="intro" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">OpenClaw 简介</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  OpenClaw 是一个<strong>自托管网关</strong>，连接你常用的聊天应用（WhatsApp、Telegram、Discord、iMessage 等）到 AI 编码助手。只需在你的机器上运行一个 Gateway 进程，它就能成为消息应用和 AI 助手之间的桥梁。
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
                  <p className="text-blue-800 dark:text-blue-300 m-0">
                    <strong>目标用户</strong>：开发者和高级用户，希望拥有一个可以从任何地方发送消息的个人 AI 助手，同时不牺牲数据控制权。
                  </p>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">核心特点</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>自托管</strong>：在你自己的硬件上运行，你的规则</li>
                  <li><strong>多渠道</strong>：一个 Gateway 同时服务 WhatsApp、Telegram、Discord 等</li>
                  <li><strong>原生 Agent 支持</strong>：为编码 Agent 设计，支持工具使用、会话、记忆和多 Agent 路由</li>
                  <li><strong>开源</strong>：MIT 许可证，社区驱动</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">快速开始</h3>
                <CodeBlock code={`# 1. 安装 OpenClaw
npm install -g openclaw@latest

# 2. Onboard 并安装服务
openclaw onboard --install-daemon

# 3. 配对 WhatsApp 并启动 Gateway
openclaw channels login
openclaw gateway --port 18789`} />
              </section>

              { /*  渠道  */}
              <section id="channels" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">支持的聊天渠道</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">OpenClaw 支持 20+ 种聊天渠道：</p>
                
                <div className="grid md:grid-cols-2 gap-4 my-6">
                  {[
                    { name: "WhatsApp", desc: "Baileys (WhatsApp Web)，最流行，需 QR 配对" },
                    { name: "Telegram", desc: "grammY Bot API，设置最简单，支持群组" },
                    { name: "Discord", desc: "Discord Bot API + Gateway，支持服务器、频道和私信" },
                    { name: "iMessage", desc: "BlueBubbles (推荐) / imsg CLI，macOS 集成" },
                    { name: "Signal", desc: "signal-cli，隐私优先" },
                    { name: "Slack", desc: "Bolt SDK，工作区应用" },
                    { name: "Feishu", desc: "Feishu/Lark WebSocket，需单独安装" },
                    { name: "Matrix", desc: "Matrix 协议，插件" },
                  ].map((channel) => (
                    <div key={channel.name} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <strong className="text-gray-900 dark:text-white">{channel.name}</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 m-0">{channel.desc}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg my-6">
                  <p className="text-yellow-800 dark:text-yellow-300 m-0">
                    <strong>设置建议</strong>：最快设置选择 Telegram（简单 bot token），功能最全选择 WhatsApp（需 QR 配对，磁盘存储更多状态）。
                  </p>
                </div>
              </section>

              { /*  WhatsApp  */}
              <section id="whatsapp" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">WhatsApp 配置详解</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">快速设置</h3>
                
                <CodeBlock code={`{
  "channels": {
    "whatsapp": {
      "dmPolicy": "pairing",
      "allowFrom": ["+15551234567"],
      "groupPolicy": "allowlist",
      "groupAllowFrom": ["+15551234567"]
    }
  }
}`} language="json" />
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">访问控制策略</h3>
                
                <p className="text-gray-700 dark:text-gray-300"><strong>DM 策略</strong>：</p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><code>pairing</code> (默认): 未知发送者需配对</li>
                  <li><code>allowlist</code>: 仅允许白名单</li>
                  <li><code>open</code>: 开放（需 allowFrom 包含 "*"）</li>
                  <li><code>disabled</code>: 禁用</li>
                </ul>
                
                <CodeBlock code={`# QR 配对
openclaw channels login --channel whatsapp

# 多账号
openclaw channels login --channel whatsapp --account work

# 批准配对请求
openclaw pairing list whatsapp
openclaw pairing approve whatsapp <CODE>`} />
              </section>

              { /*  Telegram  */}
              <section id="telegram" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Telegram 配置详解</h2>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4"><strong>创建 Bot Token</strong>：在 Telegram 中联系 @BotFather，运行 /newbot，按提示操作，保存 token。</p>
                
                <CodeBlock code={`{
  "channels": {
    "telegram": {
      "enabled": true,
      "botToken": "123:abc",
      "dmPolicy": "pairing",
      "groups": { "*": { "requireMention": true } }
    }
  }
}`} language="json" />
                
                <p className="text-gray-700 dark:text-gray-300 mt-4">环境变量回退: <code>TELEGRAM_BOT_TOKEN=...</code></p>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Telegram 特有功能</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>草稿流式传输</strong> (<code>streamMode</code>): 实时显示输入状态</li>
                  <li><strong>内联按钮</strong> (<code>capabilities.inlineButtons</code>): 支持交互按钮</li>
                  <li><strong>话题/线程</strong> (<code>replyToMode</code>): 支持话题回复</li>
                  <li><strong>反应通知</strong> (<code>reactionNotifications</code>): 控制哪些反应触发系统事件</li>
                </ul>
              </section>

              { /*  工具  */}
              <section id="tools" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">工具系统详解</h2>
                
                <CodeBlock code={`{
  "tools": {
    "allow": ["browser", "web_search"],
    "deny": ["exec"],
    "profile": "coding"
  }
}`} language="json" />
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">工具配置文件</h3>
                <div className="grid md:grid-cols-2 gap-4 my-4">
                  {[
                    { name: "minimal", desc: "仅 session_status" },
                    { name: "coding", desc: "group:fs, group:runtime, group:sessions, group:memory, image" },
                    { name: "messaging", desc: "group:messaging, sessions_list, sessions_history, sessions_send, session_status" },
                    { name: "full", desc: "无限制（默认）" },
                  ].map((profile) => (
                    <div key={profile.name} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <code className="text-orange-600 font-semibold">{profile.name}</code>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 m-0">{profile.desc}</p>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">核心工具</h3>
                
                <div className="space-y-4">
                  {[
                    { name: "Browser", desc: "控制 OpenClaw 管理的浏览器，支持截图、快照、UI 操作" },
                    { name: "Exec", desc: "在 workspace 中运行 shell 命令" },
                    { name: "Process", desc: "管理后台 exec 会话" },
                    { name: "Web", desc: "web_search 和 web_fetch，搜索和获取页面内容" },
                    { name: "Canvas", desc: "驱动 Node Canvas" },
                    { name: "Nodes", desc: "发现和控制配对的节点" },
                    { name: "Message", desc: "跨渠道发送消息" },
                    { name: "Cron", desc: "管理 Gateway cron 任务" },
                  ].map((tool) => (
                    <div key={tool.name} className="border-l-4 border-orange-500 pl-4 py-2">
                      <strong className="text-gray-900 dark:text-white">{tool.name}</strong>
                      <p className="text-gray-600 dark:text-gray-400 text-sm m-0">{tool.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              { /*  提供商  */}
              <section id="providers" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">模型提供商</h2>
                
                <div className="bg-violet-50 dark:bg-violet-900/20 border-l-4 border-violet-500 p-4 rounded-r-lg my-6">
                  <p className="text-violet-800 dark:text-violet-300 m-0">
                    <strong>推荐：Venice AI</strong>（隐私优先）<br/>
                    默认: <code>venice/llama-3.3-70b</code> | 最强: <code>venice/claude-opus-45</code>
                  </p>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">支持的提供商</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "OpenAI", "Anthropic", "Qwen", "OpenRouter", "LiteLLM", 
                    "Together AI", "Cloudflare AI Gateway", "Moonshot AI (Kimi)",
                    "Venice", "Hugging Face", "Ollama", "vLLM"
                  ].map((provider) => (
                    <span key={provider} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                      {provider}
                    </span>
                  ))}
                </div>
              </section>

              { /*  高级  */}
              <section id="advanced" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">高级配置技巧</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">多 Agent 路由</h3>
                
                <CodeBlock code={`{
  "agents": {
    "list": [
      {
        "id": "support",
        "tools": { "profile": "messaging", "allow": ["slack"] }
      },
      {
        "id": "coding",
        "tools": { "profile": "coding" }
      }
    ]
  }
}`} language="json" />
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">安全配置</h3>
                
                <CodeBlock code={`{
  "channels": {
    "whatsapp": {
      "allowFrom": ["+15555550123"],
      "groups": { "*": { "requireMention": true } }
    }
  },
  "messages": {
    "groupChat": { "mentionPatterns": ["@openclaw"] }
  }
}`} language="json" />
              </section>

              { /*  故障排除  */}
              <section id="troubleshooting" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">故障排除</h2>
                
                <div className="space-y-4">
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">❌ WhatsApp 未链接（需要 QR）</h4>
                    <p className="text-red-700 dark:text-red-400 text-sm m-0">运行 <code>openclaw channels login --channel whatsapp</code></p>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">❌ Bot 不响应群组消息</h4>
                    <p className="text-red-700 dark:text-red-400 text-sm m-0">检查 requireMention 设置，确认 Bot 已被添加为群组成员</p>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">💡 监控日志</h4>
                    <p className="text-yellow-700 dark:text-yellow-400 text-sm m-0"><code>openclaw logs --follow</code> 实时查看日志</p>
                  </div>
                </div>
              </section>

              { /*  结语  */}
              <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">相关链接</h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <a href="https://docs.openclaw.ai" className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                    <span className="text-orange-600 mr-3">📚</span>
                    <span className="text-gray-900 dark:text-white">官方文档</span>
                  </a>
                  <a href="https://github.com/openclaw/openclaw" className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                    <span className="text-orange-600 mr-3">🐙</span>
                    <span className="text-gray-900 dark:text-white">GitHub 仓库</span>
                  </a>
                  <a href="https://discord.com/invite/clawd" className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                    <span className="text-orange-600 mr-3">💬</span>
                    <span className="text-gray-900 dark:text-white">Discord 社区</span>
                  </a>
                  <Link href="/api-reference" className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                    <span className="text-orange-600 mr-3">🔧</span>
                    <span className="text-gray-900 dark:text-white">API 参考</span>
                  </Link>
                </div>
              </section>

            </article>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <TableOfContents />
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">O</span>
                </div>
                <span className="text-xl font-bold">OpenClaw</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">文档</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/docs/quickstart" className="hover:text-white">快速开始</Link></li>
                <li><Link href="/docs/install" className="hover:text-white">安装指南</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">资源</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/blog" className="hover:text-white">博客</Link></li>
                <li><Link href="/cases" className="hover:text-white">案例</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">社区</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="https://github.com/openclaw/openclaw" className="hover:text-white">GitHub</a></li>
                <li><a href="https://discord.com/invite/clawd" className="hover:text-white">Discord</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
