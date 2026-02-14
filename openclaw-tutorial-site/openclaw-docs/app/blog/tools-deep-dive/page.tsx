"use client";

import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { MobileNav } from '@/components/mobile-nav'

export default function ToolsDeepDivePage() {
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

      <header className="py-12 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-orange-600 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />返回博客
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-sm rounded-full">工具教程</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">工具系统深度解析</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">20+ 工具使用指南</p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-2"><User className="w-4 h-4" />OpenClaw 中文社区</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />2026-02-14</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" />12 分钟阅读</span>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Browser 工具</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">控制 OpenClaw 管理的浏览器，支持截图、页面快照、UI 操作等功能。</p>
            
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// 启动浏览器
browser({ action: "start" })

// 截图
browser({ action: "screenshot", fullPage: true })

// 页面快照
browser({ action: "snapshot" })`}
            </pre>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Exec 工具</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">在 workspace 中运行 shell 命令。</p>
            
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`exec({ 
  command: "npm install",
  timeout: 300,
  background: false
})`}
            </pre>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Web 工具</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">搜索和获取网页内容。</p>
            
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// 搜索
web_search({ query: "OpenClaw tutorial", count: 10 })

// 获取页面
web_fetch({ 
  url: "https://docs.openclaw.ai", 
  extractMode: "markdown" 
})`}
            </pre>
          </section>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <p className="text-blue-800 dark:text-blue-300 m-0">
              <strong>完整指南</strong>：更多工具详情请参考 
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
