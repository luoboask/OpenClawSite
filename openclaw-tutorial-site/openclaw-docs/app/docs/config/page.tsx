export const metadata = {
  title: '配置详解 - OpenClaw 中文教程',
  description: 'OpenClaw 配置文件完整参考，了解所有可用选项',
}

// 表格组件
function ConfigTable({ headers, rows }: { headers: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
      <table className="w-full border-collapse border border-gray-200 rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-gray-50">
            {headers.map((h, i) => (
              <th key={i} className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="bg-white hover:bg-gray-50">
              {row.map((cell, j) => (
                <td key={j} className="border border-gray-200 px-4 py-3 text-sm">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
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

// 小节标题
function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">{children}</h3>
}

function H4({ children }: { children: React.ReactNode }) {
  return <h4 className="text-base font-medium text-gray-900 mt-6 mb-3">{children}</h4>
}

export default function ConfigPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">配置详解</h1>
        <p className="text-xl text-gray-600">
          OpenClaw 的配置文件位于 <code className="bg-gray-300 text-black px-2 py-0.5 rounded text-sm">~/.openclaw/openclaw.json</code>。
          本文档详细介绍所有配置选项。
        </p>
      </div>

      {/* 配置文件位置 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          配置文件位置
        </h2>
        
        <CodeBlock filename="bash">{`# macOS/Linux
~/.openclaw/openclaw.json

# Windows
%USERPROFILE%\\.openclaw\\openclaw.json`}</CodeBlock>
      </section>

      {/* 基础配置示例 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          基础配置示例
        </h2>
        
        <CodeBlock filename="openclaw.json">{`{
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
}`}</CodeBlock>
      </section>

      {/* 配置项说明 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          配置项说明
        </h2>

        <H3>gateway（网关设置）</H3>
        
        <ConfigTable
          headers={['选项', '类型', '默认值', '说明']}
          rows={[
            [<code key="1" className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">host</code>,
              'string',
              '127.0.0.1',
              '网关监听地址'
            ],
            [<code key="2" className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">port</code>,
              'number',
              '18789',
              '网关监听端口'
            ],
          ]}
        />

        <H3>channels（频道设置）</H3>

        <H4>WebChat</H4>
        <CodeBlock>{`"webchat": {
  "enabled": true,
  "host": "127.0.0.1",
  "port": 18789,
  "basePath": "/"
}`}</CodeBlock>

        <H4>WhatsApp</H4>
        <CodeBlock>{`"whatsapp": {
  "enabled": true,
  "allowFrom": ["+86138xxxxxxxx"],
  "groups": {
    "*": {
      "requireMention": true
    }
  }
}`}</CodeBlock>

        <H4>Telegram</H4>
        <CodeBlock>{`"telegram": {
  "enabled": true,
  "botToken": "YOUR_BOT_TOKEN",
  "allowFrom": ["your_telegram_id"],
  "webhook": {
    "enabled": false,
    "url": "https://your-domain.com/webhook"
  }
}`}</CodeBlock>

        <H4>Discord</H4>
        <CodeBlock>{`"discord": {
  "enabled": true,
  "botToken": "YOUR_BOT_TOKEN",
  "allowFrom": ["your_discord_id"]
}`}</CodeBlock>

        <H3>agent（Agent 设置）</H3>

        <CodeBlock>{`"agent": {
  "model": "anthropic/claude-3-5-sonnet-20241022",
  "thinking": "low",
  "reasoning": false,
  "systemPrompt": "你是一个有帮助的 AI 助手。"
}`}</CodeBlock>

        <ConfigTable
          headers={['选项', '说明']}
          rows={[
            [<code key="1" className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">model</code>,
              '使用的 AI 模型，支持 anthropic/* 和 openai/* 格式'
            ],
            [<code key="2" className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">thinking</code>,
              '思考级别：low、medium、high 或 off'
            ],
            [<code key="3" className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">reasoning</code>,
              '是否显示推理过程'
            ],
            [<code key="4" className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">systemPrompt</code>,
              '系统提示词，定义 Agent 的行为'
            ],
          ]}
        />
      </section>

      {/* 环境变量 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          环境变量
        </h2>
        
        <p className="text-gray-600 mb-4">以下环境变量可用于配置 API 密钥：</p>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <ul className="space-y-3">
            {[
              ['ANTHROPIC_API_KEY', 'Anthropic Claude API 密钥'],
              ['OPENAI_API_KEY', 'OpenAI API 密钥'],
              ['GEMINI_API_KEY', 'Google Gemini API 密钥'],
              ['DEEPSEEK_API_KEY', 'DeepSeek API 密钥'],
            ].map(([key, desc]) => (
              <li key={key} className="flex items-center gap-3">
                <code className="bg-gray-300 text-black px-2 py-1 rounded text-sm font-mono min-w-[180px]">{key}</code>
                <span className="text-gray-600">{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 配置验证 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          配置验证
        </h2>
        
        <p className="text-gray-600 mb-4">使用以下命令验证配置是否正确：</p>

        <CodeBlock filename="bash">openclaw gateway config:validate</CodeBlock>
      </section>

      {/* 下一步 */}
      <section className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4">下一步</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <a 
            href="/docs/channels" 
            className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-orange-500 hover:shadow-md transition"
          >
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-900">频道接入</p>
              <p className="text-sm text-gray-500">配置聊天应用</p>
            </div>
          </a>
          
          <a 
            href="/docs/tools" 
            className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-orange-500 hover:shadow-md transition"
          >
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-900">工具开发</p>
              <p className="text-sm text-gray-500">扩展 Agent 能力</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}
