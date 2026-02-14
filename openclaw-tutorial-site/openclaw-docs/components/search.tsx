"use client";

import { useState, useEffect, useMemo } from "react";
import { Search, X, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

interface SearchResult {
  title: string;
  path: string;
  excerpt: string;
  category: string;
}

const docsIndex: SearchResult[] = [
  { title: "快速开始", path: "/docs/quickstart", excerpt: "5 分钟部署 OpenClaw", category: "入门" },
  { title: "安装指南", path: "/docs/install", excerpt: "各平台详细安装步骤", category: "入门" },
  { title: "配置详解", path: "/docs/config", excerpt: "openclaw.json 完整参考", category: "配置" },
  { title: "频道接入概览", path: "/docs/channels", excerpt: "WhatsApp、Telegram、Discord 等", category: "频道" },
  { title: "WhatsApp 接入", path: "/docs/channels/whatsapp", excerpt: "WhatsApp Business API 配置", category: "频道" },
  { title: "Telegram 接入", path: "/docs/channels/telegram", excerpt: "Telegram Bot 配置", category: "频道" },
  { title: "Discord 接入", path: "/docs/channels/discord", excerpt: "Discord Bot 配置", category: "频道" },
  { title: "iMessage 接入", path: "/docs/channels/imessage", excerpt: "macOS 信息应用集成", category: "频道" },
  { title: "Signal 接入", path: "/docs/channels/signal", excerpt: "Signal CLI 配置", category: "频道" },
  { title: "Slack 接入", path: "/docs/channels/slack", excerpt: "Slack Bot 配置", category: "频道" },
  { title: "进阶技巧", path: "/docs/advanced", excerpt: "多模型切换、定时任务、性能优化", category: "进阶" },
  { title: "安全指南", path: "/docs/security", excerpt: "安全配置最佳实践", category: "进阶" },
  { title: "工具开发", path: "/docs/tools", excerpt: "自定义工具开发指南", category: "开发" },
  { title: "故障排查", path: "/docs/troubleshooting", excerpt: "常见问题解决方法", category: "帮助" },
  { title: "关于", path: "/about", excerpt: "关于本站", category: "其他" },
  { title: "更新日志", path: "/changelog", excerpt: "版本更新记录", category: "其他" },
];

export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const lowercaseQuery = query.toLowerCase();
    const filtered = docsIndex.filter(
      (doc) =>
        doc.title.toLowerCase().includes(lowercaseQuery) ||
        doc.excerpt.toLowerCase().includes(lowercaseQuery) ||
        doc.category.toLowerCase().includes(lowercaseQuery)
    );
    setResults(filtered);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center border-b border-gray-200 dark:border-gray-700 px-4">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜索文档..."
            className="flex-1 py-4 px-3 bg-transparent outline-none text-gray-900 dark:text-white placeholder:text-gray-400"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
              <X className="w-4 h-4 text-gray-400" />
            </button>
          )}
          <button
            onClick={onClose}
            className="ml-2 px-2 py-1 text-xs text-gray-400 bg-gray-100 dark:bg-gray-700 rounded">
            ESC
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {query.length < 2 ? (
            <div className="p-8 text-center text-gray-500">
              <Search className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p>输入关键词搜索文档</p>
              <p className="text-sm mt-2">试试 "WhatsApp"、"配置"、"安装"...</p>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <p>未找到相关结果</p>
            </div>
          ) : (
            <ul className="py-2">
              {results.map((result, idx) => (
                <li key={idx}>
                  <Link
                    href={result.path}
                    onClick={onClose}
                    className="flex items-start px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <FileText className="w-4 h-4 text-orange-500 flex-shrink-0" />
                        <span className="font-medium text-gray-900 dark:text-white truncate">{result.title}</span>
                        <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">{result.category}</span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{result.excerpt}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 mt-1" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export function SearchButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-500 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition"
    >
      <Search className="w-4 h-4" />
      <span className="hidden sm:inline">搜索...</span>
      <span className="text-xs px-1.5 py-0.5 bg-white dark:bg-gray-600 rounded">⌘K</span>
    </button>
  );
}
