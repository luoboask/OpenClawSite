import Link from 'next/link'
import { ExternalLink, Heart, Github, MessageCircle } from 'lucide-react'

export const metadata = {
  title: '关于本站 - OpenClaw 中文教程',
  description: '关于 OpenClaw 中文教程网站的介绍',
}

export default function AboutPage() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>关于本站</h1>

      <p>
        OpenClaw 中文教程是一个社区驱动的中文文档项目，
        致力于帮助中文用户更好地理解和使用 OpenClaw 自托管 AI 网关。
      </p>

      <h2>我们的目标</h2>

      <ul>
        <li>提供准确、及时的中文文档</li>
        <li>降低 OpenClaw 的学习门槛</li>
        <li>建立中文用户社区</li>
        <li>分享最佳实践和使用技巧</li>
      </ul>

      <h2>OpenClaw 简介</h2>

      <p>
        <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer">
          OpenClaw
        </a> 是一个开源的自托管 AI 网关项目，主要特点包括：
      </p>

      <ul>
        <li><strong>自托管：</strong>完全运行在自己的设备上，数据自主可控</li>
        <li><strong>多频道：</strong>支持 WhatsApp、Telegram、Discord、iMessage 等多种聊天应用</li>
        <li><strong>Agent 原生：</strong>内置工具调用、会话管理、记忆功能</li>
        <li><strong>开源：</strong>MIT 协议开源，社区驱动</li>
      </ul>

      <h2>参与贡献</h2>

      <p>我们欢迎各种形式的贡献：</p>

      <ul>
        <li>报告文档错误或过时内容</li>
        <li>提交改进建议</li>
        <li>贡献教程和案例</li>
        <li>参与翻译工作</li>
      </ul>

      <p>
        请通过 <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer">GitHub</a>{' '}
        提交 Issue 或 Pull Request。
      </p>

      <h2>相关链接</h2>

      <div className="grid md:grid-cols-2 gap-4 not-prose">
        <a 
          href="https://github.com/openclaw/openclaw" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition"
        >
          <Github className="w-6 h-6 mr-3 text-gray-700" />
          <div>
            <div className="font-medium text-gray-900">GitHub</div>
            <div className="text-sm text-gray-500">开源代码仓库</div>
          </div>
          <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
        </a>

        <a 
          href="https://docs.openclaw.ai" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition"
        >
          <ExternalLink className="w-6 h-6 mr-3 text-gray-700" />
          <div>
            <div className="font-medium text-gray-900">官方文档</div>
            <div className="text-sm text-gray-500">英文官方文档</div>
          </div>
          <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
        </a>

        <a 
          href="https://discord.com/invite/clawd" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition"
        >
          <MessageCircle className="w-6 h-6 mr-3 text-gray-700" />
          <div>
            <div className="font-medium text-gray-900">Discord</div>
            <div className="text-sm text-gray-500">社区讨论</div>
          </div>
          <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
        </a>

        <a 
          href="https://clawhub.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition"
        >
          <Heart className="w-6 h-6 mr-3 text-gray-700" />
          <div>
            <div className="font-medium text-gray-900">ClawHub</div>
            <div className="text-sm text-gray-500">工具市场</div>
          </div>
          <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
        </a>
      </div>

      <hr className="my-12" />

      <div className="text-center text-gray-500 text-sm">
        <p>本网站与 OpenClaw 官方团队无直接关联，由社区维护。</p>
        <p className="mt-2">OpenClaw 是独立的开源项目，基于 MIT 协议授权。</p>
      </div>
    </div>
  )
}
