export const metadata = {
  title: '工具开发 - OpenClaw 中文教程',
  description: '学习如何为 OpenClaw Agent 开发自定义工具',
}

export default function ToolsPage() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>工具开发</h1>
      
      <p>OpenClaw 支持自定义工具（Tools），让 Agent 可以执行代码、查询数据、控制设备等操作。</p>

      <h2>什么是工具？</h2>

      <p>工具是 Agent 可以调用的功能函数。当 Agent 认为需要某个工具来完成任务时，它会自动调用。</p>

      <h2>内置工具</h2>

      <p>OpenClaw 默认包含以下工具：</p>

      <ul>
        <li><strong>read</strong> - 读取文件</li>
        <li><strong>write</strong> - 写入文件</li>
        <li><strong>edit</strong> - 编辑文件</li>
        <li><strong>exec</strong> - 执行 shell 命令</li>
        <li><strong>browser</strong> - 浏览器自动化</li>
        <li><strong>web_search</strong> - 网络搜索</li>
        <li><strong>web_fetch</strong> - 获取网页内容</li>
        <li><strong>memory_search</strong> - 搜索记忆</li>
        <li><strong>memory_get</strong> - 获取记忆片段</li>
        <li><strong>sessions_list</strong> - 列出会话</li>
        <li><strong>sessions_send</strong> - 发送消息到会话</li>
        <li><strong>sessions_spawn</strong> - 创建子会话</li>
        <li><strong>cron</strong> - 定时任务管理</li>
        <li><strong>message</strong> - 发送消息</li>
      </ul>

      <h2>创建自定义工具</h2>

      <p>工具是放在 <code>~/.openclaw/skills/</code> 目录下的文件夹，每个工具包含：</p>

      <ul>
        <li><code>SKILL.md</code> - 工具定义和使用说明</li>
        <li><code>index.js</code> - 工具实现（可选）</li>
      </ul>

      <h3>示例：天气查询工具</h3>

      <p>创建工具目录：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code>mkdir -p ~/.openclaw/skills/weather</code>
      </pre>

      <p>创建 <code>SKILL.md</code>：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code># Weather Tool

查询指定城市的天气信息。

## 用法

<!-- @weather -->
{
  "city": "string // 城市名称，如：北京、上海"
}
<!-- @weather -->

## 示例

查询北京天气：
<!-- @weather {"city": "北京"} --><!-- @weather -->
</code>
      </pre>

      <p>创建 <code>index.js</code>：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code>module.exports = async function(params, context) {
  const { city } = params;
  
  // 这里调用天气 API
  // 示例：使用 wttr.in
  const response = await fetch(`https://wttr.in/${city}?format=j1`);
  const data = await response.json();
  
  return {
    city: city,
    temperature: data.current_condition[0].temp_C,
    condition: data.current_condition[0].lang_zh[0].value,
    humidity: data.current_condition[0].humidity
  };
};</code>
      </pre>

      <h2>工具配置</h2>

      <p>在 <code>openclaw.json</code> 中启用工具：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code>{
  "tools": {
    "weather": {
      "enabled": true
    }
  }
}</code>
      </pre>

      <h2>ClawHub 工具库</h2>

      <p>社区维护的工具库，可以通过命令安装：</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code># 搜索可用工具
openclaw skills search weather

# 安装工具
openclaw skills install weather

# 列出已安装工具
openclaw skills list</code>
      </pre>

      <h2>发布工具</h2>

      <p>如果你开发了有用的工具，可以发布到 ClawHub：</p>

      <ol>
        <li>确保工具目录包含完整的 SKILL.md</li>
        <li>在 GitHub 创建仓库</li>
        <li>提交到 ClawHub（具体流程参考官方文档）</li>
      </ol>
    </div>
  )
}
