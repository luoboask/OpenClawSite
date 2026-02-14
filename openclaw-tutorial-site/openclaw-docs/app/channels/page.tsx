import Link from 'next/link'
import { MessageCircle, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata = {
  title: '频道接入 - OpenClaw 中文教程',
  description: '学习如何将 OpenClaw 接入 WhatsApp、Telegram、Discord 等聊天应用',
}

const channels = [
  {
    name: 'WhatsApp',
    desc: '通过 WhatsApp 个人账号与 AI 助手对话，支持文字、图片、语音',
    href: '/docs/channels/whatsapp',
    status: '稳定',
    color: 'green',
  },
  {
    name: 'Telegram',
    desc: '创建 Telegram Bot，支持私聊、群组和频道',
    href: '/docs/channels/telegram',
    status: '稳定',
    color: 'blue',
  },
  {
    name: 'Discord',
    desc: '集成 Discord Bot，支持服务器部署和角色权限',
    href: '/docs/channels/discord',
    status: '稳定',
    color: 'purple',
  },
  {
    name: 'iMessage',
    desc: 'macOS 原生消息应用集成，支持 BlueBubbles',
    href: '/docs/channels/imessage',
    status: '稳定',
    color: 'gray',
  },
  {
    name: 'Signal',
    desc: 'Signal 消息接入，注重隐私安全',
    href: '/docs/channels/signal',
    status: 'Beta',
    color: 'blue',
  },
  {
    name: 'Slack',
    desc: 'Slack 工作区集成，适合团队协作',
    href: '/docs/channels/slack',
    status: '稳定',
    color: 'red',
  },
]

export default function ChannelsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              频道接入
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              OpenClaw 支持多种聊天应用接入，一个 Gateway 服务所有平台。
              <br className="hidden md:block" />
              选择你想要接入的平台开始配置。
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((channel) => (
            <Link
              key={channel.name}
              href={channel.href}
              className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 bg-${channel.color}-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <MessageCircle className={`w-7 h-7 text-${channel.color}-600`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {channel.name}
                    </h3>
                    <span className={`
                      text-xs font-medium px-2.5 py-1 rounded-full
                      ${channel.status === '稳定' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'}
                    `}>
                      {channel.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {channel.desc}
                  </p>
                  <div className="flex items-center text-orange-600 font-medium text-sm group-hover:gap-2 transition-all">
                    查看配置指南
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Features */}
        <div className="mt-16 bg-white rounded-2xl border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            频道特性
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">访问控制</h3>
              <p className="text-gray-600 text-sm">
                配置 allowFrom 限制谁可以访问你的 AI 助手，保护隐私安全
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">群组支持</h3>
              <p className="text-gray-600 text-sm">
                大多数频道支持群组接入，可配置是否需要 @提及触发回复
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">多频道并行</h3>
              <p className="text-gray-600 text-sm">
                同时启用多个频道，一个 Gateway 服务所有聊天应用
              </p>
            </div>
          </div>
        </div>

        {/* Quick Start */}
        <div className="mt-8 text-center">
          <Link
            href="/docs/channels"
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition"
          >
            查看完整频道文档
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
