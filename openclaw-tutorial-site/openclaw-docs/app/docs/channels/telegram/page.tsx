export const metadata = {
  title: 'Telegram 接入 - OpenClaw 中文教程',
  description: '配置 OpenClaw 创建 Telegram Bot，与 AI 助手对话',
}

export default function TelegramPage() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>Telegram 接入</h1>
      
      <p>Telegram 是 OpenClaw 支持最完善的频道之一，支持私聊、群组、命令等多种功能。</p>

      <h2>创建 Bot</h2>

      <h3>1. 与 BotFather 对话</h3>

      <ol>
        <li>在 Telegram 中搜索 <code>@BotFather</code></li>
        <li>发送 <code>/newbot</code> 命令</li>
        <li>输入 Bot 名称（如：My AI Assistant）</li>
        <li>输入 Bot 用户名（必须以 bot 结尾，如：my_ai_clawbot）</li>
        <li>保存获得的 API Token</li>
      </ol>

      <h3>2. 获取你的 Telegram ID</h3>

      <p>搜索 <code>@userinfobot</code>，它会告诉你自己的 ID。</p>

      <h2>配置 OpenClaw</h2>

      <p>编辑配置文件 <code>~/.openclaw/openclaw.json</code>：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code>{`{
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
}`}</code>
      </pre>

      <h3>配置说明</h3>

      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">选项</th>
            <th className="border border-gray-300 px-4 py-2 text-left">说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2"><code>botToken</code></td>
            <td className="border border-gray-300 px-4 py-2">从 BotFather 获得的 API Token</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2"><code>allowFrom</code></td>
            <td className="border border-gray-300 px-4 py-2">允许访问的 Telegram ID 列表</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2"><code>webhook.enabled</code></td>
            <td className="border border-gray-300 px-4 py-2">是否使用 Webhook 模式（默认 Polling）</td>
          </tr>
        </tbody>
      </table>

      <h2>高级功能</h2>

      <h3>群组支持</h3>

      <p>将 Bot 添加到群组：</p>

      <ol>
        <li>先私聊 Bot 发送 <code>/start</code></li>
        <li>将 Bot 添加到群组</li>
        <li>在群组中发送 <code>/start@your_bot_name</code></li>
      </ol>

      <p>配置群组权限：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code>{`"telegram": {
  "groups": {
    "*": {
      "requireMention": true,
      "mentionPatterns": ["@my_bot", "AI"]
    }
  }
}`}</code>
      </pre>

      <h3>Webhook 模式（生产环境推荐）</h3>

      <p>如果你将 OpenClaw 部署在服务器上，建议使用 Webhook 模式：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code>{`"telegram": {
  "webhook": {
    "enabled": true,
    "url": "https://your-domain.com/webhook/telegram",
    "secret": "your_webhook_secret"
  }
}`}</code>
      </pre>

      <h2>测试</h2>

      <p>重启 Gateway 后，私聊你的 Bot 发送消息测试：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code>openclaw gateway restart</code>
      </pre>
    </div>
  )
}
