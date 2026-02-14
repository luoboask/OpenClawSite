export const metadata = {
  title: '配置详解 - OpenClaw 中文教程',
  description: 'OpenClaw 配置文件完整参考，了解所有可用选项',
}

export default function ConfigPage() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>配置详解</h1>
      
      <p>OpenClaw 的配置文件位于 <code>~/.openclaw/openclaw.json</code>。本文档详细介绍所有配置选项。</p>

      <h2>配置文件位置</h2>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code># macOS/Linux
~/.openclaw/openclaw.json

# Windows
%USERPROFILE%\.openclaw\openclaw.json</code>
      </pre>

      <h2>基础配置示例</h2>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code>{
  "gateway": {
    "host": "127.0.0.1",
    "port": 18789
  },
  "channels": {
    "webchat": {
      "enabled": true
    },
    "whatsapp": {
      "enabled": false,
      "allowFrom": ["+86138xxxxxxxx"]
    }
  },
  "agent": {
    "model": "anthropic/claude-3-5-sonnet-20241022"
  }
}</code>
      </pre>

      <h2>配置项说明</h2>

      <h3>gateway（网关设置）</h3>
      
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">选项</th>
            <th className="border border-gray-300 px-4 py-2 text-left">类型</th>
            <th className="border border-gray-300 px-4 py-2 text-left">默认值</th>
            <th className="border border-gray-300 px-4 py-2 text-left">说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2"><code>host</code></td>
            <td className="border border-gray-300 px-4 py-2">string</td>
            <td className="border border-gray-300 px-4 py-2">127.0.0.1</td>
            <td className="border border-gray-300 px-4 py-2">网关监听地址</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2"><code>port</code></td>
            <td className="border border-gray-300 px-4 py-2">number</td>
            <td className="border border-gray-300 px-4 py-2">18789</td>
            <td className="border border-gray-300 px-4 py-2">网关监听端口</td>
          </tr>
        </tbody>
      </table>

      <h3>channels（频道设置）</h3>

      <h4>WebChat</h4>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code>"webchat": {
  "enabled": true,
  "host": "127.0.0.1",
  "port": 18789,
  "basePath": "/"
}</code>
      </pre>

      <h4>WhatsApp</h4>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code>"whatsapp": {
  "enabled": true,
  "allowFrom": ["+86138xxxxxxxx"],
  "groups": {
    "*": {
      "requireMention": true
    }
  }
}</code>
      </pre>

      <h4>Telegram</h4>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code>"telegram": {
  "enabled": true,
  "botToken": "YOUR_BOT_TOKEN",
  "allowFrom": ["your_telegram_id"],
  "webhook": {
    "enabled": false,
    "url": "https://your-domain.com/webhook"
  }
}</code>
      </pre>

      <h4>Discord</h4>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code>"discord": {
  "enabled": true,
  "botToken": "YOUR_BOT_TOKEN",
  "allowFrom": ["your_discord_id"]
}</code>
      </pre>

      <h3>agent（Agent 设置）</h3>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code>"agent": {
  "model": "anthropic/claude-3-5-sonnet-20241022",
  "thinking": "low",
  "reasoning": false,
  "systemPrompt": "你是一个有帮助的 AI 助手。"
}</code>
      </pre>

      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">选项</th>
            <th className="border border-gray-300 px-4 py-2 text-left">说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2"><code>model</code></td>
            <td className="border border-gray-300 px-4 py-2">使用的 AI 模型，支持 anthropic/* 和 openai/* 格式</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2"><code>thinking</code></td>
            <td className="border border-gray-300 px-4 py-2">思考级别：low、medium、high 或 off</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2"><code>reasoning</code></td>
            <td className="border border-gray-300 px-4 py-2">是否显示推理过程</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2"><code>systemPrompt</code></td>
            <td className="border border-gray-300 px-4 py-2">系统提示词，定义 Agent 的行为</td>
          </tr>
        </tbody>
      </table>

      <h2>环境变量</h2>

      <p>以下环境变量可用于配置 API 密钥：</p>

      <ul>
        <li><code>ANTHROPIC_API_KEY</code> - Anthropic Claude API 密钥</li>
        <li><code>OPENAI_API_KEY</code> - OpenAI API 密钥</li>
        <li><code>GEMINI_API_KEY</code> - Google Gemini API 密钥</li>
        <li><code>DEEPSEEK_API_KEY</code> - DeepSeek API 密钥</li>
      </ul>

      <h2>配置验证</h2>

      <p>使用以下命令验证配置是否正确：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code>openclaw gateway config:validate</code>
      </pre>
    </div>
  )
}
