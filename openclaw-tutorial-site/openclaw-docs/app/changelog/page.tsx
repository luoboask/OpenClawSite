export const metadata = {
  title: '更新日志 - OpenClaw 中文教程',
  description: 'OpenClaw 中文教程网站更新记录',
}

const changelogs = [
  {
    date: '2026-02-13',
    version: 'v1.0.0',
    changes: [
      '网站正式上线',
      '完成快速开始指南',
      '添加安装指南和配置详解',
      '完成主要频道接入教程（WhatsApp、Telegram、Discord）',
      '添加安全指南和工具开发文档'
    ]
  }
]

export default function ChangelogPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">更新日志</h1>
        <p className="text-xl text-gray-600">
          记录网站的更新历史和改进内容
        </p>
      </div>

      <div className="space-y-8">
        {changelogs.map((log, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                  {log.version}
                </span>
                <span className="text-gray-500">{log.date}</span>
              </div>
            </div>
            
            <ul className="space-y-2">
              {log.changes.map((change, cidx) => (
                <li key={cidx} className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{change}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-xl">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">计划中的内容</h2>
        
        <ul className="space-y-2 text-gray-600">
          <li>• iMessage 接入教程</li>
          <li>• Signal 接入教程</li>
          <li>• Slack 接入教程</li>
          <li>• 进阶工具开发案例</li>
          <li>• Docker 部署指南</li>
          <li>• VPS 服务器部署</li>
          <li>• 故障排查手册</li>
        </ul>
      </div>
    </div>
  )
}
