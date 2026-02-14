"use client";

import { useState, useEffect } from "react";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white dark:bg-gray-900 flex items-center justify-center transition-opacity duration-300">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-orange-200 dark:border-orange-900 rounded-full"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-orange-500 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">加载中...</p>
      </div>
    </div>
  );
}
