import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lind's Digital Space",
  description: "Full Stack Engineer & Designer - 探索技术与设计的交汇点",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
