export const metadata = {
  title: '故障排查 - OpenClaw 中文教程',
  description: 'OpenClaw 常见问题及解决方法',
}

// 代码块组件 - 深色终端风格
function CodeBlock({ children, filename }: { children: string; filename?: string }) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden my-6">
      <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>
        <span className="ml-3 text-sm text-gray-400">{filename || 'bash'}</span>
      </div>
      <pre className="p-4 text-gray-100 text-sm overflow-x-auto"><code>{children}</code></pre>
    </div>
  )
}

// 问题卡片
function ProblemCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
      <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        {title}
      </h3>
      {children}
    </div>
  )
}

export default function TroubleshootingPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">故障排查</h1>
        <p className="text-xl text-gray-600">
          本文汇总了 OpenClaw 使用中的常见问题及解决方法。
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">安装问题</h2>

        <div className="space-y-4">
          <ProblemCard title="npm install 失败">
            <CodeBlock>{`# 问题：权限错误
EACCES: permission denied

# 解决：使用 npx 临时运行
npx openclaw gateway start

# 或使用 volta/nvm 管理 Node 版本`}</CodeBlock>
          </ProblemCard>

          <ProblemCard title="Node.js 版本过低">
            <CodeBlock>{`# 问题：需要 Node.js 22+
Error: Requires Node.js >= 22.0.0

# 解决：升级 Node.js
# macOS
brew upgrade node

# 或使用 nvm
nvm install 22
nvm use 22`}</CodeBlock>
          </ProblemCard>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">启动问题</h2>

        <div className="space-y-4">
          <ProblemCard title="Gateway 无法启动">
            <div className="space-y-2 text-gray-600">
              <p>检查清单：</p>
              <ul className="space-y-2 ml-5 list-disc">
                <li>检查端口是否被占用：<code className="bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded text-sm font-mono">lsof -i :18789</code></li>
                <li>检查 API 密钥是否设置：<code className="bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded text-sm font-mono">echo $ANTHROPIC_API_KEY</code></li>
                <li>查看详细错误日志：<code className="bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded text-sm font-mono">openclaw gateway start --verbose</code></li>
              </ul>
            </div>
          </ProblemCard>

          <ProblemCard title="端口被占用">
            <CodeBlock>{`# 查看占用进程
lsof -i :18789

# 修改配置文件使用其他端口
# ~/.openclaw/openclaw.json
{
  "gateway": {
    "port": 18790
  }
}`}</CodeBlock>
          </ProblemCard>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">AI 响应问题</h2>

        <div className="space-y-4">
          <ProblemCard title="AI 不响应消息">
            <div className="space-y-2 text-gray-600">
              <p>检查清单：</p>
              <ul className="space-y-2 ml-5 list-disc">
                <li>检查 API 密钥余额是否充足</li>
                <li>检查 allowFrom 是否包含你的账号</li>
                <li>检查是否在群组中需要 @提及</li>
                <li>查看 Gateway 日志中的错误信息</li>
              </ul>
            </div>
          </ProblemCard>

          <ProblemCard title="API 请求失败">
            <CodeBlock>{`# 问题：401 Unauthorized
# 解决：检查 API 密钥是否正确
export ANTHROPIC_API_KEY="your-correct-key"

# 问题：429 Rate Limit
# 解决：降低请求频率，或升级 API 计划`}</CodeBlock>
          </ProblemCard>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">频道连接问题</h2>

        <div className="space-y-4">
          <ProblemCard title="WhatsApp 二维码不显示">
            <div className="space-y-2 text-gray-600">
              <ul className="space-y-2 ml-5 list-disc">
                <li>确保终端支持图像显示（iTerm2、Terminal.app）</li>
                <li>使用 ASCII 模式：配置 <code className="bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded text-sm font-mono">"qrTerminal": true</code></li>
                <li>检查网络连接</li>
              </ul>
            </div>
          </ProblemCard>

          <ProblemCard title="Telegram Bot 无响应">
            <div className="space-y-2 text-gray-600">
              <ul className="space-y-2 ml-5 list-disc">
                <li>先私聊 Bot 发送 /start</li>
                <li>检查 botToken 是否正确</li>
                <li>检查是否设置了 webhook 但没有配置服务器</li>
              </ul>
            </div>
          </ProblemCard>

          <ProblemCard title="Discord Bot 离线">
            <div className="space-y-2 text-gray-600">
              <ul className="space-y-2 ml-5 list-disc">
                <li>检查 botToken 是否正确</li>
                <li>确认开启了 MESSAGE CONTENT INTENT</li>
                <li>检查 Bot 是否已被邀请进服务器</li>
              </ul>
            </div>
          </ProblemCard>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">查看日志</h2>

        <p className="text-gray-600 mb-4">日志文件位置：</p>

        <CodeBlock>{`# 实时查看日志
tail -f ~/.openclaw/logs/gateway.log

# 查看最后 100 行
tail -n 100 ~/.openclaw/logs/gateway.log

# 带过滤查看
grep "ERROR" ~/.openclaw/logs/gateway.log`}</CodeBlock>
      </section>

      <section className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">获取帮助</h2>
        
        <p className="text-white/90 mb-6">如果以上方法无法解决问题：</p>

        <div className="grid sm:grid-cols-2 gap-4">
          <a 
            href="https://docs.openclaw.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white/20 rounded-xl hover:bg-white/30 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>官方文档</span>
          </a>

          <a 
            href="https://github.com/openclaw/openclaw/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white/20 rounded-xl hover:bg-white/30 transition"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub Issues</span>
          </a>

          <a 
            href="https://discord.com/invite/clawd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-white/20 rounded-xl hover:bg-white/30 transition"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <span>Discord 社区</span>
          </a>

          <a 
            href="/blog"
            className="flex items-center gap-3 p-4 bg-white/20 rounded-xl hover:bg-white/30 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <span>技术博客</span>
          </a>
        </div>

        <p className="text-white/80 text-sm mt-6">
          提交 Issue 时附上日志和配置文件（去除敏感信息）
        </p>
      </section>
    </div>
  )
}
