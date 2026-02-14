export const metadata = {
  title: '安全指南 - OpenClaw 中文教程',
  description: 'OpenClaw 安全配置最佳实践，保护你的 AI 网关',
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

// 警告框
function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-xl p-5 my-6">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div className="text-red-900">{children}</div>
      </div>
    </div>
  )
}

export default function SecurityPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">安全指南</h1>
        <p className="text-xl text-gray-600">
          OpenClaw 作为连接多个聊天应用的 AI 网关，安全配置至关重要。
        </p>
      </div>

      <WarningBox>
        <strong>重要提醒：</strong> 默认配置允许任何人访问。生产环境使用前，
        <strong>务必</strong> 配置访问控制。
      </WarningBox>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">访问控制</h2>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">使用 allowFrom 限制用户</h3>
        
        <p className="text-gray-600 mb-4">每个频道都应该配置 <code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">allowFrom</code> 选项，只允许特定用户访问：</p>

        <CodeBlock>{`{
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
}`}</CodeBlock>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">群组安全</h3>
        
        <p className="text-gray-600 mb-4">在群组中，建议启用 <code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">requireMention</code>：</p>

        <CodeBlock>{`"groups": {
  "*": {
    "requireMention": true,
    "mentionPatterns": ["@mybot", "AI助手"]
  }
}`}</CodeBlock>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">API 密钥管理</h2>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">环境变量</h3>
        
        <p className="text-gray-600 mb-4">不要将 API 密钥直接写入配置文件，使用环境变量：</p>

        <CodeBlock filename="bash">{`# ~/.zshrc 或 ~/.bashrc
export ANTHROPIC_API_KEY="your-key-here"
export TELEGRAM_BOT_TOKEN="your-token-here"
export DISCORD_BOT_TOKEN="your-token-here"`}</CodeBlock>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">密钥轮换</h3>
        
        <p className="text-gray-600 mb-4">定期更换 API 密钥，尤其是怀疑泄露时：</p>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">●</span>
              <span className="text-gray-600"><strong>Anthropic:</strong> 账户设置 → API Keys → 撤销并重新生成</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">●</span>
              <span className="text-gray-600"><strong>Telegram:</strong> @BotFather → /revoke</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">●</span>
              <span className="text-gray-600"><strong>Discord:</strong> Developer Portal → Bot → Reset Token</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">网络安全</h2>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">本地部署</h3>
        
        <p className="text-gray-600 mb-4">默认情况下，Gateway 只监听 <code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">127.0.0.1</code>，这是安全的。如需远程访问：</p>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <ul className="space-y-2">
            {[
              '使用反向代理（Nginx/Traefik）',
              '启用 HTTPS',
              '配置防火墙规则',
              '考虑使用 Tailscale 等 VPN',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">●</span>
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">使用 Tailscale</h3>
        
        <p className="text-gray-600 mb-4">推荐通过 Tailscale 远程访问 Gateway：</p>

        <CodeBlock filename="bash">{`# 安装 Tailscale
# macOS: brew install tailscale
# Ubuntu: curl -fsSL https://tailscale.com/install.sh | sh

# 启动并登录
tailscale up

# 在其他设备上访问
curl http://your-machine-name:18789/`}</CodeBlock>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">敏感数据</h2>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">日志中的敏感信息</h3>
        
        <p className="text-gray-600 mb-4">OpenClaw 会记录会话日志，注意不要泄露：</p>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <ul className="space-y-2">
            {[
              '定期清理日志文件：\u003ccode\u003e~/.openclaw/logs/\u003c/code\u003e',
              '不要在公开场合分享日志',
              '敏感对话使用私密频道',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-600"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </ul>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">记忆文件</h3>
        
        <p className="text-gray-600 mb-4">记忆文件存储在 <code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">~/.openclaw/workspace/memory/</code>，可能包含敏感信息：</p>

        <CodeBlock filename="bash"># 设置目录权限
chmod 700 ~/.openclaw/workspace/memory</CodeBlock>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">安全清单</h2>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <ul className="space-y-3">
            {[
              '所有频道都配置了 allowFrom',
              '群组中启用了 requireMention',
              'API 密钥使用环境变量',
              '不在公开场合分享配置文件',
              '定期更新 OpenClaw 到最新版本',
              '限制日志文件访问权限',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center text-xs text-gray-400">☐</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
