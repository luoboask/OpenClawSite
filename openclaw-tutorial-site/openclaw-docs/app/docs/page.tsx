import Link from 'next/link'
import { FolderOpen } from 'lucide-react'

export const metadata = {
  title: '文档中心 - OpenClaw 中文教程',
  description: 'OpenClaw 完整中文文档，包含安装、配置、频道接入和工具开发指南',
}

const sections = [
  {
    title: '入门',
    items: [
      { title: '什么是 OpenClaw？', href: '/docs/intro', desc: '了解 OpenClaw 的核心概念和架构' },
      { title: '快速开始', href: '/docs/quickstart', desc: '5 分钟完成部署' },
      { title: '安装指南', href: '/docs/install', desc: '详细安装步骤和各平台说明' },
    ]
  },
  {
    title: '配置',
    items: [
      { title: '配置文件详解', href: '/docs/config', desc: 'openclaw.json 完整配置参考' },
      { title: 'AI 提供商设置', href: '/docs/config/providers', desc: '配置 Claude、GPT 等模型' },
      { title: '会话管理', href: '/docs/config/sessions', desc: '会话隔离和持久化' },
    ]
  },
  {
    title: '频道接入',
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
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">文档中心</h1>
        <p className="text-xl text-gray-600">
          完整的中文文档，帮助你掌握 OpenClaw 的各个方面
        </p>
      </div>

      <div className="grid gap-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <FolderOpen className="w-5 h-5 mr-2 text-orange-600" />
              {section.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">贡献文档</h2>
        <p className="text-gray-600 mb-4">
          发现文档有误或想要补充内容？欢迎提交 Pull Request。
        </p>
        <a 
          href="https://github.com/openclaw/openclaw" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-orange-600 hover:underline font-medium"
        >
          访问 GitHub →
        </a>
      </div>
    </div>
  )
}
