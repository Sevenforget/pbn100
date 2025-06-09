import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">여행의 순간</h3>
            <p className="mb-4">세계 각지의 아름다운 풍경과 특별한 경험, 그리고 유용한 여행 정보를 공유합니다.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-amber-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-amber-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-amber-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-amber-400 transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">카테고리</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-amber-400 transition-colors">
                  여행 이야기
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-400 transition-colors">
                  여행 상품
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-400 transition-colors">
                  여행 팁
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-400 transition-colors">
                  사진 갤러리
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">인기 여행지</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-amber-400 transition-colors">
                  제주도
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-400 transition-colors">
                  도쿄
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-400 transition-colors">
                  파리
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-400 transition-colors">
                  뉴욕
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-400 transition-colors">
                  방콕
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">고객 지원</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-amber-400 transition-colors">
                  문의하기
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-400 transition-colors">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-400 transition-colors">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} 여행의 순간. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
