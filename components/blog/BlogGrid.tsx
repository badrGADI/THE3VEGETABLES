"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, Tag } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"

const blogPosts = [
  {
    id: 1,
    titleKey: "blog.post1.title",
    excerptKey: "blog.post1.excerpt",
    image: "/placeholder.svg?height=300&width=400",
    author: "Ahmed Hassan",
    date: "2024-01-15",
    categoryKey: "blog.category.nutrition",
    readTime: 5,
  },
  {
    id: 2,
    titleKey: "blog.post2.title",
    excerptKey: "blog.post2.excerpt",
    image: "/placeholder.svg?height=300&width=400",
    author: "Fatima Benali",
    date: "2024-01-10",
    categoryKey: "blog.category.farming",
    readTime: 7,
  },
  {
    id: 3,
    titleKey: "blog.post3.title",
    excerptKey: "blog.post3.excerpt",
    image: "/placeholder.svg?height=300&width=400",
    author: "Omar Alami",
    date: "2024-01-05",
    categoryKey: "blog.category.sustainability",
    readTime: 6,
  },
  {
    id: 4,
    titleKey: "blog.post4.title",
    excerptKey: "blog.post4.excerpt",
    image: "/placeholder.svg?height=300&width=400",
    author: "Aicha Benali",
    date: "2024-01-01",
    categoryKey: "blog.category.recipes",
    readTime: 3,
  },
  {
    id: 5,
    titleKey: "blog.post5.title",
    excerptKey: "blog.post5.excerpt",
    image: "/placeholder.svg?height=300&width=400",
    author: "Omar Alami",
    date: "2023-12-28",
    categoryKey: "blog.category.business",
    readTime: 8,
  },
  {
    id: 6,
    titleKey: "blog.post6.title",
    excerptKey: "blog.post6.excerpt",
    image: "/placeholder.svg?height=300&width=400",
    author: "Ahmed Hassan",
    date: "2023-12-20",
    categoryKey: "blog.category.seasonal",
    readTime: 4,
  },
]

export default function BlogGrid() {
  const { t } = useTranslation()

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{t("blog.latestPosts")}</h2>
        <div className="text-gray-600">{t("blog.showingArticles").replace("{count}", blogPosts.length.toString())}</div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="md:col-span-1">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={t(post.titleKey)}
                    width={400}
                    height={300}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:col-span-2 p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Tag className="w-4 h-4" />
                      <span className="text-orange-500 font-medium">{t(post.categoryKey)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <span>{t("blog.readTime").replace("{time}", post.readTime.toString())}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-500 transition-colors">
                    <Link href={`/blog/${post.id}`}>{t(post.titleKey)}</Link>
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">{t(post.excerptKey)}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-orange-500 hover:text-orange-600 font-medium text-sm"
                    >
                      {t("blog.readMore")}
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
