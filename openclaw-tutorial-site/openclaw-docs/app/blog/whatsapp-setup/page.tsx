"use client";

import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { MobileNav } from '@/components/mobile-nav'

export default function WhatsappSetupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white transition-colors duration-200">
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">OpenClaw</span>
            </Link>
            <div className="flex items-center gap-4"><ThemeToggle /><MobileNav /></div>
          </div>
        </div>
      </nav>

      <header className="py-12 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-orange-600 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />返回博客
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm rounded-full">渠道配置</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">WhatsApp 接入实战</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">从零开始配置你的 AI 助手</p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-2"><User className="w-4 h-4" />OpenClaw 中文社区</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />2026-02-14</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" />8 分钟阅读</span>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">准备工作</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              在开始之前，请确保你已经完成了 OpenClaw 的安装。如果还没有安装，请参考
              <Link href="/docs/quickstart" className="text-orange-600 hover:underline">快速开始指南</Link>。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">配置访问策略</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">编辑你的 OpenClaw 配置文件，添加 WhatsApp 渠道配置：</p>
            
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`{
  "channels": {
    "whatsapp": {
      "dmPolicy": "pairing",
      "allowFrom": ["+8613800138000"],
      "groupPolicy": "allowlist"
    }
  }
}`}
            </pre>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">QR 码配对</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">运行以下命令开始配对：</p>
            
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
openclaw channels login --channel whatsapp
            </pre>
            
            <p className="text-gray-700 dark:text-gray-300 mt-4">扫描终端显示的 QR 码，完成 WhatsApp 配对。</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">启动 Gateway</h2>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
openclaw gateway
            </pre>
          </section>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <p className="text-blue-800 dark:text-blue-300 m-0">
              <strong>提示</strong>：完整配置选项请参考 
              <Link href="/blog/openclaw-complete-guide" className="underline">OpenClaw 完全指南</Link>
            </p>
          </div>
        </article>
      </div>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 OpenClaw 中文教程</p>
        </div>
      </footer>
    </div>
  );
}
