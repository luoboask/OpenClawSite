"use client";

import Link from 'next/link'
import { Search, Terminal, FolderOpen, Globe, MessageSquare, Monitor, Clock, ChevronDown, ChevronRight, Copy, Check } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { MobileNav } from '@/components/mobile-nav'
import { useState } from 'react'

interface ToolCategory {
  id: string;
  name: string;
  description: string;
  icon: any;
  color: string;
  tools: Tool[];
}

interface Tool {
  name: string;
  description: string;
  params: Param[];
  returns?: string;
  example: string;
}

interface Param {
  name: string;
  type: string;
  required: boolean;
  description: string;
  default?: string;
}

const toolCategories: ToolCategory[] = [
  {
    id: "runtime",
    name: "Runtime",
    description: "执行命令和管理进程的核心工具",
    icon: Terminal,
    color: "blue",
    tools: [
      {
        name: "exec",
        description: "在 workspace 中执行 shell 命令",
        params: [
          { name: "command", type: "string", required: true, description: "要执行的命令" },
          { name: "timeout", type: "number", required: false, description: "超时时间（秒）", default: "1800" },
          { name: "background", type: "boolean", required: false, description: "是否后台执行", default: "false" },
          { name: "yieldMs", type: "number", required: false, description: "超时后自动后台化（毫秒）", default: "10000" },
          { name: "host", type: "string", required: false, description: "执行主机: sandbox | gateway | node", default: "sandbox" },
          { name: "pty", type: "boolean", required: false, description: "需要真实 TTY 时设置", default: "false" },
          { name: "elevated", type: "boolean", required: false, description: "在主机上运行（需提升模式）", default: "false" },
        ],
        returns: "{ stdout, stderr, exitCode, sessionId (如果后台化) }",
        example: `exec({ 
  command: "npm install",
  timeout: 300,
  background: false
})`
      },
      {
        name: "process",
        description: "管理后台 exec 会话",
        params: [
          { name: "action", type: "string", required: true, description: "操作: list | poll | kill | write" },
          { name: "sessionId", type: "string", required: false, description: "会话 ID（poll/kill 时需要）" },
        ],
        returns: "取决于 action 类型",
        example: `process({ action: "list" })
process({ action: "poll", sessionId: "xxx" })
process({ action: "kill", sessionId: "xxx" })`
      }
    ]
  },
  {
    id: "fs",
    name: "File System",
    description: "文件系统操作工具",
    icon: FolderOpen,
    color: "green",
    tools: [
      {
        name: "read",
        description: "读取文件内容",
        params: [
          { name: "file_path", type: "string", required: true, description: "文件路径" },
          { name: "offset", type: "number", required: false, description: "起始行号（1-indexed）" },
          { name: "limit", type: "number", required: false, description: "最大行数" },
        ],
        returns: "文件内容",
        example: `read({ file_path: "./config.json" })
read({ file_path: "./large.log", offset: 1, limit: 100 })`
      },
      {
        name: "write",
        description: "写入文件内容",
        params: [
          { name: "file_path", type: "string", required: true, description: "文件路径" },
          { name: "content", type: "string", required: true, description: "文件内容" },
        ],
        returns: "成功状态",
        example: `write({ 
  file_path: "./hello.txt", 
  content: "Hello World" 
})`
      },
      {
        name: "edit",
        description: "精确编辑文件内容",
        params: [
          { name: "file_path", type: "string", required: true, description: "文件路径" },
          { name: "old_string", type: "string", required: true, description: "要替换的旧文本（必须完全匹配）" },
          { name: "new_string", type: "string", required: true, description: "新文本" },
        ],
        returns: "成功状态",
        example: `edit({ 
  file_path: "./config.json",
  old_string: '"version": "1.0"',
  new_string: '"version": "2.0"'
})`
      }
    ]
  },
  {
    id: "web",
    name: "Web",
    description: "网络搜索和页面获取工具",
    icon: Globe,
    color: "cyan",
    tools: [
      {
        name: "web_search",
        description: "使用 Brave Search API 进行网络搜索",
        params: [
          { name: "query", type: "string", required: true, description: "搜索查询" },
          { name: "count", type: "number", required: false, description: "返回结果数量 (1-10)", default: "5" },
          { name: "country", type: "string", required: false, description: "国家代码 (如 'US', 'CN')" },
          { name: "freshness", type: "string", required: false, description: "时间过滤: pd(24h) | pw(周) | pm(月) | py(年)" },
        ],
        returns: "搜索结果数组 { title, url, snippet }",
        example: `web_search({ 
  query: "OpenClaw tutorial", 
  count: 10,
  freshness: "pw"
})`
      },
      {
        name: "web_fetch",
        description: "获取并提取网页内容",
        params: [
          { name: "url", type: "string", required: true, description: "网页 URL" },
          { name: "extractMode", type: "string", required: false, description: "提取模式: markdown | text", default: "markdown" },
          { name: "maxChars", type: "number", required: false, description: "最大字符数" },
        ],
        returns: "提取的网页内容",
        example: `web_fetch({ 
  url: "https://docs.openclaw.ai",
  extractMode: "markdown",
  maxChars: 5000
})`
      }
    ]
  },
  {
    id: "ui",
    name: "UI & Browser",
    description: "浏览器控制和 Canvas 操作工具",
    icon: Monitor,
    color: "purple",
    tools: [
      {
        name: "browser",
        description: "控制浏览器",
        params: [
          { name: "action", type: "string", required: true, description: "操作: start | stop | snapshot | screenshot | act | navigate" },
          { name: "target", type: "string", required: false, description: "目标: sandbox | host | node", default: "sandbox" },
          { name: "profile", type: "string", required: false, description: "浏览器配置文件" },
          { name: "fullPage", type: "boolean", required: false, description: "是否全页截图", default: "false" },
          { name: "request", type: "object", required: false, description: "UI 操作请求（act 时使用）" },
        ],
        returns: "取决于 action 类型",
        example: `browser({ action: "start" })
browser({ action: "snapshot" })
browser({ 
  action: "act",
  request: { kind: "click", ref: "e12" }
})`
      },
      {
        name: "canvas",
        description: "驱动 Node Canvas",
        params: [
          { name: "action", type: "string", required: true, description: "操作: present | hide | snapshot | navigate | a2ui_push" },
          { name: "url", type: "string", required: false, description: "要显示的 URL" },
          { name: "jsonl", type: "string", required: false, description: "A2UI JSONL 数据" },
        ],
        returns: "操作结果",
        example: `canvas({ action: "present", url: "https://example.com" })
canvas({ action: "snapshot" })`
      }
    ]
  },
  {
    id: "messaging",
    name: "Messaging",
    description: "跨渠道消息发送工具",
    icon: MessageSquare,
    color: "pink",
    tools: [
      {
        name: "message",
        description: "跨渠道发送消息",
        params: [
          { name: "action", type: "string", required: true, description: "操作: send | broadcast | react | poll" },
          { name: "target", type: "string", required: false, description: "目标频道/用户 ID" },
          { name: "message", type: "string", required: false, description: "消息内容" },
          { name: "channel", type: "string", required: false, description: "指定渠道" },
          { name: "replyTo", type: "string", required: false, description: "回复消息 ID" },
          { name: "emoji", type: "string", required: false, description: "反应表情（react 时使用）" },
          { name: "pollQuestion", type: "string", required: false, description: "投票问题" },
          { name: "pollOption", type: "string[]", required: false, description: "投票选项数组" },
        ],
        returns: "消息发送结果",
        example: `message({ 
  action: "send", 
  target: "#general", 
  message: "Hello team!" 
})
message({ 
  action: "react", 
  messageId: "xxx", 
  emoji: "👍" 
})
message({ 
  action: "poll", 
  pollQuestion: "Favorite color?",
  pollOption: ["Red", "Blue", "Green"]
})`
      }
    ]
  },
  {
    id: "automation",
    name: "Automation",
    description: "定时任务和 Gateway 管理工具",
    icon: Clock,
    color: "orange",
    tools: [
      {
        name: "cron",
        description: "管理定时任务",
        params: [
          { name: "action", type: "string", required: true, description: "操作: list | add | remove" },
          { name: "schedule", type: "string", required: false, description: "Cron 表达式 (如 '0 9 * * 1')" },
          { name: "command", type: "string", required: false, description: "要执行的命令" },
          { name: "jobId", type: "string", required: false, description: "任务 ID（remove 时使用）" },
        ],
        returns: "任务列表或操作结果",
        example: `cron({ action: "list" })
cron({ 
  action: "add",
  schedule: "0 9 * * 1",
  command: "weekly-report"
})
cron({ action: "remove", jobId: "xxx" })`
      },
      {
        name: "gateway",
        description: "Gateway 管理",
        params: [
          { name: "action", type: "string", required: true, description: "操作: restart | config.patch | status" },
          { name: "config", type: "object", required: false, description: "配置补丁（config.patch 时使用）" },
        ],
        returns: "操作结果",
        example: `gateway({ action: "restart" })
gateway({ 
  action: "config.patch",
  config: { channels: { whatsapp: { enabled: false } } }
})`
      }
    ]
  }
];

