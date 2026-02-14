export const metadata = {
  title: 'WhatsApp 接入 - OpenClaw 中文教程',
  description: '配置 OpenClaw 接入 WhatsApp，通过个人账号与 AI 助手对话',
}

// 代码块组件
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

// 信息框
function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-6">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="text-blue-900">{children}</div>
      </div>
    </div>
  )
}

export default function WhatsAppPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">WhatsApp 接入</h1>
        <p className="text-xl text-gray-600">
          将 OpenClaw 接入 WhatsApp，让你可以通过手机上的 WhatsApp 与 AI 助手对话。
        </p>
      </div>

      <InfoBox>
        <strong>注意：</strong> WhatsApp 接入使用 <a href="https://github.com/pedroslopez/whatsapp-web.js" className="underline" target="_blank" rel="noopener noreferrer">whatsapp-web.js</a> 
        库，需要扫描二维码登录，类似于 WhatsApp Web。
      </InfoBox>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">前置要求</h2>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span className="text-gray-700">一个可用的 WhatsApp 账号</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span className="text-gray-700">手机能够访问 WhatsApp（用于扫描二维码）</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">配置步骤</h2>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">1. 启用 WhatsApp 频道</h3>
        
        <p className="text-gray-600 mb-4">编辑配置文件 <code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">~/.openclaw/openclaw.json</code>：</p>

        <CodeBlock>{`{
  "channels": {
    "whatsapp": {
      "enabled": true,
      "allowFrom": ["+86138xxxxxxxx"],
      "groups": {
        "*": {
          "requireMention": true
        }
      }
    }
  }
}`}</CodeBlock>

        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">2. 配置说明</h3>

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
                <td className="border border-gray-200 px-4 py-3">
                  <code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">allowFrom</code>
                </td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">允许访问的手机号码列表（带国家代码）</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-200 px-4 py-3">
                  <code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">groups.requireMention</code>
                </td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">群组中是否需要 @提及才响应</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">3. 重启 Gateway</h3>

        <CodeBlock filename="bash">openclaw gateway restart</CodeBlock>

        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">4. 扫描二维码</h3>

        <p className="text-gray-600 mb-4">首次启动时，控制台会显示一个二维码。打开手机 WhatsApp：</p>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <ol className="space-y-3 list-decimal list-inside text-gray-700">
            <li>点击右上角菜单 → 设置 → 已关联设备</li>
            <li>点击"关联新设备"</li>
            <li>扫描终端显示的二维码</li>
          </ol>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">5. 测试</h3>

        <p className="text-gray-600">登录成功后，使用配置的手机号发送消息给你的 WhatsApp 账号，AI 助手应该会响应。</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">常见问题</h2>

        <div className="space-y-4">
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">二维码不显示</h3>
            <p className="text-gray-600">确保终端支持图像显示，或者使用 <code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">--qr-terminal</code> 选项使用 ASCII 二维码。</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">会话过期</h3>
            <p className="text-gray-600">WhatsApp Web 会话会定期过期，需要重新扫描二维码。</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">多设备支持</h3>
            <p className="text-gray-600">WhatsApp 官方限制一个账号只能有一个 Web 会话。如果已在浏览器登录 WhatsApp Web，需要先登出。</p>
          </div>
        </div>
      </section>
    </div>
  )
}
