export const metadata = {
  title: '安装指南 - OpenClaw 中文教程',
  description: 'OpenClaw 详细安装步骤，支持 macOS、Linux 和 Windows',
}

export default function InstallPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">安装指南</h1>
        <p className="text-xl text-gray-600">
          OpenClaw 支持多种安装方式，选择适合你的方法开始安装。
        </p>
      </div>

      {/* 系统要求 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          系统要求
        </h2>
        
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="font-semibold text-gray-700 min-w-[80px]">操作系统：</span>
              <span className="text-gray-600">macOS 12+、Linux (Ubuntu 20.04+)、Windows 10/11 (WSL2)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold text-gray-700 min-w-[80px]">Node.js：</span>
              <span className="text-gray-600">22.0.0 或更高版本</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold text-gray-700 min-w-[80px]">内存：</span>
              <span className="text-gray-600">至少 4GB RAM</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold text-gray-700 min-w-[80px]">存储：</span>
              <span className="text-gray-600">至少 1GB 可用空间</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 安装 Node.js */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          安装 Node.js
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">macOS</h3>
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>
                <span className="ml-3 text-sm text-gray-400">terminal</span>
              </div>
              <pre className="p-4 text-gray-100 text-sm overflow-x-auto"><code># 使用 Homebrew 安装
brew install node

# 验证安装
node --version  # 应显示 v22.x.x 或更高</code></pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Ubuntu/Debian</h3>
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>
                <span className="ml-3 text-sm text-gray-400">terminal</span>
              </div>
              <pre className="p-4 text-gray-100 text-sm overflow-x-auto"><code># 使用 NodeSource 安装最新版本
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs

# 验证安装
node --version</code></pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Windows (WSL2)</h3>
            <p className="text-gray-600 mb-3">在 WSL2 Ubuntu 环境中，使用与 Ubuntu 相同的命令安装。</p>
          </div>
        </div>
      </section>

      {/* 安装 OpenClaw */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          安装 OpenClaw
        </h2>

        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">推荐</span>
              <h3 className="text-lg font-semibold text-gray-900">方式一：npm 全局安装</h3>
            </div>
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>
                <span className="ml-3 text-sm text-gray-400">terminal</span>
              </div>
              <pre className="p-4 text-gray-100 text-sm overflow-x-auto"><code>npm install -g openclaw</code></pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">方式二：使用 npx（无需全局安装）</h3>
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>
                <span className="ml-3 text-sm text-gray-400">terminal</span>
              </div>
              <pre className="p-4 text-gray-100 text-sm overflow-x-auto"><code>npx openclaw gateway start</code></pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">方式三：从源码安装</h3>
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>
                <span className="ml-3 text-sm text-gray-400">terminal</span>
              </div>
              <pre className="p-4 text-gray-100 text-sm overflow-x-auto"><code># 克隆仓库
git clone https://github.com/openclaw/openclaw.git
cd openclaw

# 安装依赖并构建
npm install
npm run build

# 链接到全局
npm link</code></pre>
            </div>
          </div>
        </div>
      </section>

      {/* 验证安装 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          验证安装
        </h2>
        
        <div className="bg-gray-900 rounded-xl overflow-hidden">
          <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
            <span className="ml-3 text-sm text-gray-400">terminal</span>
          </div>
          <pre className="p-4 text-gray-100 text-sm overflow-x-auto"><code>openclaw --version
openclaw --help</code></pre>
        </div>
      </section>

      {/* 目录结构 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          目录结构
        </h2>
        
        <p className="text-gray-600 mb-4">安装后，OpenClaw 会在你的主目录创建以下结构：</p>
        
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 font-mono text-sm">
          <pre className="text-gray-700">{`~/.openclaw/
├── openclaw.json      # 主配置文件
├── workspace/         # 工作目录
│   ├── memory/        # 记忆文件
│   └── ...
└── logs/              # 日志文件`}</pre>
        </div>
      </section>

      {/* 下一步 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          下一步
        </h2>
        
        <p className="text-gray-600 mb-4">安装完成后，继续阅读：</p>
        
        <div className="grid sm:grid-cols-2 gap-4">
          <a 
            href="/docs/quickstart" 
            className="group flex items-center p-5 bg-white border border-gray-200 rounded-xl hover:border-orange-500 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition">快速开始</h3>
              <p className="text-sm text-gray-500">5 分钟完成配置</p>
            </div>
          </a>
          
          <a 
            href="/docs/config" 
            className="group flex items-center p-5 bg-white border border-gray-200 rounded-xl hover:border-orange-500 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition">配置详解</h3>
              <p className="text-sm text-gray-500">了解所有配置选项</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}