function ToolCard({ tool, color }: { tool: Tool; color: string }) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const copyExample = async () => {
    await navigator.clipboard.writeText(tool.example);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const colorClasses: Record<string, { border: string; bg: string; text: string }> = {
    blue: { border: "border-blue-200 dark:border-blue-800", bg: "bg-blue-50 dark:bg-blue-900/20", text: "text-blue-600 dark:text-blue-400" },
    green: { border: "border-green-200 dark:border-green-800", bg: "bg-green-50 dark:bg-green-900/20", text: "text-green-600 dark:text-green-400" },
    cyan: { border: "border-cyan-200 dark:border-cyan-800", bg: "bg-cyan-50 dark:bg-cyan-900/20", text: "text-cyan-600 dark:text-cyan-400" },
    purple: { border: "border-purple-200 dark:border-purple-800", bg: "bg-purple-50 dark:bg-purple-900/20", text: "text-purple-600 dark:text-purple-400" },
    pink: { border: "border-pink-200 dark:border-pink-800", bg: "bg-pink-50 dark:bg-pink-900/20", text: "text-pink-600 dark:text-pink-400" },
    orange: { border: "border-orange-200 dark:border-orange-800", bg: "bg-orange-50 dark:bg-orange-900/20", text: "text-orange-600 dark:text-orange-400" },
  };

  const colors = colorClasses[color] || colorClasses.orange;

  return (
    <div className={`border ${colors.border} rounded-xl overflow-hidden bg-white dark:bg-gray-800`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition"
      >
        <div className="flex items-center gap-3">
          <div className={`px-2 py-1 rounded text-sm font-mono font-medium ${colors.bg} ${colors.text}`}>
            {tool.name}
          </div>
          <span className="text-gray-600 dark:text-gray-400 text-sm hidden sm:block">{tool.description}</span>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expanded ? 'rotate-180' : ''}`} />
      </button>

      {expanded && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-700 dark:text-gray-300 mb-4 sm:hidden">{tool.description}</p>

          {/* Parameters */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">参数</h4>
            <div className="space-y-2">
              {tool.params.map((param) => (
                <div key={param.name} className="flex items-start gap-2 text-sm">
                  <span className="font-mono text-orange-600 dark:text-orange-400">{param.name}</span>
                  <span className="text-gray-500">({param.type})</span>
                  {param.required && (
                    <span className="text-red-500 text-xs">*必需</span>
                  )}
                  <span className="text-gray-600 dark:text-gray-400">- {param.description}</span>
                  {param.default && (
                    <span className="text-gray-500">默认: {param.default}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Returns */}
          {tool.returns && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">返回值</h4>
              <code className="text-sm text-gray-600 dark:text-gray-400">{tool.returns}</code>
            </div>
          )}

          {/* Example */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">示例</h4>
              <button
                onClick={copyExample}
                className="flex items-center gap-1 text-xs text-gray-500 hover:text-orange-600 transition"
              >
                {copied ? (
                  <><Check className="w-3 h-3" /> <span>已复制</span></>
                ) : (
                  <><Copy className="w-3 h-3" /> <span>复制</span></>
                )}
              </button>
            </div>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm overflow-x-auto">
              <code className="font-mono">{tool.example}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ApiReferencePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = toolCategories.map(cat => ({
    ...cat,
    tools: cat.tools.filter(tool =>
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => cat.tools.length > 0);

  const displayedCategories = activeCategory
    ? filteredCategories.filter(cat => cat.id === activeCategory)
    : filteredCategories;

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
                <span className="text-2xl font-bold text-gray-900 dark:text-white hidden sm:inline">OpenClaw</span>
              </Link>
              <span className="text-gray-400 hidden sm:inline">/</span>
              <span className="text-gray-600 dark:text-gray-400">API 参考</span>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="py-16 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              API 参考
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              OpenClaw 工具 API 完整参考文档
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜索工具..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Category Filter */}
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">工具分类</h3>
              <div className="space-y-1">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                    activeCategory === null
                      ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  全部工具
                </button>
                {toolCategories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition ${
                        activeCategory === cat.id
                          ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {cat.name}
                    </button>
                  );
                })}
              </div>

              {/* Tool Groups */}
              <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">工具组简写</h3>
                <ul className="space-y-1 text-sm">
                  <li className="text-gray-600 dark:text-gray-400"><code className="text-orange-600">group:runtime</code> - exec, bash, process</li>
                  <li className="text-gray-600 dark:text-gray-400"><code className="text-orange-600">group:fs</code> - read, write, edit</li>
                  <li className="text-gray-600 dark:text-gray-400"><code className="text-orange-600">group:web</code> - web_search, web_fetch</li>
                  <li className="text-gray-600 dark:text-gray-400"><code className="text-orange-600">group:ui</code> - browser, canvas</li>
                  <li className="text-gray-600 dark:text-gray-400"><code className="text-orange-600">group:messaging</code> - message</li>
                  <li className="text-gray-600 dark:text-gray-400"><code className="text-orange-600">group:automation</code> - cron, gateway</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {displayedCategories.map((category) => {
              const Icon = category.icon;
              return (
                <section key={category.id} className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-${category.color}-100 dark:bg-${category.color}-900/30`}>
                      <Icon className={`w-6 h-6 text-${category.color}-600 dark:text-${category.color}-400`} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{category.name}</h2>
                      <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {category.tools.map((tool) => (
                      <ToolCard key={tool.name} tool={tool} color={category.color} />
                    ))}
                  </div>
                </section>
              );
            })}

            {displayedCategories.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">没有找到匹配的工具</p>
              </div>
            )}
          </div>
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
              <p className="text-gray-400 text-sm">
                开源 AI 网关，连接你的数字生活
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">文档</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/docs/quickstart" className="hover:text-white">快速开始</Link></li>
                <li><Link href="/docs/install" className="hover:text-white">安装指南</Link></li>
                <li><Link href="/docs/config" className="hover:text-white">配置参考</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">社区</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="https://github.com/openclaw/openclaw" className="hover:text-white">GitHub</a></li>
                <li><a href="https://discord.com/invite/clawd" className="hover:text-white">Discord</a></li>
                <li><a href="https://docs.openclaw.ai" className="hover:text-white">官方文档</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">资源</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/blog" className="hover:text-white">博客</Link></li>
                <li><Link href="/cases" className="hover:text-white">案例</Link></li>
                <li><Link href="/api-reference" className="hover:text-white">API 参考</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© 2026 OpenClaw 中文教程. 基于 MIT 协议开源.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
