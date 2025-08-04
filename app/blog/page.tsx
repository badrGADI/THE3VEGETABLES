"use client"

import BlogHeader from "@/components/blog/BlogHeader"
import BlogGrid from "@/components/blog/BlogGrid"
import BlogSidebar from "@/components/blog/BlogSidebar"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BlogHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
