export const metadata = {
  title: 'Telegram 接入 - OpenClaw 中文教程',
  description: '配置 OpenClaw 创建 Telegram Bot，与 AI 助手对话',
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

export default function TelegramPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Telegram 接入</h1>
        <p className="text-xl text-gray-600">
          Telegram 是 OpenClaw 支持最完善的频道之一，支持私聊、群组、命令等多种功能。
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">创建 Bot</h2>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">1. 与 BotFather 对话</h3>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <ol className="space-y-3 list-decimal list-inside text-gray-700">
            <li>在 Telegram 中搜索 <code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">@BotFather</code></li>
            <li>发送 <code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">/newbot</code> 命令</li>
            <li>输入 Bot 名称（如：My AI Assistant）</li>
            <li>输入 Bot 用户名（必须以 bot 结尾，如：my_ai_clawbot）</li>
            <li>保存获得的 API Token</li>
          </ol>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">2. 获取你的 Telegram ID</h3>

        <p className="text-gray-600">搜索 <code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">@userinfobot</code>，它会告诉你自己的 ID。</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">配置 OpenClaw</h2>

        <p className="text-gray-600 mb-4">编辑配置文件 <code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">~/.openclaw/openclaw.json</code>：</p>

        <CodeBlock>{`{
  "channels": {
    "telegram": {
      "enabled": true,
      "botToken": "123456789:ABCdefGHIjklMNOpqrSTUvwxyz",
      "allowFrom": ["123456789"],
      "webhook": {
        "enabled": false
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
                <td className="border border-gray-200 px-4 py-3">
                  <code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">botToken</code>
                </td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">从 BotFather 获得的 API Token</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-200 px-4 py-3">
                  <code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">allowFrom</code>
                </td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">允许访问的 Telegram ID 列表</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-200 px-4 py-3">
                  <code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">webhook.enabled</code>
                </td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">是否使用 Webhook 模式（默认 Polling）</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">高级功能</h2>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">群组支持</h3>

        <p className="text-gray-600 mb-4">将 Bot 添加到群组：</p>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <ol className="space-y-3 list-decimal list-inside text-gray-700">
            <li>先私聊 Bot 发送 <code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">/start</code></li>
            <li>将 Bot 添加到群组</li>
            <li>在群组中发送 <code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">/start@your_bot_name</code></li>
          </ol>
        </div>

        <p className="text-gray-600 mt-6 mb-4">配置群组权限：</p>

        <CodeBlock>{`"telegram": {
  "groups": {
    "*": {
      "requireMention": true,
      "mentionPatterns": ["@my_bot", "AI"]
    }
  }
}`}</CodeBlock>

        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Webhook 模式（生产环境推荐）</h3>

        <p className="text-gray-600 mb-4">如果你将 OpenClaw 部署在服务器上，建议使用 Webhook 模式：</p>

        <CodeBlock>{`"telegram": {
  "webhook": {
    "enabled": true,
    "url": "https://your-domain.com/webhook/telegram",
    "secret": "your_webhook_secret"
  }
}`}</CodeBlock>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">测试</h2>

        <p className="text-gray-600 mb-4">重启 Gateway 后，私聊你的 Bot 发送消息测试：</p>

        <CodeBlock filename="bash">openclaw gateway restart</CodeBlock>
      </section>
    </div>
  )
}
