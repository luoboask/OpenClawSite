"use client";

import Link from 'next/link'
import { ArrowLeft, User, Users, Zap, Home, ChevronRight, MessageCircle, Terminal, Shield, Clock, CheckCircle, ExternalLink } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { MobileNav } from '@/components/mobile-nav'
import { useState } from 'react'

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  tags: string[];
  features: string[];
  setup: string[];
  benefits: string[];
  color: string;
  gradient: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "personal-assistant",
    title: "个人 AI 助手",
    subtitle: "开发者日常使用",
    description: "将 OpenClaw 作为你的个人编码助手，通过你最熟悉的聊天应用随时获取 AI 帮助。无论是代码审查、调试还是学习新技术，AI 助手都在你身边。",
    icon: User,
    tags: ["开发者", "个人使用", "效率提升"],
    features: [
      "代码审查与优化建议",
      "实时调试帮助",
      "技术文档查询",
      "代码片段生成",
      "多语言支持"
    ],
    setup: [
      "安装 OpenClaw: npm install -g openclaw@latest",
      "配置 Telegram Bot 或 WhatsApp",
      "设置 coding 工具配置文件",
      "连接 Claude 或 GPT 模型",
      "开始对话！"
    ],
    benefits: [
      "随时随地访问 AI 助手",
      "保留完整对话历史",
      "支持代码文件分享",
      "完全自托管，数据私密"
    ],
    color: "blue",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: "team-collaboration",
    title: "团队协作机器人",
    subtitle: "Slack / Discord 集成",
    description: "为团队部署智能助手，集成到 Slack 或 Discord 工作区。自动化日常任务，回答常见问题，提升团队整体效率。",
    icon: Users,
    tags: ["团队协作", "Slack", "Discord"],
    features: [
      "频道消息自动回复",
      "常见问题智能解答",
      "代码审查协助",
      "会议纪要与待办",
      "团队知识库查询"
    ],
    setup: [
      "创建 Slack App 或 Discord Bot",
      "配置 channels.slack 或 channels.discord",
      "设置 messaging 工具配置",
      "配置群组提及触发规则",
      "邀请 Bot 加入工作区"
    ],
    benefits: [
      "7x24 小时团队支持",
      "减少重复性问题",
      "统一知识管理",
      "提升响应速度"
    ],
    color: "purple",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: "automation-workflow",
    title: "自动化工作流",
    subtitle: "Cron + Tools 集成",
    description: "使用 OpenClaw 的 Cron 工具创建自动化任务。定时执行数据抓取、报告生成、系统监控等任务，并将结果发送到你指定的渠道。",
    icon: Zap,
    tags: ["自动化", "定时任务", "DevOps"],
    features: [
      "定时数据抓取与分析",
      "自动生成日报/周报",
      "系统健康监控告警",
      "自动代码审查",
      "定时备份与维护"
    ],
    setup: [
      "配置 cron 工具权限",
      "使用 cron({ action: 'add', ... }) 创建任务",
      "设置定时规则 (如 '0 9 * * 1' 每周一早9点)",
      "编写任务处理逻辑",
      "配置结果通知渠道"
    ],
    benefits: [
      "解放重复性工作",
      "按时执行无遗漏",
      "异常情况即时通知",
      "可与其他工具链集成"
    ],
    color: "green",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: "smart-home-hub",
    title: "家庭智能中枢",
    subtitle: "Node 设备控制",
    description: "将 OpenClaw 与家庭设备配对，通过自然语言控制智能家居。查看摄像头、控制灯光、查询设备状态，一切尽在聊天对话中。",
    icon: Home,
    tags: ["智能家居", "IoT", "家庭自动化"],
    features: [
      "摄像头实时查看",
      "设备状态查询",
      "远程屏幕录制",
      "位置服务查询",
      "语音命令控制"
    ],
    setup: [
      "在移动设备上安装 OpenClaw Node App",
      "运行 openclaw nodes pair 进行配对",
      "配置 nodes 工具权限",
      "设置访问控制白名单",
      "通过 WhatsApp/Telegram 发送控制命令"
    ],
    benefits: [
      "自然语言控制设备",
      "远程查看家中状况",
      "多设备统一管理",
      "安全可控的访问权限"
    ],
    color: "orange",
    gradient: "from-orange-500 to-red-500"
  }
];

