"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Tag } from "lucide-react"
import { format } from "date-fns"
import { useTranslation } from "@/hooks/useTranslation"

const categories = [
  { nameKey: "blog.category.nutrition", count: 8 },
  { nameKey: "blog.category.farming", count: 12 },
  { nameKey: "blog.category.sustainability", count: 6 },
  { nameKey: "blog.category.recipes", count: 15 },
  { nameKey: "blog.category.business", count: 4 },
  { nameKey: "blog.category.seasonal", count: 10 },
]

const recentPosts = [
  {
    id: 10,
    titleKey: "news.morocco.zucchini.switzerland",
    date: "2025-06-27",
  },
  {
    id: 7,
    titleKey: "news.morocco.export.spain.q1_2025",
    date: "2025-06-07",
  },
  {
    id: 9,
    titleKey: "news.morocco.exports.rebound.2024_25",
    date: "2025-06-02",
  },
  {
    id: 8,
    titleKey: "news.morocco.global_export_growth.strategy",
    date: "2025-04-01",
  },
  {
    id: 1,
    titleKey: "blog.post1.title",
    date: "2024-01-15",
  },
  {
    id: 2,
    titleKey: "blog.post2.title",
    date: "2024-01-10",
  },
  {
    id: 3,
    titleKey: "blog.post3.title",
    date: "2024-01-05",
  },
]

const tags = [
  "Organic",
  "Seasonal",
  "Nutrition",
  "Recipes",
  "Export",
  "Sustainability",
  "Morocco",
  "Fresh Produce",
  "Farming Tips",
  "Health Benefits",
]

export default function BlogSidebar() {
  const { t } = useTranslation()

  return (
    <div className="space-y-8">
      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="w-5 h-5" />
            <span>{t("blog.search")}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input placeholder={t("blog.searchPlaceholder")} className="flex-1" />
            <Button className="bg-orange-700 hover:bg-orange-800">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle>{t("blog.categories")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category.nameKey} className="flex items-center justify-between">
                <span className="text-gray-700 hover:text-orange-700 cursor-pointer">{t(category.nameKey)}</span>
                <span className="text-gray-500 text-sm">({category.count})</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle>{t("blog.recentPosts")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <div key={post.id} className="border-b border-gray-100 pb-3 last:border-b-0">

                <h4 className="text-sm font-medium text-gray-900 hover:text-orange-700 cursor-pointer mb-1">
                  {t(post.titleKey)}
                </h4>
                <p className="text-xs text-gray-500" suppressHydrationWarning>{`${format(new Date(post.date), "MMMM d, yyyy")}`}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Tag className="w-5 h-5" />
            <span>{t("blog.tags")}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-orange-100 hover:text-orange-800 cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter */}
      <Card className="bg-orange-50 border-orange-200">
        <CardHeader>
          <CardTitle className="text-orange-900">{t("blog.newsletter")}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-orange-800 text-sm mb-4">{t("blog.newsletterDesc")}</p>
          <div className="space-y-3">
            <Input placeholder={t("blog.emailPlaceholder")} className="border-orange-200 focus:border-orange-500" />
            <Button className="w-full bg-orange-700 hover:bg-orange-800">{t("blog.subscribe")}</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
