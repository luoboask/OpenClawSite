import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export const metadata = {
  title: '频道接入 - OpenClaw 中文教程',
  description: '学习如何将 OpenClaw 接入各种聊天应用',
}

const channels = [
  {
    name: 'WhatsApp',
    desc: '通过 WhatsApp 个人账号与 AI 助手对话',
    href: '/docs/channels/whatsapp',
    status: '稳定'
  },
  {
    name: 'Telegram',
    desc: '创建 Telegram Bot，支持私聊和群组',
    href: '/docs/channels/telegram',
    status: '稳定'
  },
  {
    name: 'Discord',
    desc: '集成 Discord Bot，支持服务器部署',
    href: '/docs/channels/discord',
    status: '稳定'
  },
  {
    name: 'iMessage',
    desc: 'macOS 原生消息应用集成（仅限 Mac）',
    href: '/docs/channels/imessage',
    status: '稳定'
  },
  {
    name: 'Signal',
    desc: 'Signal 消息接入',
    href: '/docs/channels/signal',
    status: 'Beta'
  },
  {
    name: 'Slack',
    desc: 'Slack 工作区集成',
    href: '/docs/channels/slack',
    status: '稳定'
  },
]

export default function ChannelsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">频道接入</h1>
        <p className="text-xl text-gray-600">
          OpenClaw 支持多种聊天应用接入，选择你想要接入的平台
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {channels.map((channel) => (
          <Link
            key={channel.name}
            href={channel.href}
            className="group flex items-start p-6 bg-white border border-gray-200 rounded-xl hover:border-orange-500 hover:shadow-lg transition"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mr-4 group-hover:from-orange-100 group-hover:to-orange-200 transition">
              <MessageCircle className="w-6 h-6 text-gray-600 group-hover:text-orange-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600">
                  {channel.name}
                </h3>
                <span className={`
                  text-xs px-2 py-1 rounded-full
                  ${channel.status === '稳定' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}
                `}>
                  {channel.status}
                </span>
              </div>
              <p className="text-gray-600">{channel.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-xl">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">频道配置要点</h2>
        <div className="space-y-4 text-gray-600">
          <p><strong>访问控制：</strong> 建议始终配置 <code>allowFrom</code> 限制谁可以访问你的 AI 助手。</p>
          <p><strong>群组支持：</strong> 大多数频道支持群组接入，可配置是否需要 @提及。</p>
          <p><strong>多频道并行：</strong> 可以同时启用多个频道，一个 Gateway 服务所有应用。</p>
        </div>
      </div>
    </div>
  )
}
