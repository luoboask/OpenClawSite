export const metadata = {
  title: 'Discord 接入 - OpenClaw 中文教程',
  description: '配置 OpenClaw 创建 Discord Bot，在服务器中与 AI 助手对话',
}

export default function DiscordPage() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>Discord 接入</h1>
      
      <p>将 OpenClaw 接入 Discord，让你的 AI 助手可以在 Discord 服务器中使用。</p>

      <h2>创建 Discord Bot</h2>

      <h3>1. 进入开发者门户</h3>

      <p>访问 <a href="https://discord.com/developers/applications">Discord Developer Portal</a></p>

      <h3>2. 创建应用</h3>

      <ol>
        <li>点击 "New Application"</li>
        <li>输入应用名称（如：OpenClaw Bot）</li>
        <li>接受条款并创建</li>
      </ol>

      <h3>3. 获取 Bot Token</h3>

      <ol>
        <li>在左侧菜单选择 "Bot"</li>
        <li>点击 "Reset Token" 获取 Token（只显示一次，妥善保存）</li>
        <li>关闭 "Public Bot" 选项（私有使用）</li>
        <li>开启以下权限：</li>
      </ol>

      <ul>
        <li>MESSAGE CONTENT INTENT（必须）</li>
        <li>PRESENCE INTENT（可选）</li>
        <li>SERVER MEMBERS INTENT（可选）</li>
      </ul>

      <h3>4. 邀请 Bot 到服务器</h3>

      <ol>
        <li>在左侧菜单选择 "OAuth2" → "URL Generator"</li>
        <li>Scopes 选择 <code>bot</code> 和 <code>applications.commands</code></li>
        <li>Bot Permissions 选择：
          <ul>
            <li>Send Messages</li>
            <li>Read Message History</li>
            <li>Use Slash Commands</li>
          </ul>
        </li>
        <li>复制生成的 URL，在浏览器中打开</li>
        <li>选择要添加的服务器，确认授权</li>
      </ol>

      <h2>配置 OpenClaw</h2>

      <p>编辑配置文件：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>{`{
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
}`}</code></pre>

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
            <td className="border border-gray-300 px-4 py-2">Discord Bot Token</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2"><code>allowFrom</code></td>
            <td className="border border-gray-300 px-4 py-2">允许的 Discord 用户 ID 列表</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2"><code>guilds.*.requireMention</code></td>
            <td className="border border-gray-300 px-4 py-2">是否需要 @Bot 才响应</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2"><code>guilds.*.allowedChannels</code></td>
            <td className="border border-gray-300 px-4 py-2">允许使用的频道名称列表</td>
          </tr>
        </tbody>
      </table>

      <h2>获取 Discord ID</h2>

      <ol>
        <li>在 Discord 中开启开发者模式：设置 → 高级 → 开发者模式</li>
        <li>右键点击自己的用户名 → "复制用户 ID"</li>
      </ol>

      <h2>测试</h2>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code>openclaw gateway restart</code>
      </pre>

      <p>在 Discord 服务器中发送消息，Bot 应该会响应。</p>
    </div>
  )
}
