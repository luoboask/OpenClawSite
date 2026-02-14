import Link from 'next/link'
import { FolderOpen, ArrowRight, BookOpen, Settings, MessageCircle, Wrench } from 'lucide-react'
import { PageLayout, Grid, ContentCard } from '@/components/page-layout'

export const metadata = {
  title: '文档中心 - OpenClaw 中文教程',
  description: 'OpenClaw 完整中文文档，包含安装、配置、频道接入和工具开发指南',
}

const sections = [
  {
    title: '入门',
    icon: BookOpen,
    color: 'blue',
    items: [
      { title: '什么是 OpenClaw？', href: '/docs/intro', desc: '了解 OpenClaw 的核心概念和架构' },
      { title: '快速开始', href: '/docs/quickstart', desc: '5 分钟完成部署' },
      { title: '安装指南', href: '/docs/install', desc: '详细安装步骤和各平台说明' },
    ]
  },
  {
    title: '配置',
    icon: Settings,
    color: 'purple',
    items: [
      { title: '配置文件详解', href: '/docs/config', desc: 'openclaw.json 完整配置参考' },
      { title: 'AI 提供商设置', href: '/docs/config/providers', desc: '配置 Claude、GPT 等模型' },
      { title: '会话管理', href: '/docs/config/sessions', desc: '会话隔离和持久化' },
    ]
  },
  {
    title: '频道接入',
    icon: MessageCircle,
    color: 'green',
    items: [
      { title: 'WhatsApp', href: '/docs/channels/whatsapp', desc: '接入 WhatsApp 个人账号' },
      { title: 'Telegram', href: '/docs/channels/telegram', desc: '创建 Telegram Bot' },
      { title: 'Discord', href: '/docs/channels/discord', desc: '配置 Discord Bot' },
      { title: 'iMessage', href: '/docs/channels/imessage', desc: 'macOS iMessage 集成' },
      { title: 'Signal', href: '/docs/channels/signal', desc: 'Signal 消息接入' },
      { title: 'Slack', href: '/docs/channels/slack', desc: 'Slack 工作区集成' },
    ]
  },
  {
    title: '进阶',
    icon: Wrench,
    color: 'orange',
    items: [
      { title: '进阶技巧', href: '/docs/advanced', desc: '提升效率的使用技巧' },
      { title: '工具开发', href: '/docs/tools', desc: '为 Agent 创建自定义工具' },
      { title: '安全指南', href: '/docs/security', desc: '访问控制和数据安全' },
      { title: '故障排查', href: '/docs/troubleshooting', desc: '常见问题解决方法' },
      { title: '更新日志', href: '/changelog', desc: '版本更新记录' },
    ]
  },
]

export default function DocsIndexPage() {
  return (
    <PageLayout
      title="文档中心"
      description="完整的中文文档，帮助你掌握 OpenClaw 的各个方面"
    >
      <div className="space-y-12">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center">
                <span className={`w-10 h-10 bg-${section.color}-100 rounded-xl flex items-center justify-center mr-3`}>
                  <Icon className={`w-5 h-5 text-${section.color}-600`} />
                </span>
                {section.title}
              </h2>
              <Grid cols={3}>
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group block p-5 bg-white border border-gray-200 rounded-xl hover:border-orange-500 hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 mb-2 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </Link>
                ))}
              </Grid>
            </div>
          )
        })}
      </div>

      <div className="mt-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold mb-2">贡献文档</h2>
            <p className="text-white/90">
              发现文档有误或想要补充内容？欢迎提交 Pull Request。
            </p>
          </div>
          <a 
            href="https://github.com/openclaw/openclaw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition flex-shrink-0"
          >
            访问 GitHub
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </PageLayout>
  )
}
