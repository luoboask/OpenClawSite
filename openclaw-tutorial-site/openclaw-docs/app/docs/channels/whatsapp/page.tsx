export const metadata = {
  title: 'WhatsApp 接入 - OpenClaw 中文教程',
  description: '配置 OpenClaw 接入 WhatsApp，通过个人账号与 AI 助手对话',
}

export default function WhatsAppPage() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>WhatsApp 接入</h1>
      
      <p>将 OpenClaw 接入 WhatsApp，让你可以通过手机上的 WhatsApp 与 AI 助手对话。</p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
        <p className="text-blue-900">
          <strong>注意：</strong> WhatsApp 接入使用 <a href="https://github.com/pedroslopez/whatsapp-web.js">whatsapp-web.js</a> 
          库，需要扫描二维码登录，类似于 WhatsApp Web。
        </p>
      </div>

      <h2>前置要求</h2>
      
      <ul>
        <li>一个可用的 WhatsApp 账号</li>
        <li>手机能够访问 WhatsApp（用于扫描二维码）</li>
      </ul>

      <h2>配置步骤</h2>

      <h3>1. 启用 WhatsApp 频道</h3>

      <p>编辑配置文件 <code>~/.openclaw/openclaw.json</code>：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code>{`{
  "channels": {
    "whatsapp": {
      "enabled": true,
      "allowFrom": ["+86138xxxxxxxx"],
      "groups": {
        "*": {
          "requireMention": true
        }
      }
    }
  }
}`}</code>
      </pre>

      <h3>2. 配置说明</h3>

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
            <td className="border border-gray-300 px-4 py-2">允许访问的手机号码列表（带国家代码）</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2"><code>groups.requireMention</code></td>
            <td className="border border-gray-300 px-4 py-2">群组中是否需要 @提及才响应</td>
          </tr>
        </tbody>
      </table>

      <h3>3. 重启 Gateway</h3>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code>openclaw gateway restart</code>
      </pre>

      <h3>4. 扫描二维码</h3>

      <p>首次启动时，控制台会显示一个二维码。打开手机 WhatsApp：</p>

      <ol>
        <li>点击右上角菜单 → 设置 → 已关联设备</li>
        <li>点击"关联新设备"</li>
        <li>扫描终端显示的二维码</li>
      </ol>

      <h3>5. 测试</h3>

      <p>登录成功后，使用配置的手机号发送消息给你的 WhatsApp 账号，AI 助手应该会响应。</p>

      <h2>常见问题</h2>

      <h3>二维码不显示</h3>
      <p>确保终端支持图像显示，或者使用 <code>--qr-terminal</code> 选项使用 ASCII 二维码。</p>

      <h3>会话过期</h3>
      <p>WhatsApp Web 会话会定期过期，需要重新扫描二维码。</p>

      <h3>多设备支持</h3>
      <p>WhatsApp 官方限制一个账号只能有一个 Web 会话。如果已在浏览器登录 WhatsApp Web，需要先登出。</p>
    </div>
  )
}
