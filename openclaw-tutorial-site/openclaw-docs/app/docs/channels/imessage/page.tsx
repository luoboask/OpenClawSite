export const metadata = {
  title: 'iMessage 接入 - OpenClaw 中文教程',
  description: '在 macOS 上配置 OpenClaw 接入 iMessage',
}

export default function iMessagePage() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>iMessage 接入</h1>
      
      <p>将 OpenClaw 接入 iMessage，让你在 Mac 的「信息」应用中直接与 AI 助手对话。</p>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg my-6">
        <p className="text-yellow-900">
          <strong>注意：</strong> iMessage 集成<strong>仅支持 macOS</strong>，
          且需要开启「辅助功能」权限。
        </p>
      </div>

      <h2>前置要求</h2>
      
      <ul>
        <li>运行 macOS 12+ 的 Mac 电脑</li>
        <li>已登录 iMessage（信息应用可正常使用）</li>
        <li>允许 OpenClaw 控制你的 Mac（辅助功能权限）</li>
      </ul>

      <h2>配置步骤</h2>

      <h3>1. 启用 iMessage 频道</h3>

      <p>编辑配置文件 <code>~/.openclaw/openclaw.json</code>：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code>{
  "channels": {
    "imessage": {
      "enabled": true,
      "allowFrom": ["+86138xxxxxxxx"],
      "autoReply": true
    }
  }
}</code>
      </pre>

      <h3>2. 授权辅助功能</h3>

      <p>首次启动时，系统会弹出权限请求：</p>

      <ol>
        <li>打开「系统设置」→「隐私与安全性」→「辅助功能」</li>
        <li>点击下方的「+」按钮</li>
        <li>选择「终端」（或你运行 OpenClaw 的应用）</li>
        <li>开启开关授权</li>
      </ol>

      <h3㸾3. 重启 Gateway</h3>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code>openclaw gateway restart</code>
      </pre>

      <h2>使用方式</h2>

      <p>配置完成后，你可以在 Mac 的「信息」应用中：</p>

      <ul>
        <li>给自己发送消息（使用与 allowFrom 相同的手机号）</li>
        <li>AI 助手会自动回复</li>
        <li>支持文本消息和部分格式</li>
      </ul>

      <h2>配置选项</h2>

      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">选项</th>
            <th className="border border-gray-300 px-4 py-2 text-left">说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2"><code>allowFrom</code></td>
            <td className="border border-gray-300 px-4 py-2">允许访问的手机号列表</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2"><code>autoReply</code></td>
            <td className="border border-gray-300 px-4 py-2">是否自动回复（否则需要特定触发词）</td>
          </tr>
        </tbody>
      </table>

      <h2>常见问题</h2>

      <h3>无法收到回复</h3>
      <ul>
        <li>检查「信息」应用是否在前台运行</li>
        <li>检查辅助功能权限是否已授权</li>
        <li>确认 allowFrom 中的手机号格式正确（带国家代码）</li>
      </ul>

      <h3>回复延迟较高</h3>
      <p>iMessage 依赖 UI 自动化，响应速度比 API 方式的频道慢，这是正常现象。</p>

      <h3>是否支持群聊？</h3>
      <p>iMessage 频道目前主要支持私聊。群聊支持可能不稳定。</p>
    </div>
  )
}
