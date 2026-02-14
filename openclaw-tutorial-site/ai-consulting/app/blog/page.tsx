import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, Tag, ArrowRight } from 'lucide-react'

export const metadata = {
  title: '技术博客 - AI咨询中心',
  description: 'OpenClaw 和 AI 技术最新资讯、教程和最佳实践',
}

const posts = [
  {
    id: 1,
    title: 'OpenClaw 新手入门：从零开始部署你的 AI 助手',
    excerpt: '详细介绍如何在各种平台上安装和配置 OpenClaw，包括 macOS、Linux 和 Windows 的完整步骤。',
    author: '技术团队',
    date: '2025-02-10',
    readTime: '15 分钟',
    category: '教程',
    tags: ['OpenClaw', '部署', '入门'],
    featured: true
  },
  {
    id: 2,
    title: 'OpenClaw 配置详解：openclaw.json 完全指南',
    excerpt: '深入解析 OpenClaw 的配置文件，了解每个配置项的作用和最佳实践。',
    author: '技术团队',
    date: '2025-02-08',
    readTime: '12 分钟',
    category: '教程',
    tags: ['OpenClaw', '配置', '进阶'],
    featured: false
  },
  {
    id: 3,
    title: '如何在 OpenClaw 中接入 WhatsApp Business API',
    excerpt: '一步步教你配置 WhatsApp Business API，让你的 AI 助手能够通过 WhatsApp 与用户对话。',
    author: '技术团队',
    date: '2025-02-05',
    readTime: '10 分钟',
    category: '实战',
    tags: ['OpenClaw', 'WhatsApp', '集成'],
    featured: false
  },
  {
    id: 4,
    title: 'OpenClaw vs 其他 AI 平台：为什么选择自托管？',
    excerpt: '对比分析 OpenClaw 与其他 AI 平台的优缺点，帮助你做出正确选择。',
    author: '产品经理',
    date: '2025-02-01',
    readTime: '8 分钟',
    category: '观点',
    tags: ['OpenClaw', '对比', '选型'],
    featured: false
  },
  {
    id: 5,
    title: '为 OpenClaw 开发自定义工具：实战案例',
    excerpt: '通过一个实际案例，学习如何为 OpenClaw 开发自定义工具，扩展 AI 助手的能力。',
    author: '技术团队',
    date: '2025-01-28',
    readTime: '20 分钟',
    category: '教程',
    tags: ['OpenClaw', '开发', '工具'],
    featured: false
  },
  {
    id: 6,
    title: 'OpenClaw 性能优化：让你的 AI 助手跑得更快',
    excerpt: '分享 OpenClaw 的性能优化技巧，包括缓存配置、模型选择和系统调优。',
    author: '技术团队',
    date: '2025-01-25',
    readTime: '10 分钟',
    category: '优化',
    tags: ['OpenClaw', '性能', '优化'],
    featured: false
  }
]

const categories = ['全部', '教程', '实战', '观点', '优化', '新闻']

export default function BlogPage() {
  const featuredPost = posts.find(p => p.featured)
  const regularPosts = posts.filter(p => !p.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-purple-700 rounded-lg flex items-center justify-center">
                <Tag className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AI咨询中心</span>
            </Link>
            <Link href="/" className="text-gray-600 hover:text-violet-600 flex items-center">
              <ArrowLeft className="w-4 h-4 mr-1" />
              返回首页
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">技术博客</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            OpenClaw 和 AI 技术的最新资讯、教程和最佳实践
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                idx === 0 
                  ? 'bg-violet-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-violet-50 hover:text-violet-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <div className="bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl overflow-hidden text-white">
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">精选文章</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">{featuredPost.category}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-violet-100 text-lg mb-6 max-w-3xl">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-6 text-violet-200 mb-6">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <button className="inline-flex items-center bg-white text-violet-600 px-6 py-3 rounded-lg font-semibold hover:bg-violet-50 transition">
                  阅读全文
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition group">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-violet-50 text-violet-700 text-sm rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-violet-600 transition">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="text-sm text-gray-500">#{tag}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">订阅技术周刊</h2>
            <p className="text-gray-600 mb-6">
              每周获取最新的 OpenClaw 和 AI 技术资讯，直达您的邮箱。
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="输入您的邮箱地址"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-violet-500"
              />
              <button
                type="submit"
                className="bg-violet-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-violet-700 transition"
              >
                立即订阅
              </button>
            </form>
            <p className="text-gray-400 text-sm mt-3">我们尊重您的隐私，随时可以取消订阅。</p>
          </div>
        </div>
      </main>
    </div>
  )
}
