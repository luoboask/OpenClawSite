export const metadata = {
  title: 'Slack 接入 - OpenClaw 中文教程',
  description: '配置 OpenClaw 接入 Slack 工作区',
}

export default function SlackPage() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>Slack 接入</h1>
      
      <p>将 OpenClaw 接入 Slack 工作区，让团队成员在频道中直接与 AI 助手协作。</p>

      <h2>创建 Slack App</h2>

      <h3>1. 创建应用</h3>

      <ol>
        <li>访问 <a href="https://api.slack.com/apps">Slack API</a></li>
        <li>点击 "Create New App"</li>
        <li>选择 "From scratch"</li>
        <li>输入应用名称（如：OpenClaw Bot）</li>
        <li>选择要安装的工作区</li>
      </ol>

      <h3>2. 配置权限</h3>

      <p>在左侧菜单选择 "OAuth & Permissions"，添加以下 Bot Token Scopes：</p>

      <ul>
        <li><code>chat:write</code> - 发送消息</li>
        <li><code>chat:write.public</code> - 在公共频道发送消息</li>
        <li><code>app_mentions:read</code> - 读取 @提及</li>
        <li><code>im:history</code> - 读取私信历史</li>
        <li><code>im:read</code> - 查看私信</li>
        <li><code>im:write</code> - 发送私信</li>
      </ul>

      <h3>3. 安装应用到工作区</h3>

      <ol>
        <li>在 "OAuth & Permissions" 页面，点击 "Install to Workspace"</li>
        <li>确认权限并安装</li>
        <li>复制 "Bot User OAuth Token"（以 <code>xoxb-</code> 开头）</li>
      </ol>

      <h3>4. 启用事件订阅（可选）</h3>

      <p>如果要让 Bot 主动响应消息（而非仅通过 @提及）：</p>

      <ol>
        <li>开启 "Enable Events"</li>
        <li>配置 Request URL（需要公网可访问的服务器）</li>
        <li>订阅 "message.channels" 和 "message.im" 事件</li>
      </ol>

      <h2>配置 OpenClaw</h2>

      <p>编辑配置文件 <code>~/.openclaw/openclaw.json</code>：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code>{
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
}</code>
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
            <td className="border border-gray-300 px-4 py-2">Bot User OAuth Token（xoxb-开头）</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2"><code>allowFrom</code></td>
            <td className="border border-gray-300 px-4 py-2">允许的 Slack 用户 ID 列表</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2"><code>workspaces.*.requireMention</code></td>
            <td className="border border-gray-300 px-4 py-2">是否需要 @Bot 才响应</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2"><code>workspaces.*.allowedChannels</code></td>
            <td className="border border-gray-300 px-4 py-2">允许使用的频道名称列表</td>
          </tr>
        </tbody>
      </table>

      <h2>获取用户 ID</h2>

      <ol>
        <li>在 Slack 中点击自己的头像</li>
        <li>选择 "View profile"</li>
        <li>点击 "More"（三个点）</li>
        <li>选择 "Copy member ID"</li>
      </ol>

      <h2>邀请 Bot 到频道</h2>

      <p>在频道中发送：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code>/invite @你的Bot名称</code>
      </pre>

      <h2>测试</h2>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code>openclaw gateway restart</code>
      </pre>

      <p>在 Slack 频道中 @提及 Bot 或发送私信测试。</p>

      <h2>进阶：Slash Commands</h2>

      <p>你可以配置 Slack Slash Commands，让用户通过 <code>/命令</code> 快速调用特定功能。</p>

      <p>在 Slack API 的 "Slash Commands" 页面添加命令，指向你的 Gateway 地址。</p>
    </div>
  )
}
