"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import { useSearchParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, Tag, ArrowLeft, Clock } from "lucide-react"
import { blogPosts } from "@/lib/blogData"
import { useTranslation } from "@/hooks/useTranslation"


interface BlogPostClientProps {
  post: any;
  prevPost?: any;
  nextPost?: any;
}

export default function BlogPostClient({ post, prevPost, nextPost }: BlogPostClientProps) {
  const { t } = useTranslation()
  const searchParams = useSearchParams()
  const page = searchParams?.get("page")
  const backUrl = page ? `/blog?page=${page}` : "/blog"

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{t("blog.blogPostNotFound")}</h1>
          <p className="text-gray-600 mb-6">{t("blog.postNotFoundMessage")}</p>
          <Link href={backUrl}>
            <Button className="bg-orange-700 hover:bg-orange-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("blog.backToAllPosts")}
            </Button>
          </Link>
        </div>
      </div>
    )
  }


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <Link href={backUrl}>
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("blog.backToBlog")}
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center space-x-1">
                <Tag className="w-4 h-4" />
                <span className="text-orange-500 font-medium">{t(post.categoryKey)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span suppressHydrationWarning>{`${format(new Date(post.date), "MMMM d, yyyy")}`}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{t("blog.readTime").replace("{time}", post.readTime.toString())}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t(post.titleKey)}
            </h1>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600 font-medium">{post.author}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={t(post.titleKey)}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>

          {/* Article Content */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  {t(post.excerptKey)}
                </p>
                
                {/* Blog post content using translation system */}
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  {post.id === 7 && (
                    <>
                      <p>
                        {t("news.morocco.export.spain.q1_2025.content")}
                      </p>
                      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                        {t("blog.keyPoints")}
                      </h2>
                      <ul className="list-disc pl-6 space-y-2">
                        {t("news.morocco.export.spain.q1_2025.keyPoints").split(", ").map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {post.id === 8 && (
                    <>
                      <p>
                        {t("news.morocco.global_export_growth.strategy.content")}
                      </p>
                      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                        {t("blog.keyPoints")}
                      </h2>
                      <ul className="list-disc pl-6 space-y-2">
                        {t("news.morocco.global_export_growth.strategy.keyPoints").split(", ").map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {post.id === 9 && (
                    <>
                      <p>
                        {t("news.morocco.exports.rebound.2024_25.content")}
                      </p>
                      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                        {t("blog.keyPoints")}
                      </h2>
                      <ul className="list-disc pl-6 space-y-2">
                        {t("news.morocco.exports.rebound.2024_25.keyPoints").split(", ").map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {post.id === 1 && (
                    <>
                      <p>
                        {t("blog.rainfall_impact_2024.content")}
                      </p>
                      
                      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                        {t("blog.keyPoints")}
                      </h2>
                      
                      <ul className="list-disc pl-6 space-y-2">
                        {t("blog.rainfall_impact_2024.keyPoints").split(", ").map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {post.id === 2 && (
                    <>
                      <p>
                        {t("blog.sand_to_green_oasis.content")}
                      </p>
                      
                      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                        {t("blog.keyPoints")}
                      </h2>
                      
                      <ul className="list-disc pl-6 space-y-2">
                        {t("blog.sand_to_green_oasis.keyPoints").split(", ").map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {post.id === 3 && (
                    <>
                      <p>
                        {t("blog.no_till_expansion.content")}
                      </p>
                      
                      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                        {t("blog.keyPoints")}
                      </h2>
                      
                      <ul className="list-disc pl-6 space-y-2">
                        {t("blog.no_till_expansion.keyPoints").split(", ").map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {post.id === 4 && (
                    <>
                      <p>
                        {t("blog.green_deal_opportunity.content")}
                      </p>
                      
                      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                        {t("blog.keyPoints")}
                      </h2>
                      
                      <ul className="list-disc pl-6 space-y-2">
                        {t("blog.green_deal_opportunity.keyPoints").split(", ").map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {post.id === 5 && (
                    <>
                      <p>
                        {t("blog.food_quality_standards.content")}
                      </p>
                      
                      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                        {t("blog.keyPoints")}
                      </h2>
                      
                      <ul className="list-disc pl-6 space-y-2">
                        {t("blog.food_quality_standards.keyPoints").split(", ").map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {post.id === 6 && (
                    <>
                      <p>
                        {t("blog.oasis_irrigation_innovation.content")}
                      </p>
                      
                      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                        {t("blog.keyPoints")}
                      </h2>
                      
                      <ul className="list-disc pl-6 space-y-2">
                        {t("blog.oasis_irrigation_innovation.keyPoints").split(", ").map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {post.id === 10 && (
                    <>
                      <p>
                        {t("news.morocco.zucchini.switzerland.content")}
                      </p>
                      
                      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                        {t("blog.keyPoints")}
                      </h2>
                      
                      <ul className="list-disc pl-6 space-y-2">
                        {t("news.morocco.zucchini.switzerland.keyPoints").split(", ").map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {/* Default content for other blog posts */}
                  {![1, 2, 3, 4, 5, 6, 7, 8, 9, 10].includes(post.id) && (
                    <>
                      <p>
                        This is a detailed blog post about {t(post.titleKey).toLowerCase()}. 
                        The content would typically be much longer and include multiple paragraphs, 
                        images, and possibly embedded media.
                      </p>
                      
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                        in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      
                      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                        {t("blog.keyPoints")}
                      </h2>
                      
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Important information about the topic</li>
                        <li>Key insights and findings</li>
                        <li>Practical applications and recommendations</li>
                        <li>Future implications and trends</li>
                      </ul>
                      
                      <p className="mt-6">
                        In conclusion, this blog post provides valuable insights into the subject matter 
                        and offers practical guidance for readers interested in learning more about this topic.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Posts */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t("blog.relatedPosts")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Card key={relatedPost.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 gap-0">
                        <div>
                          <Image
                            src={relatedPost.image || "/placeholder.svg"}
                            alt={t(relatedPost.titleKey)}
                            width={400}
                            height={200}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                            <Tag className="w-3 h-3" />
                            <span className="text-orange-500 font-medium">{t(relatedPost.categoryKey)}</span>
                          </div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2 hover:text-orange-700 transition-colors">
                            <Link href={`/blog/${relatedPost.id}`}>{t(relatedPost.titleKey)}</Link>
                          </h4>
                          <p className="text-gray-600 text-sm line-clamp-2">{t(relatedPost.excerptKey)}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Back to Blog Button */}
          <div className="text-center">
            <Link href={backUrl}>
              <Button className="bg-orange-500 hover:bg-orange-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t("blog.backToAllPosts")}
              </Button>
            </Link>
          </div>

          {/* Next/Previous Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 border-t pt-8">
            <div className="text-left">
              {prevPost && (
                <Link href={`/blog/${prevPost.id}`} className="group block">
                  <span className="text-sm text-gray-500 mb-1 block group-hover:text-orange-600 transition-colors">
                    &larr; {t("blog.previous")}
                  </span>
                  <span className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors">
                    {t(prevPost.titleKey)}
                  </span>
                </Link>
              )}
            </div>
            <div className="text-right">
              {nextPost && (
                <Link href={`/blog/${nextPost.id}`} className="group block">
                  <span className="text-sm text-gray-500 mb-1 block group-hover:text-orange-600 transition-colors">
                    {t("blog.next")} &rarr;
                  </span>
                  <span className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors">
                    {t(nextPost.titleKey)}
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


