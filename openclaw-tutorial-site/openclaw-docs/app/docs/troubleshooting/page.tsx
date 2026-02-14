export const metadata = {
  title: '故障排查 - OpenClaw 中文教程',
  description: 'OpenClaw 常见问题及解决方法',
}

export default function TroubleshootingPage() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>故障排查</h1>
      
      <p>本文汇总了 OpenClaw 使用中的常见问题及解决方法。</p>

      <h2>安装问题</h2>

      <h3>npm install 失败</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code># 问题：权限错误
EACCES: permission denied

# 解决：使用 npx 临时运行
npx openclaw gateway start

# 或使用 volta/nvm 管理 Node 版本</code>
      </pre>

      <h3>Node.js 版本过低</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code># 问题：需要 Node.js 22+
Error: Requires Node.js >= 22.0.0

# 解决：升级 Node.js
# macOS
brew upgrade node

# 或使用 nvm
nvm install 22
nvm use 22</code>
      </pre>

      <hr className="my-8" />

      <h2>启动问题</h2>

      <h3>Gateway 无法启动</h3>
      <ul>
        <li>检查端口是否被占用：<code>lsof -i :18789</code></li>
        <li>检查 API 密钥是否设置：<code>echo $ANTHROPIC_API_KEY</code></li>
        <li>查看详细错误日志：<code>openclaw gateway start --verbose</code></li>
      </ul>

      <h3>端口被占用</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code># 查看占用进程
lsof -i :18789

# 修改配置文件使用其他端口
# ~/.openclaw/openclaw.json
{
  "gateway": {
    "port": 18790
  }
}</code>
      </pre>

      <hr className="my-8" />

      <h2>AI 响应问题</h2>

      <h3>AI 不响应消息</h3>
      <ul>
        <li>检查 API 密钥余额是否充足</li>
        <li>检查 allowFrom 是否包含你的账号</li>
        <li>检查是否在群组中需要 @提及</li>
        <li>查看 Gateway 日志中的错误信息</li>
      </ul>

      <h3>API 请求失败</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code># 问题：401 Unauthorized
# 解决：检查 API 密钥是否正确
export ANTHROPIC_API_KEY="your-correct-key"

# 问题：429 Rate Limit
# 解决：降低请求频率，或升级 API 计划</code>
      </pre>

      <hr className="my-8" />

      <h2>频道连接问题</h2>

      <h3>WhatsApp 二维码不显示</h3>
      <ul>
        <li>确保终端支持图像显示（iTerm2、Terminal.app）</li>
        <li>使用 ASCII 模式：配置 <code>"qrTerminal": true</code></li>
        <li>检查网络连接</li>
      </ul>

      <h3>Telegram Bot 无响应</h3>
      <ul>
        <li>先私聊 Bot 发送 /start</li>
        <li>检查 botToken 是否正确</li>
        <li>检查是否设置了 webhook 但没有配置服务器</li>
      </ul>

      <h3>Discord Bot 离线</h3>
      <ul>
        <li>检查 botToken 是否正确</li>
        <li>确认开启了 MESSAGE CONTENT INTENT</li>
        <li>检查 Bot 是否已被邀请进服务器</li>
      </ul>

      <hr className="my-8" />

      <h2>查看日志</h2>

      <p>日志文件位置：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code># 实时查看日志
tail -f ~/.openclaw/logs/gateway.log

# 查看最后 100 行
tail -n 100 ~/.openclaw/logs/gateway.log

# 带过滤查看
grep "ERROR" ~/.openclaw/logs/gateway.log</code>
      </pre>

      <hr className="my-8" />

      <h2>获取帮助</h2>

      <p>如果以上方法无法解决问题：</p>

      <ul>
        <li>查看 <a href="https://docs.openclaw.ai">官方文档</a></li>
        <li>在 <a href="https://github.com/openclaw/openclaw/issues">GitHub Issues</a> 搜索类似问题</li>
        <li>加入 <a href="https://discord.com/invite/clawd">Discord 社区</a> 提问</li>
        <li>提交 Issue 时附上日志和配置文件（去除敏感信息）</li>
      </ul>
    </div>
  )
}
