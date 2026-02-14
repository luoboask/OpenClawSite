"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "首页", href: "/" },
  { label: "文档", href: "/docs" },
  { label: "博客", href: "/blog" },
  { label: "案例", href: "/cases" },
  {
    label: "教程",
    href: "#",
    children: [
      { label: "快速开始", href: "/docs/quickstart" },
      { label: "安装指南", href: "/docs/install" },
      { label: "配置详解", href: "/docs/config" },
      { label: "API 参考", href: "/api-reference" },
    ],
  },
  {
    label: "频道接入",
    href: "#",
    children: [
      { label: "WhatsApp", href: "/docs/channels/whatsapp" },
      { label: "Telegram", href: "/docs/channels/telegram" },
      { label: "Discord", href: "/docs/channels/discord" },
      { label: "iMessage", href: "/docs/channels/imessage" },
      { label: "Signal", href: "/docs/channels/signal" },
      { label: "Slack", href: "/docs/channels/slack" },
    ],
  },
  { label: "关于", href: "/about" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleItem = (label: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(label)) {
      newExpanded.delete(label);
    } else {
      newExpanded.add(label);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        aria-label="打开菜单"
      >
        <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-80 max-w-full bg-white dark:bg-gray-900 z-50 shadow-xl md:hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">菜单</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                aria-label="关闭菜单"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            <nav className="p-4">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => toggleItem(item.label)}
                          className="flex items-center justify-between w-full py-2 px-3 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              expandedItems.has(item.label) ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {expandedItems.has(item.label) && (
                          <ul className="mt-1 ml-4 space-y-1">
                            {item.children.map((child) => (
                              <li key={child.label}>
                                <Link
                                  href={child.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block py-2 px-3 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-orange-600 dark:hover:text-orange-400 rounded-lg transition"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 px-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-orange-600 dark:hover:text-orange-400 rounded-lg transition"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
