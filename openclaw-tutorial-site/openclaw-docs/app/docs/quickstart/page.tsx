import Link from 'next/link'
import { ArrowRight, Clock, Zap, AlertCircle } from 'lucide-react'

export const metadata = {
  title: '快速开始 - OpenClaw 中文教程',
  description: '5 分钟完成 OpenClaw 部署，开始你的自托管 AI 助手之旅',
}

export default function QuickStartPage() {
  return (
    <div className="prose prose-slate max-w-none">
      <div className="mb-8">
        <div className="flex items-center space-x-2 text-sm text-orange-600 mb-2">
          <Zap className="w-4 h-4" />
          <span>快速开始</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">5 分钟部署 OpenClaw</h1>
        <p className="text-xl text-gray-600">
          从零开始，在你的设备上运行一个自托管的 AI 网关
        </p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-8">
        <div className="flex items-start">
          <Clock className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <p className="text-blue-900 font-medium">预计时间：5 分钟</p>
            <p className="text-blue-700 text-sm mt-1">
              本指南假设你已经安装了 Node.js 22+。如果还没有，请先安装 Node.js。
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">前置要求</h2>
      
      <ul className="space-y-3 mb-8">
        <li className="flex items-center">
          <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
          Node.js 22+ 
          <code className="ml-2 bg-gray-100 px-2 py-1 rounded text-sm">node --version</code>
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
          一个 AI API 密钥（推荐 Anthropic Claude）
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
          macOS、Linux 或 Windows（WSL）
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">步骤 1：安装 OpenClaw</h2>
      
      <p className="text-gray-600 mb-4">使用 npm 全局安装 OpenClaw CLI：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code>npm install -g openclaw</code>
      </pre>

      <p className="text-gray-600 mt-4 mb-4">验证安装：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code>openclaw --version</code>
      </pre>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">步骤 2：配置 API 密钥</h2>
      
      <p className="text-gray-600 mb-4">设置你的 AI 提供商 API 密钥。以 Anthropic 为例：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code>export ANTHROPIC_API_KEY=your_api_key_here</code>
      </pre>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mt-4">
        <div className="flex items-start">
          <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <p className="text-yellow-900 font-medium">提示</p>
            <p className="text-yellow-700 text-sm mt-1">
              你可以将 <code>export</code> 命令添加到你的 shell 配置文件（如 <code>~/.zshrc</code>）中，
              这样就不需要每次手动设置了。
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">步骤 3：启动 Gateway</h2>
      
      <p className="text-gray-600 mb-4">运行 Gateway：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code>openclaw gateway start</code>
      </pre>

      <p className="text-gray-600 mt-4">
        首次启动时，OpenClaw 会自动创建默认配置并下载必要的组件。
        你会看到类似下面的输出：
      </p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code>🦞 OpenClaw Gateway v1.x.x
✓ Configuration loaded
✓ Agent ready
✓ Web interface: http://127.0.0.1:18789/

Gateway is running. Press Ctrl+C to stop.</code>
      </pre>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">步骤 4：测试连接</h2>
      
      <p className="text-gray-600 mb-4">打开浏览器访问：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code>http://127.0.0.1:18789/</code>
      </pre>

      <p className="text-gray-600 mt-4">
        你应该能看到 OpenClaw 的 Web 界面。在输入框中发送一条消息，测试 AI 助手是否正常工作。
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">下一步</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <Link 
          href="/docs/channels/whatsapp"
          className="group flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition"
        >
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 group-hover:text-orange-600">接入 WhatsApp</h3>
            <p className="text-sm text-gray-500 mt-1">通过 WhatsApp 与 AI 助手对话</p>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600" />
        </Link>

        <Link 
          href="/docs/channels/telegram"
          className="group flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition"
        >
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 group-hover:text-orange-600">接入 Telegram</h3>
            <p className="text-sm text-gray-500 mt-1">创建 Telegram Bot 并连接</p>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600" />
        </Link>

        <Link 
          href="/docs/config"
          className="group flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition"
        >
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 group-hover:text-orange-600">高级配置</h3>
            <p className="text-sm text-gray-500 mt-1">了解配置文件和更多选项</p>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600" />
        </Link>

        <Link 
          href="/docs/tools"
          className="group flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md transition"
        >
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 group-hover:text-orange-600">开发工具</h3>
            <p className="text-sm text-gray-500 mt-1">为 Agent 创建自定义工具</p>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600" />
        </Link>
      </div>

      <hr className="my-12 border-gray-200" />

      <div className="bg-gray-50 p-6 rounded-xl">
        <h3 className="font-semibold text-gray-900 mb-2">遇到问题？</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• 查看 <Link href="/docs/install" className="text-orange-600 hover:underline">详细安装指南</Link></li>
          <li>• 访问 <a href="https://github.com/openclaw/openclaw/issues" className="text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub Issues</a> 寻求帮助</li>
          <li>• 加入 <a href="https://discord.com/invite/clawd" className="text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">Discord 社区</a> 提问</li>
        </ul>
      </div>
    </div>
  )
}
