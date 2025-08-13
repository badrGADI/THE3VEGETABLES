"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, Tag } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"
import { blogPosts } from "@/lib/blogData"
import BlogPagination from "./BlogPagination"

const POSTS_PER_PAGE = 6

export default function BlogGrid() {
  const { t } = useTranslation()
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = blogPosts.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top of the blog section
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{t("blog.latestPosts")}</h2>
        <div className="text-gray-600">
          {t("blog.showingArticles")
            .replace("{count}", blogPosts.length.toString())
            .replace("{current}", currentPosts.length.toString())
            .replace("{start}", (startIndex + 1).toString())
            .replace("{end}", Math.min(endIndex, blogPosts.length).toString())}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {currentPosts.map((post) => (
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

      {totalPages > 1 && (
        <BlogPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  )
}
