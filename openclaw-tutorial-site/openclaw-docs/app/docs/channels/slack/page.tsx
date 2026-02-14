export const metadata = {
  title: 'Slack 接入 - OpenClaw 中文教程',
  description: '配置 OpenClaw 接入 Slack 工作区',
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

export default function SlackPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Slack 接入</h1>
        <p className="text-xl text-gray-600">将 OpenClaw 接入 Slack 工作区，让团队成员在频道中直接与 AI 助手协作。</p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">创建 Slack App</h2>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">1. 创建应用</h3>
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <ol className="space-y-3 list-decimal list-inside text-gray-700">
            <li>访问 <a href="https://api.slack.com/apps" className="text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">Slack API</a></li>
            <li>点击 "Create New App"</li>
            <li>选择 "From scratch"</li>
            <li>输入应用名称（如：OpenClaw Bot）</li>
            <li>选择要安装的工作区</li>
          </ol>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">2. 配置权限</h3>
        <p className="text-gray-600 mb-4">在左侧菜单选择 "OAuth & Permissions"，添加以下 Bot Token Scopes：</p>
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <ul className="space-y-2">
            {[
              ['chat:write', '发送消息'],
              ['chat:write.public', '在公共频道发送消息'],
              ['app_mentions:read', '读取 @提及'],
              ['im:history', '读取私信历史'],
              ['im:read', '查看私信'],
              ['im:write', '发送私信'],
            ].map(([code, desc]) => (
              <li key={code} className="flex items-center gap-3">
                <code className="bg-gray-200 px-2 py-1 rounded text-sm min-w-[140px]">{code}</code>
                <span className="text-gray-600">{desc}</span>
              </li>
            ))}
          </ul>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">3. 安装应用到工作区</h3>
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <ol className="space-y-3 list-decimal list-inside text-gray-700">
            <li>在 "OAuth & Permissions" 页面，点击 "Install to Workspace"</li>
            <li>确认权限并安装</li>
            <li>复制 "Bot User OAuth Token"（以 <code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">xoxb-</code> 开头）</li>
          </ol>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">4. 启用事件订阅（可选）</h3>
        <p className="text-gray-600 mb-4">如果要让 Bot 主动响应消息（而非仅通过 @提及）：</p>
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <ol className="space-y-3 list-decimal list-inside text-gray-700">
            <li>开启 "Enable Events"</li>
            <li>配置 Request URL（需要公网可访问的服务器）</li>
            <li>订阅 "message.channels" 和 "message.im" 事件</li>
          </ol>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">配置 OpenClaw</h2>

        <p className="text-gray-600 mb-4">编辑配置文件 <code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">~/.openclaw/openclaw.json</code>：</p>

        <CodeBlock>{`{
  "channels": {
    "slack": {
      "enabled": true,
      "botToken": "xoxb-your-bot-token",
      "allowFrom": ["U1234567890"],
      "workspaces": {
        "*": {
          "requireMention": true,
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
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Bot User OAuth Token（xoxb-开头）</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-200 px-4 py-3"><code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">allowFrom</code></td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">允许的 Slack 用户 ID 列表</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-200 px-4 py-3"><code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">workspaces.*.requireMention</code></td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">是否需要 @Bot 才响应</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-200 px-4 py-3"><code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">workspaces.*.allowedChannels</code></td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">允许使用的频道名称列表</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">获取用户 ID</h2>
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <ol className="space-y-3 list-decimal list-inside text-gray-700">
            <li>在 Slack 中点击自己的头像</li>
            <li>选择 "View profile"</li>
            <li>点击 "More"（三个点）</li>
            <li>选择 "Copy member ID"</li>
          </ol>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">邀请 Bot 到频道</h2>
        <p className="text-gray-600 mb-4">在频道中发送：</p>
        <CodeBlock filename="slack">/invite @你的Bot名称</CodeBlock>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">测试</h2>
        <CodeBlock filename="bash">openclaw gateway restart</CodeBlock>
        <p className="text-gray-600 mt-4">在 Slack 频道中 @提及 Bot 或发送私信测试。</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">进阶：Slash Commands</h2>
        <p className="text-gray-600 mb-4">你可以配置 Slack Slash Commands，让用户通过 <code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">/命令</code> 快速调用特定功能。</p>
        <p className="text-gray-600">在 Slack API 的 "Slash Commands" 页面添加命令，指向你的 Gateway 地址。</p>
      </section>
    </div>
  )
}
