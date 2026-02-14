import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface PageLayoutProps {
  title: string
  description?: string
  children: React.ReactNode
  backLink?: {
    href: string
    label: string
  }
  actions?: React.ReactNode
}

export function PageLayout({ title, description, children, backLink, actions }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            {backLink && (
              <Link 
                href={backLink.href}
                className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-orange-600 mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {backLink.label}
              </Link>
            )}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {title}
                </h1>
                {description && (
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {description}
                  </p>
                )}
              </div>
              {actions && (
                <div className="flex-shrink-0">{actions}</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {children}
      </div>
    </div>
  )
}

interface ContentCardProps {
  children: React.ReactNode
  className?: string
}

export function ContentCard({ children, className = '' }: ContentCardProps) {
  return (
    <div className={`bg-white rounded-2xl border border-gray-200 p-6 md:p-8 ${className}`}>
      {children}
    </div>
  )
}

interface GridProps {
  children: React.ReactNode
  cols?: 1 | 2 | 3 | 4
  className?: string
}

export function Grid({ children, cols = 3, className = '' }: GridProps) {
  const colsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }
  
  return (
    <div className={`grid gap-6 ${colsClass[cols]} ${className}`}>
      {children}
    </div>
  )
}
