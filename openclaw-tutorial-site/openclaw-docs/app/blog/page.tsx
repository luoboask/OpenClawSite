import Link from 'next/link'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'

export const metadata = {
  title: '博客 - OpenClaw 中文教程',
  description: 'OpenClaw 最新动态、使用技巧和深度文章',
}

const blogPosts = [
  {
    id: '5-self-hosted-automation-tools-2025',
    title: '2025年最值得关注的5个自托管自动化工具',
    excerpt: '介绍 n8n、Activepieces、Hoarder、Dify、OpenWebUI 等热门工具，以及如何与 OpenClaw 组合构建个人 AI 助手集群。',
    date: '2025-02-15',
    readTime: '8 分钟',
    category: '趋势解读',
    featured: false,
  },
  {
    id: 'openclaw-guide',
    title: 'OpenClaw 完全指南：自托管 AI 网关的最新玩法与配置技巧',
    excerpt: '本文整理了 OpenClaw 的核心功能、最新配置技巧和实战经验，帮助用户快速搭建个人 AI 助手。包含 WhatsApp/Telegram 详细配置、工具系统详解、模型提供商列表等。',
    date: '2026-02-14',
    readTime: '25 分钟',
    category: '完全指南',
    featured: true,
  },
  {
    id: 'whatsapp-setup',
    title: 'WhatsApp 接入实战：从零开始配置你的 AI 助手',
    excerpt: '详细介绍如何通过 WhatsApp 与 OpenClaw 配对，包括 QR 码扫描、访问控制策略、确认反应设置等实用技巧。',
    date: '2026-02-10',
    readTime: '15 分钟',
    category: '实战教程',
    featured: false,
  },
  {
    id: 'telegram-bot',
    title: 'Telegram Bot 配置详解：最简单的接入方式',
    excerpt: 'Telegram 是 OpenClaw 中最容易配置的渠道。本文详细介绍如何创建 Bot、获取 Token、设置群组权限等。',
    date: '2026-02-08',
    readTime: '10 分钟',
    category: '频道配置',
    featured: false,
  },
  {
    id: 'tools-overview',
    title: 'OpenClaw 工具系统全景：赋能 AI Agent 的利器',
    excerpt: '深入解析 OpenClaw 的工具系统，包括 Browser、Exec、Web Search、Canvas、Nodes 等核心工具的使用方法和配置技巧。',
    date: '2026-02-05',
    readTime: '20 分钟',
    category: '技术解析',
    featured: false,
  },
  {
    id: 'model-providers',
    title: 'OpenClaw 支持的模型提供商一览',
    excerpt: 'OpenClaw 支持众多 LLM 提供商，包括 Venice AI、Anthropic、OpenAI、Moonshot 等。本文详细介绍各提供商的特点和配置方法。',
    date: '2026-02-01',
    readTime: '12 分钟',
    category: '配置参考',
    featured: false,
  },
  {
    id: 'security-best-practices',
    title: 'OpenClaw 安全配置最佳实践',
    excerpt: '如何安全地部署 OpenClaw？本文介绍访问控制、配对模式、工具权限限制等安全相关的配置建议。',
    date: '2026-01-28',
    readTime: '15 分钟',
    category: '安全指南',
    featured: false,
  },
]

const categories = ['全部', '完全指南', '实战教程', '频道配置', '技术解析', '配置参考', '安全指南']

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white">
      {/* Hero Section */}
      <section className="py-16 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              OpenClaw 博客
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              最新动态与深度文章
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              探索 OpenClaw 的无限可能，从入门指南到高级技巧，这里有你需要的一切
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  index === 0
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <span className="text-sm font-medium text-orange-600">精选文章</span>
            </div>
            <Link href={`/blog/${featuredPost.id}`} className="group block">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition border border-gray-200 dark:border-gray-700">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 p-12 flex items-center justify-center">
                    <div className="text-center text-white">
                      <BookOpen className="w-20 h-20 mx-auto mb-4 opacity-80" />
                      <span className="text-6xl font-bold">{featuredPost.readTime.split(' ')[0]}</span>
                      <span className="text-xl block mt-2">分钟阅读</span>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {featuredPost.date}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center text-orange-600 font-medium">
                      阅读全文 <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group block">
                <article className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition border border-gray-200 dark:border-gray-700 overflow-hidden h-full flex flex-col">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 p-6">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-white/80 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center text-orange-600 text-sm font-medium">
                      阅读更多 <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              订阅更新
            </h2>
            <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
              第一时间获取 OpenClaw 的最新功能、教程和最佳实践
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="输入你的邮箱"
                className="px-4 py-3 rounded-lg flex-1 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition">
                订阅
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Link */}
      <section className="py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            想要贡献文章？访问我们的{' '}
            <a href="https://github.com/openclaw/openclaw" className="text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
