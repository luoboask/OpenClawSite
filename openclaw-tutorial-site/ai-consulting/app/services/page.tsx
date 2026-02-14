import Link from 'next/link'
import { Bot, Code, Workflow, MessageSquare, Shield, Clock, ArrowRight } from 'lucide-react'

export const metadata = {
  title: '服务项目 - AI咨询中心',
  description: 'OpenClaw 部署、AI 工具开发、自动化工作流、智能客服等 AI 咨询服务',
}

const services = [
  {
    icon: Bot,
    title: 'OpenClaw 部署服务',
    description: '专业的 OpenClaw 自托管 AI 网关部署服务，帮助您快速搭建私有的 AI 助手系统。',
    features: [
      '服务器环境配置与优化',
      'OpenClaw 安装与初始化',
      'WhatsApp/Telegram/Discord 频道接入',
      '安全配置与访问控制',
      '使用培训与文档交付'
    ],
    price: '¥1,999 起',
    href: '/services/openclaw'
  },
  {
    icon: Code,
    title: 'AI 工具开发',
    description: '基于 OpenClaw 框架开发定制化 AI 工具，让 Agent 具备专业领域能力。',
    features: [
      '业务需求分析',
      '自定义工具设计',
      '代码开发与测试',
      '工具集成与部署',
      '使用培训与维护'
    ],
    price: '¥3,999 起',
    href: '/services/development'
  },
  {
    icon: Workflow,
    title: '自动化工作流',
    description: '设计和实施 AI 驱动的自动化流程，大幅提升业务效率。',
    features: [
      '现有流程分析',
      '自动化方案设计',
      '工具开发与集成',
      '流程测试与优化',
      '监控与报告'
    ],
    price: '¥5,999 起',
    href: '/services/automation'
  },
  {
    icon: MessageSquare,
    title: '智能客服系统',
    description: '构建企业级 AI 客服系统，7x24 小时响应客户需求。',
    features: [
      '知识库构建',
      '对话流程设计',
      '多渠道接入',
      '人机协作机制',
      '数据分析与优化'
    ],
    price: '¥8,999 起',
    href: '/services/chatbot'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-purple-700 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AI咨询中心</span>
            </Link>
            <Link href="/" className="text-gray-600 hover:text-violet-600">← 返回首页</Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">服务项目</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            全方位的 AI 技术服务，从咨询到落地，助力您的智能化转型
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition">
              <div className="p-8">
                <div className="w-14 h-14 bg-violet-50 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-violet-600" />
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center text-gray-700">
                      <Shield className="w-4 h-4 text-violet-600 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div>
                    <span className="text-sm text-gray-500">参考价格</span>
                    <div className="text-2xl font-bold text-violet-600">{service.price}</div>
                  </div>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center bg-violet-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-violet-700 transition"
                  >
                    咨询详情
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-violet-600 to-purple-700 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Clock className="w-8 h-8 mx-auto mb-3 text-violet-200" />
              <h3 className="font-semibold mb-2">快速响应</h3>
              <p className="text-violet-100 text-sm">24小时内响应咨询，紧急需求优先处理</p>
            </div>
            <div>
              <Shield className="w-8 h-8 mx-auto mb-3 text-violet-200" />
              <h3 className="font-semibold mb-2">质量保障</h3>
              <p className="text-violet-100 text-sm">交付后 30 天内免费修复问题</p>
            </div>
            <div>
              <Bot className="w-8 h-8 mx-auto mb-3 text-violet-200" />
              <h3 className="font-semibold mb-2">持续支持</h3>
              <p className="text-violet-100 text-sm">提供长期技术支持和升级服务</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
