import Link from 'next/link'
import { 
  Brain, 
  Bot, 
  Workflow, 
  Code, 
  ArrowRight, 
  MessageSquare,
  Shield,
  Zap,
  CheckCircle
} from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-purple-700 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AI咨询中心</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-gray-600 hover:text-violet-600 transition">服务项目</Link>
              <Link href="/cases" className="text-gray-600 hover:text-violet-600 transition">案例展示</Link>
              <Link href="/about" className="text-gray-600 hover:text-violet-600 transition">关于我们</Link>
              <Link href="/blog" className="text-gray-600 hover:text-violet-600 transition">技术博客</Link>
            </div>
            <Link 
              href="/contact"
              className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition"
            >
              预约咨询
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-violet-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              专业 OpenClaw 部署服务
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              让 AI 成为您的
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                得力助手
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              提供全方位的 AI 技术咨询服务，从 OpenClaw 部署到定制化 AI 解决方案，
              帮助企业实现智能化转型，提升工作效率。
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact"
                className="bg-violet-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-violet-700 transition flex items-center justify-center"
              >
                免费咨询
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/services"
                className="bg-white text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold hover:border-violet-600 hover:text-violet-600 transition flex items-center justify-center"
              >
                了解服务
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">核心服务</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              我们提供从咨询到落地的全流程 AI 服务
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Bot,
                title: "OpenClaw 部署",
                desc: "专业部署 OpenClaw 自托管 AI 网关，接入 WhatsApp、Telegram、Discord 等应用"
              },
              {
                icon: Code,
                title: "AI 工具开发",
                desc: "定制开发专属 AI 工具，让 Agent 具备特定领域的专业能力"
              },
              {
                icon: Workflow,
                title: "自动化工作流",
                desc: "设计和实现 AI 驱动的自动化流程，提升业务效率"
              },
              {
                icon: MessageSquare,
                title: "智能客服",
                desc: "构建企业级 AI 客服系统，7x24 小时响应客户需求"
              }
            ].map((service, idx) => (
              <div key={idx} className="p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-lg hover:border-violet-200 transition group">
                <div className="w-14 h-14 bg-violet-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-violet-600 transition">
                  <service.icon className="w-7 h-7 text-violet-600 group-hover:text-white transition" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">为什么选择我们？</h2>
              <p className="text-gray-600 mb-8">
                我们拥有丰富的 OpenClaw 和 AI 技术实践经验，能够提供专业、可靠的解决方案。
              </p>
              
              <div className="space-y-4">
                {[
                  "深入理解 OpenClaw 架构和最佳实践",
                  "自托管方案，数据安全可控",
                  "灵活的定制化服务",
                  "持续的技术支持和维护"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-violet-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "50+", label: "服务客户" },
                { number: "100+", label: "完成项目" },
                { number: "24/7", label: "技术支持" },
                { number: "99%", label: "客户满意度" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-violet-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OpenClaw Special */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-violet-600 to-purple-700 rounded-3xl p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">OpenClaw 专业服务</h2>
                <p className="text-violet-100 mb-8">
                  OpenClaw 是目前最先进的自托管 AI 网关之一。我们提供从安装部署到高级定制的全套服务。
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    { icon: Shield, text: "安全的服务器部署配置" },
                    { icon: Bot, text: "多频道接入（WhatsApp/Telegram/Discord）" },
                    { icon: Code, text: "自定义工具开发" },
                    { icon: Zap, text: "性能优化和故障排查" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <item.icon className="w-5 h-5 mr-3 text-violet-300" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href="/services/openclaw"
                  className="inline-flex items-center bg-white text-violet-600 px-6 py-3 rounded-lg font-semibold hover:bg-violet-50 transition"
                >
                  了解详情
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">服务套餐</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">基础部署</span>
                      <span className="text-violet-200">¥1,999 起</span>
                    </div>
                    <p className="text-sm text-violet-200">单频道接入 + 基础配置</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">标准方案</span>
                      <span className="text-violet-200">¥4,999 起</span>
                    </div>
                    <p className="text-sm text-violet-200">多频道 + 自定义工具 + 培训</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">企业定制</span>
                      <span className="text-violet-200">按需报价</span>
                    </div>
                    <p className="text-sm text-violet-200">全套解决方案 + 长期维护</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">准备好开始了吗？</h2>
          <p className="text-gray-600 mb-8">
            预约免费咨询，了解 AI 如何帮助您的业务
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center bg-violet-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-violet-700 transition"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            立即预约咨询
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">AI咨询中心</span>
              </div>
              <p className="text-gray-400 text-sm">
                专业的 AI 技术咨询服务
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">服务</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/services/openclaw" className="hover:text-white">OpenClaw 部署</Link></li>
                <li><Link href="/services/development" className="hover:text-white">工具开发</Link></li>
                <li><Link href="/services/automation" className="hover:text-white">自动化</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">资源</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/blog" className="hover:text-white">技术博客</Link></li>
                <li><Link href="/cases" className="hover:text-white">案例</Link></li>
                <li><Link href="/docs" className="hover:text-white">文档</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">联系</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/contact" className="hover:text-white">预约咨询</Link></li>
                <li><a href="mailto:contact@example.com" className="hover:text-white">邮件联系</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© 2026 AI咨询中心. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
