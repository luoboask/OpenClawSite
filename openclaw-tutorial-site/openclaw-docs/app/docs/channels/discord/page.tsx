export const metadata = {
  title: 'Discord 接入 - OpenClaw 中文教程',
  description: '配置 OpenClaw 创建 Discord Bot，在服务器中与 AI 助手对话',
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

export default function DiscordPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Discord 接入</h1>
        <p className="text-xl text-gray-600">将 OpenClaw 接入 Discord，让你的 AI 助手可以在 Discord 服务器中使用。</p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">创建 Discord Bot</h2>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">1. 进入开发者门户</h3>
        <p className="text-gray-600 mb-4">访问 <a href="https://discord.com/developers/applications" className="text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">Discord Developer Portal</a></p>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">2. 创建应用</h3>
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <ol className="space-y-3 list-decimal list-inside text-gray-700">
            <li>点击 "New Application"</li>
            <li>输入应用名称（如：OpenClaw Bot）</li>
            <li>接受条款并创建</li>
          </ol>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">3. 获取 Bot Token</h3>
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <ol className="space-y-3 list-decimal list-inside text-gray-700">
            <li>在左侧菜单选择 "Bot"</li>
            <li>点击 "Reset Token" 获取 Token（只显示一次，妥善保存）</li>
            <li>关闭 "Public Bot" 选项（私有使用）</li>
            <li>开启以下权限：</li>
          </ol>
          <ul className="mt-4 space-y-2 ml-6">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span className="text-gray-700">MESSAGE CONTENT INTENT（必须）</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="text-gray-700">PRESENCE INTENT（可选）</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="text-gray-700">SERVER MEMBERS INTENT（可选）</span>
            </li>
          </ul>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">4. 邀请 Bot 到服务器</h3>
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <ol className="space-y-3 list-decimal list-inside text-gray-700">
            <li>在左侧菜单选择 "OAuth2" → "URL Generator"</li>
            <li>Scopes 选择 <code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">bot</code> 和 <code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">applications.commands</code></li>
            <li>Bot Permissions 选择：</li>
          </ol>
          <ul className="mt-4 space-y-2 ml-6">
            <li className="text-gray-700">Send Messages</li>
            <li className="text-gray-700">Read Message History</li>
            <li className="text-gray-700">Use Slash Commands</li>
          </ul>
          <p className="mt-4 text-gray-600">复制生成的 URL，在浏览器中打开，选择要添加的服务器，确认授权。</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">配置 OpenClaw</h2>

        <p className="text-gray-600 mb-4">编辑配置文件：</p>

        <CodeBlock>{`{
  "channels": {
    "discord": {
      "enabled": true,
      "botToken": "YOUR_DISCORD_BOT_TOKEN",
      "allowFrom": ["123456789012345678"],
      "guilds": {
        "*": {
          "requireMention": false,
          "allowedChannels": ["general", "ai-chat"]
        }
      }
    }
  }
}`}</CodeBlock>

        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">配置说明</h3>

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
                <td className="border border-gray-200 px-4 py-3"><code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">botToken</code></td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Discord Bot Token</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-200 px-4 py-3"><code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">allowFrom</code></td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">允许的 Discord 用户 ID 列表</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-200 px-4 py-3"><code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">guilds.*.requireMention</code></td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">是否需要 @Bot 才响应</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-200 px-4 py-3"><code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">guilds.*.allowedChannels</code></td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">允许使用的频道名称列表</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">获取 Discord ID</h2>
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <ol className="space-y-3 list-decimal list-inside text-gray-700">
            <li>在 Discord 中开启开发者模式：设置 → 高级 → 开发者模式</li>
            <li>右键点击自己的用户名 → "复制用户 ID"</li>
          </ol>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">测试</h2>
        <CodeBlock filename="bash">openclaw gateway restart</CodeBlock>
        <p className="text-gray-600 mt-4">在 Discord 服务器中发送消息，Bot 应该会响应。</p>
      </section>
    </div>
  )
}
