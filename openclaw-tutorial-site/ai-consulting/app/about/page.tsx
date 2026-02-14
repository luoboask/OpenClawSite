import Link from 'next/link'
import { ArrowLeft, Brain, Target, Heart, Shield, CheckCircle, Mail, MapPin } from 'lucide-react'

export const metadata = {
  title: '关于我们 - AI咨询中心',
  description: '了解 AI咨询中心的团队、使命和价值观',
}

const values = [
  {
    icon: Target,
    title: '客户至上',
    description: '以客户需求为中心，提供最适合的解决方案，而非最昂贵的方案。'
  },
  {
    icon: Brain,
    title: '技术驱动',
    description: '紧跟 AI 技术发展前沿，将最新、最好的技术应用到实际项目中。'
  },
  {
    icon: Shield,
    title: '安全可靠',
    description: '重视数据安全和隐私保护，自托管方案确保您的数据完全可控。'
  },
  {
    icon: Heart,
    title: '长期陪伴',
    description: '不做一锤子买卖，提供持续的技术支持和维护服务。'
  }
]

const team = [
  {
    name: '技术负责人',
    role: '创始人 & 首席架构师',
    description: '10年+ 软件架构经验，OpenClaw 早期贡献者，专注于 AI 系统设计和实现。'
  },
  {
    name: 'AI 工程师',
    role: 'AI 解决方案专家',
    description: '深耕大语言模型应用开发，擅长将 AI 能力转化为实际业务价值。'
  },
  {
    name: '产品经理',
    role: '客户成功负责人',
    description: '负责需求分析和项目管理，确保每个项目都能按时高质量交付。'
  }
]

const milestones = [
  { year: '2024', event: '团队成立，专注 OpenClaw 技术研究和应用' },
  { year: '2024', event: '完成首个企业级 OpenClaw 部署项目' },
  { year: '2025', event: '服务客户突破 50 家' },
  { year: '2025', event: '推出 AI 工具开发和自动化服务' }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-purple-700 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
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
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">关于我们</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们是一支专注于 OpenClaw 和 AI 技术的团队，致力于帮助企业和个人
            轻松实现 AI 应用落地。
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl p-12 text-white mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">我们的使命</h2>
            <p className="text-xl text-violet-100 leading-relaxed">
              "让每个人都能轻松拥有自己的 AI 助手。我们相信 AI 技术不应该只属于大公司，
              通过 OpenClaw 这样的开源工具，任何人都可以构建自己的 AI 系统。"
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">核心价值观</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-14 h-14 bg-violet-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-violet-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">核心团队</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{member.name[0]}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-1">{member.name}</h3>
                <p className="text-violet-600 text-center text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 text-center">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">发展历程</h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-lg font-bold text-violet-600">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 bg-violet-600 rounded-full"></div>
                  {idx < milestones.length - 1 && (
                    <div className="absolute top-4 left-2 w-0.5 h-12 bg-violet-200 -translate-x-1/2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <p className="text-gray-700">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why OpenClaw */}
        <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">为什么选择 OpenClaw？</h2>
              <p className="text-gray-600 mb-6">
                在众多 AI 平台中，我们选择专注于 OpenClaw，因为它代表了 AI 应用的未来方向：
                自主可控、开源开放、灵活强大。
              </p>
              <ul className="space-y-4">
                {[
                  '自托管：数据完全属于自己的服务器',
                  '开源：MIT 许可证，无商业限制',
                  '多频道：同时支持 WhatsApp、Telegram、Discord 等',
                  '可扩展：易于开发自定义工具',
                  '社区活跃：持续更新和优化'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-violet-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-8">
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "OpenClaw 是目前最适合个人和企业自托管的 AI 网关解决方案。
                它让 AI 真正成为你的工具，而不是把你变成平台的用户。"
              </blockquote>
              <p className="text-gray-500">— 团队负责人</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">联系我们</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <a href="mailto:contact@example.com" className="flex items-center justify-center text-gray-600 hover:text-violet-600">
              <Mail className="w-5 h-5 mr-2" />
              contact@example.com
            </a>
            <div className="flex items-center justify-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2" />
              远程服务，全球可达
            </div>
          </div>
          <div className="mt-8">
            <Link 
              href="/contact"
              className="inline-flex items-center bg-violet-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-violet-700 transition"
            >
              预约咨询
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
