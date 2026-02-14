import Link from 'next/link'
import { ArrowLeft, Building2, Users, Bot, Clock, CheckCircle, ExternalLink } from 'lucide-react'

export const metadata = {
  title: '案例展示 - AI咨询中心',
  description: 'OpenClaw 部署和 AI 解决方案成功案例展示',
}

const cases = [
  {
    id: 1,
    client: '某跨境电商公司',
    industry: '电商/零售',
    icon: Building2,
    challenge: '客服团队每天处理上千条客户咨询，响应时间长，人力成本高。',
    solution: '部署 OpenClaw + WhatsApp 集成，构建 AI 智能客服系统，自动处理常见问题。',
    results: [
      '客户响应时间从平均 2 小时缩短到 30 秒',
      '客服团队工作量减少 60%',
      '客户满意度提升 25%',
      '年节省人力成本约 30 万元'
    ],
    tags: ['OpenClaw', 'WhatsApp', '智能客服'],
    duration: '2 周',
    year: '2025'
  },
  {
    id: 2,
    client: '科技自媒体工作室',
    industry: '内容创作',
    icon: Users,
    challenge: '需要同时管理多个平台的粉丝互动，内容选题和数据分析耗时。',
    solution: 'OpenClaw 多频道接入（Telegram + Discord），开发定制化内容分析工具。',
    results: [
      '统一管理 3 个平台的粉丝消息',
      'AI 辅助选题效率提升 3 倍',
      '粉丝互动率提升 40%',
      '内容生产周期缩短 50%'
    ],
    tags: ['OpenClaw', 'Telegram', 'Discord', '工具开发'],
    duration: '3 周',
    year: '2025'
  },
  {
    id: 3,
    client: '小型软件开发团队',
    industry: '软件开发',
    icon: Bot,
    challenge: '开发过程中需要频繁查询文档、生成代码片段，工作流程不够顺畅。',
    solution: '部署私有化 OpenClaw 网关，集成代码助手工具，接入 Slack 工作区。',
    results: [
      '代码查询和生成效率提升 5 倍',
      '减少开发文档查阅时间 70%',
      '团队沟通效率提升',
      '数据完全自主可控'
    ],
    tags: ['OpenClaw', 'Slack', '代码助手', '私有化部署'],
    duration: '1 周',
    year: '2024'
  },
  {
    id: 4,
    client: '个人知识管理博主',
    industry: '个人提升',
    icon: Clock,
    challenge: '阅读大量资料后整理笔记效率低，知识检索困难。',
    solution: 'OpenClaw + 飞书集成，构建个人知识管理助手，支持语音/文字记录。',
    results: [
      '笔记整理时间减少 80%',
      '知识检索速度提升 10 倍',
      '构建个人知识库 5000+ 条',
      '随时随地通过语音记录想法'
    ],
    tags: ['OpenClaw', '飞书', '知识管理', '个人助手'],
    duration: '5 天',
    year: '2024'
  }
]

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-purple-700 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">成功案例</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            我们通过 OpenClaw 和 AI 技术，帮助众多客户实现了业务升级
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: '50+', label: '服务客户' },
            { number: '100+', label: '完成项目' },
            { number: '95%', label: '满意度' },
            { number: '24/7', label: '技术支持' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-violet-600 mb-1">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Cases */}
        <div className="space-y-8">
          {cases.map((caseItem) => (
            <div key={caseItem.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Left: Client Info */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-violet-50 rounded-xl flex items-center justify-center">
                        <caseItem.icon className="w-8 h-8 text-violet-600" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">{caseItem.client}</h2>
                        <span className="text-sm text-gray-500">{caseItem.industry}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseItem.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-violet-50 text-violet-700 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {caseItem.duration}
                      </div>
                      <div>{caseItem.year}</div>
                    </div>
                  </div>

                  {/* Right: Details */}
                  <div className="lg:w-2/3 space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">挑战</h3>
                      <p className="text-gray-700">{caseItem.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">解决方案</h3>
                      <p className="text-gray-700">{caseItem.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">成果</h3>
                      <ul className="space-y-2">
                        {caseItem.results.map((result, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-violet-600 to-purple-700 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">想成为下一个成功案例？</h2>
          <p className="text-violet-100 mb-8 max-w-2xl mx-auto">
            告诉我们您的需求，我们将为您量身定制 AI 解决方案
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center bg-white text-violet-600 px-8 py-4 rounded-xl font-semibold hover:bg-violet-50 transition"
          >
            预约免费咨询
            <ExternalLink className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </main>
    </div>
  )
}
