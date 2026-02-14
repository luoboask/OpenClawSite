export const metadata = {
  title: 'iMessage 接入 - OpenClaw 中文教程',
  description: '在 macOS 上配置 OpenClaw 接入 iMessage',
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

function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 my-6">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div className="text-yellow-900">{children}</div>
      </div>
    </div>
  )
}

export default function iMessagePage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">iMessage 接入</h1>
        <p className="text-xl text-gray-600">将 OpenClaw 接入 iMessage，让你在 Mac 的「信息」应用中直接与 AI 助手对话。</p>
      </div>

      <WarningBox>
        <strong>注意：</strong> iMessage 集成<strong>仅支持 macOS</strong>，且需要开启「辅助功能」权限。
      </WarningBox>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">前置要求</h2>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span className="text-gray-700">运行 macOS 12+ 的 Mac 电脑</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span className="text-gray-700">已登录 iMessage（信息应用可正常使用）</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span className="text-gray-700">允许 OpenClaw 控制你的 Mac（辅助功能权限）</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">配置步骤</h2>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">1. 启用 iMessage 频道</h3>
        
        <p className="text-gray-600 mb-4">编辑配置文件 <code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">~/.openclaw/openclaw.json</code>：</p>

        <CodeBlock>{`{
  "channels": {
    "imessage": {
      "enabled": true,
      "allowFrom": ["+86138xxxxxxxx"],
      "autoReply": true
    }
  }
}`}</CodeBlock>

        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">2. 授权辅助功能</h3>

        <p className="text-gray-600 mb-4">首次启动时，系统会弹出权限请求：</p>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <ol className="space-y-3 list-decimal list-inside text-gray-700">
            <li>打开「系统设置」→「隐私与安全性」→「辅助功能」</li>
            <li>点击下方的「+」按钮</li>
            <li>选择「终端」（或你运行 OpenClaw 的应用）</li>
            <li>开启开关授权</li>
          </ol>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">3. 重启 Gateway</h3>

        <CodeBlock filename="bash">openclaw gateway restart</CodeBlock>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">使用方式</h2>

        <p className="text-gray-600 mb-4">配置完成后，你可以在 Mac 的「信息」应用中：</p>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span className="text-gray-700">给自己发送消息（使用与 allowFrom 相同的手机号）</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span className="text-gray-700">AI 助手会自动回复</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span className="text-gray-700">支持文本消息和部分格式</span>
            </li>
          </ul>
        </div>
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
                <td className="border border-gray-200 px-4 py-3"><code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">allowFrom</code></td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">允许访问的手机号列表</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-200 px-4 py-3"><code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">autoReply</code></td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">是否自动回复（否则需要特定触发词）</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">常见问题</h2>

        <div className="space-y-4">
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">无法收到回复</h3>
            <ul className="space-y-2 ml-5 list-disc text-gray-600">
              <li>检查「信息」应用是否在前台运行</li>
              <li>检查辅助功能权限是否已授权</li>
              <li>确认 allowFrom 中的手机号格式正确（带国家代码）</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">回复延迟较高</h3>
            <p className="text-gray-600">iMessage 依赖 UI 自动化，响应速度比 API 方式的频道慢，这是正常现象。</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">是否支持群聊？</h3>
            <p className="text-gray-600">iMessage 频道目前主要支持私聊。群聊支持可能不稳定。</p>
          </div>
        </div>
      </section>
    </div>
  )
}
