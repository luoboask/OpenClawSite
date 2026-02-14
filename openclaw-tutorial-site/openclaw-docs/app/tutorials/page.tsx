import Link from 'next/link'
import { BookOpen, Wrench, Bot, Terminal, ArrowRight, Zap, Shield, Code } from 'lucide-react'

export const metadata = {
  title: '进阶教程 - OpenClaw 中文教程',
  description: '掌握 OpenClaw 高级功能：工具开发、Agent 配置、自动化等',
}

const tutorials = [
  {
    title: '自定义工具开发',
    desc: '学习如何为 OpenClaw 开发自定义工具，扩展 AI 助手的能力',
    href: '/docs/tools',
    icon: Wrench,
    color: 'blue',
    level: '中级',
  },
  {
    title: 'Agent 配置进阶',
    desc: '深入理解 Agent 系统，配置多 Agent 路由和协作',
    href: '/docs/advanced',
    icon: Bot,
    color: 'purple',
    level: '高级',
  },
  {
    title: '自动化工作流',
    desc: '使用 Cron 和工具系统创建自动化任务',
    href: '/docs/advanced',
    icon: Zap,
    color: 'yellow',
    level: '中级',
  },
  {
    title: '安全加固指南',
    desc: '配置访问控制、审计日志和安全最佳实践',
    href: '/docs/security',
    icon: Shield,
    color: 'red',
    level: '高级',
  },
  {
    title: 'API 集成开发',
    desc: '使用 OpenClaw API 构建自定义应用集成',
    href: '/api-reference',
    icon: Code,
    color: 'green',
    level: '中级',
  },
  {
    title: '命令行高级技巧',
    desc: '掌握 openclaw CLI 的高级用法和调试技巧',
    href: '/docs/tools',
    icon: Terminal,
    color: 'gray',
    level: '初级',
  },
]

export default function TutorialsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              进阶教程
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              从入门到精通，掌握 OpenClaw 的高级功能和最佳实践
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => {
            const Icon = tutorial.icon
            return (
              <Link
                key={tutorial.title}
                href={tutorial.href}
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 bg-${tutorial.color}-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 text-${tutorial.color}-600`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                        {tutorial.title}
                      </h3>
                      <span className={`
                        text-xs font-medium px-2.5 py-1 rounded-full
                        ${tutorial.level === '初级' 
                          ? 'bg-green-100 text-green-700'
                          : tutorial.level === '中级'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-purple-100 text-purple-700'}
                      `}>
                        {tutorial.level}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {tutorial.desc}
                    </p>
                    <div className="flex items-center text-orange-600 font-medium text-sm group-hover:gap-2 transition-all">
                      开始学习
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Learning Path */}
        <div className="mt-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">
              系统学习路径
            </h2>
            <p className="text-lg text-white/90 mb-8">
              从基础安装到高级开发，我们为你准备了完整的学习路径。
              按照推荐顺序学习，快速掌握 OpenClaw。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/docs/quickstart"
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                <Zap className="w-5 h-5" />
                从快速开始
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center gap-2 bg-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition"
              >
                <BookOpen className="w-5 h-5" />
                浏览文档
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
