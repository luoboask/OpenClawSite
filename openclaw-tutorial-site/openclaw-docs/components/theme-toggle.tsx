"use client";

import { useTheme } from "./theme-provider";
import { Sun, Moon, Monitor } from "lucide-react";
import { useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const themes = [
    { value: "light" as const, label: "浅色", icon: Sun },
    { value: "dark" as const, label: "深色", icon: Moon },
    { value: "system" as const, label: "系统", icon: Monitor },
  ];

  const currentTheme = themes.find((t) => t.value === theme) || themes[0];
  const Icon = currentTheme.icon;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        title="切换主题"
      >
        <Icon className="w-5 h-5" />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 py-1">
            {themes.map((t) => {
              const ThemeIcon = t.icon;
              return (
                <button
                  key={t.value}
                  onClick={() => {
                    setTheme(t.value);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition ${
                    theme === t.value
                      ? "text-violet-600 dark:text-violet-400 font-medium"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <ThemeIcon className="w-4 h-4 mr-2" />
                  {t.label}
                  {theme === t.value && (
                    <span className="ml-auto">✓</span>
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
