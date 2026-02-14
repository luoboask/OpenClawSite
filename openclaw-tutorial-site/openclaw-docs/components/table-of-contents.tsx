"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="hidden xl:block w-64 flex-shrink-0">
      <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 px-3">
          目录
        </h3>
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`block py-1.5 px-3 text-sm rounded-lg transition-colors ${
                  item.level === 2 ? "pl-3" : "pl-6"
                } ${
                  activeId === item.id
                    ? "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 font-medium"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// Helper function to extract headings from content
export function extractTOC(content: string): TOCItem[] {
  const headings: TOCItem[] = [];
  const lines = content.split("\n");
  
  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
      headings.push({ id, text, level });
    }
  }
  
  return headings;
}
