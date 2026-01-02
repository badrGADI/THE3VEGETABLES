"use client"

import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { Calendar, ArrowRight } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"
import { blogPosts } from "@/lib/blogData"
import { Button } from "@/components/ui/button"

export default function LatestNews() {
  const { t } = useTranslation()

  // Sort posts by date (newest first) and take the first 3
  const latestPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {t("blog.latestNews")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl">
              {t("blog.latestNewsDescription")}
            </p>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20">
              {t("blog.viewAllNews")} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <div key={post.id} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <Link href={`/blog/${post.id}`} className="block relative h-48 overflow-hidden group">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={t(post.titleKey)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  />
              </Link>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="w-4 h-4 text-orange-600" />
                  <span>{`${format(new Date(post.date), "MMMM d, yyyy")}`}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 line-clamp-2 hover:text-orange-600 transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {t(post.titleKey)}
                  </Link>
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
                  {t(post.excerptKey)}
                </p>
                
                <Link href={`/blog/${post.id}`} className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 mt-auto">
                  {t("blog.readMore")} <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