export default function CasesPage() {
  const [activeCase, setActiveCase] = useState<string>(caseStudies[0].id);

  const currentCase = caseStudies.find(c => c.id === activeCase) || caseStudies[0];

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
              <span className="text-gray-600 dark:text-gray-400">案例研究</span>
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
              案例研究
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              探索 OpenClaw 在真实场景中的应用案例，获取灵感和实施指南
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Case Selector */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="sticky top-24">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                选择案例
              </h2>
              <div className="space-y-3">
                {caseStudies.map((caseStudy) => {
                  const Icon = caseStudy.icon;
                  const isActive = activeCase === caseStudy.id;
                  return (
                    <button
                      key={caseStudy.id}
                      onClick={() => setActiveCase(caseStudy.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                        isActive
                          ? `bg-gradient-to-r ${caseStudy.gradient} text-white shadow-lg`
                          : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${
                          isActive ? 'bg-white/20' : `bg-${caseStudy.color}-100 dark:bg-${caseStudy.color}-900/30`
                        }`}>
                          <Icon className={`w-5 h-5 ${
                            isActive ? 'text-white' : `text-${caseStudy.color}-600 dark:text-${caseStudy.color}-400`
                          }`} />
                        </div>
                        <div className="flex-1">
                          <h3 className={`font-semibold ${isActive ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                            {caseStudy.title}
                          </h3>
                          <p className={`text-sm ${isActive ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                            {caseStudy.subtitle}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="mt-8 p-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl text-white">
                <h3 className="font-semibold mb-2">有你的使用案例？</h3>
                <p className="text-sm text-white/90 mb-4">
                  欢迎分享你的 OpenClaw 使用经验，帮助更多用户
                </p>
                <a
                  href="https://github.com/openclaw/openclaw/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                >
                  分享案例 <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Header */}
              <div className={`bg-gradient-to-r ${currentCase.gradient} p-8 text-white`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <currentCase.icon className="w-8 h-8" />
                  </div>
                  <div className="flex gap-2">
                    {currentCase.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/20 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-2">{currentCase.title}</h2>
                <p className="text-white/90 text-lg">{currentCase.subtitle}</p>
              </div>

              <div className="p-8">
                {/* Description */}
                <div className="mb-10">
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    {currentCase.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-orange-500" />
                    核心功能
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {currentCase.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                      >
                        <CheckCircle className={`w-5 h-5 text-${currentCase.color}-500 flex-shrink-0`} />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Setup Steps */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-orange-500" />
                    快速设置
                  </h3>
                  <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                    <div className="space-y-3">
                      {currentCase.setup.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                            {idx + 1}
                          </span>
                          <code className="text-gray-300 text-sm font-mono break-all">
                            {step}
                          </code>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-orange-500" />
                    优势
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {currentCase.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl border border-orange-100 dark:border-orange-800"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-800 dark:text-gray-200 font-medium">{benefit}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/docs/quickstart"
                    className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transition"
                  >
                    开始部署
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/docs/config"
                    className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                  >
                    查看配置指南
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Resources */}
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">相关文档</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/docs/quickstart" className="text-orange-600 dark:text-orange-400 hover:underline">
                      快速开始指南
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/config" className="text-orange-600 dark:text-orange-400 hover:underline">
                      配置参考
                    </Link>
                  </li>
                  <li>
                    <Link href="/api-reference" className="text-orange-600 dark:text-orange-400 hover:underline">
                      API 参考
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">社区资源</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://github.com/openclaw/openclaw/discussions" className="text-orange-600 dark:text-orange-400 hover:underline">
                      GitHub Discussions
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.com/invite/clawd" className="text-orange-600 dark:text-orange-400 hover:underline">
                      Discord 社区
                    </a>
                  </li>
                  <li>
                    <Link href="/blog" className="text-orange-600 dark:text-orange-400 hover:underline">
                      博客文章
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
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
