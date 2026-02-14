'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  BookOpen, 
  Home, 
  Terminal, 
  Settings, 
  MessageCircle, 
  Puzzle, 
  Shield,
  HelpCircle,
  Zap,
  ChevronRight,
  Menu,
  X
} from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { icon: Home, label: '首页', href: '/' },
  { icon: BookOpen, label: '快速开始', href: '/docs/quickstart' },
  { icon: Terminal, label: '安装指南', href: '/docs/install' },
  { icon: Settings, label: '配置详解', href: '/docs/config' },
  { icon: MessageCircle, label: '频道接入', href: '/docs/channels' },
  { icon: Zap, label: '进阶技巧', href: '/docs/advanced' },
  { icon: Puzzle, label: '工具开发', href: '/docs/tools' },
  { icon: Shield, label: '安全指南', href: '/docs/security' },
  { icon: HelpCircle, label: '故障排查', href: '/docs/troubleshooting' },
]

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">O</span>
          </div>
          <span className="font-bold text-gray-900">OpenClaw</span>
        </Link>
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <aside className={`
          fixed lg:sticky lg:top-0 z-40
          w-64 h-screen bg-white border-r border-gray-200 overflow-y-auto
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="p-6">
            <Link href="/" className="hidden lg:flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <div>
                <span className="font-bold text-gray-900 text-lg">OpenClaw</span>
                <span className="block text-xs text-gray-500">中文文档</span>
              </div>
            </Link>

            <nav className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`
                      flex items-center space-x-3 px-3 py-2.5 rounded-lg transition
                      ${isActive 
                        ? 'bg-orange-50 text-orange-700 font-medium' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }
                    `}
                  >
                    <item.icon className={`w-5 h-5 ${isActive ? 'text-orange-600' : 'text-gray-400'}`} />
                    <span>{item.label}</span>
                    {isActive && <ChevronRight className="w-4 h-4 ml-auto text-orange-600" />}
                  </Link>
                )
              })}
            </nav>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-3">外部链接</p>
              <div className="space-y-2">
                <a 
                  href="https://github.com/openclaw/openclaw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900"
                >
                  <span>GitHub →</span>
                </a>
                <a 
                  href="https://docs.openclaw.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900"
                >
                  <span>官方英文文档 →</span>
                </a>
                <a 
                  href="https://discord.com/invite/clawd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900"
                >
                  <span>Discord 社区 →</span>
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
