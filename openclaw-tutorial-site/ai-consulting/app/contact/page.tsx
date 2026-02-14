import Link from 'next/link'
import { MessageSquare, ArrowRight } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'

export const metadata = {
  title: '联系我们 - AI咨询中心',
  description: '预约 AI 技术咨询，获取 OpenClaw 部署和定制化解决方案',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-purple-700 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AI咨询中心</span>
            </Link>
            <Link href="/" className="text-gray-600 hover:text-violet-600">← 返回首页</Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">联系我们</h1>
          <p className="text-xl text-gray-600">
            填写以下表单，我们将在 24 小时内与您联系
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <ContactForm />
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
            <div className="text-2xl font-bold text-violet-600 mb-2">24h</div>
            <div className="text-gray-600">响应时间</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
            <div className="text-2xl font-bold text-violet-600 mb-2">免费</div>
            <div className="text-gray-600">首次咨询</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
            <div className="text-2xl font-bold text-violet-600 mb-2">100%</div>
            <div className="text-gray-600">隐私保护</div>
          </div>
        </div>
      </main>
    </div>
  )
}
