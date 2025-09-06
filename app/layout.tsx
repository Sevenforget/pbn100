import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "여행의 순간 - 여행 블로그",
  description:
    "세계 각지의 아름다운 풍경과 특별한 경험, 그리고 유용한 여행 정보를 공유합니다",
  generator: "v0.dev",
  verification: {
    other: {
      "naver-site-verification": "eda7f142601c5a4ba5e6e7d9b6789ff67ad1d972",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
