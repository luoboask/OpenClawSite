"use client";

import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { MobileNav } from '@/components/mobile-nav'
import { useState } from 'react'

export default function BlogPostPage({ 
  title, 
  excerpt, 
  content,
  date = "2026-02-14",
  readTime = "8 分钟",
  category = "渠道配置"
}: { 
  title: string;
  excerpt: string;
  content: React.ReactNode;
  date?: string;
  readTime?: string;
  category?: string;
}) {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white transition-colors duration-200">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">O</span>
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">OpenClaw</span>
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-orange-600">博客</Link>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <header className="py-12 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-orange-600 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回博客
          </Link>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-sm rounded-full">
              {category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">{excerpt}</p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-2"><User className="w-4 h-4" />OpenClaw 中文社区</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{date}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{readTime}</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {content}
        </article>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2026 OpenClaw 中文教程</p>
        </div>
      </footer>
    </div>
  );
}
