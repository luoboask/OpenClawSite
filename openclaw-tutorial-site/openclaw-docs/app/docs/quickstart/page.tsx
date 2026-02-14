import Link from 'next/link'
import { ArrowRight, Clock, Zap, AlertCircle, CheckCircle } from 'lucide-react'

export const metadata = {
  title: '快速开始 - OpenClaw 中文教程',
  description: '5 分钟完成 OpenClaw 部署，开始你的自托管 AI 助手之旅',
}

const steps = [
  {
    number: '1',
    title: '安装 OpenClaw',
    description: '使用 npm 全局安装 OpenClaw CLI',
    code: 'npm install -g openclaw',
    verify: 'openclaw --version',
  },
  {
    number: '2',
    title: '配置 API 密钥',
    description: '设置你的 AI 提供商 API 密钥',
    code: 'export ANTHROPIC_API_KEY=your_api_key_here',
    note: '你可以将 export 命令添加到 shell 配置文件（如 ~/.zshrc）中，这样就不需要每次手动设置了。',
  },
  {
    number: '3',
    title: '启动 Gateway',
    description: '运行 Gateway 服务',
    code: 'openclaw gateway start',
    output: `🦞 OpenClaw Gateway v1.x.x
✓ Configuration loaded
✓ Agent ready
✓ Web interface: http://127.0.0.1:18789/

Gateway is running. Press Ctrl+C to stop.`,
  },
  {
    number: '4',
    title: '测试连接',
    description: '打开浏览器访问 Web 界面',
    code: 'http://127.0.0.1:18789/',
    note: '你应该能看到 OpenClaw 的 Web 界面。在输入框中发送一条消息，测试 AI 助手是否正常工作。',
  },
]

export default function QuickStartPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-10">
        <div className="flex items-center gap-2 text-orange-600 mb-3">
          <Zap className="w-5 h-5" />
          <span className="font-medium">快速开始</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">5 分钟部署 OpenClaw</h1>
        <p className="text-xl text-gray-600">
          从零开始，在你的设备上运行一个自托管的 AI 网关
        </p>
      </div>

      {/* 预计时间提示 */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">预计时间：5 分钟</p>
            <p className="text-gray-600 mt-1">
              本指南假设你已经安装了 Node.js 22+。如果还没有，请先<Link href="/docs/install" className="text-orange-600 hover:underline">安装 Node.js</Link>。
            </p>
          </div>
        </div>
      </div>

      {/* 前置要求 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          前置要求
        </h2>
        
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: '●', text: 'Node.js 22+', code: 'node --version' },
            { icon: '●', text: 'AI API 密钥', sub: '推荐 Anthropic Claude' },
            { icon: '●', text: '操作系统', sub: 'macOS / Linux / WSL' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <span className="text-orange-500 text-lg">{item.icon}</span>
              <div>
                <p className="font-medium text-gray-900">{item.text}</p>
                {item.code && (
                  <code className="text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{item.code}</code>
                )}
                {item.sub && (
                  <p className="text-sm text-gray-500">{item.sub}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 步骤 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">
          部署步骤
        </h2>

        <div className="space-y-10">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{step.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  
                  <div className="bg-gray-900 rounded-xl overflow-hidden">
                    <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
                      <div className="flex gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                      </div>
                      <span className="ml-3 text-sm text-gray-400">terminal</span>
                    </div>
                    <pre className="p-4 text-gray-100 text-sm overflow-x-auto"><code>{step.code}</code></pre>
                  </div>

                  {step.verify && (
                    <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      验证：<code className="bg-gray-300 text-black px-2 py-0.5 rounded">{step.verify}</code>
                    </div>
                  )}

                  {step.output && (
                    <div className="mt-3 bg-gray-100 rounded-lg p-4 font-mono text-sm text-gray-700">
                      <pre>{step.output}</pre>
                    </div>
                  )}

                  {step.note && (
                    <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700">{step.note}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 下一步 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          下一步
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: '接入 WhatsApp', desc: '通过 WhatsApp 与 AI 助手对话', href: '/docs/channels/whatsapp', color: 'green' },
            { title: '接入 Telegram', desc: '创建 Telegram Bot 并连接', href: '/docs/channels/telegram', color: 'blue' },
            { title: '高级配置', desc: '了解配置文件和更多选项', href: '/docs/config', color: 'purple' },
            { title: '开发工具', desc: '为 Agent 创建自定义工具', href: '/docs/tools', color: 'orange' },
          ].map((item, idx) => (
            <Link 
              key={idx}
              href={item.href}
              className="group flex items-center p-5 bg-white border border-gray-200 rounded-xl hover:border-orange-500 hover:shadow-lg transition-all"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition" />
            </Link>
          ))}
        </div>
      </section>

      {/* 帮助 */}
      <section className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4">遇到问题？</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          <a 
            href="/docs/install" 
            className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-orange-500 hover:shadow-md transition"
          >
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="font-medium text-gray-900">详细安装指南</span>
          </a>
          
          <a 
            href="https://github.com/openclaw/openclaw/issues" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-orange-500 hover:shadow-md transition"
          >
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <span className="font-medium text-gray-900">GitHub Issues</span>
          </a>
          
          <a 
            href="https://discord.com/invite/clawd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-orange-500 hover:shadow-md transition"
          >
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </div>
            <span className="font-medium text-gray-900">Discord 社区</span>
          </a>
        </div>
      </section>
    </div>
  )
}
