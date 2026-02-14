export const metadata = {
  title: '进阶技巧 - OpenClaw 中文教程',
  description: 'OpenClaw 进阶使用技巧和最佳实践',
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

function CodeBlockLight({ children }: { children: string }) {
  return (
    <div className="bg-gray-100 rounded-xl p-4 my-4 overflow-x-auto">
      <pre className="text-gray-700 text-sm"><code>{children}</code></pre>
    </div>
  )
}

export default function AdvancedPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">进阶技巧</h1>
        <p className="text-xl text-gray-600">
          本文介绍 OpenClaw 的一些进阶使用技巧，帮助你更高效地使用这个 AI 网关。
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">多模型切换</h2>
        
        <p className="text-gray-600 mb-4">你可以配置多个 AI 提供商，按需切换：</p>

        <CodeBlock>{`{
  "agent": {
    "model": "anthropic/claude-3-5-sonnet-20241022"
  },
  "models": {
    "fast": "openai/gpt-4o-mini",
    "coding": "anthropic/claude-3-5-sonnet-20241022",
    "creative": "anthropic/claude-3-opus-20240229"
  }
}`}</CodeBlock>

        <p className="text-gray-600 mb-4">在对话中切换模型：</p>

        <CodeBlockLight>{`/user: 切换到快速模型
/agent: 已切换到 gpt-4o-mini`}</CodeBlockLight>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">自定义系统提示词</h2>
        
        <p className="text-gray-600 mb-4">通过自定义系统提示词，让 Agent 具备特定角色能力：</p>

        <CodeBlock>{`{
  "agent": {
    "systemPrompt": "你是一位经验丰富的软件开发工程师，擅长..."
  }
}`}</CodeBlock>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">会话隔离与共享</h2>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">个人隔离（默认）</h3>
        <p className="text-gray-600 mb-4">每个用户拥有独立的会话和记忆：</p>

        <CodeBlock>{`"sessions": {
  "isolation": "per-sender"
}`}</CodeBlock>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">共享会话</h3>
        <p className="text-gray-600 mb-4">群组成员共享同一个会话上下文：</p>

        <CodeBlock>{`"sessions": {
  "isolation": "per-channel"
}`}</CodeBlock>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">定时任务（Cron）</h2>
        
        <p className="text-gray-600 mb-4">使用内置的 cron 工具设置定时任务：</p>

        <CodeBlockLight>{`/user: 每天早上 9 点提醒我查看邮件
/agent: 已创建定时任务，每天早上 9:00 提醒您查看邮件。`}</CodeBlockLight>

        <p className="text-gray-600 mb-4">查看所有定时任务：</p>

        <CodeBlockLight>{`/user: 列出所有定时任务
/agent: 以下是您的定时任务：
- 每天 09:00 提醒查看邮件`}</CodeBlockLight>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">子 Agent 会话</h2>
        
        <p className="text-gray-600 mb-4">对于复杂任务，可以创建独立的子会话：</p>

        <CodeBlockLight>{`/user: 帮我研究一下 Kubernetes 的网络架构，稍后给我一份详细报告
/agent: 好的，我将创建一个后台任务来研究这个话题。预计需要 10-15 分钟完成。

[后台任务运行中...]

/agent: 研究报告已完成！以下是 Kubernetes 网络架构的详细分析：
...`}</CodeBlockLight>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">工具调用控制</h2>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">禁用特定工具</h3>

        <CodeBlock>{`{
  "tools": {
    "exec": { "enabled": false },
    "write": { "enabled": false }
  }
}`}</CodeBlock>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">工具白名单</h3>

        <CodeBlock>{`{
  "tools": {
    "*": { "enabled": false },
    "read": { "enabled": true },
    "web_search": { "enabled": true }
  }
}`}</CodeBlock>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">备份与恢复</h2>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">备份配置</h3>

        <CodeBlock filename="bash">{`# 备份配置
cp ~/.openclaw/openclaw.json ~/openclaw-backup.json

# 备份记忆
cp -r ~/.openclaw/workspace/memory ~/openclaw-memory-backup/

# 使用脚本自动备份
#!/bin/bash
tar czf "openclaw-backup-$(date +%Y%m%d).tar.gz" ~/.openclaw/`}</CodeBlock>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">性能优化</h2>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">限制上下文长度</h3>

        <CodeBlock>{`{
  "agent": {
    "maxContextMessages": 20,
    "maxTokens": 4000
  }
}`}</CodeBlock>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">启用流式响应</h3>

        <CodeBlock>{`{
  "agent": {
    "stream": true
  }
}`}</CodeBlock>
      </section>

      <section className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
        <p className="text-gray-600">
          更多技巧请关注我们的<a href="/blog" className="text-orange-600 hover:underline">技术博客</a>
          或加入<a href="https://discord.com/invite/clawd" className="text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">Discord 社区</a>交流。
        </p>
      </section>
    </div>
  )
}
