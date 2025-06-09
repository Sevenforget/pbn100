import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { blogPosts } from "@/lib/data"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/mountain-lake-sunset.png')",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        </div>

        <div className="container relative z-10 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="block">여행의 순간을</span>
            <span className="block mt-2">기록하다</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            세계 각지의 아름다운 풍경과 특별한 경험, 그리고 유용한 여행 정보를 공유합니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Input
              placeholder="여행지를 검색해보세요"
              className="max-w-xs bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button className="bg-amber-500 hover:bg-amber-600 text-white">검색하기</Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">인기 여행 카테고리</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["유럽", "아시아", "미국", "호주"].map((category) => (
              <div key={category} className="relative h-40 rounded-lg overflow-hidden group cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('/placeholder.svg?height=400&width=600&query=${category} travel destination')`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">{category}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">최신 여행 이야기</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                최신순
              </Button>
              <Button variant="outline" size="sm">
                인기순
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=400&width=600&query=travel ${index + 1}`}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>2023.05.{10 + index}</span>
                    <span className="mx-1">•</span>
                    <User className="h-4 w-4" />
                    <span>{post.author || "관리자"}</span>
                  </div>
                  <h3 className="text-xl font-bold hover:text-amber-600 transition-colors">
                    <Link href={`/posts/${index}`}>{post.title}</Link>
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-2">{post.content.substring(0, 120)}...</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-1">
                    {post.tags?.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="bg-amber-50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/posts/${index}`} className="flex items-center gap-1">
                      더 보기 <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white">더 많은 여행 이야기 보기</Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-amber-50">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">여행 소식 구독하기</h2>
          <p className="text-muted-foreground mb-6">최신 여행 정보와 특별한 할인 소식을 이메일로 받아보세요</p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input placeholder="이메일 주소" className="flex-grow" />
            <Button className="bg-amber-500 hover:bg-amber-600 text-white whitespace-nowrap">구독하기</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
