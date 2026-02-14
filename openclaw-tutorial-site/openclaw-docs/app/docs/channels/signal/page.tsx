export const metadata = {
  title: 'Signal 接入 - OpenClaw 中文教程',
  description: '配置 OpenClaw 接入 Signal 消息应用（Beta）',
}

export default function SignalPage() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>Signal 接入</h1>
      
      <p>将 OpenClaw 接入 Signal，在注重隐私的加密通讯应用中使用 AI 助手。</p>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg my-6">
        <p className="text-yellow-900">
          <strong>Beta 功能：</strong> Signal 接入目前处于测试阶段，
          功能和稳定性可能不如其他频道完善。
        </p>
      </div>

      <h2>前置要求</h2>
      
      <ul>
        <li>一个 Signal 账号</li>
        <li>Signal CLI 工具（独立进程）</li>
        <li>（可选）Signal 桌面应用</li>
      </ul>

      <h2>配置步骤</h2>

      <h3>1. 安装 Signal CLI</h3>

      <p>Signal 接入需要 <code>signal-cli</code> 作为依赖：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code># macOS
brew install signal-cli

# Linux (Debian/Ubuntu)
# 下载预编译版本或从源码编译
# 参考：https://github.com/AsamK/signal-cli</code>
      </pre>

      <h3>2. 注册 Signal 账号（如未注册）</h3>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code>signal-cli -a +86138xxxxxxxx register</code>
      </pre>

      <p>你会收到验证码，然后使用：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code>signal-cli -a +86138xxxxxxxx verify 123456</code>
      </pre>

      <h3>3. 配置 OpenClaw</h3>

      <p>编辑配置文件：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code>{`{
  "channels": {
    "signal": {
      "enabled": true,
      "account": "+86138xxxxxxxx",
      "allowFrom": ["+86139xxxxxxxx"]
    }
  }
}`}</code>
      </pre>

      <h3>4. 启动 Gateway</h3>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code>openclaw gateway restart</code>
      </pre>

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
            <td className="border border-gray-300 px-4 py-2"><code>account</code></td>
            <td className="border border-gray-300 px-4 py-2">Signal 账号（手机号，带国家代码）</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2"><code>allowFrom</code></td>
            <td className="border border-gray-300 px-4 py-2">允许访问的手机号列表</td>
          </tr>
        </tbody>
      </table>

      <h2>已知限制</h2>

      <ul>
        <li>需要独立运行 signal-cli 进程</li>
        <li>群聊支持有限</li>
        <li>媒体消息（图片/视频）处理不完善</li>
        <li>在某些地区可能需要网络工具</li>
      </ul>

      <h2>故障排查</h2>

      <h3>无法连接 signal-cli</h3>
      <p>确保 signal-cli 在 PATH 中可访问，或指定完整路径：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code>which signal-cli</code>
      </pre>

      <h3>收不到消息</h3>
      <ul>
        <li>检查 signal-cli 是否已注册并登录</li>
        <li>尝试手动发送测试消息：<code>signal-cli send -m "test" +86139xxxxxxxx</code></li>
        <li>查看 OpenClaw 日志中的错误信息</li>
      </ul>
    </div>
  )
}
