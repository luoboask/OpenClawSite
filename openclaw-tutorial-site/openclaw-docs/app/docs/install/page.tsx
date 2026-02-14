export const metadata = {
  title: '安装指南 - OpenClaw 中文教程',
  description: 'OpenClaw 详细安装步骤，支持 macOS、Linux 和 Windows',
}

export default function InstallPage() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>安装指南</h1>
      
      <p>OpenClaw 支持多种安装方式，选择适合你的方法开始安装。</p>

      <h2>系统要求</h2>
      
      <ul>
        <li><strong>操作系统：</strong> macOS 12+、Linux (Ubuntu 20.04+)、Windows 10/11 (WSL2)</li>
        <li><strong>Node.js：</strong> 22.0.0 或更高版本</li>
        <li><strong>内存：</strong> 至少 4GB RAM</li>
        <li><strong>存储：</strong> 至少 1GB 可用空间</li>
      </ul>

      <h2>安装 Node.js</h2>

      <h3>macOS</h3>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code># 使用 Homebrew 安装
brew install node

# 验证安装
node --version  # 应显示 v22.x.x 或更高</code>
      </pre>

      <h3>Ubuntu/Debian</h3>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code># 使用 NodeSource 安装最新版本
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs

# 验证安装
node --version</code>
      </pre>

      <h3>Windows (WSL2)</h3>
      <p>在 WSL2 Ubuntu 环境中，使用与 Ubuntu 相同的命令安装。</p>

      <h2>安装 OpenClaw</h2>

      <h3>方式一：npm 全局安装（推荐）</h3>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code>npm install -g openclaw</code>
      </pre>

      <h3>方式二：使用 npx（无需全局安装）</h3>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code>npx openclaw gateway start</code>
      </pre>

      <h3>方式三：从源码安装</h3>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code># 克隆仓库
git clone https://github.com/openclaw/openclaw.git
cd openclaw

# 安装依赖并构建
npm install
npm run build

# 链接到全局
npm link</code>
      </pre>

      <h2>验证安装</h2>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
<code>openclaw --version
openclaw --help</code>
      </pre>

      <h2>目录结构</h2>

      <p>安装后，OpenClaw 会在你的主目录创建以下结构：</p>

      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
<code>~/.openclaw/
├── openclaw.json      # 主配置文件
├── workspace/         # 工作目录
│   ├── memory/        # 记忆文件
│   └── ...
└── logs/              # 日志文件</code>
      </pre>

      <h2>下一步</h2>

      <p>安装完成后，继续阅读：</p>

      <ul>
        <li><a href="/docs/quickstart" className="text-orange-600 hover:underline">快速开始</a> - 5 分钟完成配置</li>
        <li><a href="/docs/config" className="text-orange-600 hover:underline">配置详解</a> - 了解所有配置选项</li>
      </ul>
    </div>
  )
}
