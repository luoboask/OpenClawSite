import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI 咨询中心 - 人工智能解决方案",
  description: "专业的 AI 技术咨询服务，帮助企业实现智能化转型，提供 OpenClaw 部署、AI 工具开发、自动化解决方案",
  keywords: "AI咨询,人工智能,OpenClaw,企业AI,自动化,数字化转型",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased bg-white">
        {children}
      </body>
    </html>
  );
}
