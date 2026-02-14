export const metadata = {
  title: '安全指南 - OpenClaw 中文教程',
  description: 'OpenClaw 安全配置最佳实践，保护你的 AI 网关',
}

export default function SecurityPage() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>安全指南</h1>
      
      <p>OpenClaw 作为连接多个聊天应用的 AI 网关，安全配置至关重要。本文介绍最佳安全实践。</p>

      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg my-6">
        <p className="text-red-900">
          <strong>重要提醒：</strong> 默认配置允许任何人访问。生产环境使用前，
          <strong>务必</strong> 配置访问控制。
        </p>
      </div>

      <h2>访问控制</h2>

      <h3>使用 allowFrom 限制用户</h3>

      <p>每个频道都应该配置 <code>allowFrom</code> 选项，只允许特定用户访问：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code>{`{
  "channels": {
    "telegram": {
      "enabled": true,
      "botToken": "...",
      "allowFrom": ["123456789", "987654321"]
    },
    "whatsapp": {
      "enabled": true,
      "allowFrom": ["+86138xxxxxxxx", "+86139xxxxxxxx"]
    }
  }
}`}</code>
      </pre>

      <h3>群组安全</h3>

      <p>在群组中，建议启用 <code>requireMention</code>：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code>{`"groups": {
  "*": {
    "requireMention": true,
    "mentionPatterns": ["@mybot", "AI助手"]
  }
}`}</code>
      </pre>

      <h2>API 密钥管理</h2>

      <h3>环境变量</h3>

      <p>不要将 API 密钥直接写入配置文件，使用环境变量：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code># ~/.zshrc 或 ~/.bashrc
export ANTHROPIC_API_KEY="your-key-here"
export TELEGRAM_BOT_TOKEN="your-token-here"
export DISCORD_BOT_TOKEN="your-token-here"</code>
      </pre>

      <h3>密钥轮换</h3>

      <p>定期更换 API 密钥，尤其是怀疑泄露时：</p>

      <ul>
        <li>Anthropic: 账户设置 → API Keys → 撤销并重新生成</li>
        <li>Telegram: @BotFather → /revoke</li>
        <li>Discord: Developer Portal → Bot → Reset Token</li>
      </ul>

      <h2>网络安全</h2>

      <h3>本地部署</h3>

      <p>默认情况下，Gateway 只监听 <code>127.0.0.1</code>，这是安全的。如需远程访问：</p>

      <ul>
        <li>使用反向代理（Nginx/Traefik）</li>
        <li>启用 HTTPS</li>
        <li>配置防火墙规则</li>
        <li>考虑使用 Tailscale 等 VPN</li>
      </ul>

      <h3>使用 Tailscale</h3>

      <p>推荐通过 Tailscale 远程访问 Gateway：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code># 安装 Tailscale
# macOS: brew install tailscale
# Ubuntu: curl -fsSL https://tailscale.com/install.sh | sh

# 启动并登录
tailscale up

# 在其他设备上访问
curl http://your-machine-name:18789/</code>
      </pre>

      <h2>敏感数据</h2>

      <h3>日志中的敏感信息</h3>

      <p>OpenClaw 会记录会话日志，注意不要泄露：</p>

      <ul>
        <li>定期清理日志文件：<code>~/.openclaw/logs/</code></li>
        <li>不要在公开场合分享日志</li>
        <li>敏感对话使用私密频道</li>
      </ul>

      <h3>记忆文件</h3>

      <p>记忆文件存储在 <code>~/.openclaw/workspace/memory/</code>，可能包含敏感信息：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code># 设置目录权限
chmod 700 ~/.openclaw/workspace/memory</code>
      </pre>

      <h2>安全清单</h2>

      <ul className="space-y-2">
        <li>☐ 所有频道都配置了 allowFrom</li>
        <li>☐ 群组中启用了 requireMention</li>
        <li>☐ API 密钥使用环境变量</li>
        <li>☐ 不在公开场合分享配置文件</li>
        <li>☐ 定期更新 OpenClaw 到最新版本</li>
        <li>☐ 限制日志文件访问权限</li>
      </ul>
    </div>
  )
}
