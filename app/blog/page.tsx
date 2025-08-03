import type { Metadata } from "next"
import BlogHeader from "@/components/blog/BlogHeader"
import BlogGrid from "@/components/blog/BlogGrid"
import BlogSidebar from "@/components/blog/BlogSidebar"

export const metadata: Metadata = {
  title: "Farm Blog | Harvest Updates, Nutrition Tips & Agriculture Insights",
  description:
    "Read the latest updates from our Moroccan farm. Discover seasonal news, farming tips, recipes, and the benefits of eating fresh, local produce.",
  keywords: "farm blog, harvest updates, nutrition tips, agriculture insights, moroccan farming, seasonal produce",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BlogHeader />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <main className="lg:col-span-2">
            <BlogGrid />
          </main>
          <aside className="lg:col-span-1">
            <BlogSidebar />
          </aside>
        </div>
      </div>
    </div>
  )
}
