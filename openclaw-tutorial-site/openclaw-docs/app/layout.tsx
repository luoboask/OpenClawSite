import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "OpenClaw 中文教程 - 自托管 AI 网关",
  description: "OpenClaw 中文教程网站 - 学习如何部署和配置 OpenClaw，将 AI 助手接入 WhatsApp、Telegram、Discord 等聊天应用",
  keywords: "OpenClaw, AI, 自托管, WhatsApp, Telegram, Discord, 教程",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="antialiased bg-white dark:bg-gray-900 transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
