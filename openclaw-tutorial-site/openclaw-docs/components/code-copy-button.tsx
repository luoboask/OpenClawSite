"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeCopyButtonProps {
  code: string;
}

export function CodeCopyButton({ code }: CodeCopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 text-xs rounded bg-gray-700 text-gray-300 hover:bg-gray-600 transition"
      title={copied ? "已复制" : "复制代码"}
    >
      {copied ? (
        <>
          <Check className="w-3 h-3" />
          <span>已复制</span>
        </>
      ) : (
        <>
          <Copy className="w-3 h-3" />
          <span>复制</span>
        </>
      )}
    </button>
  );
}
