"use client";

import Link from 'next/link'
import { BookOpen, Zap, Shield, MessageCircle, Terminal, ChevronRight } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { SearchButton, SearchModal } from '@/components/search'
import { MobileNav } from '@/components/mobile-nav'
import { useState } from 'react'

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white transition-colors duration-200">
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">OpenClaw</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 ml-2 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">中文教程</span>
            </div>
            <div className="hidden md:flex space-x-6 items-center">
              <Link href="/docs" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition">文档</Link>
              <Link href="/tutorials" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition">教程</Link>
              <Link href="/channels" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition">频道接入</Link>
              <Link href="/tools" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition">工具</Link>
              <SearchButton onClick={() => setIsSearchOpen(true)} />
              <ThemeToggle />
            </div>
            <div className="flex items-center gap-2">
              <Link 
                href="/docs/quickstart" 
                className="hidden sm:block bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
              >
                快速开始
              </Link>
              <MobileNav />
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              自托管 AI 网关
              <span className="block text-orange-600 mt-2">连接你的所有聊天应用</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              OpenClaw 是一个开源的 AI 网关，让你可以通过 WhatsApp、Telegram、Discord、iMessage 等应用
              与你的个人 AI 助手对话。完全自托管，数据掌控在你手中。
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                href="/docs/quickstart"
                className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition flex items-center"
              >
                <Terminal className="w-5 h-5 mr-2" />
                5 分钟快速部署
              </Link>
              <Link 
                href="/docs"
                className="bg-white text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold hover:border-orange-600 hover:text-orange-600 transition flex items-center"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                浏览文档
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">为什么选择 OpenClaw？</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              专为开发者和高级用户设计，提供完整的 AI 助手自托管解决方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "完全自托管",
                desc: "运行在你自己的设备上，数据不出境，隐私完全掌控"
              },
              {
                icon: MessageCircle,
                title: "多频道支持",
                desc: "同时接入 WhatsApp、Telegram、Discord、iMessage 等"
              },
              {
                icon: Zap,
                title: "原生 Agent 支持",
                desc: "内置工具调用、会话管理、记忆功能和多 Agent 路由"
              },
              {
                icon: BookOpen,
                title: "开源免费",
                desc: "MIT 协议开源，社区驱动，永久免费使用"
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gray-50 hover:bg-orange-50 transition group">
                <feature.icon className="w-12 h-12 text-orange-600 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Channels */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">支持的聊天应用</h2>
            <p className="text-gray-600">一个网关，连接所有你喜欢的应用</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['WhatsApp', 'Telegram', 'Discord', 'iMessage', 'Signal', 'Slack', 'Matrix', 'WebChat'].map((channel) => (
              <div key={channel} className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-gray-600" />
                </div>
                <span className="font-medium text-gray-900">{channel}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">快速开始</h2>
            <p className="text-gray-600">选择适合你的学习方式</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "新手指南",
                desc: "第一次使用 OpenClaw？从安装到配置，手把手教你完成部署",
                link: "/docs/quickstart",
                color: "bg-blue-500"
              },
              {
                title: "频道配置",
                desc: "学习如何接入 WhatsApp、Telegram 等聊天应用",
                link: "/channels",
                color: "bg-green-500"
              },
              {
                title: "进阶教程",
                desc: "掌握工具开发、Agent 配置、自动化等高级功能",
                link: "/tutorials",
                color: "bg-purple-500"
              }
            ].map((card, idx) => (
              <Link key={idx} href={card.link} className="group block">
                <div className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition border border-transparent hover:border-gray-100">
                  <div className={`w-12 h-12 ${card.color} rounded-lg mb-4 flex items-center justify-center`}>
                    <ChevronRight className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition">{card.title}</h3>
                  <p className="text-gray-600 mb-4">{card.desc}</p>
                  <span className="text-orange-600 font-medium flex items-center">
                    开始学习 <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
              <h4 className="font-semibold mb-4">关于</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-white">关于本站</Link></li>
                <li><Link href="/changelog" className="hover:text-white">更新日志</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© 2026 OpenClaw 中文教程. 基于 MIT 协议开源.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
