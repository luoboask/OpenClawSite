export const metadata = {
  title: '工具开发 - OpenClaw 中文教程',
  description: '学习如何为 OpenClaw Agent 开发自定义工具',
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
        <span className="ml-3 text-sm text-gray-400">{filename || 'javascript'}</span>
      </div>
      <pre className="p-4 text-gray-100 text-sm overflow-x-auto"><code>{children}</code></pre>
    </div>
  )
}

export default function ToolsPage() {
  const builtinTools = [
    { name: 'read', desc: '读取文件' },
    { name: 'write', desc: '写入文件' },
    { name: 'edit', desc: '编辑文件' },
    { name: 'exec', desc: '执行 shell 命令' },
    { name: 'browser', desc: '浏览器自动化' },
    { name: 'web_search', desc: '网络搜索' },
    { name: 'web_fetch', desc: '获取网页内容' },
    { name: 'memory_search', desc: '搜索记忆' },
    { name: 'memory_get', desc: '获取记忆片段' },
    { name: 'sessions_list', desc: '列出会话' },
    { name: 'sessions_send', desc: '发送消息到会话' },
    { name: 'sessions_spawn', desc: '创建子会话' },
    { name: 'cron', desc: '定时任务管理' },
    { name: 'message', desc: '发送消息' },
  ]

  return (
    <div className="max-w-3xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">工具开发</h1>
        <p className="text-xl text-gray-600">
          OpenClaw 支持自定义工具（Tools），让 Agent 可以执行代码、查询数据、控制设备等操作。
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">什么是工具？</h2>
        
        <p className="text-gray-600">
          工具是 Agent 可以调用的功能函数。当 Agent 认为需要某个工具来完成任务时，它会自动调用。
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">内置工具</h2>
        
        <p className="text-gray-600 mb-4">OpenClaw 默认包含以下工具：</p>

        <div className="grid sm:grid-cols-2 gap-3">
          {builtinTools.map((tool) => (
            <div 
              key={tool.name}
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200"
            >
              <code className="text-sm font-mono text-orange-600 bg-orange-50 px-2 py-1 rounded min-w-[100px]">{tool.name}</code>
              <span className="text-gray-600 text-sm">{tool.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">创建自定义工具</h2>
        
        <p className="text-gray-600 mb-4">工具是放在 <code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">~/.openclaw/skills/</code> 目录下的文件夹，每个工具包含：</p>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <code className="text-sm font-mono bg-white px-2 py-1 rounded border">SKILL.md</code>
              <span className="text-gray-600">工具定义和使用说明</span>
            </li>
            <li className="flex items-start gap-3">
              <code className="text-sm font-mono bg-white px-2 py-1 rounded border">index.js</code>
              <span className="text-gray-600">工具实现（可选）</span>
            </li>
          </ul>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">示例：天气查询工具</h3>
        
        <p className="text-gray-600 mb-4">创建工具目录：</p>

        <CodeBlock filename="bash">mkdir -p ~/.openclaw/skills/weather</CodeBlock>

        <p className="text-gray-600 mb-4">创建 SKILL.md：</p>

        <CodeBlock filename="markdown">{`# Weather Tool

查询指定城市的天气信息。

## 用法

{ "city": "string // 城市名称，如：北京、上海" }

## 示例

查询北京天气：
{ "city": "北京" }`}</CodeBlock>

        <p className="text-gray-600 mb-4">创建 index.js：</p>

        <CodeBlock>{`module.exports = async function(params, context) {
  const { city } = params;
  
  // 这里调用天气 API
  // const weather = await fetchWeather(city);
  
  return {
    temperature: "25°C",
    condition: "晴天",
    humidity: "60%"
  };
};`}</CodeBlock>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">工具配置</h2>
        
        <p className="text-gray-600 mb-4">在 <code className="bg-gray-300 text-black px-1.5 py-0.5 rounded text-sm">openclaw.json</code> 中启用/禁用工具：</p>

        <CodeBlock>{`{
  "tools": {
    "weather": { "enabled": true },
    "exec": { "enabled": false }
  }
}`}</CodeBlock>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">最佳实践</h2>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <ul className="space-y-4">
            {[
              '工具描述要清晰，让 Agent 知道何时使用该工具',
              '参数类型要明确，提供示例',
              '错误处理要完善，返回有意义的错误信息',
              '敏感操作（如 exec）要谨慎启用',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
