"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Search, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "홈", href: "/" },
    { name: "여행 이야기", href: "/posts" },
    { name: "여행 상품", href: "/products" },
    { name: "여행 팁", href: "/tips" },
    { name: "소개", href: "/about" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className={`text-xl font-bold ${isScrolled || isMobile ? "text-amber-600" : "text-white"}`}>
              여행의 순간
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isScrolled
                    ? "text-gray-700 hover:text-amber-600 dark:text-gray-200 dark:hover:text-amber-400"
                    : "text-white/90 hover:text-white"
                } transition-colors`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={isScrolled || isMobile ? "" : "text-white"}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">테마 전환</span>
            </Button>

            <Button variant="ghost" size="icon" className={isScrolled || isMobile ? "" : "text-white"}>
              <Search className="h-5 w-5" />
              <span className="sr-only">검색</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={`md:hidden ${isScrolled ? "" : "text-white"}`}>
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">메뉴</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between py-4">
                    <span className="text-lg font-bold text-amber-600">여행의 순간</span>
                  </div>

                  <div className="mb-6">
                    <Input placeholder="검색어를 입력하세요" />
                  </div>

                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="px-2 py-1 rounded-md text-base font-medium hover:text-amber-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-auto pt-6">
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">로그인</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
