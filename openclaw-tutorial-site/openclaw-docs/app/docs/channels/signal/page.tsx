export const metadata = {
  title: 'Signal 接入 - OpenClaw 中文教程',
  description: '配置 OpenClaw 接入 Signal 消息应用（Beta）',
}

function CodeBlock({ children, filename }: { children: string; filename?: string }) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden my-6">
      <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>
        <span className="ml-3 text-sm text-gray-400">{filename || 'json'}</span>
      </div>
      <pre className="p-4 text-gray-100 text-sm overflow-x-auto"><code>{children}</code></pre>
    </div>
  )
}

function BetaBadge() {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 my-6">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div className="text-yellow-900">
          <strong>Beta 功能：</strong> Signal 接入目前处于测试阶段，功能和稳定性可能不如其他频道完善。
        </div>
      </div>
    </div>
  )
}

export default function SignalPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Signal 接入</h1>
        <p className="text-xl text-gray-600">将 OpenClaw 接入 Signal，在注重隐私的加密通讯应用中使用 AI 助手。</p>
      </div>

      <BetaBadge />

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">前置要求</h2>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span className="text-gray-700">一个 Signal 账号</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span className="text-gray-700">Signal CLI 工具（独立进程）</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span className="text-gray-700">（可选）Signal 桌面应用</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">配置步骤</h2>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">1. 安装 Signal CLI</h3>
        
        <p className="text-gray-600 mb-4">Signal 接入需要 <code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">signal-cli</code> 作为依赖：</p>

        <CodeBlock filename="bash">{`# macOS
brew install signal-cli

# Linux (Debian/Ubuntu)
# 下载预编译版本或从源码编译
# 参考：https://github.com/AsamK/signal-cli`}</CodeBlock>

        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">2. 注册 Signal 账号（如未注册）</h3>

        <CodeBlock filename="bash">signal-cli -a +86138xxxxxxxx register</CodeBlock>

        <p className="text-gray-600 mb-4">你会收到验证码，然后使用：</p>

        <CodeBlock filename="bash">signal-cli -a +86138xxxxxxxx verify 123456</CodeBlock>

        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">3. 配置 OpenClaw</h3>

        <p className="text-gray-600 mb-4">编辑配置文件：</p>

        <CodeBlock>{`{
  "channels": {
    "signal": {
      "enabled": true,
      "account": "+86138xxxxxxxx",
      "allowFrom": ["+86139xxxxxxxx"]
    }
  }
}`}</CodeBlock>

        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">4. 启动 Gateway</h3>

        <CodeBlock filename="bash">openclaw gateway restart</CodeBlock>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">配置选项</h2>

        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="w-full border-collapse border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">选项</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">说明</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-200 px-4 py-3"><code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">account</code></td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Signal 账号（手机号，带国家代码）</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-200 px-4 py-3"><code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">allowFrom</code></td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">允许访问的手机号列表</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">已知限制</h2>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span className="text-gray-700">需要独立运行 signal-cli 进程</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span className="text-gray-700">群聊支持有限</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span className="text-gray-700">媒体消息（图片/视频）处理不完善</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span className="text-gray-700">在某些地区可能需要网络工具</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">故障排查</h2>

        <div className="space-y-4">
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">无法连接 signal-cli</h3>
            <p className="text-gray-600">确保 signal-cli 在 PATH 中可访问，或指定完整路径：</p>
            <div className="bg-gray-200 rounded p-2 mt-2 font-mono text-sm">which signal-cli</div>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">收不到消息</h3>
            <ul className="space-y-2 ml-5 list-disc text-gray-600">
              <li>检查 signal-cli 是否已注册并登录</li>
              <li>尝试手动发送测试消息：</li>
            </ul>
            <div className="bg-gray-200 rounded p-2 mt-2 font-mono text-sm">signal-cli send -m "test" +86139xxxxxxxx</div>
            <p className="text-gray-600 mt-2">查看 OpenClaw 日志中的错误信息</p>
          </div>
        </div>
      </section>
    </div>
  )
}
